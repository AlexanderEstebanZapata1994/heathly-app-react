import loginReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    loginReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    // other store enhancers if any
    )
);

export default store;