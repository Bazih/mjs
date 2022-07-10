function renderNestedArrays(node, list) {
  if (!node) throw new Error("First argument is not an HTML element or node");
  if (!Array.isArray(list)) throw new Error('Second argument is not array');
  let nextNode = null;
  list.forEach((element) => {
    if (typeof element === "string") {
      nextNode = addTextToLi(addLi(addUl(node)), element);
    } else {
      renderNestedArrays(nextNode, element);
    }
  });
};

function addUl(node) {
  const ul = document.createElement("ul");
  node.appendChild(ul);
  return ul;
};

function addLi(node) {
  const li = document.createElement("li");
  node.appendChild(li);
  return li;
};

function addTextToLi(node, data) {
  node.innerHTML = data;
  return node;
};

function onClickRenderer() {
  renderNestedArrays(
    document.getElementById("nestedArrays"),
    ["Item1", ["Item2", ["Item3"]]],
  );
};
