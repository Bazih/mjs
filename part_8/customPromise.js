class CustomPromise {
  #queue = [];
  #value = null;
  #reason = null;

  constructor(fn) {
    this.state = 'pending';
    fn(this.#resolve, this.#reject);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((_, reject) => reject(reason));
  }

  then(fn) {
    return new CustomPromise((resolve, reject) => {
      const resolved = (value) => {
        try {
          resolve(fn(value));
        } catch (e) {
          reject(e);
        }
      };

      this.#enqueue({
        resolved,
        rejected: reject,
      });
    });
  }

  catch(fn) {
    return new CustomPromise((resolve, reject) => {
      const rejected = (reason) => {
        try {
          resolve(fn(reason))
        } catch (e) {
          reject(e);
        }
      };

      this.#enqueue({
        rejected
      });
    });
  }

  #resolve = (value) => {
    if (this.state === 'pending') {
      this.#value = value;
      this.state = 'fulfilled';
      this.#finalize();
    }
  }

  #reject = (reason) => {
    if (this.state = 'pending') {
      this.#reason = reason;
      this.state = 'rejected';
      this.#finalize();
    }
  }

  #enqueue(task) {
    if (this.state === 'pending') {
      this.#queue.push(task);
    } else {
      this.#queueRunner(task);
    }
  }

  #queueRunner(task) {
    if (this.state === 'fulfilled') {
      this.#checkFunction(task.resolved)(this.#value);
    } else if (this.state === 'rejected') {
      this.#checkFunction(task.rejected)(this.#reason);
    }
  }

  #checkFunction(fn) {
    let result = () => {};

    if (typeof fn === 'function') result = fn;

    return result;
  }

  #finalize() {
    this.#queue.forEach((task) => this.#queueRunner(task));
    this.#queue = [];
  }
}

const customPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
  reject('Some error');
});

customPromise.then((data) => console.log('data: ', data)); // won't work
customPromise.catch((error) => console.log('error: ', error));

const promise = CustomPromise.resolve(2)

promise
  .then((data) => data += 5)
  .then((data) => `Number is ${data}`)
  .then((data) => console.log(data))
