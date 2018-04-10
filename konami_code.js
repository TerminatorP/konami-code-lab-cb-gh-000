const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let call = 0;
function init() {
  document.body.addEventListener('keydown', keyDownHandler);
  function keyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[call]) {
      console.log(call)
      call++;
      if (call === code.length) {
        alert("Hurray!");
        call = 0;
      }
    }
  }
}

init();
