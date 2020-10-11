import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const PlanesTrainsCarsWrapper = styled.div`
  padding-top 100px;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  color: gray;
  flex-wrap: wrap;
  background: lightgray;
  @media (max-width: 550px) {
    padding-top 125px;
  }

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 80px;
  align-items: baseline;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
  background: white;
  box-shadow: 0px 5px 5px #27272780;
  -webkit-box-shadow: 0px 5px 5px #27272780;
  -moz-box-shadow: 0px 5px 5px #27272780;

  @media (max-width: 550px) {
    padding-bottom: 16px;
  }
`;

export const StyledButton = styled(Button)`
  max-height: 50px;
`;
