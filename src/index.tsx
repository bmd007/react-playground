import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/Counter";
import {CounterState} from "./cubits/counter/counterState";
import HopCatcher from "./components/HopCather";
import CounterCubit from "./cubits/counter/counterCubit";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cubit = new CounterCubit(CounterState.loading());

root.render(
    <div className="App">
      <header className="App-header">
          <Counter cubit={cubit}/>
          <line></line>
          <HopCatcher cubit={cubit}/>
      </header>
    </div>
);
