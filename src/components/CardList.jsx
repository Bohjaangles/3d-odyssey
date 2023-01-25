import React from 'react'
import CardItem from './CardItem'


export default function CardList() {
  
  return (
    <div className="cardListWrapper" >
      <div className="first-row">
        <CardItem />
        <CardItem />
      </div>
      <div className="second-row">
        <CardItem />
        <CardItem />
      </div>
    </div>
  )
}
