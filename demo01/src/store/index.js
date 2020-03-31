import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';//reducer注入
import thunk from 'redux-thunk'
import creeactSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleWare = creeactSagaMiddleware();
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))
const store = createStore(
    reducer,
    //能够使用调试工具代码
    enhancer
    )
    sagaMiddleWare.run(mySagas)
export default store;
