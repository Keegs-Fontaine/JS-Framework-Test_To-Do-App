// Hooks
import useCustomIdValue from "../hooks/useCustomIdValue"

// Components
import TaskItem from "./TaskItem"

export default function DateListSection({ taskDateList }) {
  const date = Object.keys(taskDateList)[0]
  const idArr = useCustomIdValue(taskDateList[date])

  return (
    <section>
      <h2>{date}</h2>
      {taskDateList[date].map((task, i) => (
        <TaskItem taskTitle={task} key={idArr[i]} />
      ))}
    </section>
  )
}
