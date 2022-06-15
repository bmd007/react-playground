import {CounterState} from "../blocs/counter/counterState";
import CounterBloc from "../blocs/counter/counterBloc";
import {Fragment} from "react";
import StreamBuilder from "../utils/StreamBuilder";


const bloc = new CounterBloc(CounterState.loading());

const Counter = () => (
    <Fragment>
        <button onClick={() => bloc.increment()}>+</button>
        Count:
        <StreamBuilder
            initialState={bloc.initialValue}
            stream={ bloc.subject}
            builder={(snapshot: CounterState) => <p>{snapshot.value}</p>}
        />
    </Fragment>
);

export default Counter;