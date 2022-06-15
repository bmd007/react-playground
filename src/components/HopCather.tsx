import {CounterState} from "../cubits/counter/counterState";
import StreamBuilder from "../utils/StreamBuilder";
import {Component} from "react";
import CounterCubit from "../cubits/counter/counterCubit";

class HopCatcher extends Component<{ cubit: CounterCubit }> {
    render() {
        return (
            <StreamBuilder
                initialState={this.props.cubit.initialValue}
                stream={this.props.cubit.subject}
                builder={(snapshot: CounterState) => {
                    if (snapshot.value % 5 === 0) {
                        alert("hope on ".concat(snapshot.value.toString()))
                    }
                    return null;
                }}
            />
        );
    }
}

export default HopCatcher;