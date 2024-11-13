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

// Funzione per creare le card
function renderTeam() {
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
}

// Carica inizialmente le card
renderTeam();

// Mostra/Nascondi il form
document.getElementById('toggle-form-btn').addEventListener('click', function() {
  const formContainer = document.getElementById('add-member-container');
  formContainer.classList.toggle('d-none');

  // Modifica il testo del bottone in base alla visibilità del form
  this.innerHTML = formContainer.classList.contains('d-none') ? 'Entra a far parte del team' : 'Nascondi';
});

// Aggiungi membro al team
const myform = document.getElementById("add-member-form");
myform.addEventListener("submit", addMember);

function addMember(event) {
  event.preventDefault();
  event.stopPropagation();
  
  // Raccogli i valori dal form
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const image = document.getElementById("image-url").value;
  const email = document.getElementById("email").value;

  // Verifica che tutti i campi siano compilati
  if (!name || !role || !image || !email) {
    alert("Tutti i campi sono obbligatori!");
    return; // Esci dalla funzione se ci sono campi vuoti
  }

  // Crea un nuovo membro
  const newMember = {
    name,
    role,
    img: image,
    email,
  };

  // Aggiungi il nuovo membro all'array
  teamMembers.push(newMember);
  renderTeam(); // Rendi di nuovo visibili tutte le card aggiornate

  // Reset del form
  myform.reset();

  // Nascondi il form
  const formContainer = document.getElementById('add-member-container');
  formContainer.classList.add('d-none');

  // Modifica il testo del bottone
  document.getElementById('toggle-form-btn').innerHTML = 'Aggiungi Membro';
}