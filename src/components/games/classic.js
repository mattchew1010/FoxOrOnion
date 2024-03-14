"use client"
import {useFormState} from "react-dom"

export function renderCorrect(prev) {
   if (prev != undefined) {
      if (prev) {
         return (<h1 className="text-green-500 text-center text-bold mt-5 text-2xl">Correct</h1>)
      } else {
         return (<h1 className="text-red-500 text-center text-bold mt-5 text-2xl">Incorrect</h1>)
      }
   }
}

export function GameComponent({articleTitle, submit, articleID}){
   const [state, formAction] = useFormState(submit, {article: {title: articleTitle, uuid: articleID}})
   // Handler for button clicks
   const handleButtonClick = (value) => {
      // Assuming formAction can accept an object with form values
      formAction(value)
   }

   return (
      <div>
         <h1 className="font-bold text-center text-5xl mb-5 mt-32">Classic Game</h1>
         <div>
            <h1 className="font-bold text-center text-3xl mb-5 mt-5 text-wrap">"{state.article.title}"</h1>
         </div>
         
         <div className="flex justify-center gap-3">
            <button onClick={() => handleButtonClick('real')} name="real" className="w-60 py-2 bg-blue-500 shadow rounded-lg">
               <h1 className="text-center text-2xl">Real News</h1>
            </button>
            <button onClick={() => handleButtonClick('fake')} name="fake" className="w-60 py-2 bg-red-500 shadow rounded-lg">
               <h1 className="text-center text text-2xl">Fake News</h1>
            </button>
         </div>
         {renderCorrect(state.previousAnswer)}
      </div>
   )
}