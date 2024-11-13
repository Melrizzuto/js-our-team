const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.getElementById("team-cards");

// Creo le cards
teamMembers.forEach(member => {
  const memberCard = document.createElement("div");
  memberCard.className = "col-12 col-sm-6 col-md-4 col-lg-4 mb-4"; // Responsività
  memberCard.innerHTML = `
    <div class="card text-bg-dark mb-3">
      <div class="row g-0">
        <div class="col-4">
          <img src="${member.img}" class="img-fluid rounded-start" alt="${member.name}">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.role}</p>
            <a href="mailto:${member.email}" class="card-text">${member.email}</a>
          </div>
        </div>
      </div>
    </div>
  `;
  teamContainer.appendChild(memberCard);
});