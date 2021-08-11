import { createStore } from "redux";

import rootReduser from "./rootReducer";
let store = createStore(rootReduser);

export default store;