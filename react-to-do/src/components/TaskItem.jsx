// Hooks
import { useContext } from "react"

// Context
import { GlobalListData } from "../context/GlobalListDataProvider"

// Assets
import checkContainer from "../assets/Check.svg"

export default function TaskItem({ taskTitle }) {
  const value = useContext(GlobalListData)

  return (
    <article>
      <button>
        <img src={checkContainer} alt="" />
      </button>
      <h3>{taskTitle}</h3>
    </article>
  )
}
