import { createContext, useState } from "react"

export const GlobalListData = createContext(null)

export default function GlobalListDataProvider({ children }) {
  const [currentTaskList, setCurrentTaskList] = useState([
    {
      "10-29-23": ["Study for test", "Work on designs", "Scale react project"],
    },
    { "10-30-23": ["Finish wordlist"] },
  ])

  return <GlobalListData.Provider value={{ currentTaskList, setCurrentTaskList }}>{children}</GlobalListData.Provider>
}
