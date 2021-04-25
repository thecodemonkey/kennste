var ITEMS = 600000;
var INFECTED = 25000;
var SIZE = 2;
var MAX_WIDTH = 500;
var MAX_HEIGHT = 500;
var ITEMS_PER_LINE = 0;
var heads = [];

function init() {
  MAX_WIDTH = window.innerWidth;
  MAX_HEIGHT = window.innerHeight;
  ITEMS_PER_LINE = Math.floor(MAX_WIDTH / (SIZE * 2));

  document.getElementById("cnvs").width = MAX_WIDTH;
  document.getElementById("cnvs").height = MAX_HEIGHT;

  console.log("widht: " + MAX_WIDTH + " Height: " + MAX_HEIGHT);

  heads = listToMatrix(new Array(ITEMS), ITEMS_PER_LINE);

  console.log("arrays " + heads.length + " items per arr: " + ITEMS_PER_LINE);
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

function getCtx() {
  var c = document.getElementById("cnvs");
  return c.getContext("2d");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawPixel(ctx, l, h) {
  var x = getRandomInt(0, 24);
  var col = x == 3 ? "#FF0000" : "#888";

  // console.log("l: " + l + " h: " + h);
  ctx.fillStyle = col;
  ctx.fillRect(l, h, SIZE, SIZE);
}

function drawHeads(heads) {
  var ctx = getCtx();

  for (var y = 0; y < heads.length; y++) {
    if (y < MAX_HEIGHT) {
      for (var x = 0; x < heads[y].length; x++) {
        drawPixel(ctx, x * 2 * SIZE, y * 2 * SIZE);
      }
    }
  }
}

function update() {
  drawHeads(heads);
}
