// 自动更新版权年份
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-current-year').textContent = currentYear;
}

// 页面加载完成后调用自定义函数
document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
});

// 自定义console
console.clear();
console.log(
    '%c由ZL Asica制作搭建与运行\nBuilt and Operated by ZL Asica',
    'background:#fff;color:#000000'
);
console.log(getCurrentDate());

function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
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
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + hours + seperator2 + minutes +
        seperator2 + seconds;
    return currentdate;
}