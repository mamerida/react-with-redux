export const reducerSample = (state = [], action) => {
    switch (action.type) {
      case "@addMe":
        const newstate = state.concat(action.payload)
        return state = newstate
      case "@removeAll":
        const newstateDel = state.map(element =>{
            element.delete = true
            return element
        })
        return state = newstateDel
      case "@completeMe":
        const newstateEdit = state.map(element => {
          if(element.text == action.payload){
            element.complete = true
          }
          return element
        })
        return state = newstateEdit
      default:
        return state;
    }
};