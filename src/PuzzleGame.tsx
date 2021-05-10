import React, {Fragment, useState, useEffect, useCallback, } from "react"
import {puzzles} from "./puzzle-images"
import SizeSlider from "./slider"
import RandomButton from "./button"
import Puzzle from "react-image-puzzle";
import TransitionsModal from './modal';
import "./index";

function PuzzleGame() {
  
  const [pieces, setPieces] = useState<number>(4);
  const [image, setImage] = useState<any>();
  const [showPuzzle, setShowPuzzle] = useState<any>(true);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    setShowPuzzle(false)
  },[pieces,done]);

  useEffect(() => {
    setShowPuzzle(true)
  },[showPuzzle]);

  useEffect(() => {
    if (done===true) {
      alert("Done")
      setDone(false)
    }
  },[done]);
  const resize = (change: number) => {
    setPieces(change)
    
  };

  const onComplete = () => {
    setDone(true)
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
      <div onClick={shuffleImage}>
        <RandomButton />
      </div>
      <SizeSlider handleChange={resize}/>
      {showPuzzle && <Puzzle 
        image={image}
        size={500}
        level={pieces}
        onDone={onComplete}
       />}
    </Fragment>
    
  );
}

export default PuzzleGame;
