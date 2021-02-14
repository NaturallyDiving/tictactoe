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
  document.getElementById(row+"_"+col).disabled = true;
  if (count % 2 == 0) {
    this.setAttribute('class', 'alive');
    board[row][col] = 1
    chekboard()
  } else {
    this.setAttribute('class', 'alive2');
    document.getElementById(this.id).disabled = true;
    board[row][col] = 2
    chekboard()
  }
  count += 1;
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
  }
  if (board[1][0] == checkVal && board[1][1] == checkVal && board[1][2] == checkVal) {
    alert(msg)
  }
  if (board[2][0] == checkVal && board[2][1] == checkVal && board[2][2] == checkVal) {
    alert(msg)
  }
  if (board[0][0] == checkVal && board[1][0] == checkVal && board[2][0] == checkVal) {
    alert(msg)
  }
  if (board[0][1] == checkVal && board[1][1] == checkVal && board[2][1] == checkVal) {
    alert(msg)
  }
  if (board[0][2] == checkVal && board[1][2] == checkVal && board[2][2] == checkVal) {
    alert(msg)
  }
  if (board[0][0] == checkVal && board[1][1] == checkVal && board[2][2] == checkVal) {
    alert(msg)
  }
  if (board[0][2] == checkVal && board[1][1] == checkVal && board[2][0] == checkVal) {
    alert(msg)
  }
}
