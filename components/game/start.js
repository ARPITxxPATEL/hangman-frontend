import React, {useState} from 'react';

const Start = ({ onStart, isRunning, resetSet }) => {

  const [name, setName] = useState('');

  return (
    <div>
      {!isRunning && (<>
      <h2 className='hangman-title'>Hangman</h2>
      <input 
        type="text" 
        placeholder="Name"
        className='hangman-name'
        onChange={(e) => setName(e.target.name)} 
        name={name}
      />
      </>)}
      <button
        onClick={() => {
          onStart(name);
          if(!!resetSet)resetSet();
        }}
        className={`start-button ${isRunning && 'restart-button'}`}
      >
        {!isRunning ? "Start" : "Restart"}
      </button>
    </div>
  );
};

export default Start;