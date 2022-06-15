import * as rxjs from 'rxjs';

export default class BaseCubit<T> {
    //todo extend and create bloc with event ingestion,

    public stateStream: rxjs.BehaviorSubject<T>;
    public initialValue: T;

    constructor(initialValue: T) {
        this.initialValue = initialValue;
        this.stateStream = new rxjs.BehaviorSubject<T>(initialValue);
    }

    public getCurrentState(): T {
        return this.stateStream.value;
    }

    public emitNextState(next: T): void {
        this.stateStream.next(next);
    }

}
