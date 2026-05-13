// =========================================================
// 树仁书院足球队网页数据文件
// 管理员以后主要修改这个文件，不需要改 index.html
// =========================================================

// 球员数据
// photo 可以填本地图片路径，例如：images/player01.jpg
// 如果暂时没有照片，可以留空字符串 ""
const players = [
  {
    name: "段嘉昊",
    number: 1,
    position: "门将 GK",
    bio: "反应迅速，负责球队最后一道防线。",
    photo: ""
  },
  {
    name: "廖泽林",
    number: 4,
    position: "后卫 CB",
    bio: "防守稳健，擅长拦截和出球。",
    photo: ""
  },
  {
    name: "庄子一",
    number: 8,
    position: "后卫 CB",
    bio: "组织核心，负责攻防转换。",
    photo: ""
  },
  {
    name: "俞越添",
    number: 10,
    position: "前锋 FW",
    bio: "速度快，擅长突破和射门。",
    photo: ""
  },
  {
    name: "高子为",
    number: 11,
    position: "前腰 AMF",
    bio: "边路冲击力强，传中精准。",
    photo: ""
  },
  {
    name: "徐菡阳",
    number: 21,
    position: "后腰 DMF",
    bio: "覆盖面积大，负责中场屏障。",
    photo: ""
  },
  {
    name: "杨静泊",
    number: 3,
    position: "后卫 DF",
    bio: "身体对抗强，防守积极。",
    photo: ""
  },
  {
    name: "罗子奇",
    number: 7,
    position: "后腰 DMF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "冯书语",
    number: 28,
    position: "后卫 CB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "邓皞程",
    number: 2,
    position: "边后卫 RB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "尚一健",
    number: 9,
    position: "左边锋 LW",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "王愉丞",
    number: 22,
    position: "中锋 CF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "梁凯翔",
    number: 10,
    position: "右边锋 RW",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "吕佳迅",
    number: 33,
    position: "右后卫 RB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "张雨麒",
    number: 6,
    position: "左后卫 LB",
    bio: "边路爆趟选手。",
    photo: ""
  },
  {
    name: "黄文道",
    number: 24,
    position: "右边锋 RW",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "贺彦曈",
    number: 27,
    position: "右后卫 RB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "刘君扬",
    number: 25,
    position: "门将 GK",
    bio: "脚法出色，脚下有活的天赋型门将。",
    photo: ""
  },
  {
    name: "宁安",
    number: 99,
    position: "门将 GK",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "孙乐知",
    number: 15,
    position: "中后卫 CB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "马嘉瑞",
    number: 66,
    position: "右后卫 RB",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "Carlos",
    number: 19,
    position: "后腰 DMF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "郑自辉",
    number: 30,
    position: "中场 MF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "赵欣曈",
    number: 17,
    position: "左边锋 LW",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "牛豫",
    number: 8,
    position: "右边锋 RW",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "郭耀远",
    number: 66,
    position: "中场 MF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  },
  {
    name: "A.SAID",
    number: 18,
    position: "中锋 CF",
    bio: "跑位灵活，善于寻找机会。",
    photo: ""
  }
];

// 球队动态
// image 可以填本地图片路径，例如：images/news01.jpg
const news = [
  {
    date: "2026-05-01",
    title: "树仁书院足球队完成新赛季首次合练",
    content: "球队在新赛季首次训练中完成了传接球、分组对抗和体能恢复训练，队员状态良好。",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80"
  },
  {
    date: "2026-04-20",
    title: "友谊赛回顾：团队配合持续提升",
    content: "本场友谊赛中，球队在防守组织和快速反击方面表现出明显进步，展现了良好的团队精神。",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    date: "2026-04-10",
    title: "球队招新开启：欢迎热爱足球的你加入",
    content: "无论你是经验丰富的球员，还是刚开始接触足球，只要热爱团队运动，都欢迎加入我们。",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80"
  }
];
