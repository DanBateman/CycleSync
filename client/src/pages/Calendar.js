import React, { useEffect, useContext } from "react";
import { Box, Divider } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import CalendarContainer from "../components/calendar/calendarContainer";
import CellViewer from "../components/calendarView/cellViewer";
import { useSelector } from "react-redux";
import { ApiContext } from "../contexts/api-context";
import AddView from "../components/addCard/addView";

const CalendarPage = () => {
  const api = useContext(ApiContext);
  const calendar = useSelector((state) => state.calendar);
  const month = useSelector((state) => state.calendar.selectedMonth);
  const viewerCheck =
    calendar.selectedDay ||
    calendar.selectedMeal ||
    calendar.selectedAdd ||
    calendar.selectedSymptom ||
    calendar.selectedMenstruation ||
    calendar.selectedActivity;
  const isMinWidth = useMediaQuery({ query: "(max-width: 1200px)" });

  useEffect(() => {
    if (!calendar.fetched) api.getAll();
  }, []);

  useEffect(() => {
    if (!calendar.fetched) api.getAll();
  }, [month]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        "@media screen and (max-width: 1200px)": {
          flexDirection: "column",
          mx: "auto",
          mt: 5,
        },
      }}
    >
      <CalendarContainer />
      {viewerCheck && !isMinWidth && (
        <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ mx: 2, my: "10%" }}
        />
      )}
      {viewerCheck && !isMinWidth && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
          elevation={6}
        >
          <CellViewer />
        </Box>
      )}
    </Box>
  );
};

export default CalendarPage;
