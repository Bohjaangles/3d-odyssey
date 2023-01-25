import React from 'react'
import CardItem from './CardItem'
import { Grid } from '@mui/material';


export default function CardList() {
  
  return (
    <div className="cardListWrapper" >
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
    </div>
  )
}
