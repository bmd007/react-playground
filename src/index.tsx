import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/Counter";
import CounterBloc from "./blocs/counter/counterBloc";
import {CounterState} from "./blocs/counter/counterState";
import HopCatcher from "./components/HopCather";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const bloc = new CounterBloc(CounterState.loading());

root.render(
    <div className="App">
      <header className="App-header">
          <Counter bloc={bloc}/>
          <line></line>
          <HopCatcher bloc={bloc}/>
      </header>
    </div>
);
