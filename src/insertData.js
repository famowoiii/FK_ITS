/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios';

const insertData = () => {
  const [id, setId] = useState('');
  const [quest, setQuest] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8081/insert', { id, quest });
      console.log('Data submitted successfully.');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Quest:
        <input type="text" value={quest} onChange={(e) => setQuest(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default insertData;
