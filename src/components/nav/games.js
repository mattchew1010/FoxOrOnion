export function Game({name, description, disabled, link}) {
   return (
      <div className="bg-secondary p-4 rounded-md shadow-md max-w-60 min-w-1/3 min-h-1/2">
         <h1 className="text-2xl font-bold text-center mb-4">{name}</h1>
         <p className="text-wrap text-md">{description}</p>
         <a href={link}>
            <button data-umami-event={`Game start - ${name}`} className="object-bottom disabled:bg-gray-500 disabled:text-neutral-300 disabled:hover:bg-gray-600 mt-6 transition duration-200 bg-blue-500 hover:bg-blue-600 rounded-lg w-full py-2 text-white" disabled={disabled}>{disabled ? "Not Available" : "Play"}</button>
         </a>
      </div>
   );
}