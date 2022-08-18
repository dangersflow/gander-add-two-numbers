import styled from "styled-components";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";

export const StyledCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

export const StyledText = styled(motion.div)`
  padding-bottom: 5rem;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledResultText = styled(motion.div)`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledPadding = styled(motion.div)`
  padding-top: 2rem;
`;

export const StyledTextField = styled(TextField)`
  width: 20rem;
`;

export const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  margin-top: 5rem;
  border-radius: 15px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;
