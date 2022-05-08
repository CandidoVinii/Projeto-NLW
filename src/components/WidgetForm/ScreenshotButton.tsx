import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import Loading from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export default function ScreenshotButton ({ onScreenShotTook, screenshot }: ScreenshotButtonProps) {
  const [isTaking, setTaking] = useState(false);

  const handleTake = async () => {
    setTaking(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenShotTook(base64Image);
    setTaking(false);
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenShotTook(null)}
        type="button"
        style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 100}}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      >
        <Trash weight="fill" />
      </button>
    )
  }
  return(
    <button
      type="button"
      onClick={handleTake}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-zinc-900 focus:ring-violet-500 transition-colors"
    >
      { isTaking ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" /> }
    </button>
  )
}