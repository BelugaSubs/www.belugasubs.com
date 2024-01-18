document.addEventListener('DOMContentLoaded', function () {
    const platforms = [
        { containerId: '#accounts-bilibili', accounts: [
            {name: "白鲸字幕组", startDate: "2019-07-27", description: "科技数码组负责<br>主要搬运：The Tech Chap", url: "https://space.bilibili.com/450326113/", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
            {name: "Dave2D搬运组", startDate: "2020-01-01", description: "科技数码组负责<br>主要搬运：Dave2D", url: "", imageUrl: ""},
            {name: "The Verge搬运组", startDate: "", description: "科技数码组负责<br>主要搬运：The Verge", url: "", imageUrl: ""},
            {name: "Mrwhosetheboss搬运", startDate: "", description: "科技数码组负责<br>主要搬运：Mrwhosetheboss", url: "", imageUrl: ""},
            {name: "白鲸生活组", startDate: "", description: "英语生活组负责<br>主要搬运：Gordon Ramsay", url: "", imageUrl: ""},
            {name: "Vox搬运组", startDate: "", description: "英语生活组负责<br>主要搬运：Vox", url: "", imageUrl: ""},
            {name: "白鲸游戏组", startDate: "", description: "英语游戏组负责<br>主要搬运：Hikakin", url: "", imageUrl: ""},
            {name: "白鲸日语组", startDate: "", description: "日语组负责<br>主要搬运：Markiplier", url: "", imageUrl: ""},
            {name: "AIFans", startDate: "", description: "", url: "", imageUrl: ""},
        ] },
        { containerId: '#accounts-jinritoutiao', accounts: [
            {name: "白鲸字幕组", startDate: "2020-03-10", description: "邀请入驻-科技数码组", url: "https://www.ixigua.com/home/3896284555258046/", imageUrl: ""},
            {name: "白鲸游戏组", startDate: "2021-01-27", description: "邀请入驻-英语游戏组", url: "https://www.ixigua.com/home/3043861589927677/", imageUrl: ""},
        ] },
        { containerId: '#accounts-douyin', accounts: [
            {name: "白鲸字幕组", startDate: "", description: "科技数码组", url: "", imageUrl: ""},
            {name: "白鲸游戏组", startDate: "", description: "英语游戏组", url: "", imageUrl: ""},
        ] },
        { containerId: '#accounts-xiaohongshu', accounts: [
            {name: "白鲸游戏组", startDate: "", description: "邀请入驻-英语游戏组", url: "", imageUrl: ""},
        ] },
        { containerId: '#accounts-zhihu', accounts: [
            {name: "白鲸字幕组", startDate: "", description: "字幕组唯一知乎", url: "", imageUrl: ""},
        ] },
        { containerId: '#accounts-weibo', accounts: [
            {name: "白鲸字幕组", startDate: "", description: "字幕组唯一微博", url: "", imageUrl: ""},
        ] },
        { containerId: '#accounts-wechat', accounts: [
            {name: "白鲸字幕组", startDate: "", description: "字幕组唯一微信公共号", url: "", imageUrl: ""},
        ] },
    ];

    platforms.forEach(platform => {
        renderAccounts(platform.containerId, platform.accounts);
    });
});

function renderAccounts(containerId, accounts) {
    var container = document.querySelector(containerId);

    accounts.forEach(function (account) {
        var accountEl = document.createElement('div');
        accountEl.className = 'case';
        accountEl.innerHTML = `
            <a href="${account.url}" target="_blank" id="special-link">
                <img src="${account.imageUrl}" alt="${account.name}">
                <div class="case-info">
                    <h4>${account.name}</h4>
                    <p>${account.startDate}</p>
                    <p>${account.description}</p>
                </div>
            </a>
        `;
        container.appendChild(accountEl);
    });
}
