// =========================================================
// 树仁书院足球队网页数据文件
// 管理员以后主要修改这个文件，不需要改 index.html
// =========================================================

// 球员数据
// status: "active" 表示现役，"retired" 表示退役
// role: 用于前端筛选，可填 "门将"、"后卫"、"中场"、"前锋"
// photo 可以填本地图片路径，例如：images/player01.jpg
// 如果暂时没有照片，可以留空字符串 ""
const players = [
  {
    name: "段嘉昊",
    number: 1,
    position: "门将 GK",
    role: "门将",
    status: "active",
    bio: "反应迅速、扑救果断，是球队门线前最可靠的守护者。",
    photo: ""
  },
  {
    name: "廖泽林",
    number: 4,
    position: "后卫 CB",
    role: "后卫",
    status: "active",
    bio: "防守稳健、卡位清晰，擅长用冷静判断化解对手进攻。",
    photo: ""
  },
  {
    name: "庄子一",
    number: 8,
    position: "后卫 CB",
    role: "后卫",
    status: "active",
    bio: "出球稳定、阅读比赛能力强，是后场攻防转换的重要一环。",
    photo: ""
  },
  {
    name: "俞越添",
    number: 10,
    position: "前锋 FW",
    role: "前锋",
    status: "active",
    bio: "速度快、冲击力强，善于在关键区域制造射门机会。",
    photo: ""
  },
  {
    name: "高子为",
    number: 11,
    position: "前腰 AMF",
    role: "中场",
    status: "active",
    bio: "脚下细腻、视野开阔，负责前场串联和最后一传。",
    photo: ""
  },
  {
    name: "徐菡阳",
    number: 21,
    position: "后腰 DMF",
    role: "中场",
    status: "active",
    bio: "覆盖面积大、拼抢积极，是中场防守屏障和节奏稳定器。",
    photo: ""
  },
  {
    name: "杨静泊",
    number: 3,
    position: "后卫 DF",
    role: "后卫",
    status: "active",
    bio: "身体对抗强、防守态度坚决，能在一对一中持续给对手压力。",
    photo: ""
  },
  {
    name: "罗子奇",
    number: 7,
    position: "后腰 DMF",
    role: "中场",
    status: "active",
    bio: "跑动积极、回追及时，擅长在中场完成拦截和二点球争夺。",
    photo: ""
  },
  {
    name: "冯书语",
    number: 28,
    position: "后卫 CB",
    role: "后卫",
    status: "active",
    bio: "站位稳健、补防意识好，能够为防线提供稳定保护。",
    photo: ""
  },
  {
    name: "邓皞程",
    number: 2,
    position: "边后卫 RB",
    role: "后卫",
    status: "active",
    bio: "上下往返能力强，既能完成边路防守，也能参与进攻推进。",
    photo: ""
  },
  {
    name: "尚一健",
    number: 9,
    position: "左边锋 LW",
    role: "前锋",
    status: "active",
    bio: "边路突破犀利、敢于内切，是前场制造威胁的重要火力点。",
    photo: ""
  },
  {
    name: "王愉丞",
    number: 22,
    position: "中锋 CF",
    role: "前锋",
    status: "active",
    bio: "对抗能力强、门前嗅觉敏锐，擅长为球队争取支点和射门空间。",
    photo: ""
  },
  {
    name: "梁凯翔",
    number: 10,
    position: "右边锋 RW",
    role: "前锋",
    status: "active",
    bio: "节奏变化快、边路选择灵活，能通过突破和传中打开局面。",
    photo: ""
  },
  {
    name: "吕佳迅",
    number: 33,
    position: "右后卫 RB",
    role: "后卫",
    status: "active",
    bio: "防守专注、回追速度快，能够稳定承担右路防守任务。",
    photo: ""
  },
  {
    name: "张雨麒",
    number: 6,
    position: "左后卫 LB",
    role: "后卫",
    status: "active",
    bio: "边路爆趟选手，攻防转换速度快，能持续拉开左路空间。",
    photo: ""
  },
  {
    name: "黄文道",
    number: 24,
    position: "右边锋 RW",
    role: "前锋",
    status: "active",
    bio: "前插意识好、跑位积极，擅长在右路寻找突破和射门机会。",
    photo: ""
  },
  {
    name: "贺彦曈",
    number: 27,
    position: "右后卫 RB",
    role: "后卫",
    status: "active",
    bio: "防守执行力强、盯人认真，是边路防线上的可靠选择。",
    photo: ""
  },
  {
    name: "刘君扬",
    number: 25,
    position: "门将 GK",
    role: "门将",
    status: "active",
    bio: "脚法出色、出球自信，是脚下有活的天赋型门将。",
    photo: ""
  },
  {
    name: "宁安",
    number: 99,
    position: "门将 GK",
    role: "门将",
    status: "active",
    bio: "反应稳定、注意力集中，能在比赛中保持防线安全感。",
    photo: ""
  },
  {
    name: "孙乐知",
    number: 15,
    position: "中后卫 CB",
    role: "后卫",
    status: "active",
    bio: "正面防守强硬、争顶积极，是后场对抗中的重要力量。",
    photo: ""
  },
  {
    name: "马嘉瑞",
    number: 66,
    position: "右后卫 RB",
    role: "后卫",
    status: "active",
    bio: "边路覆盖能力强、传跑配合积极，能为右路提供攻防宽度。",
    photo: ""
  },
  {
    name: "Carlos",
    number: 19,
    position: "后腰 DMF",
    role: "中场",
    status: "active",
    bio: "身体素质出色、拦截范围大，能在中场提供硬度和保护。",
    photo: ""
  },
  {
    name: "郑自辉",
    number: 30,
    position: "中场 MF",
    role: "中场",
    status: "active",
    bio: "传球稳健、跑动勤勉，善于在中场连接攻防两端。",
    photo: ""
  },
  {
    name: "赵欣曈",
    number: 17,
    position: "左边锋 LW",
    role: "前锋",
    status: "active",
    bio: "启动速度快、边路冲击直接，擅长利用空间完成推进。",
    photo: ""
  },
  {
    name: "牛豫",
    number: 8,
    position: "右边锋 RW",
    role: "前锋",
    status: "active",
    bio: "脚下灵活、进攻欲望强，能够在右路制造连续威胁。",
    photo: ""
  },
  {
    name: "郭耀远",
    number: 66,
    position: "中场 MF",
    role: "中场",
    status: "active",
    bio: "跑动覆盖积极、对抗不怯场，是中场轮转中的重要拼图。",
    photo: ""
  },
  {
    name: "A.SAID",
    number: 18,
    position: "中锋 CF",
    role: "前锋",
    status: "active",
    bio: "冲击力强、射门果断，能够在禁区附近创造直接威胁。",
    photo: ""
  }
];

// 球队动态
// image 可以填本地图片路径，例如：images/news01.jpg
const news = [
  {
    date: "2026-05-01",
    title: "树仁书院足球队持续备战新赛季",
    content: "球队延续每周三、周六的固定训练节奏，在松禾足球场进行传接球、分组对抗和体能训练。球队氛围紧密，目标明确：一年比一年更强，向冠军发起冲击。",
    image: "images/group_photo_2025.jpg"
  },
  {
    date: "2025-12-31",
    title: "兄弟情球队，不止于胜负",
    content: "从训练到比赛，从场上拼抢到场下相聚，树仁书院足球队始终重视团队感情。这里不仅是一支球队，也是彼此支持、共同成长的兄弟团队。",
    image: "images/group_photo_2025_1.jpg"
  },
  {
    date: "2025-09-01",
    title: "欢迎热爱足球的同学加入",
    content: "无论你是经验丰富的球员，还是希望通过训练提升自己的新人，只要热爱足球、愿意为团队付出，都欢迎来到松禾足球场和我们一起训练。",
    image: "images/group_photo_2025_2.jpg"
  }
];
