import React from 'react';

const Word = ({ maskedWord }) => {
  return (
    <div className='display-flex justify-content-around word-flex'>
      {maskedWord.map((letter) => {
        return <>
          <span className='word'>&nbsp;{letter}&nbsp;</span>
        </>
      })}
    </div>
  );
};

export default Word;