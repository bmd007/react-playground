import {CounterState} from "./counterState";
import BaseCubit from "../../utils/baseCubit";

export default class CounterCubit extends BaseCubit<CounterState>{

    constructor(initialValue: CounterState) {
        super(initialValue)
    }

    increment() {
        this.emitNextState(this.getCurrentState().increase());
    };
};