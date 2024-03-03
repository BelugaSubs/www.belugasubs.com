// Business 商务合作案例
document.addEventListener("DOMContentLoaded", function () {
  var cases = [
    {
      name: "翼王",
      startDate: "2020-05",
      description: "提供英文脚本本土化翻译，助力YouTube平台发布。",
      url: "https://space.bilibili.com/475961",
      imageUrl: "https://s2.loli.net/2024/01/18/SlBnb6HZJo79pqs.jpg",
    },
    {
      name: "笔吧工作室",
      startDate: "2021-01",
      description: "协助视频脚本英文翻译与本土化，确保内容符合国际观众的口味。",
      url: "https://space.bilibili.com/367877",
      imageUrl: "https://s2.loli.net/2024/01/18/f4SWlU7ijQP9qk2.jpg",
    },
    {
      name: "极客湾",
      startDate: "2021-02",
      description: "润色与优化英文脚本，强化其国际传播效果。",
      url: "https://space.bilibili.com/25876945/",
      imageUrl: "https://s2.loli.net/2024/01/18/1Md9PmuOgHnvytx.jpg",
    },
  ];

  var container = document.querySelector("#business-cases-example");

  cases.forEach(function (caseItem) {
    var caseEl = document.createElement("div");
    caseEl.className = "case";
    caseEl.innerHTML = `
            <a id="special-link" href="${caseItem.url}" target="_blank" title="我们旗下的账号">
                <img src="${caseItem.imageUrl}" alt="${caseItem.name}" loading="lazy">
            </a>
            <div class="case-info">
                <h4>${caseItem.name}</h4>
                <p>${caseItem.startDate}</p>
                <p>${caseItem.description}</p>
            </div>
            
        `;
    container.appendChild(caseEl);
  });
});
