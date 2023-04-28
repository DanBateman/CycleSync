import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { links } from './links';

const ExerciseCard = (props) => {
  // will render new paper with all the links
  const data = links[props.topic];
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={require('../../images/pink-pilates.jpg')}
        title="pilates"
      />
      <CardContent>
        <Typography align="left" variant="h5" sx={{ width: '100%' }}>
          Exercise
        </Typography>
        <Typography variant="body2" sx={{}}>
          {data.exerciseDesc}
        </Typography>
      </CardContent>
      <CardActions>
        {data.exerciseLinks.map((el, ind) => (
          <Button href={el.link} key={'button-' + ind} target="_blank" size="small">
            <Typography variant="body2" align="center">
              {el.title}
            </Typography>
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default ExerciseCard;
