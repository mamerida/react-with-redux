import TabsTodo from "./TabsTodo";
import { connect } from "react-redux";

const toDoRender = (state) => {
    return {
        list: state
      };
};

const  TabsTodoReduxComp = (props) => {
    const { list } = props;

    return (
      <TabsTodo
        list={list}
      />
    );
}

const TabsTodoRedux = connect(toDoRender)(TabsTodoReduxComp);

export default TabsTodoRedux;