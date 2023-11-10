// Assets
import checkContainer from "../assets/Check.svg"

export default function TaskItem({ taskTitle }) {
     return (
          <article>
               <button>
                    <img src={checkContainer} alt="" />
               </button>
               <h3>{taskTitle}</h3>
          </article>
     )
}
