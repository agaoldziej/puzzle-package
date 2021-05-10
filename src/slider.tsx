import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function valuetext(value: number) {
  return `${value}`;
}

export default function SizeSlider(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Rozmiar puzli
      </Typography>
      <Slider
        defaultValue={4}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={2}
        max={10}
        onChange={(change: any, value: any) => props.handleChange(value)}
      />
    </div>
  );
}