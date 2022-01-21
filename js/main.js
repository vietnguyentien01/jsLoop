/* In số nguyên dương lẻ / chẵn nhỏ hơn 100 */

function inSoChanLe() {
  var num = "";
  for (var i = 0; i < 100; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}
inSoChanLe();

function inSoChanLe2() {
  var num = "";
  var i = 0;
  while (i < 100) {
    if (i % 2) {
      console.log(i);
    }
    i++;
  }
}
inSoChanLe2();

/* Số chia hết cho 3 */

function chiaHetCho3() {
  var content = "";
  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      content += i + " là số chia hết cho 3 \n";
    }
  }
  console.log(content);
}
chiaHetCho3();

function chiaHetCho3() {
  var content = "";
  var i = 0;
  while (i < 1000) {
    if (i % 3 == 0) {
      content += i + " là số chia hết cho 3 \n";
    }
    i++;
  }
  console.log(content);
}
chiaHetCho3();

/* Tìm số nguyên dương nhỏ nhất */

function soNguyenDuongNhoNhat() {
  var n = Number(document.getElementById("txtNum1").value);
  var x = Number(document.getElementById("txtNum2").value);
  var T = 1;
  var S = 0;
  var i = 1;
  while (i <= n) {
    T *= x;
    S += T;
    i++;
  }
  document.getElementById("result").innerHTML = S;
}

document.getElementById("btnCalc").onclick = soNguyenDuongNhoNhat;

/* Tính giai thừa */

function tinhGiaiThua() {
  var n = Number(document.getElementById("txtNum3").value);
  var content = 1;
  for (var i = 1; i <= n; i++) {
    content *= i;
  }
  document.getElementById("result2").innerHTML = content;
}

document.getElementById("btnCalc2").onclick = tinhGiaiThua;

/* Thay đổi màu các thẻ div */

function thayDoiMauDiv() {
  var divs = document.querySelectorAll(".changeDiv");
  for (var i = 0; i < divs.length; i++) {
    if ((i + 1) % 2 == 0) {
      divs[i].style.backgroundColor = "red";
      divs[i].style.marginBottom = "5px";
    } else {
      divs[i].style.backgroundColor = "blue";
      divs[i].style.marginBottom = "5px";
    }
  }
}
document.getElementById("btnCalc3").onclick = thayDoiMauDiv;

/* In các số nguyên từ 1 đến giá trị của ô input */

function inSoNguyen() {
  var num = parseInt(document.getElementById("txtNum4").value);
  var content = "";
  for (var i = 0; i <= num; i++) {
    content += i + "<br/>";
  }
  document.getElementById("result3").innerHTML = content;
}

document.getElementById("btnCalc4").onclick = inSoNguyen;
