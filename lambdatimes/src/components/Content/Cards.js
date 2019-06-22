import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {

  // console.log(props)
    // console.log(Card)
  
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {props.cards.map(element => (
        <div>

          {/* <img src={element.img} alt={element.author}/>
          <h2>{element.headline}</h2>
          <div>{element.tab}</div>
          <h2>{element.author}</h2> */}

          <Card 
          author={element.author}
          headline={element.headline}
          img={element.img}
          />

        </div>
      ))}


    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;