import {Game} from "@components/nav/games.js"

export const metadata = {
   title: 'News or Satire? | Games',
   description: 'Test your ability to distinguish between real news and satire in this fun game. Choose whether a given headline is from a legitimate news source or a satirical one. Challenge your friends and see who can get the highest score!',
}

export default function Games() {
   //todo: this page is ugly
   return (
      <div className="grid md:grid-cols-3 justify-items-center mt-4 md:mt-10 gap-4">
         <Game name="Classic" link="/games/classic" description='Just a regular game of News Or Not. You are given a headline and have to pick whether you think it is from a legitimate news source or a satirical one.' disabled={false}/>
         <Game name="Work In Progress" disabled={true}/>
         <Game name="Work In Progress" disabled={true}/>
      </div>
   );
}
