import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map && props.cards.map(card => {
            return <Card card={card} />
          })}
    </div>
  )
}

Cards.propTypes = {
  cards = PropTypes.arrayof(PropTypes.object)
}

export default Cards;