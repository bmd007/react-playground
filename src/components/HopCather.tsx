import {CounterState} from "../blocs/counter/counterState";
import StreamBuilder from "../utils/StreamBuilder";
import {Component} from "react";
import CounterBloc from "../blocs/counter/counterBloc";

class HopCatcher extends Component<{ bloc: CounterBloc }> {
    render() {
        return (
            <StreamBuilder
                initialState={this.props.bloc.initialValue}
                stream={this.props.bloc.subject}
                builder={(snapshot: CounterState) => {
                    if (snapshot.value % 5 === 0) {
                        alert("hope on ".concat(snapshot.value.toString()))
                    }
                    return <p>hhhmm, waiting</p>
                }}
            />
        );
    }
}

export default HopCatcher;