// 球队加入联系方式与退役球员样式
(function applyTeamContactAndStyles() {
  function applyRetiredGoldStyle() {
    const oldStyle = document.getElementById("retiredGoldStyle");
    if (oldStyle) oldStyle.remove();

    const style = document.createElement("style");
    style.id = "retiredGoldStyle";
    style.textContent = `
      .player-card-retired {
        background: linear-gradient(180deg, #2a2110 0%, #16120a 100%) !important;
        border-color: #b8860b !important;
        box-shadow: 0 16px 34px rgba(120, 84, 18, 0.28) !important;
        opacity: 1 !important;
      }
      .player-card-retired:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 18px 40px rgba(184, 134, 11, 0.34) !important;
        opacity: 1 !important;
      }
      .player-card-retired::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        background: linear-gradient(180deg, #f5c542, #8a6508) !important;
      }
      .player-card-retired .player-photo {
        background: linear-gradient(135deg, #3a2d12, #0f0c06) !important;
        color: #f5c542 !important;
        filter: none !important;
      }
      .player-card-retired .number {
        background: #b8860b !important;
        color: #fff8dc !important;
        box-shadow: 0 8px 18px rgba(184, 134, 11, 0.32) !important;
      }
      .player-card-retired .position {
        background: rgba(245, 197, 66, 0.16) !important;
        color: #f5d46b !important;
        border: 1px solid rgba(245, 197, 66, 0.42) !important;
      }
      .player-card-retired h3 {
        color: #f8d46a !important;
      }
      .player-card-retired p {
        color: #d9bd70 !important;
      }
      .status-retired {
        background: #2c220f !important;
        color: #f8d46a !important;
        border: 1px solid #b8860b !important;
        box-shadow: 0 8px 18px rgba(184, 134, 11, 0.24) !important;
      }
    `;
    document.head.appendChild(style);
  }

  function updateContact() {
    const join = document.getElementById("join");
    if (!join) return;

    const description = join.querySelector(".section-desc");
    if (description) {
      description.textContent = "欢迎热爱足球、认可团队、愿意训练和比赛的同学加入树仁书院足球队。联系人：杨静泊，联系方式：18519336017。";
    }

    const cards = join.querySelectorAll(".join-card");
    cards.forEach(card => {
      const title = card.querySelector("h3");
      const text = card.querySelector("p");
      if (title && text && title.textContent.includes("加入方式")) {
        text.textContent = "联系人：杨静泊；联系方式：18519336017。欢迎通过联系人了解球队训练、招新和加入方式。";
      }
    });
  }

  function applyUpdates() {
    applyRetiredGoldStyle();
    updateContact();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyUpdates);
  } else {
    applyUpdates();
  }

  window.addEventListener("load", applyRetiredGoldStyle);
})();
