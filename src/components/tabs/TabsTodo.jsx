import "./TabsTodo.css"
import CardToDo from "../cardToDo/CardToDo"

const TabsTodo = ({list}) =>{
    
    

    return(
        <section className="ContainerTast">
            <div>
                <h3>All Task</h3>
                <CardToDo className="tabcontent" list={list} condition="All" />
            </div>
            <div>
                <h3>Complete</h3>
                <CardToDo className="tabcontent" list={list} condition="Com"/>
            </div>
            <div>
                <h3>InComplete</h3>
                <CardToDo className="tabcontent" list={list}  condition="Inc" />
            </div>
        </section>
    )
}   

export default TabsTodo