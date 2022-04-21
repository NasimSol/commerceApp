import handleCart from "./handleCart";

import { combineReducers } from "redux";

const rootReducers= combineReducers({
    handleCart:handleCart
})
export default rootReducers;
