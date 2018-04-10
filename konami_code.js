const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let call = 0;
function init() {
  document.body.addEventListener('keydown', keyDownHandler);
  function keyDownHandler(e) {
    let keyValue = parseInt(e.which || e.detail);
  }
}

init();