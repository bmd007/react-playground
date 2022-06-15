import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/counter";
import {CounterState} from "./cubits/counter/counterState";
import HopCatcher from "./components/hopCather";
import CounterCubit from "./cubits/counter/counterCubit";
import BlocProvider from "./utils/blocProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <div className="App">
        <header>
            <title>just some title</title>
            <p>some context less tags in header, not managed by cubit/bloc</p>
        </header>
        <body className="App-header">
        <BlocProvider create={new CounterCubit(CounterState.loading())}
                      child={
                          <div>
                              <Counter/>
                              <HopCatcher/>
                          </div>
                      }/>
        </body>
    </div>
);
