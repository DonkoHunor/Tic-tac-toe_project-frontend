import React from "react";

export interface SessionContextValue {
    sessionId: string
    setSessionId: (sessionId: string) => void
}

const SessionContext = React.createContext<SessionContextValue>(null as unknown as SessionContextValue)

export default SessionContext