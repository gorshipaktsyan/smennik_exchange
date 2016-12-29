import { applyMiddleware, createStore} from 'redux';
import { reducers } from '../reducers/indexReducer';
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger(), thunk);

export default function configureStore () {
    return createStore(reducers, composeWithDevTools(middleware));
}