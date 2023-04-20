import React, { useState, useEffect } from "react";
import { Paper, Box, Typography } from "@mui/material";
import PhaseCard from "../components/blog/phaseCard";
import PhaseLinks from "../components/blog/phaseLinks";
import ExerciseCard from "../components/blog/exerciseCard";

const BlogPage = () => {
  const [selection, setSelection] = useState(null);
  const phases = ["Menstrual", "Luteal", "Ovulation", "Folicular"];

  const customClick = (type) => setSelection(type);

  useEffect(() => {
    console.log(selection);
    console.log(phases);
  }, [selection]);

  return (
    <>
      {!selection && (
        <Paper
          elevation={6}
          sx={{
            m: "auto",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", maxWidth: "820px" }}>
            {phases.map((phase) => (
              <PhaseCard
                key={`phase-${phase}`}
                label={phase}
                handleClick={customClick}
              />
            ))}
          </Box>
        </Paper>
      )}
      {selection && <PhaseLinks topic={selection} />}
    </>
  );
};

export default BlogPage;