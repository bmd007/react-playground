import {CounterState} from "../blocs/counter/counterState";
import CounterBloc from "../blocs/counter/counterBloc";
import {Fragment} from "react";
import StreamBuilder from "../utils/StreamBuilder";


const bloc = new CounterBloc(CounterState.loading());

const HopCatcher = () => (
        <StreamBuilder
            initialState={bloc.initialValue}
            stream={ bloc.subject}
            builder={(snapshot: CounterState) => {
                if (snapshot.value % 5 === 0){
                    alert("hope on ".concat(snapshot.value.toString()))
                }
                return <p>hhhmm, waiting</p>
            }}
        />
);

export default HopCatcher;