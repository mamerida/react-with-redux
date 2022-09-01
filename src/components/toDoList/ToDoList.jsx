import { useEffect, useState } from "react"
import "./ToDoList.css"

const ToDoList = ({list, onUserComplete}) =>{

    const [listElement,setList] = useState([])
    
    const completeTask = (e) =>{
        e.preventDefault()
        if(e.target.value){
            onUserComplete(e.target.value)
        }
    }
    
    useEffect(()=>{
        const newList = list.filter(element => !element.delete)
        setList(newList)
    },[list])
    
    return(
        <section className="buttonContainer">
            {listElement.map(element =>{
                return(
                    <button type="submit" onClick={completeTask} value={element.text} className="buttonToDo" key={Math.random()}> 
                        {element && !element.complete
                            ? 
                            <span value={element.text}  className="spanToDo">TO DO: </span>
                            :
                            <span value={element.text} className="spanComplete">COMPLETED! </span>
                         }   
                        {element.text}
                    </button>
                )
            })}
        </section>
    )
}

export default ToDoList