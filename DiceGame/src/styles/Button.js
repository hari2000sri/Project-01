import styled from "styled-components";

export const Button = styled.button`
color: white;
background-color: black;
padding: 10px 18px;
border-radius: 5px;
width: 220px;
border: none;
border: 1px solid transparent;
font: 16px;
cursor: pointer;
transition: 0.4s background ease-out;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}
`;