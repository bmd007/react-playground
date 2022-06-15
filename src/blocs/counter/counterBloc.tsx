import {CounterState} from "./counterState";
import BaseBloc from "../../utils/baseBloc";

export default class CounterBloc extends BaseBloc<CounterState>{

    constructor(initialValue: CounterState) {
        super(initialValue)
    }

    increment (){
        this.subject.next(this.subject.value.increase());
    };

    //the error function with deal with sending an error through the subject
    errorSimulation(){
        this.subject.error("An error simulation");
    };

}
;