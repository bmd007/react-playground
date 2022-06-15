import {CubitBaseState} from "../../utils/cubitBaseState";

export class CounterState extends CubitBaseState{

    public readonly value: number;

    constructor(value: number, error: any, loading: boolean) {
        super(error, loading)
        //todo validate value
        this.value = value
    }

    static loading() {
        return new CounterState(1, null, true);
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
