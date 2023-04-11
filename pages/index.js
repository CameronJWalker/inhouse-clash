import React, { useState } from 'react';
import Form from "../styles/Form.module.css"

export default function Home() {

  const [roster, setRoster] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRoster = e.target.name.value;
    if (roster.length < 10) {
      setRoster([...roster, newRoster])
    }
  }
  console.log(roster)
  return (
    <main className = "page-container">
      <form className={Form.container} onSubmit={handleSubmit}>
        <input className={Form.summonersName}type="text" name="name" placeholder="Enter Summoner's Name..." />
        <button className={Form.submit} type="submit"> SUBMIT </button>
      </form>
    </main>
  )
}
