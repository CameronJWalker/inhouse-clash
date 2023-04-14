import React from "react";
import Team from "../styles/Team.module.css"

export default function Teams(props) {
    return (
        <main className={Team.container}>
            <div className={Team.one}>
                {props.team1.map((team, index) =>(
                    <li key={index}>{team}</li>
                ))}
            </div>
            <div className={Team.two}>
                {props.team2.map((team, index) =>(
                    <li key={index}>{team}</li>
                ))}
            </div>
        </main>
    )
}