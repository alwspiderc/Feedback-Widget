import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";



export const feedbacktype = {
    BUG: {
        titulo: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        titulo: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        titulo: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamentos',
        }
    },
}

export type FeedbackType = keyof typeof feedbacktype;

export function WidgetForm() {
    const [feebackType, setFeebackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            {!feebackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeebackType} />

            ) : <p>Hello Word</p>}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div >
    );
}