import React from 'react';
import Lives from './lives';
import Word from './word';
import Letters from './letters';
import Start from './start';

const Layout = ({
  livesleft, maskedWord, result, guess, start, isRunning
}) => {

  return (
    <>
      <div className='game-wrapper'>
        {isRunning && <>
          <div className='left-pane'>
            <Lives livesleft={livesleft} />
          </div>
          <div className="right-pane">
            <Word maskedWord={maskedWord} />
            <Letters onSelect={guess} livesleft={livesleft} result={result} onStart={start} isRunning={isRunning}/>
          </div>
        </>}
        {!isRunning && <Start onStart={start} isRunning={isRunning}/>}

      </div>
    </>
  );
};

export default Layout;