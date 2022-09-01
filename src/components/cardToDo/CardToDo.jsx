import { useState } from 'react'
import './CardToDo.css'

const CardToDo = ({list, condition, ...props}) =>{

    const setElement = (list, condition) =>{
        let newList =list
        if(condition == "Com"){
            newList = list.filter(element => element.complete && !element.delete)
        }else if(condition == "Inc"){
            newList = list.filter(element => !element.complete && !element.delete)
        }
        return newList
    }

    let newList = setElement(list, condition)
  
    return(
        <section {...props}>
            <ul>
            {newList.map(task =>{
                return <li key={Math.random()}>{task.text}</li>
            })}
            </ul>
        </section>
    )
}

export default CardToDo