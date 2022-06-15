import * as rxjs from 'rxjs';

export default class BaseBloc<T> {
    //todo support for events (bloc rather than cubit)

    public subject;
    public initialValue;

    constructor(initialValue: T) {
        this.initialValue = initialValue;
        this.subject = new rxjs.BehaviorSubject<T>(initialValue);
    }

}
