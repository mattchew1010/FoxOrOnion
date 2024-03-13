import {Game} from "@components/nav/games.js"

export default function Games() {
   return (
      <div className="flex justify-center mt-10 xs:mt-2 gap-16">
         <Game name="Classic" link="/games/classic" description='A regular News Or Not game. Just pick if you think the article is real or not.' disabled={false}/>
         <Game name="Work In Progress" disabled={true}/>
         <Game name="Work In Progress" disabled={true}/>
      </div>
   );
}
