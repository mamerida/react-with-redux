import { connect } from "react-redux";
import { addToDo,deleteAllToDo } from "../../actions"; 
import FormReduxToDoComp from './FormRedux'

const toDoList = (state) => {
    return {
        list: state
    }
};

const mapDispatchToProps = {
    addToDo,
    deleteAllToDo 
};

const FormReduxToDoConected = connect(toDoList, mapDispatchToProps)(FormReduxToDoComp);

export default FormReduxToDoConected;