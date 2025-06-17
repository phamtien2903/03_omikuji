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
  //Sound
  let soundEndFlap = "0";
  const btn1 = document.getElementById("btn1");
  const omikujiText = document.getElementById("omikujiText");
  btn1.style.transition = "1s";

  btn1.addEventListener("click", function () {
    if (soundEndFlap === "1") {
      soundControl("end", "");
    }

    let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶。。"];
    let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
    let resultFontSize = ["55px", "50px", "45px", "40px", "35px", "30px"];
    let resultMaxSpeed = [10, 8, 5, 5, 5, 5];
    let resultMaxSize = [30, 20, 15, 20, 20, 20];
    let resultImage = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/leaf.png",
      "img/snowflakes.png"
    ];
    let resultSound = [
      "sound/omikuji_sound1.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound3.mp3",
      "sound/omikuji_sound4.mp3",
      "sound/omikuji_sound5.mp3",
      "sound/omikuji_sound6.mp3"
    ];

    let n = Math.floor(Math.random() * resultText.length);

    // Set nội dung text
    omikujiText.textContent = resultText[n];
    omikujiText.style.setProperty("color", resultColor[n], "important");
    omikujiText.style.setProperty("font-size", resultFontSize[n], "important");

    // Phát âm thanh
    let w_sound = resultSound[n];
    soundControl("start", w_sound);
    soundEndFlap = "1";

    // Hiệu ứng hoa rơi
    $(document).snowfall("clear");
    $(document).snowfall({
      maxSpeed: resultMaxSpeed[n],
      minSpeed: 1,
      maxSize: resultMaxSize[n],
      minSize: 1,
      image: resultImage[n],
    });

    // Hiệu ứng scroll
    ScrollReveal().reveal("#omikujiText", { duration: 1000 });
  });

  // Hàm điều khiển âm thanh (đưa ra ngoài)
  function soundControl(status, w_sound) {
    if (status === "start") {
      let music = new Audio(w_sound);
      music.currentTime = 0;
      music.play();
    } else if (status === "end") {
      music.pause();
      music.currentTime = 0;
    }
  }
});
