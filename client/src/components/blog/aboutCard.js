import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { links } from './links';

const AboutCard = (props) => {
  const data = links[props.topic];
  return (
    <Card sx={{ width: 600, my: 1 }}>
      <CardContent>
        <Typography align="left" variant="h5" sx={{ width: '100%' }}>
          About the {props.topic.toLowerCase()} phase:
        </Typography>
        <Typography variant="body2" sx={{}}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={data.about} target="_blank">
          Learn More
        </Button>
      </CardActions>
      <CardMedia sx={{ height: 500 }} image={require('../../images/period.jpg')} title="pilates" />
    </Card>
  );
};

export default AboutCard;
