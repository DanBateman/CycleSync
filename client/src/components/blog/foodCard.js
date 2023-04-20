import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { links } from "./links";

const FoodCard = (props) => {
  // props { topic, section }
  // will render new paper with all the links
  const data = links[props.topic];
  return (
    <Card sx={{ width: 500, my: 1 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={require("../../images/chopped-food.jpg")}
        title="pilates"
      />
      <CardContent>
        <Typography align="left" variant="h5" sx={{ width: "100%" }}>
          Food
        </Typography>
        <Typography variant="body2" sx={{}}>
          Dietary recommendations for your {props.topic.toLowerCase()} phase.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={data.food} target="_blank">
          Click Here
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
