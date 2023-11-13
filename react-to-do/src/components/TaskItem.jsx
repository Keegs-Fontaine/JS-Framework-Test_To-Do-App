// Hooks
import { useContext } from "react"

// Context
import { GlobalListData } from "../context/GlobalListDataProvider"

// Assets
import checkContainer from "../assets/Check.svg"

export default function TaskItem({ taskTitle }) {
  return (
    <article className="w-[85vw] mx-auto p-4 flex items-center gap-2 bg-clr-neutral-900">
      <button>
        <img src={checkContainer} alt="" />
      </button>
      <h3>{taskTitle}</h3>
    </article>
  )
}
