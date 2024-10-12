function hisobla() {
  const kilowatt = parseFloat(document.getElementById("kilowatt").value);
  let summa = 0;

  if (isNaN(kilowatt)) {
      document.getElementById("result").innerText = "Iltimos, kVt/soatni kiriting!";
      return;
  }

  if (kilowatt <= 0) {
      alert("Noto'g'ri kilowattning qiymatini kiritdingiz!");
      return;
  }

  if (kilowatt <= 200) {
      summa = kilowatt * 225;
  } else if (kilowatt <= 1000) {
      summa = 200 * 225 + (kilowatt - 200) * 450;
  } else if (kilowatt <= 5000) {
      summa = 200 * 225 + 800 * 450 + (kilowatt - 1000) * 675;
  } else if (kilowatt <= 10000) {
      summa = 200 * 225 + 800 * 450 + 4000 * 675 + (kilowatt - 5000) * 787.5;
  } else {
      summa = 200 * 225 + 800 * 450 + 4000 * 675 + 5000 * 787.5 + (kilowatt - 10000) * 900;
  }

  document.getElementById("result").innerText = `${kilowatt} kVt uchun ${summa.toLocaleString()} so'm to'lashingiz kerak.`;
  document.getElementById("kilowatt").value = "";
}
