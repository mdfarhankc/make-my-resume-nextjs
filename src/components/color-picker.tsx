import { useState } from "react";
import { Color, ColorChangeHandler, TwitterPicker } from "react-color";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { PaletteIcon } from "lucide-react";

interface ColorPickerProps {
  color: Color | undefined;
  onChange: ColorChangeHandler;
}

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [showPopover, setshowPopover] = useState(false);
  return (
    <Popover open={showPopover} onOpenChange={setshowPopover}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Change resume color"
          onClick={() => setshowPopover(true)}
        >
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="border-none bg-transparent shadow-none"
        align="end"
      >
        <TwitterPicker color={color} onChange={onChange} triangle="top-right" />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
