import { useState } from "react";
import './Form.css'

const FormReduxToDoComp = ({ addToDo, deleteAllToDo })=>{

  const [valueInput,setValueInput] = useState("");
  const ChangeText = (e) =>{
      setValueInput(e.target.value)
  }

  const addToDoRedux = () => {
      const objectToDo = {
          delete:false,
          complete:false,
          text:valueInput
      }
      setValueInput("")
      addToDo(objectToDo)
  }

  return(
  <section className="formContainer">
      <input 
          type="text"
          className="inputText"
          value={valueInput}
          onChange={ChangeText}
          />
      <button onClick={valueInput ? addToDoRedux : null }> ADD TODO</button>
      <button onClick={deleteAllToDo}> DELETED ALLs TODO</button>
  </section>
  )
}

export default FormReduxToDoComp
