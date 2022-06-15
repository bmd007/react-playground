import {useEffect, useState} from 'react';
import {CubitBaseState} from "./cubitBaseState";
import {BehaviorSubject} from "rxjs";

export default function BlocBuilder<T extends CubitBaseState>(props: {
    initialState: T,
    stream: BehaviorSubject<T>,
    builder: (snapshot: T) => JSX.Element
}) {

    const [state, setState] = useState(() => {
        return props.initialState;
    });

    useEffect(() => {
        props.stream.subscribe(value => setState(value));
        return () => {
            props.stream.unsubscribe();
        };
    }, [props.stream]);

    // useEffect(() => {
    //     console.log(state)
    // }, [state]);

    return props.builder(state)
}
