import {CounterState} from "../cubits/counter/counterState";
import BlocBuilder from "../utils/blocBuilder";
import {useContext} from "react";
import {BlocContext} from "../utils/blocProvider";

export default function HopCatcher() {
    const cubit = useContext(BlocContext);
    return (
        <BlocBuilder
            initialState={cubit.initialValue}
            stream={cubit.stateStream}
            builder={(snapshot: CounterState) => {
                if (snapshot.value % 5 === 0) {
                    alert("hope on ".concat(snapshot.value.toString()))
                }
                return <p>aa</p>;
            }}
        />
    );
}
