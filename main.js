function hisobla() {
  const kilowatt = parseFloat(document.getElementById("kilowatt").value);
  let summa = 0;

  if (isNaN(kilowatt) ) {
    document.getElementById("result").innerText = "Iltimos, kVt/soatni kiriting!";
    return;
}

  if (kilowatt <= 0) {
    alert("Noto'g'ri kilowattning qiymatini kiritdingiz!");
    return;
  } else {
    if (kilowatt <= 200) {
      summa = kilowatt * 450;
    } else if (kilowatt <= 1000) {
      summa = 200 * 450 + (kilowatt - 200) * 900;
    } else if (kilowatt <= 5000) {
      summa = 200 * 450 + 800 * 900 + (kilowatt - 1000) * 1350;
    } else if (kilowatt <= 10000) {
      summa = 200 * 450 + 800 * 900 + 4000 * 1350 + (kilowatt - 5000) * 1575;
    } else {
      summa =
        200 * 450 +
        800 * 900 +
        4000 * 1350 +
        5000 * 1575 +
        (kilowatt - 10000) * 1800;
    }
  }
  document.getElementById(
    "result"
  ).innerText = ` ${kilowatt} kw elektr  uchun    ${summa.toLocaleString()}   so'm to'lashingiz kerak`;
  document.getElementById("kilowatt").value = "";
}
