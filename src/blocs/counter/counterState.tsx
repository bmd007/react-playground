import {BlocBaseState} from "../../utils/blocBaseState";

export class CounterState extends BlocBaseState{

    public readonly value: number;

    constructor(value: number, error: any, loading: boolean) {
        super(error, loading)
        //todo validate value
        this.value = value
    }

    static loading() {
        return new CounterState(Number.MIN_VALUE, null, true);
    };

    initialize(initialNumber: number) {
        return new CounterState(initialNumber, null, false);
    };

    asError(error: any) {
        return new CounterState(this.value, error, false);
    };

    increase() {
        return new CounterState(this.value + 1, null, false);
    };
}
