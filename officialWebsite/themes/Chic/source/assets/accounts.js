document.addEventListener('DOMContentLoaded', function () {
    const platforms = [
        { containerId: '#accounts-bilibili', accounts: [
            {name: "白鲸字幕组", startDate: "2019-07-27", description: "科技数码组负责<br>主要搬运：The Tech Chap", url: "https://space.bilibili.com/450326113/", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
            {name: "Dave2D搬运组", startDate: "2020-01-01", description: "科技数码组负责<br>主要搬运：Dave2D", url: "https://space.bilibili.com/489180728/", imageUrl: "https://s2.loli.net/2024/01/19/DFwV2xq8cBWtYv6.jpg"},
            {name: "The Verge搬运组", startDate: "2020-03-12", description: "科技数码组负责<br>主要搬运：The Verge", url: "https://space.bilibili.com/518403821", imageUrl: "https://s2.loli.net/2024/01/19/oq4MVNtsfclJvW3.jpg"},
            {name: "Mrwhosetheboss搬运", startDate: "2021-01-02", description: "科技数码组负责<br>主要搬运：Mrwhosetheboss", url: "https://space.bilibili.com/1577335301", imageUrl: "https://s2.loli.net/2024/01/19/kbGLW9Rwda6V3uO.jpg"},
            {name: "白鲸生活组", startDate: "2020-03-15", description: "英语生活组负责<br>主要搬运：Gordon Ramsay", url: "https://space.bilibili.com/520908683", imageUrl: "https://s2.loli.net/2024/01/19/CM8EQ3liH5wVLhT.jpg"},
            {name: "Vox搬运组", startDate: "2020-04-07", description: "英语生活组负责<br>主要搬运：Vox", url: "https://space.bilibili.com/531048563", imageUrl: "https://s2.loli.net/2024/01/19/bsLptJCDiyYfOq2.jpg"},
            {name: "白鲸游戏组", startDate: "2020-01-17", description: "英语游戏组负责<br>主要搬运：Markiplier", url: "https://space.bilibili.com/477296993", imageUrl: "https://s2.loli.net/2024/01/19/BnsRAGtp76QCVMi.jpg"},
            {name: "白鲸日语组", startDate: "2019-08-20", description: "日语组负责<br>主要搬运：Hikakin", url: "https://space.bilibili.com/512116441", imageUrl: "https://s2.loli.net/2024/01/19/bdHIB3J2eFpoYGT.jpg"},
            {name: "AIFans", startDate: "2019-09-01", description: "日语组协力<br>绊爱Kizuna AI中文粉丝站", url: "https://space.bilibili.com/351759799", imageUrl: "https://s2.loli.net/2024/01/19/vx72rIBLzFbMTkY.jpg"},
        ] },
        { containerId: '#accounts-jinritoutiao', accounts: [
            {name: "白鲸字幕组", startDate: "2020-03-10", description: "邀请入驻-科技数码组", url: "https://www.ixigua.com/home/3896284555258046/", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
            {name: "白鲸游戏组", startDate: "2021-01-27", description: "邀请入驻-英语游戏组", url: "https://www.ixigua.com/home/3043861589927677/", imageUrl: "https://s2.loli.net/2024/01/19/BnsRAGtp76QCVMi.jpg"},
        ] },
        { containerId: '#accounts-douyin', accounts: [
            {name: "白鲸字幕组", startDate: "2020-03-10", description: "科技数码组", url: "https://www.douyin.com/user/MS4wLjABAAAA2QxI5w005GeCajDiCJTIm8fEpksS7yA0JPlwFEaqu28", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
            {name: "白鲸游戏组", startDate: "2021-01-27", description: "英语游戏组", url: "https://www.douyin.com/user/MS4wLjABAAAAN4N2ZoGbBK649RgUFWXXyaEm4pcurNrCz7ETUFsVf_w", imageUrl: "https://s2.loli.net/2024/01/19/BnsRAGtp76QCVMi.jpg"},
        ] },
        { containerId: '#accounts-xiaohongshu', accounts: [
            {name: "白鲸游戏组", startDate: "2021-05-26", description: "邀请入驻-英语游戏组", url: "", imageUrl: "https://s2.loli.net/2024/01/19/BnsRAGtp76QCVMi.jpg"},
        ] },
        { containerId: '#accounts-zhihu', accounts: [
            {name: "白鲸字幕组", startDate: "2019", description: "字幕组唯一知乎", url: "https://www.zhihu.com/people/belugasubs", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
        ] },
        { containerId: '#accounts-weibo', accounts: [
            {name: "白鲸字幕组", startDate: "2019-07-30", description: "字幕组唯一微博", url: "https://weibo.com/belugasubs", imageUrl: "https://s2.loli.net/2024/01/17/CGeZhq1FYovxz2p.jpg"},
        ] },
        { containerId: '#accounts-wechat', accounts: [
            {name: "白鲸字幕组", startDate: "2019-07-31", description: "字幕组唯一微信公共号<br>微信扫码关注", url: "", imageUrl: "https://s2.loli.net/2024/01/18/aA754CQERrTDd8M.jpg"},
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
            <a href="${account.url}" target="_blank" id="special-link" title="我们旗下的账号">
                <img src="${account.imageUrl}" alt="${account.name}" loading="lazy">
            </a>
            <div class="case-info">
                <h4>${account.name}</h4>
                <p>${account.startDate}</p>
                <p>${account.description}</p>
            </div>
        `;
        container.appendChild(accountEl);
    });
}
