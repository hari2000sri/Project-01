import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styles/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score,setScore]=useState(0);
  const [error,setError]=useState('');
  const [showRules,setShowRules]=useState(false)
  const genarateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice=()=>{
    if(!selectedNumber){
        return  setError("You have not selected any number");
    }
    setError('');
    const randomNumber = genarateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber)
    if(selectedNumber === randomNumber){
        setScore(prev=>prev+randomNumber)
    }else{
        setScore(prev=>prev-2)  
    }
    setSelectedNumber(undefined)
  };

const resetScore =()=>{
    setScore(0);
    setCurrentDice(1);
}
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
          error={error}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>
            Reset
        </OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"}Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  height: 100vh;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
