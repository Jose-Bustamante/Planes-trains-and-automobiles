import React from "react";
import PropTypes, { string } from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { StyledFormControl } from "./styles";
const DropDown = ({ options, name, onSelect, onClean, value }) => {
  const handleChange = (event) => {
    if (event.target.value === "") {
      onClean(name);
    } else {
      onSelect({
        filterBy: name,
        value: event.target.value,
      });
    }
    event.preventDefault();
  };

  if (options.length) {
    return (
      <StyledFormControl>
        <InputLabel id={name}>{name}</InputLabel>

        <Select
          labelId={name}
          id="select"
          value={value}
          onChange={handleChange}
          label={name}
          inputProps={{
            id: `input-${name}`,
            "data-testid": `input-${name}`,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    );
  }
  return null;
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(string), // array of available options
  name: PropTypes.string, // name used to distinguish the dropDown
  onSelect: PropTypes.func, // callback when option is selected
  onClean: PropTypes.func, // callback when default option is selected
};

DropDown.defaultProps = {
  name: "",
  options: [],
};

DropDown.displayName = "DropDown";

export default DropDown;
