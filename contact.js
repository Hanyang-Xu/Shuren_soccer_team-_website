// 球队加入联系方式
(function applyTeamContact() {
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateContact);
  } else {
    updateContact();
  }
})();
