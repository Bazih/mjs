export default class CustomPromise {
  #queue = [];
  #value = null;
  #reason = null;

  constructor(fn) {
    this.state = 'pending';
    this.doResolve(fn);
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

  doResolve(fn) {
    let isDone = false;
    const self = this;
    try {
      fn(
        function(value) {
          if (isDone) return;
          isDone = true;
          self.#resolve(value);
        },
        function(reason) {
          if (isDone) return;
          isDone = true;
          self.#reject(reason);
        }
      );
    } catch (ex) {
      if (isDone) return;
      isDone = true;
      self.#reject(ex);
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
