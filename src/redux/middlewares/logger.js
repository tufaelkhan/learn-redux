
const logger = (store) => (next) => (action) =>{
    const currentState = store.getState();
    console.log("currentState =>", currentState);
    console.log("Action dispatched =>", action);
    next(action)
    console.log("updated State =>", store.getState());
}

export default logger;