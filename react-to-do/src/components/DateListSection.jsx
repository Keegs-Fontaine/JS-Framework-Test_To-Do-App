import checkContainer from "../assets/Check.svg"

export default function DateListSection({ taskList }) {
  return (
    <section>
      <h2>Date</h2>
      {taskList.map(task => (
        <article>
          <img src={checkContainer} alt="" />
          <h3>TITLE</h3>
        </article>
      ))}
    </section>
  )
}
