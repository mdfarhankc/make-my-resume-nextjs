import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "../steps";
import { FileUserIcon, PenLineIcon } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

interface EditorFooterProps {
  isSaving: boolean;
  currentStep: string;
  setCurrentStep: (key: string) => void;
  showResumePreview: boolean;
  setShowResumePreview: (show: boolean) => void;
}

export default function EditorFooter({
  isSaving,
  currentStep,
  setCurrentStep,
  showResumePreview,
  setShowResumePreview,
}: EditorFooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key;

  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key;

  useEffect(() => {
    if (isSaving) {
      toast.success("Saving...", { id: "saving-resume", duration: 500 });
    }
  }, [isSaving]);

  return (
    <section className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant={"secondary"}
            disabled={!previousStep}
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
          >
            Previous
          </Button>
          <Button
            disabled={!nextStep}
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
          >
            Next
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setShowResumePreview(!showResumePreview)}
            title={
              showResumePreview ? "Show Input Form" : "Show Resume Preview"
            }
          >
            {showResumePreview ? <PenLineIcon /> : <FileUserIcon />}
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant={"secondary"} asChild>
            <Link href={"/resumes"}>Close</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
