'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const MatchContext = createContext()

export const MatchContextProvider = ({ children }) => {
  const [matchSelected , setMatchSelected] = useState({})
  return (
    <MatchContext.Provider value={{ matchSelected , setMatchSelected}}>
      {children}
    </MatchContext.Provider>
  )
}

export const useMatch = () => useContext(MatchContext)
