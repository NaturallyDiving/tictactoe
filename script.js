var rows = 3;
var cols = 3;
var count = 0;
var board = new Array(rows);

function CreateBoard() {
  var world = document.getElementById("board");
  var table = document.createElement("table");
  table.setAttribute("id", "worldgrid");
  for (var i = 0; i < rows; i += 1) {
    var r = document.createElement("tr")
    for (var j = 0; j < cols; j += 1) {
      var c = document.createElement("td")
      c.setAttribute('id', i + '_' + j);
      c.setAttribute('class', 'dead');
      c.addEventListener('click', cellClick);
      r.appendChild(c)
    }
    table.appendChild(r)
  }
  world.appendChild(table)
}

function cellClick() {
  let loc = this.id.split("_");
  let row = Number(loc[0]);
  let col = Number(loc[1]);
  if (board[row][col] != undefined) {
    alert("No... L")
    return;
  }
  if (count % 2 == 0) {
    this.innerHTML = '<i class="fab fa-xbox"></i>'
    this.click = false;
    board[row][col] = 1
    chekboard()
  var newCell = randomCell()
  var newThis = document.getElementById(newCell[0]+"_"+newCell[1])
    newThis.innerHTML = '<i class="fab fa-playstation"></i>'
    newThis.click = false
    board[newCell[0]][newCell[1]] = 2
    chekboard()
  }
  count += 2;
  console.log(board)
}
window.onload = () => {
  CreateBoard();
  crerays();
}

function crerays() {
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(rows)
  }
}

function chekboard() {
  if (count % 2 == 0) {
    var msg = "player 1 won"
    var checkVal = 1
  } else {
    var checkVal = 2
    var msg = "player 2 won"
  }
  if (board[0][0] == checkVal && board[0][1] == checkVal && board[0][2] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[1][0] == checkVal && board[1][1] == checkVal && board[1][2] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[2][0] == checkVal && board[2][1] == checkVal && board[2][2] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[0][0] == checkVal && board[1][0] == checkVal && board[2][0] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[0][1] == checkVal && board[1][1] == checkVal && board[2][1] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[0][2] == checkVal && board[1][2] == checkVal && board[2][2] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[0][0] == checkVal && board[1][1] == checkVal && board[2][2] == checkVal) {
    alert(msg)
    window.location.reload()
  }
  if (board[0][2] == checkVal && board[1][1] == checkVal && board[2][0] == checkVal) {
    alert(msg)
    window.location.reload()
  }
}

function randomCell() {
  var x = Math.floor(Math.random() * 3)
  var y = Math.floor(Math.random() * 3)
  while (board[x][y] != undefined) {
    var x = Math.floor(Math.random() * 3)
    var y = Math.floor(Math.random() * 3)

  }
  return [x, y]
}
