import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Typography, Chip } from "@mui/material";
import ActivityChip from "./activityChip";
import MealChip from "./mealChip";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDay, setSelectedActivity } from "./calendarSlice";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 100,
  width: 100,
  m: 0.1,
  borderStyle: "solid",
  borderWidth: "2px",
  // transition: "all .1s ease-in-out",
  // "&:hover": {
  //   transform: "scale(1.02)",
  // },
};

const phases = {
  follicular: "#c953ed",
  ovulation: "#53c9ed",
  luteal: "#ede353",
  menstruation: "#ed5353",
};

const notMonth = {
  zIndex: 10,
  backgroundColor: "rgba(117, 117, 114, 0.9)",
};

const flow = {
  0: "#f7c6c8",
  1: "#f5abae",
  2: "#f58c90",
};

const dayLookup = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thur",
  5: "Fri",
  6: "Sat",
};

const CalendarCell = (props) => {
  // Props will contain all information to generate
  let today = new Date();
  let monthCheck = props.day.getMonth() !== today.getMonth();
  let todayCheck = props.day.getDate() == today.getDate() && monthCheck;
  const dispatch = useDispatch();
  const lastMenstrualStart = useSelector(
    (state) => state.calendar.lastMenstrualStart
  );
  const activities = useSelector((state) => state.calendar.activities);
  const meals = useSelector((state) => state.calendar.meals);
  const symptoms = useSelector((state) => state.calendar.symptoms);
  const activitiesToday = activities.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate() && !monthCheck
  );
  const mealsToday = meals.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate() && !monthCheck
  );
  const symptomsToday = symptoms.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate()
  );

  let menstrualStyles = {
    background: `linear-gradient(180deg, white 30%, ${flow[2]})`,
  };

  let menstrualCheck =
    props.day.getDate() <= new Date(lastMenstrualStart).getDate() + 7 &&
    !monthCheck;

  return (
    <Box sx={{ ...(monthCheck && notMonth) }}>
      <Box
        sx={{
          ...styles,
          ...(menstrualCheck && menstrualStyles),
        }}
        onClick={() => dispatch(setSelectedDay(props.day.toDateString()))}
      >
        {/* {dayLookup[props.day.getDay()]} */}
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              width: "fit-content",
              ml: todayCheck ? 0.25 : 0.75,
              mt: 0.2,
            }}
          >
            {props.day.getDate()}
          </Typography>
          <Box
            sx={{
              zIndex: 1,
              background:
                symptomsToday.length > 0 && phases[symptomsToday[0].flow],
              height: "2.5px",
              width: "100%",
            }}
          ></Box>
          <Box sx={{ display: "flex" }}>
            {activitiesToday.length > 0 && (
              <Box
                sx={{
                  height: "20px",
                  width: "10px",
                  mt: 0.9,
                  mr: 0.5,
                  backgroundColor: "orange",
                  borderRadius: "20%",
                  transition: "all .1s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setSelectedActivity(props.day.getDate()));
                }}
              />
            )}
            {mealsToday.length > 0 && (
              <Box
                sx={{
                  height: "20px",
                  width: "10px",
                  mt: 0.9,
                  mr: 1,
                  backgroundColor: "red",
                  borderRadius: "20%",
                  transition: "all .1s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            )}
          </Box>
        </Box>
        {/* <Box sx={{ mx: 0.25 }}>
          {activitiesToday.map((el, ind) => {
            return (
              <ActivityChip key={`act-${ind}`} data={el} label={ind + 1} />
            );
          })}
        </Box>
        <Box sx={{ mx: 1 }}>
          {mealsToday.map((el, ind) => {
            return <MealChip key={`meal-${ind}`} data={el} label={ind + 1} />;
          })}
        </Box> */}
        <Box></Box>
      </Box>
    </Box>
  );
};

export default CalendarCell;
