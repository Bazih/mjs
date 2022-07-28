import UI from './ui.js';
import Giphy from './giphy.js';

function main() {
  const API_KEY = 'xUP020AntRuAe7cqCq8ST2UgbBuIpiqF';

  const ui = new UI('body');
  const input = ui.addInput();
  ui.addListGIF();
  const giphy = new Giphy(API_KEY);

  const onChange = (e) => {
    const result = giphy.getGifs(e.target.value);
    result.then((res) => {
      let tx = 0;
      let ty = 0;
      let ty1 = 0;
      let ty2 = 0;
      let ty3 = 0
      let index = 0;

      res.data.forEach((el) => {
        const { url, width, height, webp } = el.images.fixed_width;

        if (index > 3) {
          tx = 0;
          index = 0;
        }

        if (checkMultiplicity(index + 1, 4)) {
          const link = ui.addItemLink('.list', el.url, width, height, tx, ty3);
          ui.addItemPicture(link, webp, width, height, el.title);
          ty3 += Number(height) + 10;
        } else if (checkMultiplicity(index + 1, 3)) {
          const link = ui.addItemLink('.list', el.url, width, height, tx, ty2);
          ui.addItemPicture(link, webp, width, height, el.title);
          ty2 += Number(height) + 10;
        } else if (checkMultiplicity(index + 1, 2)) {
          const link = ui.addItemLink('.list', el.url, width, height, tx, ty1);
          ui.addItemPicture(link, webp, width, height, el.title);
          ty1 += Number(height) + 10;
        } else if (checkMultiplicity(index + 1, 1)) {
          const link = ui.addItemLink('.list', el.url, width, height, tx, ty);
          ui.addItemPicture(link, webp, width, height, el.title);
          ty += Number(height) + 10;
        }

        tx += Number(width) + 10;
        index += 1;
      });
    });
  };

  const checkMultiplicity = (a, b) => {
    return a % b === 0;
  };

  input.addEventListener('keyup', giphy.onChangeDebounce(onChange));
};

window.main = main;
