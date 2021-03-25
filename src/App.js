import Puzzle from 'react-dnd-image-puzzle';
import { Fragment } from "react";
import puzzles from "./puzzle-images"

function App() {

  const onComplete = () => {
    console.log('Puzzle is completed!');
  };

  return (
    <Fragment>
       <button>Losuj Obrazek</button>
      <Puzzle
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Calicocats2222.jpg/1200px-Calicocats2222.jpg"
        width={1100}
        height={1100}
        pieces={4}
        onComplete={onComplete}
      />
    </Fragment>
    
  );
}

export default App;
