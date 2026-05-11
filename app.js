//alert("테스트");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1"); //제목

//1~6까지 랜덤 숫자
const random1 = Math.floor(Math.random() * 6) + 1;
const random2 = Math.floor(Math.random() * 6) + 1;
//console.log(random1);

//img1.src = "images/dice" + random1 + ".png";
img1.src = `images/dice${random1}.png`;
img2.src = `images/dice${random2}.png`;

if (random1 > random2) {
  // 플레이어1 이김
  h1.textContent = "🚀Player1 Wins";
} else if (random2 > random1) {
  // 플레이어2 이김
  h1.textContent = "Player2 Wins🚀";
} else {
  //비김
  h1.textContent = "🚀Draw!🚀";
}
