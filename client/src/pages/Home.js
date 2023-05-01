import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Week from "../components/home/week";
import { useSelector } from "react-redux";
import { ApiContext } from "../contexts/api-context";

const HomePage = () => {
  const api = useContext(ApiContext);
  const calendar = useSelector((state) => state.calendar);
  const today = new Date();
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );

  const phaseLookup = (lastPeriod) => {
    let last = new Date(lastPeriod);
    let day = new Date().getDate() - last.getDate();
    if (day <= 5) {
      return <Typography variant="h4">MENSES</Typography>;
    } else if (day > 5 && day <= 10) {
      return <Typography variant="h4">FOLLICULAR</Typography>;
    } else if (day > 10 && day <= 15) {
      return <Typography variant="h4">OVULATION</Typography>;
    } else if (day > 15) {
      return <Typography variant="h4">LUTEAL</Typography>;
    } else {
      return (
        <Typography variant="h6">
          Add your last period to get started
        </Typography>
      );
    }
  };

  useEffect(() => {
    if (!calendar.fetched) api.getAll();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: "auto",
        height: "100%",
      }}
    >
      <Typography variant="h6">Current Phase</Typography>
      <Box
        // elevation={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          my: 2,
          height: "350px",
          width: "350px",
          borderRadius: "50%",
          // #f58c90
          boxShadow:
            "7px -7px 5px black, -1px -5px 5px black, 5px 1px 5px black",
          "@keyframes myEffect": {
            "0%": {
              boxShadow:
                "7px -7px 5px black, -1px -5px 5px black, 5px 1px 5px black",
            },
            "100%": {
              boxShadow:
                "-7px 7px 5px black, 1px 5px 5px black, -5px -1px 5px black",
            },
          },
          animation: "myEffect .5s linear .2s 1 normal",
          animationFillMode: "forwards",
        }}
      >
        {phaseLookup(calendar.lastMenstrualStart)}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Week label={"Look Back"} date={lastWeek} />
        <Week label={"Look Ahead"} date={today} />
      </Box>
    </Box>
  );
};

export default HomePage;
