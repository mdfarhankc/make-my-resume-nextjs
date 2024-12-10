import { useTransition } from "react";
import { toast } from "sonner";
import { deleteResume } from "../actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";

interface DeleteConfirmationDialogProps {
  resumeId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeleteConfirmationDialog = ({
  resumeId,
  open,
  onOpenChange,
}: DeleteConfirmationDialogProps) => {
  const [isPending, startTransition] = useTransition();

  async function handleDelete() {
    startTransition(async () => {
      try {
        await deleteResume(resumeId);
        onOpenChange(false);
      } catch (error) {
        console.error("Error", error);
        toast.error("Something went wrong.Please try again~");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete resume?</DialogTitle>
          <DialogDescription>
            This will permenently delete this resume.This action cannot be
            undone
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? <Loading /> : "Delete"}
          </Button>
          <Button
            disabled={isPending}
            variant={"secondary"}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
