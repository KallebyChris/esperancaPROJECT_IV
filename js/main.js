document.getElementById('botao').addEventListener('click', async () => {
  try {
    const response = await fetch('pagina.html');
    const html = await response.text();
    document.getElementById('conteudo').innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById('conteudo').innerText = 'Erro ao carregar a página.';
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.matches("form")) {
    e.preventDefault();

    const nome = e.target.querySelector("#nome");
    const email = e.target.querySelector("#email");
    const cpf = e.target.querySelector("#cpf");
    const telefone = e.target.querySelector("#telefone");

    const cpfValido = /^\d{11}$/.test(cpf.value);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const telefoneValido = /^\d{10,11}$/.test(telefone.value);

    if (!nome.value || !emailValido || !cpfValido || !telefoneValido) {
      alert("Por favor, verifique os dados do formulário.");
      return;
    }

    alert("Cadastro enviado com sucesso!");
    e.target.reset();
  }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  console.log("Menu alternado:", navLinks.classList.contains('active') ? "aberto" : "fechado");
}
