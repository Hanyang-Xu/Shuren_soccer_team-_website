// =========================================================
// 树仁书院足球队网页图片配置文件
// 管理员以后主要在这里更换首页大图和相册图片
// =========================================================

const siteImages = {
  // 首页右侧大图 / 球队大合照
  hero: {
    image: "images/team.jpg",
    caption: "树仁书院足球队合照"
  },

  // 球队相册图片
  // image 可以写本地图片路径，例如：images/training01.jpg
  // caption 是图片下方显示的文字
  // alt 是图片加载失败时的替代文字
  gallery: [
    {
      image: "images/team.jpg",
      caption: "球队大合照",
      alt: "树仁书院足球队合照"
    },
    {
      image: "images/training01.jpg",
      caption: "球队训练瞬间",
      alt: "球队训练"
    },
    {
      image: "images/match01.jpg",
      caption: "比赛现场",
      alt: "比赛现场"
    },
    {
      image: "images/field01.jpg",
      caption: "绿茵场",
      alt: "足球场"
    },
    {
      image: "images/team-spirit.jpg",
      caption: "团队精神",
      alt: "团队合照"
    }
  ]
};
