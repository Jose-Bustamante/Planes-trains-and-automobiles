import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";

export const StyledFormControl = styled(FormControl)`
  &&& {
    margin: 8px;
    min-width: 120px;
    border: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    flex-direction: column;
    vertical-align: top;
  }
`;
