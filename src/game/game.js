import React from 'react';
import './game.css';
import moment from 'moment';

export default function Game(props) {
  return (
    <div className="game">
        <h2>{ props.App }</h2>

        <p className="rating">
            <span className="row-title">Rating:</span>
            {' '}
            { props.Rating }
        </p>

        <p className="genre">
            <span className="row-title">Genre:</span>
            {' '}
            { props.Genres }
        </p>

        <p className="last_updated"> 
            <span className="row-title">Last updated:</span>
            {' '} 
            {moment(props.Last_Updated).format('DD MMM YYYY')}
        </p> 

        <p className="price">
            <span className="row-title">Price:</span>
            {' $'}
            { props.Price }
        </p>
    </div>
  );
}