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
let teamHTML = ''; // Variabile per accumulare il contenuto HTML

for (const member of teamMembers) {
  teamHTML += `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
      <div class="card text-bg-dark mb-3">
        <div class="row g-0">
          <div class="col-4">
            <img src="${member.img}" class="img-fluid rounded-start" alt="${member.name}">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title text-uppercase">${member.name}</h5>
              <p class="card-text">${member.role}</p>
              <a href="mailto:${member.email}" class="card-text">${member.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Impostiamo tutto il contenuto HTML accumulato nel container
teamContainer.innerHTML = teamHTML;



// Mostra/Nascondi il form
document.getElementById('toggle-form-btn').addEventListener('click', function() {
  const formContainer = document.getElementById('add-member-container');
  formContainer.classList.toggle('d-none');

  if (formContainer.classList.contains('d-none')) {
    this.innerHTML = 'Aggiungi Membro';
  } else {
    this.innerHTML = 'Nascondi Form';
  }
});

// pushare il  nuovo membro nell'array
