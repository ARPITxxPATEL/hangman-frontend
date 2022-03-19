import React, { useState } from 'react';
import Layout from './layout';
import { createSession, playInSession } from '../../api/sessions'; 

const Game = () => {
  const [session, setSession] = useState(null);
  const isRunning = !!session;

  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
  };
  const start = async (name) => {
    const session = await createSession(name);
    setSession(session);
  }


  return (
    <>
      <Layout 
        livesleft={session?.livesleft}
        maskedWord={session?.maskedWord}
        result={session?.result}
        guess={guess}
        start={start}
        isRunning={isRunning}
        />
    </>
  );
};

export default Game;