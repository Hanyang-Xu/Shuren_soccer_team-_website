const seasonStats2526 = [
  { number: 1, name: "段嘉昊", starts: 1, apps: 1, goals: 0, assists: 0, minutes: 270, yellow: 0, red: 0 },
  { number: 2, name: "邓皞程", starts: 1, apps: 1, goals: 0, assists: 0, minutes: 145, yellow: 0, red: 0 },
  { number: 3, name: "杨静泊", starts: 3, apps: 4, goals: 0, assists: 0, minutes: 297, yellow: 1, red: 0 },
  { number: 4, name: "廖泽林", starts: 4, apps: 4, goals: 0, assists: 0, minutes: 319, yellow: 1, red: 0 },
  { number: 5, name: "张雨麒", starts: 2, apps: 4, goals: 0, assists: 0, minutes: 154, yellow: 0, red: 1 },
  { number: 7, name: "罗子奇", starts: 3, apps: 4, goals: 0, assists: 0, minutes: 259, yellow: 0, red: 0 },
  { number: 8, name: "庄子一", starts: 4, apps: 4, goals: 0, assists: 0, minutes: 326, yellow: 0, red: 0 },
  { number: 9, name: "尚一健", starts: 3, apps: 3, goals: 1, assists: 2, minutes: 199, yellow: 0, red: 0 },
  { number: 10, name: "梁凯翔", starts: 0, apps: 3, goals: 0, assists: 0, minutes: 135, yellow: 0, red: 0 },
  { number: 11, name: "高子为", starts: 3, apps: 3, goals: 1, assists: 0, minutes: 260, yellow: 0, red: 0 },
  { number: 15, name: "孙乐知", starts: 3, apps: 4, goals: 0, assists: 0, minutes: 252, yellow: 0, red: 0 },
  { number: 17, name: "赵欣瞳", starts: 1, apps: 1, goals: 0, assists: 0, minutes: 45, yellow: 0, red: 0 },
  { number: 18, name: "Said", starts: 0, apps: 2, goals: 0, assists: 0, minutes: 70, yellow: 0, red: 0 },
  { number: 19, name: "Carlos", starts: 4, apps: 4, goals: 0, assists: 2, minutes: 360, yellow: 0, red: 0 },
  { number: 21, name: "徐菡阳", starts: 1, apps: 1, goals: 0, assists: 0, minutes: 45, yellow: 0, red: 0 },
  { number: 22, name: "王愉丞", starts: 4, apps: 4, goals: 1, assists: 0, minutes: 270, yellow: 0, red: 0 },
  { number: 24, name: "黄文道", starts: 2, apps: 4, goals: 1, assists: 0, minutes: 173, yellow: 0, red: 0 },
  { number: 25, name: "刘君扬", starts: 1, apps: 1, goals: 0, assists: 0, minutes: 90, yellow: 0, red: 0 },
  { number: 27, name: "贺彦瞳", starts: 0, apps: 1, goals: 0, assists: 0, minutes: 34, yellow: 0, red: 0 },
  { number: 28, name: "冯书语", starts: 1, apps: 4, goals: 0, assists: 0, minutes: 128, yellow: 0, red: 0 },
  { number: 30, name: "郑自辉", starts: 0, apps: 1, goals: 0, assists: 0, minutes: 10, yellow: 0, red: 0 },
  { number: 66, name: "郭耀远", starts: 1, apps: 4, goals: 1, assists: 0, minutes: 119, yellow: 0, red: 0 },
  { number: 99, name: "宁安", starts: 0, apps: 0, goals: 0, assists: 0, minutes: 0, yellow: 0, red: 0 }
];

