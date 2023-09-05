'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post('/api/telegram/sendMessage', {
        message: text,
      })
      .catch((err) => {
        console.log('ERROR: ', err);
        setError('Something unexpected happened, call Mark!');
      })
      .finally(() => {
        setLoading(false);
        setDone(true);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-14 relative">
      <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="font-bold text-2xl text-zinc-700 w-full text-left pb-8">
          What's your thought?
        </h1>
        <input
          className="bg-transparent disabled:opacity-50 border-b border-zinc-700 outline-none py-4 pr-4 w-full placeholder:text-zinc-500 text-xl"
          value={text}
          disabled={done || loading}
          placeholder="Who is the Holy Spirit?"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          disabled={loading || done}
          onClick={handleSubmit}
          className="mt-8 p-8 select-none disabled:opacity-70 disabled:cursor-not-allowed text-center w-full rounded bg-zinc-800 text-[#f7f3ed] text-lg hover:bg-black transition-all"
        >
          {done ? 'Submitted!' : loading ? 'Submitting...' : 'Submit'}
        </button>

        {done && (
          <p className="mt-8 text-center w-full text-zinc-600 text-lg">
            We just got your question!
            <br />
            Thanks for asking!
          </p>
        )}
        {error && (
          <p className="mt-8 text-center w-full text-zinc-600 text-lg">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}
