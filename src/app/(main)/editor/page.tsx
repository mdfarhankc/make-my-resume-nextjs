import { Metadata } from "next";
import ResumeEditor from "./_components/resume-editor";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { resumeDataInclude } from "@/lib/types";

export const metadata: Metadata = {
  title: "Design you resume",
};

interface PageProps {
  searchParams: Promise<{
    resumeId?: string;
  }>;
}

export default async function EditorPage({ searchParams }: PageProps) {
  const { resumeId } = await searchParams;

  const { userId } = await auth();
  if (!userId) return null;

  const resume = resumeId
    ? await prisma.resume.findUnique({
        where: {
          id: resumeId,
          userId,
        },
        include: resumeDataInclude,
      })
    : null;

  return <ResumeEditor resume={resume} />;
}
