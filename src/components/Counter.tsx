import {CounterState} from "../cubits/counter/counterState";
import {Component, Fragment} from "react";
import StreamBuilder from "../utils/StreamBuilder";
import CounterCubit from "../cubits/counter/counterCubit";

class Counter extends Component<{ cubit: CounterCubit }> {
    render() {
        return (
            <Fragment>
                <button onClick={() => this.props.cubit.increment()}>+</button>
                Count:
                <StreamBuilder
                    initialState={this.props.cubit.initialValue}
                    stream={this.props.cubit.stateStream}
                    builder={(snapshot: CounterState) => <p>{snapshot.value}</p>}
                />
            </Fragment>
        );
    }
}

export default Counter;