// 自动更新版权年份
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-current-year').textContent = currentYear;
}

// 页面加载完成后调用自定义函数
document.addEventListener('DOMContentLoaded', () => {
    // 初始化地图并设置中心点和缩放级别
    var map = L.map('membersMap').setView([30.5728, 104.0668], 2.3);

    // 添加地图图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 使用 fetch API 获取 CSV 数据
    // CSV 数据格式：latitude,longitude,info
    fetch('/assets/members.csv')
        .then(response => response.text()) // 将响应转换为文本
        .then(csvString => d3.csvParse(csvString)) // 使用 D3.js 解析 CSV 文本
        .then(data => {
            // 遍历解析后的数据
            data.forEach(member => {
                // 为每个成员创建地图标记
                L.marker([member.latitude, member.longitude])
                    .addTo(map) // 将标记添加到地图
                    .bindPopup(member.info); // 绑定一个弹出窗口显示信息
            });
        });

    updateCopyrightYear();
});

// Business 商务合作案例
document.addEventListener('DOMContentLoaded', function () {
    var cases = [
        { name: "翼王", startDate: "2021-01-01", description: "内容翻译出海，帮助视频脚本进行英文的本土化翻译，并交由甲方进行YouTube发布", url: "https://space.bilibili.com/475961", imageUrl: "https://s2.loli.net/2024/01/18/SlBnb6HZJo79pqs.jpg" },
        { name: "笔吧工作室", startDate: "2021-02-01", description: "内容翻译出海，帮助视频原稿进行英文的本土化翻译，并交由甲方进行YouTube发布", url: "https://space.bilibili.com/367877", imageUrl: "https://s2.loli.net/2024/01/18/f4SWlU7ijQP9qk2.jpg" },
        { name: "极客湾", startDate: "2021-02-01", description: "内容出海优化润色，帮助视频脚本进行英文的本土化优化与润色翻译，并交由甲方进行YouTube发布", url: "https://space.bilibili.com/25876945/", imageUrl: "https://s2.loli.net/2024/01/18/1Md9PmuOgHnvytx.jpg" },
    ];

    var container = document.querySelector('#business-cases-example');

    cases.forEach(function (caseItem) {
        var caseEl = document.createElement('div');
        caseEl.className = 'case';
        caseEl.innerHTML = `
            <a id="special-link" href="${caseItem.url}" target="_blank">
                <img src="${caseItem.imageUrl}" alt="${caseItem.name}">
                <div class="case-info">
                    <h3>${caseItem.name}</h3>
                    <p>${caseItem.startDate}</p>
                    <p>${caseItem.description}</p>
                </div>
            </a>
        `;
        container.appendChild(caseEl);
    });
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