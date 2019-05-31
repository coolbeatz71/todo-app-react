import store from '../../../src/redux/store';

describe('redux-store', () => {
  it('should return the initial state', () => {
    expect(store.getState()).toBeDefined();
  });
});
