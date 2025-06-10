"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // ===========================
  // Hiệu ứng chữ header
  // ===========================
  $("header").textillate({
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 2000,
    autoStart: true,
    in: {
      effect: "fadeInLeftBig",
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: true,
    },
  });

  // ===========================
  // Nút bấm omikuji
  // ===========================
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", function () {
    const n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        btn1.textContent = "Very Happy!";
        btn1.style.color = "red";
        btn1.style.fontSize = "40px";
        break;
      case 1:
        btn1.textContent = "Happy!";
        btn1.style.color = "orange";
        btn1.style.fontSize = "30px";
        break;
      case 2:
        btn1.textContent = "Unhappy...";
        btn1.style.color = "blue";
        btn1.style.fontSize = "20px";
        break;
    }

    // ===========================
    // Hiệu ứng hoa rơi
    // ===========================
    $(document).snowfall("clear");
    $(document).snowfall({
      maxSpeed: 5,
      minSpeed: 1,
      maxSize: 20,
      minSize: 1,
      image: "img/sakura_hanabira.png",
    });

    // ===========================
    // Hiệu ứng scroll
    // ===========================
    ScrollReveal().reveal("#btn1", { duration: 1000 });

    // ===========================
    // Popup sau 5 giây
    // ===========================
    setTimeout(function () {
      let popmsg = "いらっしゃい！おみくじ引いてって！";
      window.alert(popmsg);
    }, 5000);
  });
});
