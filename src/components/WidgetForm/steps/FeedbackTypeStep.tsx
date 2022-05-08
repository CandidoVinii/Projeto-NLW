import { feedback, FeedbackType } from ".."

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
  return (
  <div className="flex py-8 gap-2 w-full">
      { Object.entries(feedback).map(([key, value]) => {
        return(
          <button
            key={key}
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            type="button"
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-500 focus:border-violet-500 focus:outline-none"
          >
            <img
              src={value.image.source}
              alt={value.image.alt}
            />
            <span>{value.title}</span>
          </button>
        )
      }) }
  </div>
  )
}