import React from 'react';
import Start from './start';

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

const playedLetters = new Set();

const Letters = ({ onSelect, result, livesleft, onStart, isRunning }) => {

  console.log("letters ", playedLetters);

  const resetSet = () => {
    playedLetters.clear();
  };

  return (
    <div className='display-flex justify-content-center'>
      {ALL_ALPHABETS.map((alphabet) => {
        return <button
          onClick={() => {
            onSelect(alphabet);
            playedLetters.add(alphabet);
          }}
          disabled={result===true || playedLetters.has(alphabet)}
          className={`letter-button letter-button--letter ${playedLetters.has(alphabet) ? 'letter-button--disabled' : ''}`}
        >
          {alphabet}
        </button>
      })}

      {result && (livesleft===0 ? <div className='game-result'>Game Over!</div> : <div className='game-result'>You Won!</div>)}

      <Start onStart={onStart} isRunning={isRunning} resetSet={resetSet}/>
    </div>
  );
};

export default Letters;