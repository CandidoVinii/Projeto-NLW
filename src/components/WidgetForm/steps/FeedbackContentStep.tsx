import { ArrowArcLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbacks } from ".."
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface feedbackContenteProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}


export default function FeedbackContentStep({ onFeedbackSent, feedbackType, onFeedbackRestart }: feedbackContenteProps) {
  const feedbackTypeInfo = feedbacks[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({
      comment,
      screenshot,
    });
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="submit"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestart}
        >
          <ArrowArcLeft
            className="w-4 h-4"
            weight="bold"
          />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className="my-4 w-full">
        <textarea
          onChange={event => setComment(event.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-500 focus:ring-violet-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenShotTook={setScreenshot}
          />
          <button
            disabled={comment.length === 0}
            type='submit'
            className="p-2 bg-violet-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-violet-400 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-zinc-900 focus:ring-violet-500 transition-colors disabled:opacity-50 disabled:hover:bg-violet-500"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
    )
}