import {Component, Fragment, ReactNode} from 'react';
import {BlocBaseState} from "./blocBaseState";
import {BehaviorSubject} from "rxjs";

type StreamBuilderProperties<T extends BlocBaseState> = {
    initialState: T,
    stream: BehaviorSubject<T>,
    builder: (snapshot: T) => ReactNode
}

type StreamBuilderState<T> = {
    snapshot: T
}

export default class StreamBuilder<T extends BlocBaseState> extends Component<StreamBuilderProperties<T>, StreamBuilderState<T>> {

    componentWillMount() {
        this.state = {
            snapshot: this.props.initialState
        };
    }

    componentWillUnmount() {
        this.props.stream.unsubscribe();
    }

    componentDidMount() {
        this.props.stream.subscribe(
            data => {
                this.setState({
                    snapshot: data,
                });
            }
        );
    }

    constructor(props: StreamBuilderProperties<T>) {
        super(props);
    }

    render() {
        return this.props.builder(this.state.snapshot)
    }
}
