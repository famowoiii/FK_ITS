import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quest() {
  const [quest, setQuest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {                                                                                                                                                                                                                                                                                                                           
        const response = await axios.get('http://localhost:8081/data');
        setQuest(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='be'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quest</th>
          </tr>
        </thead>
        <tbody>
          {quest.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.quest}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="text" />
      <button>kirim</button>
      <div>
      </div>
    </div>
  );
}

export default Quest;