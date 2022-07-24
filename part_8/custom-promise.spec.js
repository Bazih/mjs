import CustomPromise from './customPromise';

describe('CustomPromise', () => {
  it('when create promise the state is pending', () => {
    const pendingState = new CustomPromise((resolve, reject) => {});

    expect(pendingState.state).toBe('pending');
  });

  it('when a promise changed state once, irrevocably', () => {
    const fulfilled = new CustomPromise((res, rej) => {
      res(1);
      res(11);
      rej('Some error');
    });

    expect(fulfilled.state).toBe('fulfilled');
  });

  it('when a promise async and changed state once, irrevocably', () => {
    const fulfilled = new CustomPromise((res, rej) => {
      setTimeout(() => {
        res(1);
      });

      rej('Some error');
    });

    expect(fulfilled.state).toBe('rejected');
  });

  describe('Handlers in CustomPromise', () => {
    const executedPromiseResolved = new CustomPromise((res, rej) => {
      setTimeout(() => {
        res(1);
      });
    });
    const executedPromiseRejected = new CustomPromise((res, rej) => {
      setTimeout(() => {
        rej('Some error');
      }, 1000);
    });

    it('when a promise async and added new handlers to an already executed resolved promise', () => {
      return executedPromiseResolved
        .then(data => data += 4)
        .then(data => `Number is ${data}`)
        .then(data => expect(data).toBe('Number is 5'));
    });

    it('when a promise async and added new handlers to an already executed rejected promise', () => {
      return executedPromiseRejected
        .catch(error => expect(error).toMatch('Some error'));
    });
  });
  describe('Create an already fulfilled promise', () => {
    const resolved = CustomPromise.resolve('Good job');
    const rejected = CustomPromise.reject('Some error');

    it('when resolved and use handler', () => {
      return resolved.then(data => expect(data).toMatch('Good job'));
    });

    it('when rejected and use handler', () => {
      return rejected.catch(error => expect(error).toMatch('Some error'));
    });
  });
});
