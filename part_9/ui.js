export default class UI {
  constructor(container) {
    this.container = document.querySelector(container);
  }

  addInput() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('search');
    wrapper.setAttribute('style', 'margin-bottom: 20px');
    this.container.appendChild(wrapper);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    wrapper.appendChild(input);
    return input;
  }

  addListGIF() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('list');
    this.container.appendChild(wrapper);
  }

  addItemLink(selector, link, width, height, tx, ty) {
    const container = document.querySelector(selector);
    const itemLink = document.createElement('a');
    itemLink.setAttribute('href', link);
    itemLink.setAttribute('style', `width: ${width}px; height: ${height}px; position: absolute; transform: translate3d(${tx}px, ${ty}px, 0px)`);
    container.appendChild(itemLink);
    const picWrapper = document.createElement('div');
    picWrapper.setAttribute('style', `width: ${width}px; height: ${height}px; position: relative`);
    itemLink.appendChild(picWrapper);
    return picWrapper;
  }

  addItemPicture(container, link, width, height, title) {
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', link);
    img.setAttribute('src', link);
    img.setAttribute('width', width);
    img.setAttribute('height', height);
    img.setAttribute('alt', title);
    container.appendChild(picture);
    picture.appendChild(source);
    picture.appendChild(img);
  }
};
