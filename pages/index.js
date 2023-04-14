import React, { useState } from 'react';
import Form from "../styles/Form.module.css"
import Button from "../styles/Button.module.css"
import Teams from "../components/Teams"


export default function Home() {

  const [ roster, setRoster ] = useState([]);
  const [ team1, setTeam1 ] = useState([]);
  const [ team2, setTeam2 ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRoster = e.target.name.value;
    if (roster.length < 10) {
      setRoster([...roster, newRoster])
    }
    e.target.reset();
  }
  
  function randomizeRoster() {
    const randomRoster = [...roster].sort(()=> Math.random() - 0.5);
    const team1Roster = randomRoster.slice(0, 5);
    const team2Roster = randomRoster.slice(5, 10);

    setTeam1(team1Roster)
    setTeam2(team2Roster)

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
      
      <Teams />

    </main>
  )
}
