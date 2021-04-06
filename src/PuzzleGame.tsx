import {useState, useEffect} from "react"
import Puzzle from "react-puzzle";
import { Fragment } from "react";
import {puzzles} from "./puzzle-images"
import SizeSlider from "./slider"
import {IPuzzle} from "./interface"

function PuzzleGame() {
  
  const [pieces, setPieces] = useState<number>(4);
  const [image, setImage] = useState<any>();

  useEffect(() => {
    shuffleImage()
  
  },[]);

  const resize = (change: number) => {
    setPieces(change)
   
  };

  const onComplete = () => {
    console.log('Puzzle is completed!');
  };

  const shuffleImage = () => {
    const index = getRandomInt(puzzles.length -1)
    console.log(puzzles[index])
    setImage(puzzles[index].path)
   
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <Fragment>
       <button onClick={shuffleImage}>Losuj Obrazek</button>
       < SizeSlider handleChange={resize}/>
      <Puzzle
        image={image}
        size={600}
        level={pieces}
        onDone={onComplete}
      />
    </Fragment>
    
  );
}

export default PuzzleGame;
