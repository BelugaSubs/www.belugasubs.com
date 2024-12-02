// 页面加载完成后调用自定义函数
document.addEventListener("DOMContentLoaded", () => {
  // 初始化地图并设置中心点和缩放级别
  var map = L.map("membersMap").setView([30.5728, 104.0668], 2.3);

  // 添加地图图层
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // 使用 fetch API 获取 CSV 数据
  // CSV 数据格式：latitude,longitude,info
  fetch("/assets/members.csv")
    .then((response) => response.text()) // 将响应转换为文本
    .then((csvString) => d3.csvParse(csvString)) // 使用 D3.js 解析 CSV 文本
    .then((data) => {
      // 遍历解析后的数据
      data.forEach((member) => {
        // 为每个成员创建地图标记
        L.marker([member.latitude, member.longitude])
          .addTo(map) // 将标记添加到地图
          .bindPopup(member.info); // 绑定一个弹出窗口显示信息
      });
    });
});
