import { useState } from "react";

import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';



const feedbacktype = {
    BUG: {
        titulo: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA:{
        titulo: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER:{
        titulo: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamentos',
        }
    },
}

type FeedbackType = keyof typeof feedbacktype; 
 
export function WidgetForm() {
    const [feebackType, setFeebackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            
           {!feebackType ? (
                <div className="flex py-8 gap-2 w-ful">
                { Object.entries(feedbacktype).map(([key, value]) => {
                    console.log(key, value);
                    
                    return(
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeebackType(key as FeedbackType)}
                            type="button"
                        >
                            <img src={ value.image.source } alt={value.image.alt} />
                            <span>{ value.titulo }</span>
                        </button>
                    );
                })}
            </div>

           ): <p>Hello Word</p>}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}