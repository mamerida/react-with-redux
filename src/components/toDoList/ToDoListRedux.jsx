import ToDoList from "./ToDoList";
import { connect } from "react-redux";

export const actionToModify = { type: "@completeMe" };


const onUserCompleteTask = (toDo) => (dispatch) =>{
    actionToModify.payload = toDo;
    return dispatch(actionToModify);

}

const mapDispatchToProps = {
    onUserComplete : onUserCompleteTask,
};

const toDoRender = (state) => {
    return {
        list: state
      };
};

const  ToDoListReduxComp = (props) => {
    const { list , onUserComplete } = props;

    return (
      <ToDoList
        list={list}
        onUserComplete={onUserComplete}
      />
    );
}

const ToDoListRedux = connect(toDoRender, mapDispatchToProps)(ToDoListReduxComp);

export default ToDoListRedux;