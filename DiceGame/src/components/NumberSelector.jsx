import React from "react";
import styled from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const NumberArray = [1, 2, 3, 4, 5, 6];
  const NumberSelectorHandler=(value)=>{
    setSelectedNumber(value)
    setError('');
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flexbox">
        {NumberArray.map((value,index) => (
          <Box
            key={index}
            onClick={() => NumberSelectorHandler(value)}
            isSelected={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flexbox {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
