"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { steps } from "../steps";
import EditorBreadcrumbs from "./breadcrumbs";
import EditorFooter from "./editor-footer";
import { ResumeValues } from "@/lib/validations";
import ResumePreviewSection from "./resume-preview-section";
import { cn, mapToResumeValues } from "@/lib/utils";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import useAutoSaveResume from "@/hooks/useAutoSaveResume";
import { ResumeServerData } from "@/lib/types";

interface ResumeEditorProps {
  resume: ResumeServerData | null;
}

const ResumeEditor = ({ resume }: ResumeEditorProps) => {
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeValues>(
    resume ? mapToResumeValues(resume) : {},
  );

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);

  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || steps[0].key;

  const setStep = (key: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  };

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <main className="flex grow flex-col">
      <section className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design Your Resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </section>
      <section className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div
            className={cn(
              "w-full space-y-4 overflow-y-auto p-3 md:block md:w-1/2",
              showResumePreview && "hidden",
            )}
          >
            <EditorBreadcrumbs
              currentStep={currentStep}
              setCurrenctStep={setStep}
            />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow md:border-r" />
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showResumePreview && "flex")}
          />
        </div>
      </section>
      <EditorFooter
        isSaving={isSaving}
        setCurrentStep={setStep}
        currentStep={currentStep}
        showResumePreview={showResumePreview}
        setShowResumePreview={setShowResumePreview}
      />
    </main>
  );
};

export default ResumeEditor;
