console.log("hello!");

var heads = [0, 1, 2, 3, 4, 5];

function getCtx() {
  var c = document.getElementById("cnvs");
  return c.getContext("2d");
}

function drawPixel(ctx, l, r) {
  ctx.fillRect(l, r, 10, 10);
}

function drawHeads(heads) {
  var ctx = getCtx();

  for (var x = 0; x < 1000; x++) {
    drawPixel(ctx, 10 + x * 10, 10);
  }
}

function update() {
  drawHeads(heads);
}
