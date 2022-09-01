import logo from './logo.svg';
import './App.css';
import FormReduxToDoConected from './components/form/FormReduxConected';
import ToDoListRedux from './components/toDoList/ToDoListRedux';
import TabsTodoRedux from './components/tabs/TabsTodoRedux';

function App() {
  return (
    <div className="App-header">
      <h1>To Do List</h1>
      <FormReduxToDoConected/>
      <ToDoListRedux/>
      <TabsTodoRedux/>
    </div>
  );
}

export default App;
