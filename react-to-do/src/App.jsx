// Hooks
import { useContext } from "react"
import useCustomIdValue from "./hooks/useCustomIdValue"

// Components
import DateListSection from "./components/DateListSection"

// Context
import { GlobalListData } from "./context/GlobalListDataProvider"

// Assets
import plusBtn from "./assets/AddItemBtnSVG.svg"
import AddItemModal from "./components/AddItemModal"

export default function App() {
  const { currentTaskList } = useContext(GlobalListData)
  const idArr = useCustomIdValue(currentTaskList)

  return (
    <>
      <header>
        <h1>My Tasks</h1>
      </header>
      <main>
        {currentTaskList.map((taskDateList, i) => (
          <DateListSection taskDateList={taskDateList} key={idArr[i]} />
        ))}
      </main>
      <button className="bg-clr-primary">
        <img src={plusBtn} alt="Add" />
      </button>
      <AddItemModal />
    </>
  )
}
