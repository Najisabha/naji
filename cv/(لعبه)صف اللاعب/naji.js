let x1 = document.getElementById("x1");
let but = document.getElementById("but");
let names = [
  "بيلي",
  "ميسي",
  "رونالدو",
  "نيمار",
  "صلاح",
  "ماني",
  "ديبالا",
  "بنزيما",
  "كورتوا",
  "راموس",
  "فاران",
  "كيبا",
  "سواريز",
  "مارادونا",
  "بيكي",
  "اراوخو",
  "تيرشتيجن",
  "ارثر",
  "كروس",
  "كامافينجا",
  "مودريتش",
  "راكتيتش",
  "بوسكيتس",
  "مارسيلو",
];
but.addEventListener("click", function () {
  var winner = names[Math.floor(Math.random() * names.length)];
  x1.innerHTML = winner;
});
