import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledCardWrapper = styled(Card)`
  margin: 25px;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 100%;
  max-width: 300px;
`;

export const ColorBox = styled.div`
  height: 16px;
  width: 16px;
  margin: 5px;
  border: 1px solid black;
  background: ${({ color }) => color || "black"};
`;

export const ColorBoxesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
