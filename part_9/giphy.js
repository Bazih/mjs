export default class Giphy {
  constructor(key) {
    this.cache = {};
    this.key = key;
  }

  onChangeDebounce = (cb) => this.#debounce((q) => cb(q));

  getGifs = async (q) => {
    if (this.cache[q]) {
      return await this.cache[q];
    }

    const response = await fetch(this.setUrl(q))
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
    
    this.cache = { ...this.cache, [q]: response };
    return response;
  }

  #debounce(fn, timeout = 1000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, timeout);
    };
  }

  setUrl(q) {
    return `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${this.key}`;
  }
}
