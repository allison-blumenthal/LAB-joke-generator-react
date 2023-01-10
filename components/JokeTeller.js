import React from 'react';
import PropTypes from 'prop-types';

export default function JokeTeller({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.delivery : ''}</p>
    </>
  );
}

JokeTeller.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
