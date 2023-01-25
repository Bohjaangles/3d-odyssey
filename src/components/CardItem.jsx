import React from 'react'
import {
  Card, 
  Typography,
  CardContent, 
  CardHeader,
} from '@mui/material';
import '../styles/cardItem.scss'

export default function CardItem() {
  return (
    <div className="cardWrapper">
      <Card>
        <CardHeader>
          <Typography>Hello from the card header</Typography>
        </CardHeader>
        <CardContent>
          <Typography>Hello from card content</Typography>
        </CardContent>
      </Card>
    </div>
  )
}
