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
                    <h4>${caseItem.name}</h4>
                    <p>${caseItem.startDate}</p>
                    <p>${caseItem.description}</p>
                </div>
            </a>
        `;
        container.appendChild(caseEl);
    });
});