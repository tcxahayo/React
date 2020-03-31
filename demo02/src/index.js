import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import {Provider} from 'react-redux';
import store from './store';
// import TodoListUI from './TodoListUI';

const App=(
    <Provider store = {store}>
        <TodoList />
        {/* <TodoListUI /> */}
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

