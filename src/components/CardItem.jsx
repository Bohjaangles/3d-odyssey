import React from 'react'
import { Card, Typography } from '@mui/material';
import '../styles/cardItem.scss'

export default function CardItem() {
  return (
    <div className="cardWrapper">
      <Card>
        <Typography>Hello from the card</Typography>
      </Card>
    </div>
  )
}
