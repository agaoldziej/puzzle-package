import React, {useState, useEffect, useCallback, } from "react"
import Puzzle from "react-dnd-image-puzzle";
import { Fragment } from "react";
import {puzzles} from "./puzzle-images"
import SizeSlider from "./slider"
import RandomButton from "./button"


function PuzzleGame() {
  
  const [pieces, setPieces] = useState<number>(4);
  const [image, setImage] = useState<any>();
  const [showPuzzle, setShowPuzzle] = useState<any>(true);

  useEffect(() => {
    setShowPuzzle(false)
  },[pieces]);

  useEffect(() => {
    setShowPuzzle(true)
  },[showPuzzle]);

  const resize = (change: number) => {
    setPieces(change)
    
  };

  const onComplete = () => {
    //shuffleImage()
  };

  const shuffleImage = useCallback(() => {
    const index = getRandomInt(puzzles.length -1)
    console.log(puzzles[index])
    setImage(puzzles[index].path)
   
  },[])
    useEffect(() => {
      shuffleImage()
  },[shuffleImage]);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <Fragment>
       <RandomButton/>
       <button onClick={shuffleImage}>Losuj Obrazek</button>
       <SizeSlider handleChange={resize}/>
      {showPuzzle && <Puzzle
        image={image}
        width={800}
        height={480}
        pieces={pieces}
        onComplete={onComplete}
      />}
    </Fragment>
    
  );
}

export default PuzzleGame;
