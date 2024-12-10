import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

const Loading = ({ className }: { className?: string }) => {
  return <Loader2Icon className={cn("animate-spin", className)} />;
};

export default Loading;
