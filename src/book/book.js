import React from 'react';
import './book.css';
import moment from 'moment';

export default function Book(props) {
  return (
    <div className="book">
        <h2>{ props.title }</h2>

        <p className="book_author">
            <span className="row-title">by</span>
            {' '}
            { props.author }
        </p>

        <p className="book_publisher"> 
            <span className="row-title">Published by:</span>
            {' '} { props.publisher } {' '}
            <span className="row-title">on</span> {' '}
            {moment(props.published_date).format('DD MMM YYYY')}
        </p> 

        <p className="book_description">
            { props.description }
        </p>

        <p className="book_details">
            Rank {props.rank} this week
        </p>
    </div>
  );
}