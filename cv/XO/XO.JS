//تحديد المتغيرات
let home = document.getElementById("h1");
let span = document.getElementById("span");

let door = "x";

let none = [];
//-----------------------------------------
function game(id) {
  let element = document.getElementById(id);

  if (door == "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    home.innerHTML = " O PLAY NOW";
    element.style.color = "#FFEE00";
    door = "O";
  } else if (door == "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    home.innerHTML = " X PLAY NOW";
    element.style.color = "#001AFF";
    door = "x";
  }
  if (door == "x") {
  }
  compare();
}
function compare() {
  for (i = 1; i < 10; i++) {
    none[i] = document.getElementById("iteam" + i).innerHTML;
  }
  if (none[1] == none[2] && none[2] == none[3] && none[1] != "") {
    end(1, 2, 3);
  } else if (none[4] == none[5] && none[5] == none[6] && none[4] != "") {
    end(4, 5, 6);
  } else if (none[7] == none[8] && none[8] == none[9] && none[7] != "") {
    end(7, 8, 9);
  } else if (none[1] == none[4] && none[4] == none[9] && none[4] != "") {
    end(1, 4, 9);
  } else if (none[2] == none[5] && none[5] == none[8] && none[8] != "") {
    end(2, 5, 8);
  } else if (none[3] == none[6] && none[6] == none[9] && none[9] != "") {
    end(3, 6, 9);
  } else if (none[1] == none[5] && none[5] == none[9] && none[9] != "") {
    end(1, 5, 9);
  } else if (none[3] == none[5] && none[5] == none[7] && none[7] != "") {
    end(3, 5, 7);
  }
}
function end(n1, n2, n3) {
  home.innerHTML = "Player " + none[n1] + " wins!";
  document.getElementById("iteam" + n1).style.background = "green";
  document.getElementById("iteam" + n2).style.background = "green";
  document.getElementById("iteam" + n3).style.background = "green";
}
