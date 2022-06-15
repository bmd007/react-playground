import {CounterState} from "./counterState";
import BaseCubit from "../../utils/baseCubit";

export default class CounterCubit extends BaseCubit<CounterState>{

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