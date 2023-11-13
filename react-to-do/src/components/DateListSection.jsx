// Hooks
import useCustomIdValue from "../hooks/useCustomIdValue"

// Components
import TaskItem from "./TaskItem"

export default function DateListSection({ taskDateList }) {
  const date = Object.keys(taskDateList)[0]
  const idArr = useCustomIdValue(taskDateList[date])

  return (
    <section className="my-[4rem] grid gap-5">
      <h2 className="w-36 justify-self-center text-center border-b-2 border-clr-primary">{date}</h2>
      {taskDateList[date].map((task, i) => (
        <TaskItem taskTitle={task} key={idArr[i]} />
      ))}
    </section>
  )
}
