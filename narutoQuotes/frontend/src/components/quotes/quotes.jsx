import React from 'react';
import P from 'prop-types';
import '../button/button.css';

export const Quotes = ({ quote, speaker, onUpdate = () => {} }) => {
  return (
    <div className="boxQuote">
      <p className="quote">{quote}</p>
      <p className="speaker">-{speaker}</p>
      <button onClick={onUpdate} className="button">
        Quote No Jutsu
      </button>
    </div>
  );
};

Quotes.propTypes = {
  quote: P.string,
  speaker: P.string,
  onUpdate: P.func,
};