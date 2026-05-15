function adicionarTarefa() {
  const input = document.getElementById("input-tarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  const lista = document.getElementById("lista");

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="concluir(this)">${texto}</span>
    <button class="btn-remover" onclick="remover(this)">🗑️</button>
  `;

  lista.appendChild(li);
  input.value = "";
}

function concluir(elemento) {
  elemento.parentElement.classList.toggle("concluida");
}

function remover(elemento) {
  elemento.parentElement.remove();
}

document.getElementById("input-tarefa").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});