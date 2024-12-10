import React from "react";
import GeneralInfoForm from "./_components/general-info-form";
import PersonalInfoForm from "./_components/personal-info-form";
import { EditorFormProps } from "@/lib/types";
import WorkExperieneForm from "./_components/work-experiene-form";
import EducationForm from "./_components/education-form";
import SkillsForm from "./_components/skills-form";
import SummaryForm from "./_components/summary-form";

interface ISteps {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}

export const steps: ISteps[] = [
  {
    title: "General Info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Personal Info",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Work Experience",
    component: WorkExperieneForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationForm,
    key: "education",
  },
  {
    title: "Skill",
    component: SkillsForm,
    key: "skill",
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
