import {ReactNode, useState} from "react";
import SessionContext, {SessionContextValue} from "../contexts/SessionContext.tsx";

interface SessionContextProviderProps {
    children: ReactNode;
}

function SessionContextProvider(props: SessionContextProviderProps) {
    const [sessionId, setSessionId] = useState<string>("");
    const contextValue: SessionContextValue = {sessionId, setSessionId};

    return <SessionContext.Provider value={contextValue}>
        {props.children}
    </SessionContext.Provider>
}

export default SessionContextProvider