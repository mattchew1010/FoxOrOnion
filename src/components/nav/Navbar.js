export default function Navbar() {
   return (
      <div className="flex justify-between items-center p-2 bg-secondary">
         <a href="/" className="text-4xl">NOS</a>
         <div className="flex space-x-5">
            <a href="/about" className="text-xl">About</a>
         </div>
      </div>
   )
}