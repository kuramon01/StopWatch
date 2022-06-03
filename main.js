
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime;        //スタート時間
let timeoutID;
let elapsedTime = 0;  //経過時間
let intervalID;       //過去の経過時間を記録する変数

//何度も使う
function countUp() {
  const d = new Date(Date.now() - startTime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");
  const ms = String(d.getMilliseconds()).padStart(1,"0");
  timer.textContent = `${m}:${s}.${ms}`;
  
  timeoutID = setTimeout(() => {
    countUp();
  }, 10);
}


//ボタンの状態（無効化）
function setBtnStart() {
  startBtn.disabled = false;   //押せる
  stopBtn.disabled = true;     //無効化
  resetBtn.disabled = true;    //無効化
}

function setBtnRun() {
  startBtn.disabled = true;
  stopBtn.disabled = false;    //押せる
  resetBtn.disabled = true;
}

function setBtnStop() {
  startBtn.disabled = false;   //押せる
  stopBtn.disabled = true; 
  resetBtn.disabled = false;   //押せる
}

// ページ読み込み時
setBtnStart();


// スタートボタン
function clickStart() {
  setBtnRun();
  startTime = Date.now();
  countUp();
}

// ストップボタン
function clickStop() {
  setBtnStop();
  clearTimeout(timeoutID);
  //経過時間を足して再スタートするためcountUp()にelapsedTimeを足す
  elapsedTime += Date.now() - startTime;
    //経過時間 = 現在時刻 - スタート時間
    //+=にすることで全ての経過時間を足す
}

// リセットボタン
function clickReset() {
  setBtnStart();
  timer.textContent = "00:00";  //カウンタを書き換える
  elapsedTime = 0;
}








// start.addEventListener("click", function(){

// 	})
 	
// stop.addEventListener("click", function(){

// 	})
 	
// reset.addEventListener("click", function(){

// 	})