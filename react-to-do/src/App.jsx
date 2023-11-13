// Hooks
import { useContext } from "react"
import useCustomIdValue from "./hooks/useCustomIdValue"

// Components
import DateListSection from "./components/DateListSection"

// Context
import { GlobalListData } from "./context/GlobalListDataProvider"

// Assets
import AddItemModal from "./components/AddItemModal"

export default function App() {
  const { currentTaskList } = useContext(GlobalListData)
  const idArr = useCustomIdValue(currentTaskList)

  return (
    <>
      <header className="mt-8 flex justify-center text-3xl">
        <h1 className="w-56 text-center border-b-2 border-clr-primary">My Tasks</h1>
      </header>
      <main>
        {currentTaskList.map((taskDateList, i) => (
          <DateListSection taskDateList={taskDateList} key={idArr[i]} />
        ))}
      </main>

      <AddItemModal />
    </>
  )
}
