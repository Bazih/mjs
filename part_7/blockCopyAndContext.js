const handlerContextmenu = (event) => {
  event.preventDefault();
  alert("Can't call context menu on this page");
};

document.addEventListener('contextmenu', handlerContextmenu);

const handlerCopyOrCut = (event) => {
  event.preventDefault();
  alert("Can't copy or cut text on this page");
};

document.addEventListener('copy', handlerCopyOrCut);
document.addEventListener('cut', handlerCopyOrCut);
