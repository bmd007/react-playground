import * as rxjs from 'rxjs';

export default class BaseCubit<T> {
    public subject;
    public initialValue;

    constructor(initialValue: T) {
        this.initialValue = initialValue;
        this.subject = new rxjs.BehaviorSubject<T>(initialValue);
    }

}
