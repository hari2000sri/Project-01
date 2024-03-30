import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After you click on dice if the selected number is same as number on
          dice u will get the same point on dice
        </p>
        <p>If u guess wrong 2 points are deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;
max-width: 900px;
margin: 0 auto;
margin-top: 40px;
border-radius: 12px;

h1{
    font-size: 24px;
}
.text{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
}
`;
