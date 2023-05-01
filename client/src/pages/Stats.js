import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Paper, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const StatsPage = () => {
  const avgCycle = useSelector((state) => state.calendar.avgCycle);
  const avgMenses = useSelector((state) => state.calendar.avgMenses);
  const cycle = 28;
  const menses = 5;
  return (
    <Paper
      sx={{
        width: "fit-content",
        m: "auto",
        background: "#f9f9f3",
        display: "flex",
      }}
      elevation={8}
    >
      <Box
        sx={{
          width: "auto",
          height: "auto",
          m: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ m: 2 }}>
          Average Cycle Length:
        </Typography>
        <PieChart
          data={[
            { value: cycle - avgCycle, color: "#f9f9f3" },
            { value: avgCycle, color: "#4b6648" },
          ]}
          lineWidth={10}
          startAngle={-90}
          rounded={true}
          animate={true}
        >
          <text
            dominantBaseline={"central"}
            x="50"
            y="50"
            dy="-10"
            textAnchor="middle"
            fontFamily="Questrial"
          >
            {avgCycle}
          </text>
          <text
            dominantBaseline={"central"}
            x="50"
            y="50"
            dy="10"
            textAnchor="middle"
            fontFamily="Questrial"
          >
            Days
          </text>
        </PieChart>
      </Box>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          m: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ m: 2 }}>
          Average Menstrual Length:
        </Typography>
        <PieChart
          data={[
            { value: menses - avgMenses, color: "#f9f9f3" },
            { value: avgMenses, color: "red" },
          ]}
          lineWidth={10}
          startAngle={-90}
          rounded={true}
          animate={true}
        >
          <text
            dominantBaseline={"central"}
            x="50"
            y="50"
            dy="-10"
            textAnchor="middle"
            fontFamily="Questrial"
          >
            {avgMenses}
          </text>
          <text
            dominantBaseline={"central"}
            x="50"
            y="50"
            dy="10"
            textAnchor="middle"
            fontFamily="Questrial"
          >
            Days
          </text>
        </PieChart>
      </Box>
    </Paper>
  );
};

export default StatsPage;
