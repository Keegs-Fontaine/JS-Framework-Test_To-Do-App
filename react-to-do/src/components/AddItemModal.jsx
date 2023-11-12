// Assets
import exit from "../assets/Exit.svg"

export default function AddItemModal() {
  const handleItemSubmit = e => {
    e.preventDefault()
  }

  return (
    <form action="/" onSubmit={handleItemSubmit}>
      <button className="bg-clr-primary">
        <img src={exit} alt="" />
      </button>
      <input type="text" placeholder="Title" />
      <input type="date" />
      <button className="bg-clr-primary text-white" type="submit">
        Add Item
      </button>
    </form>
  )
}
