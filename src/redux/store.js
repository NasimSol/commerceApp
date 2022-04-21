import { createStore } from "redux";
import rootReducers from "./reducers";
// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("buyState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("buyState");
      if (serialisedState === null) return undefined;
      //convert data to object from json format;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducers, loadFromLocalStorage());
// listen for store changes and use saveToLocalStorage to
// save them to localStorage
//getState()​  :Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

//Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;