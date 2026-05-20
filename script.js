const campoBusca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");
const mensagem = document.getElementById("mensagem");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase().trim();

  let encontrados = 0;

  cards.forEach((card) => {
    const textoCard = card.innerText.toLowerCase();

    if (textoCard.includes(termo)) {
      card.style.display = "block";
      encontrados++;
    } else {
      card.style.display = "none";
    }
  });

  if (termo === "") {
    mensagem.textContent = "Digite para filtrar os cards.";
  } else if (encontrados > 0) {
    mensagem.textContent = `${encontrados} serviço(s) encontrado(s).`;
  } else {
    mensagem.textContent = "Nenhum serviço encontrado.";
  }
});