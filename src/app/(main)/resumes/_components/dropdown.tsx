import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Printer, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteConfirmationDialog from "./delete-confirmation-dialog";

interface MoreMenuDropdownProps {
  resumeId: string;
  onPrintClick: () => void;
}

const MoreMenuDropdown = ({
  resumeId,
  onPrintClick,
}: MoreMenuDropdownProps) => {
  const [showDeleteConfirmation, setshowDeleteConfirmation] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="absolute right-0.5 top-0.5 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <MoreVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="flex items-center gap-2 text-destructive"
            onClick={() => setshowDeleteConfirmation(true)}
          >
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 text-green-600"
            onClick={onPrintClick}
          >
            <Printer className="size-4" />
            Print
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteConfirmationDialog
        resumeId={resumeId}
        open={showDeleteConfirmation}
        onOpenChange={setshowDeleteConfirmation}
      />
    </>
  );
};

export default MoreMenuDropdown;
