import React from 'react'
import CardItem from './CardItem'
import { Grid } from '@mui/material';
import image from '../assets/background.jpg'


export default function CardList() {
  
  return (
    <div className="cardListWrapper" style={{ backgroundImage: `url(${image})`}} >
      <div className="first-row">
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-evenly"
        >
          <CardItem />
          <CardItem />
        </Grid>
      </div>
      <div className="second-row">
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-evenly"
        >
          <CardItem />
          <CardItem />
        </Grid>
      </div>
      <div className="third-row">
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-evenly"
        >
          <CardItem />
          <CardItem />
        </Grid>
      </div>
    </div>
  )
}
