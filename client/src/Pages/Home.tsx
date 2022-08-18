import React from "react";
import {
  StyledCol,
  StyledText,
  StyledTextField,
  StyledPadding,
  StyledCard,
  StyledResultText,
} from "../Components/MainStyledComponents";
import { Button } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import {
  MAIN_HOME_HEADER,
  MAIN_HOME_NUMBER_ONE_INPUT,
  MAIN_HOME_NUMBER_TWO_INPUT,
  MAIN_HOME_ADD_BUTTON,
  MAIN_HOME_RESULT,
} from "../Config/dataTestIds";

export default function Home() {
  const [numberOne, setNumberOne] = React.useState("");
  const [numberTwo, setNumberTwo] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleButtonClick = () => {
    fetch(`/api/add/${numberOne}/${numberTwo}`)
      .then((res) => res.json())
      .then((data) => setResult(data.result));
  };

  return (
    <StyledCol
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledCard
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <StyledText data-testid={MAIN_HOME_HEADER}>
          {"Adding Two Numbers"}
        </StyledText>
        <StyledTextField
          data-testid={MAIN_HOME_NUMBER_ONE_INPUT}
          label="Number 1"
          type="number"
          onChange={(e) => setNumberOne(e.target.value)}
        />
        <StyledPadding />
        <StyledTextField
          data-testid={MAIN_HOME_NUMBER_TWO_INPUT}
          label="Number 2"
          type="number"
          onChange={(e) => setNumberTwo(e.target.value)}
        />
        <StyledPadding />
        <Button
          data-testid={MAIN_HOME_ADD_BUTTON}
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
        >
          {"Add"}
        </Button>
        <StyledPadding />
        <AnimatePresence>
          <StyledResultText
            key={result}
            data-testid={MAIN_HOME_RESULT}
            animate={{
              fontSize: "3rem",
              opacity: 1,
              y: 0,
            }}
            exit={{
              fontSize: "0rem",
              opacity: 0,
              y: 50,
            }}
            style={{
              fontSize: "0rem",
              opacity: 0,
              y: 50,
            }}
          >
            {result}
          </StyledResultText>
        </AnimatePresence>
      </StyledCard>
    </StyledCol>
  );
}
