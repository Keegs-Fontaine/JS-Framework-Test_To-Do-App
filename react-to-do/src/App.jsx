// Hooks
import { useState } from "react"

// Components
import DateListSection from "./components/DateListSection"

export default function App() {
  const [currentTaskList, setCurrentTaskList] = useState([
    { "10-29-23": ["Study for test", "Work on designs", "Scale react project"] },
    { "10-30-23": ["Finish wordlist"] },
  ])

  return (
    <main>
      <header>
        <h1>My Tasks</h1>
      </header>
      <section>
        {currentTaskList.map(taskDateList => (
          <DateListSection />
        ))}
      </section>
    </main>
  )
}
