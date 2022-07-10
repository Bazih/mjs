function changeDataInNode(node, obj) {
  node.querySelectorAll("[data-field]").forEach((element) => {
    if (obj[element.dataset.field]) {
      return element.textContent = obj[element.dataset.field];
    }
    throw new Error(`Object property "${element.dataset.field}" not found`);
  });
};

function onClickChange() {
  changeDataInNode(
    document.getElementById("item1"),
    {
      title: 'Hello world',
      description: 'The first program',
    },
  );
};
