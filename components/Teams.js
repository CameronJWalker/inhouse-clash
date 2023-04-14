import React from "react";
import Team from "../styles/Team.module.css"

export default function Teams(props) {
    return (
        <main className={Team.container}>
            {props.team1.length == 0 ? (
                <>
                    <div className={Team.roster}>
                        {props.roster.map((ros, index)=>(
                            <li key={index}>{ros}</li>
                        ))}
                    </div>
                </>
            ) : (
                <div className={Team.teams}>
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
                </div>
            )}
        </main>
    )
}

