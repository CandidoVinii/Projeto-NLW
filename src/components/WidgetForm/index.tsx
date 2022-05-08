import { useState } from "react";
import CloseButton from "../CloseButton";
import bugImage from ".../assets/bug.svg";
import ideaImage from "../assets/idea.svg";
import otherImage from "../assets/thought.svg";
import FeedbackTypeStep from "./steps/FeedbackTypeStep";

export const feedback = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: 'imagem de um inseto',
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: 'imagem de uma lampada',
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImage,
      alt: 'imagem de um balão de pensamento',
    }
  }
};

export type FeedbackType = keyof typeof feedback;

export default function WidgetForm() {
  const [feedbackType, setFeedback] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 position-relative rounded-2xl mb-4 flex flex-col items-center drop-shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedback} />
      ) : (
        <p>Hello World</p>
      )}

      <footer className="text-xs text-neutral-50">
        Feito com amor por <a className="underline underline-offset-2" href="https://github.com/CandidoVinii">Vinicius</a>
      </footer>
    </div>
  );
}