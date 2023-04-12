import React, { useState } from 'react';
import Form from "../styles/Form.module.css"
import Button from "../styles/Button.module.css"
export default function Home() {

  const [roster, setRoster] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRoster = e.target.name.value;
    if (roster.length < 10) {
      setRoster([...roster, newRoster])
    }
    e.target.reset();
  }
  
  function randomizeRoster() {
    roster.sort(()=> Math.random() - 0.5);
  }

  return (
    <main className = "page-container">
      <form className={Form.container} onSubmit={handleSubmit}>
        <input 
          className={Form.summonersName}
          type="text" name="name" 
          placeholder="Enter Summoner's Name..." 
        />
          {
            roster.length == 10
            ?
            <button className={Button.submit} onClick={randomizeRoster}> RANDOMIZE </button>
            :
            <button className={Button.submit} type="submit"> SUBMIT </button>
          }
      </form>
    </main>
  )
}
