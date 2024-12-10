import { ResumeValues } from "@/lib/validations";
import useDebounce from "./useDebounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { saveResume } from "@/app/(main)/editor/actions";
import { toast } from "sonner";
import { fileReplacer } from "@/lib/utils";

export default function useAutoSaveResume(resumeValues: ResumeValues) {
  const searchParams = useSearchParams();
  const debouncedResumeData = useDebounce(resumeValues, 1500);

  const [resumeId, setResumeId] = useState(resumeValues.id);
  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(resumeValues),
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debouncedResumeData]);

  useEffect(() => {
    async function save() {
      try {
        setIsSaving(true);
        setIsError(false);
        const newData = structuredClone(debouncedResumeData);
        const updatedResume = await saveResume({
          ...newData,
          ...(JSON.stringify(lastSavedData.photo, fileReplacer) ===
            JSON.stringify(newData.photo, fileReplacer) && {
            photo: undefined,
          }),
          id: resumeId,
        });

        setResumeId(updatedResume.id);
        setLastSavedData(newData);

        if (searchParams.get("resumeId") !== updatedResume.id) {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("resumeId", updatedResume.id);
          window.history.replaceState(
            null,
            "",
            `?${newSearchParams.toString()}`,
          );
        }
      } catch (error) {
        setIsError(true);
        console.error("Error", error);
        toast.error("Could not save changes!", {
          action: {
            label: "Retry",
            onClick: () => save(),
          },
        });
      } finally {
        setIsSaving(false);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLastSavedData(structuredClone(debouncedResumeData));
      setIsSaving(false);
    }

    const hasUnsavedChanges =
      JSON.stringify(debouncedResumeData, fileReplacer) !==
      JSON.stringify(lastSavedData, fileReplacer);

    if (hasUnsavedChanges && debouncedResumeData && !isSaving && !isError) {
      save();
    }
  }, [
    debouncedResumeData,
    isSaving,
    lastSavedData,
    isError,
    resumeId,
    searchParams,
  ]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeValues) !== JSON.stringify(lastSavedData),
  };
}
