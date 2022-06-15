export class BlocBaseState {

    public readonly isLoading: boolean;
    public readonly error: Error;

    constructor(error: any, loading: boolean) {
        this.isLoading = loading;
        this.error = error;
    }

    static loading() {
        return new BlocBaseState(null, true);
    };
}
