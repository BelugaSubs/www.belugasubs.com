// 自动更新版权年份
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyright-current-year").textContent =
    new Date().getFullYear();
});

// 自定义console
console.clear();
console.log(`
  ______ _ _           
|__ / | / \\ ___(_) ___ __ _
  / /| | / _ \\ / __| |/ __/ _\` |
  / /_| |___ / ___ \\\\__ \\ | (_| (_| |
/____|_____| /_/ \\_\\___/_|\\___\\__,_|

由ZL Asica 制作搭建与运行
Built and Operated by ZL Asica
访问我的网站/ Visit my website:
https://www.zla.pub

${getCurrentDate()}
`);

function getCurrentDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    hours +
    seperator2 +
    minutes +
    seperator2 +
    seconds;
  return currentdate;
}
