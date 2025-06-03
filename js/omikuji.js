window.addEventListener( "DOMContentLoaded" , function(){
    const popMessager ="いらっしゃい！おみくじ引いてって！";
    this.window.alert(popMessager);
})
const btn1 = document.getElementById("btn1");     // [A]
btn1.addEventListener("click",                    // [B]
  function() {                                    // [C]
    let n = Math.floor(Math.random() * 3);        // [D]

    switch (n) {
      case 0:
        btn1.textContent = "Very Happy!";         // [E]
        btn1.style.color = "#ff0000";             // [F]
        break;

      case 1:
        btn1.textContent = "Happy!";
        btn1.style.color = "#0000ff";
        break;

      case 2:
        btn1.textContent = "UnHappy...";
        btn1.style.color = "#261e1c";
        break;
    }
  },
  false
);
