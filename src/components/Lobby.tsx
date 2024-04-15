import {useContext, useEffect, useState} from "react";
import axios from "axios";
import SessionContext from "../contexts/SessionContext.tsx";

interface LobbyProps {
    setInGame: (game: boolean) => void;
}
function Lobby(props: LobbyProps) {
    const [waiting, setWaiting] = useState(false);
    const context = useContext(SessionContext);

    useEffect(() => {
        const gamePoll = setInterval(() => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/api/game/' + context,
            }).then((response) => {
                if (response.status === 200) {
                    props.setInGame(true);
                }
            })
            console.log('waiting');
        }, 1000)
        return (() => {
            clearInterval(gamePoll)
        })
    }, [waiting]);

    async function joinLobby() {
        setWaiting(true);
        const res = await axios({
            method: 'post',
            baseURL: 'http://localhost:3000/api/lobby'
        })
        context.setSessionId(res.data);
    }

    return (
        <div className="lobby-container">
            <h1 className="lobby-title">Tic-tac-toe</h1>
            <button onClick={joinLobby} className="lobby-button">Join lobby</button>
        </div>
    )
}
export default Lobby