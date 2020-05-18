import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css'

import IndecisionApp from './components/IndecisionApp'


const App = ()=>{
    return  <IndecisionApp/>
}




ReactDOM.render(<App/>,document.getElementById('root'))