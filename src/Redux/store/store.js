import {applyMiddleware, combineReducers, createStore} from "redux";

import messagePostReducer from "../messagePostReducer";
import postCreatReducer from "../postCreatReducer";
import usersReducer from "../usersReducer";
import authReducer from "../authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "../appReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    post:postCreatReducer,
    dialogsMessage:messagePostReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
})

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
export default store