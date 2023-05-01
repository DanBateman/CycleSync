import React, { useEffect, useState } from "react";
import { Typography, Box, IconButton, Button } from "@mui/material";
import Card from "./card";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import PeriodCard from "./periodCard";

const View = (props) => {
  const meals = useSelector((state) => state.calendar.selectedMeal);
  const activities = useSelector((state) => state.calendar.selectedActivity);
  const symptoms = useSelector((state) => state.calendar.selectedSymptom);
  const menstruation = useSelector(
    (state) => state.calendar.selectedMenstruation
  );

  const switchType = (type) => {
    switch (type) {
      case "Activities":
        return activities;
      case "Meals":
        return meals;
      case "Symptoms":
        return symptoms;
      case "Menstruation":
        return menstruation;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "570px",
        width: "100%",
        m: "2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ m: 0 }}>
          {props.label}
        </Typography>
        <IconButton onClick={props.customClick}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "auto",
          my: 0.5,
          p: 1,
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            borderRadius: "100px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            borderRadius: "100px",
          },
        }}
      >
        {!menstruation
          ? switchType(props.label).map((el) => (
              <Card key={el._id} act={el} type={props.label} />
            ))
          : menstruation.map((el) => (
              <PeriodCard act={el} key={el._id} type={props.label} />
            ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}></Box>
    </Box>
  );
};

export default View;
