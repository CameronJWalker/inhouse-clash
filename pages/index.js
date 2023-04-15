import React, { useState } from 'react';
import Head from 'next/head'
import Page from "../styles/Page.module.css"
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
    <main className={Page.container}>
      <Head>
        <title>Team Randomizer</title>
        <link rel="icon" href="/LoLicon.png"/>
      </Head>
      <div className={Page.description}>
        <h1>Team Randomizer</h1>
        <h3>Enter 10 names</h3>
      </div>
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
    
      <Teams 
        roster={roster}
        team1={team1}
        team2={team2}
      />

    </main>
  )
}
