const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let call = 0;
function init() {
  document.body.addEventListener('keydown', keyDownHandler);
  function keyDownHandler(e) {
    let keyValue = e.which;
    if (keyValue === code[call]) {
      console.log(keyValue, code[call]);
      call++;
      console.log(keyValue, code[call]);
      if (call === code.length) {
        alert("There are no easter eggs here!");
        call = 0;
      }
    }
    call = 0;
  }
}

init();
