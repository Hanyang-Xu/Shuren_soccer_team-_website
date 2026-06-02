// =========================================================
// 树仁书院足球队网页图片配置文件
// 管理员以后主要在这里更换首页大图和相册图片
// =========================================================

const siteImages = {
  hero: {
    image: "images/group_photo_2026.jpg",
    caption: "2026 年南方科技大学第十届“树说杯”足球赛合照"
  },
  gallery: [
    { image: "images/group_photo_2026.jpg", caption: "2026 年书院杯球队合照", alt: "2026 年树仁书院足球队书院杯合照" },
    { image: "images/group_photo_2023.jpg", caption: "2023 年球队合照", alt: "2023 年树仁书院足球队合照" },
    { image: "images/group_photo_2023_2.jpg", caption: "2023 年球队照片", alt: "2023 年球队照片" },
    { image: "images/group_photo_2024.jpg", caption: "2024 年球队合照", alt: "2024 年树仁书院足球队合照" },
    { image: "images/group_photo_2025.jpg", caption: "2025 年球队合照", alt: "2025 年树仁书院足球队合照" },
    { image: "images/group_photo_2025_1.jpg", caption: "2025 年球队瞬间", alt: "2025 年球队照片" },
    { image: "images/group_photo_2025_2.jpg", caption: "2025 年球队照片", alt: "2025 年球队照片" }
  ]
};

(function loadExtraScripts() {
  ["season.js?v=20260602", "contact.js?v=20260603"].forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  });
})();
