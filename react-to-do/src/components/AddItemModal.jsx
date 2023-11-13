// Hooks
import { useState } from "react"

// Assets
import plusBtn from "../assets/AddItemBtnSVG.svg"
import exit from "../assets/Exit.svg"

export default function AddItemModal() {
  const [modalActiveClass, setModalActiveClass] = useState("hidden")

  const handleItemSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <form
        className={`w-[85vw] p-8 pt-12 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-5 bg-white shadow-screen ${modalActiveClass}`}
        action="/"
        onSubmit={handleItemSubmit}>
        <button className="p-2 absolute right-4 top-4 bg-clr-primary rounded-[100%]" onClick={() => setModalActiveClass("animate-fade-out")}>
          <img src={exit} alt="" />
        </button>
        <input className="text-center border-b-2 border-clr-primary" type="text" placeholder="Title" />
        <input className="text-center border-b-2 border-clr-primary" type="date" />
        <button className="w-5/6 p-1 self-center bg-clr-primary text-white rounded-xl" type="submit">
          Add Item
        </button>
      </form>
      <button
        className=" p-4 fixed left-1/2 bottom-5 translate-x-[-50%] bg-clr-primary rounded-[100%] shadow-2xl"
        onClick={() => setModalActiveClass("animate-fade-in")}>
        <img src={plusBtn} alt="Add" />
      </button>
    </>
  )
}
