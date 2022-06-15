import {CounterState} from "../cubits/counter/counterState";
import {Fragment, useContext} from "react";
import BlocBuilder from "../utils/blocBuilder";
import {BlocContext} from "../utils/blocProvider";

export default function Counter() {
    const cubit = useContext(BlocContext);
    return (
        <Fragment>
            <button onClick={() => cubit.increment()}>+</button>
            Count:
            <BlocBuilder
                initialState={cubit.initialValue}
                stream={cubit.stateStream}
                builder={(snapshot: CounterState) => <p>{snapshot.value}</p>}
            />
        </Fragment>
    );
}
