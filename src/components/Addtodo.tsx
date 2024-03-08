import { FormEvent, useState } from "react"

export function AddTodo(){
const [newtodo,setNewtodo]= useState('')

function handleNewTodo(e: FormEvent){
  e.preventDefault()
  console.log(newtodo)
  
}
  return(
    <form action="">
      <input type="text" placeholder="Novo to-do" value={newtodo} onChange={e=>setNewtodo(e.target.value)} />
      <button type="submit" onClick={handleNewTodo} >Adicionar</button>
    </form>
  )
}