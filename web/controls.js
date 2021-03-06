var Controls = (function() {
  var Z_MOVE_SPEED = 10;
  var X_MOVE_SPEED = 5;

  function processKeyDown(e) {
    // TODO: make sure to move into camera direction?!
    e = e || window.event;
    if (e.keyCode == '87') {
      // up arrow
      camera.position.z += Z_MOVE_SPEED;
    } else if (e.keyCode == '83') {
      // down arrow
      camera.position.z -= Z_MOVE_SPEED;
    } else if (e.keyCode == '65') {
      // left arrow
      camera.position.x += X_MOVE_SPEED;
    } else if (e.keyCode == '68') {
      // right arrow
      camera.position.x -= X_MOVE_SPEED;
    }
  }

  return {
    processKeyDown: processKeyDown
  };
})();
