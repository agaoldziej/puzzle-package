import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const style = {
    background: 'linear-gradient(45deg, #e6eaf2 50%, #0110a8 90%)',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #aeb1b8',
    
  };

export default function RandomButton(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button style={style} variant="contained">Losuj Obrazek</Button>
    </div>
  );
}