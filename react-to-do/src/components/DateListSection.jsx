// Components
import TaskItem from "./TaskItem"

export default function DateListSection({ taskDateList }) {
     const date = Object.keys(taskDateList)[0]

     return (
          <section>
               <h2>{date}</h2>
               {taskDateList[date].map(task => (
                    <TaskItem taskTitle={task} />
               ))}
          </section>
     )
}
