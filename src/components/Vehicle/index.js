import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as PlaneIcon } from "../../assets/plane.svg";
import { ReactComponent as TrainIcon } from "../../assets/train.svg";
import { ReactComponent as CarIcon } from "../../assets/car.svg";
import noImage from "../../assets/no-image.png";

import {
  StyledCardWrapper,
  StyledImg,
  StyledRowWrapper,
  ColorBoxesWrapper,
  ColorBox,
} from "./styles";

import Icon from "../Icon";

const iconTypes = {
  car: CarIcon,
  airplane: PlaneIcon,
  train: TrainIcon,
};

const Vehicle = ({ img, colors, brand, vehicleType }) => {
  // this is done to be able to change the img in case we have an error from the original resource.
  const [imgUrl, setImgUrl] = useState(img);
  const onImgLoadError = () => {
    setImgUrl(noImage);
  };

  return (
    <StyledCardWrapper>
      <StyledImg src={imgUrl} alt="vehicle" onError={onImgLoadError} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {brand}
        </Typography>
        <StyledRowWrapper>
          <ColorBoxesWrapper>
            {colors.map((color) => (
              <ColorBox color={color} key={color} />
            ))}
          </ColorBoxesWrapper>
          <Icon
            as={iconTypes[vehicleType] || PlaneIcon}
            color="gray"
            height="64px"
            width="64px"
          />
        </StyledRowWrapper>
      </CardContent>
    </StyledCardWrapper>
  );
};

Vehicle.propTypes = {
  img: PropTypes.string, // file url
  colors: PropTypes.arrayOf(string), // array of available colors
  brand: PropTypes.string, // name to be displayed at the bottom of the tile
  vehicleType: PropTypes.oneOf(["car", "airplane", "train"]), // available vehicle types
};

Vehicle.defaultProps = {
  img: "",
  colors: [],
  brand: "",
  vehicleType: "",
};

Vehicle.displayName = "Vehicle";

export default Vehicle;
