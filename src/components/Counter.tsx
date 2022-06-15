import {CounterState} from "../blocs/counter/counterState";
import {Component, Fragment} from "react";
import StreamBuilder from "../utils/StreamBuilder";
import CounterBloc from "../blocs/counter/counterBloc";

class Counter extends Component<{ bloc: CounterBloc }> {
    render() {
        return (
            <Fragment>
                <button onClick={() => this.props.bloc.increment()}>+</button>
                Count:
                <StreamBuilder
                    initialState={this.props.bloc.initialValue}
                    stream={this.props.bloc.subject}
                    builder={(snapshot: CounterState) => <p>{snapshot.value}</p>}
                />
            </Fragment>
        );
    }
}

export default Counter;