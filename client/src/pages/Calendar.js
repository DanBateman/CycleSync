import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import CalendarContainer from "../components/calendar/calendarContainer";
import CellViewer from "../components/calendarView/cellViewer";
import { useSelector, useDispatch } from "react-redux";
import { setAll } from "../components/calendar/calendarSlice";
import ToastContext from "../contexts/toast-context";
import api from "../services/api";

const CalendarPage = () => {
  const { success, error } = useContext(ToastContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const calendar = useSelector((state) => state.calendar);
  const token = useSelector((state) => state.auth.token);
  const viewerCheck =
    calendar.selectedDay || calendar.selectedMeal || calendar.selectedActivity;
  const isMinWidth = useMediaQuery({ query: "(max-width: 1200px)" });

  const getActivities = async () => {
    try {
      const { data } = await api.get("/calendar/data", {
        headers: { "x-access-token": token },
      });
      dispatch(setAll(data));
    } catch (e) {
      error("Please login to continue.");
    }
  };

  useEffect(() => {
    if (token) getActivities();
  }, [token]);

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
