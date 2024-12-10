import BorderStyleButton from "@/components/border-style-button";
import ColorPicker from "@/components/color-picker";
import ResumePreview from "@/components/resume-preview";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validations";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}

const ResumePreviewSection = ({
  resumeData,
  setResumeData,
  className,
}: ResumePreviewSectionProps) => {
  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", className)}
    >
      <div className="absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 xl:opacity-100">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />
        <BorderStyleButton
          borderStyle={resumeData.borderStyle}
          onChange={(borderStyle) =>
            setResumeData({ ...resumeData, borderStyle })
          }
        />
      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary">
        <ResumePreview resumeData={resumeData} className="max-w-xl shadow-md" />
      </div>
    </div>
  );
};

export default ResumePreviewSection;