(function injectSeasonStats() {
  const style = document.createElement("style");
  style.textContent = `
    .season { background: linear-gradient(180deg, rgba(15,81,50,.04), rgba(245,197,66,.08)), #fff; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .season-summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 26px; }
    .season-summary-card, .leaderboard { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 20px; box-shadow: 0 10px 26px rgba(17,24,39,.06); }
    .season-summary-card strong { display: block; color: var(--primary); font-size: 34px; line-height: 1; margin-bottom: 8px; }
    .season-summary-card span, .leader-name small { color: var(--muted); font-size: 14px; font-weight: 800; }
    .leaderboards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .leaderboard h3 { display: flex; justify-content: space-between; gap: 10px; font-size: 20px; margin-bottom: 14px; }
    .leaderboard h3 span { color: var(--primary); font-size: 13px; font-weight: 900; }
    .leader-row { display: grid; grid-template-columns: 34px 1fr auto; align-items: center; gap: 12px; padding: 10px 0; border-top: 1px solid var(--border); }
    .leader-row:first-of-type { border-top: 0; }
    .rank { width: 30px; height: 30px; border-radius: 999px; display: grid; place-items: center; background: #ecfdf3; color: var(--primary); font-weight: 900; font-size: 13px; }
    .leader-name strong { display: block; font-size: 16px; }
    .leader-value { color: var(--primary); font-size: 24px; font-weight: 900; line-height: 1; }
    @media (max-width: 960px) { .season-summary { grid-template-columns: repeat(2,1fr); } .leaderboards { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 680px) { .season-summary, .leaderboards { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(style);

  const playersSection = document.getElementById("players");
  if (!playersSection || document.getElementById("season")) return;

  const nav = document.querySelector(".nav-links");
  if (nav && !nav.querySelector('a[href="#season"]')) {
    const link = document.createElement("a");
    link.href = "#season";
    link.textContent = "数据榜";
    nav.insertBefore(link, nav.querySelector('a[href="#news"]'));
  }

  const section = document.createElement("section");
  section.id = "season";
  section.className = "season";
  section.innerHTML = `<div class="container"><div class="section-head"><div><div class="section-kicker">Season Stats</div><h2 class="section-title">2526 赛季数据榜</h2></div><p class="section-desc">根据 2526 赛季统计表整理，展示球队本赛季进球、助攻、出场、时间和纪律数据。</p></div><div class="season-summary" id="seasonSummary"></div><div class="leaderboards" id="leaderboards"></div></div>`;
  playersSection.after(section);

  const totals = {
    players: seasonStats2526.length,
    goals: seasonStats2526.reduce((sum, player) => sum + player.goals, 0),
    assists: seasonStats2526.reduce((sum, player) => sum + player.assists, 0),
    minutes: seasonStats2526.reduce((sum, player) => sum + player.minutes, 0)
  };
  document.getElementById("seasonSummary").innerHTML = [["登记球员", totals.players], ["球队进球", totals.goals], ["球队助攻", totals.assists], ["总出场时间", `${totals.minutes}'`]].map(([label, value]) => `<div class="season-summary-card"><strong>${value}</strong><span>${label}</span></div>`).join("");

  const boards = [
    { title: "射手榜", key: "goals", unit: "球", filterZero: true, tie: ["assists", "minutes"] },
    { title: "助攻榜", key: "assists", unit: "助", filterZero: true, tie: ["goals", "minutes"] },
    { title: "出场时间榜", key: "minutes", unit: "'", tie: ["apps", "starts"] },
    { title: "出场榜", key: "apps", unit: "场", tie: ["starts", "minutes"] },
    { title: "黄牌榜", key: "yellow", unit: "张", filterZero: true, tie: ["minutes"] },
    { title: "红牌榜", key: "red", unit: "张", filterZero: true, tie: ["minutes"] }
  ];
  document.getElementById("leaderboards").innerHTML = boards.map(board => {
    const rows = seasonStats2526.filter(player => !board.filterZero || Number(player[board.key]) > 0).sort((a, b) => {
      const primary = Number(b[board.key]) - Number(a[board.key]);
      if (primary !== 0) return primary;
      for (const key of board.tie || []) {
        const tied = Number(b[key]) - Number(a[key]);
        if (tied !== 0) return tied;
      }
      return a.name.localeCompare(b.name, "zh-Hans-CN");
    }).slice(0, 5);
    const body = rows.length ? rows.map((player, index) => `<div class="leader-row"><div class="rank">${index + 1}</div><div class="leader-name"><strong>${player.name}</strong><small>${player.number} 号 · ${player.starts}/${player.apps}</small></div><div class="leader-value">${player[board.key]}${board.unit}</div></div>`).join("") : `<p class="section-desc">暂无记录</p>`;
    return `<article class="leaderboard"><h3>${board.title}<span>2025-2026</span></h3>${body}</article>`;
  }).join("");
})();
