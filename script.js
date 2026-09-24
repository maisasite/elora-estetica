// MENU MOBILE
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Fecha o menu depois de clicar em um link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// FORMULÁRIO DE AGENDAMENTO
function makeAppointment(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const treatment = document.getElementById("treatment").value;
  const date = document.getElementById("date").value;

  const message = document.getElementById("booking-message");

  message.innerHTML =
    "✓ Obrigada, <strong>" + name + "</strong>! " +
    "Sua solicitação para <strong>" + treatment + "</strong>, " +
    "no dia <strong>" + formatDate(date) + "</strong>, " +
    "foi registrada com sucesso.<br>" +
    "Este é um agendamento demonstrativo.";

  event.target.reset();
}


// FORMATA A DATA PARA DD/MM/AAAA
function formatDate(date) {
  if (!date) return "";

  const parts = date.split("-");

  return parts[2] + "/" + parts[1] + "/" + parts[0];
}


// NÃO PERMITE ESCOLHER DATAS ANTERIORES
const dateInput = document.getElementById("date");

if (dateInput) {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}


// BOTÃO FLUTUANTE "AGENDAR"
function goToBooking() {
  const booking = document.getElementById("agendamento");

  booking.scrollIntoView({
    behavior: "smooth"
  });
}


// CABEÇALHO AO ROLAR A PÁGINA
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 80) {
    header.style.position = "fixed";
    header.style.background = "rgba(48, 39, 37, 0.96)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.position = "absolute";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }
});


// ANIMAÇÃO DOS CARDS AO APARECEREM
const elements = document.querySelectorAll(
  ".treatment-card, .result-image, .professional"
);

elements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";
});


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1
  }
);


elements.forEach(element => {
  observer.observe(element);
});
