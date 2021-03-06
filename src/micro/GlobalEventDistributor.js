export class GlobalEventDistributor {

    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }
    // 执行所有子项目事件
    dispatch(event) {
        this.stores.forEach((s) => {
            s.dispatch(event)
            setTimeout(() => s.dispatch({ type: 'REFRESH' }))
        });
    }
    getState() {
        let state = {};
        this.stores.forEach((s) => {
            let currentState = s.getState();
            state[currentState.namespace] = currentState
        });
        return state
    }
}