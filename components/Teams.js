import React from "react";
import Team from "../styles/Team.module.css"

export default function Teams(props) {
    return (
        <main className={Team.container}>
            {props.team1.length == 0 ? (
                <>
                    <div className={Team.roster}>
                        {props.roster.map((ros, index)=>(
                            <ol key={index} className={Team.names}>{ros}</ol>
                        ))}
                    </div>
                </>
            ) : (
                <div className={Team.teams}>
                    <div className={Team.one}>
                        <h2 className={Team.header}>Team 1</h2>
                        {props.team1.map((team, index) =>(
                            <ol key={index}>{team}</ol>
                        ))}
                    </div>
                    <div className={Team.two}>
                        <h2 className={Team.header}>Team 2</h2>
                        {props.team2.map((team, index) =>(
                            <ol key={index}>{team}</ol>
                        ))}
                    </div>
                </div>
            )}
        </main>
    )
}

