import React, { useState } from 'react';
import Form from "../styles/Form.module.css"

export default function Home() {

  const [ roster, setRoster ] = useState([]);


  return (
    <main className = "page-container">
      <form className={Form.container}>
        <input className={Form.summonersName}type="text" name="summoner" placeholder="Enter Summoner's Name..." />
        <button className={Form.submit}> Submit </button>
      </form>
    </main>
  )
}
