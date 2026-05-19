// Carrega tarefas salvas ou começa com array vazio
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Mostra as tarefas na tela
function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach(function(tarefa, index) {
    const li = document.createElement("li");
    li.classList.toggle("concluida", tarefa.concluida);
    li.innerHTML = `
      <span onclick="concluir(${index})">${tarefa.texto}</span>
      <button class="btn-remover" onclick="remover(${index})">🗑️</button>
    `;
    lista.appendChild(li);
  });
}

// Adiciona tarefa
function adicionarTarefa() {
  const input = document.getElementById("input-tarefa");
  const texto = input.value.trim();
  if (texto === "") return;

  tarefas.push({ texto: texto, concluida: false });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  input.value = "";
  renderizar();
}

// Conclui tarefa
function concluir(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  renderizar();
}

// Remove tarefa
function remover(index) {
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  renderizar();
}

// Enter para adicionar
document.getElementById("input-tarefa").addEventListener("keypress", function(e) {
  if (e.key === "Enter") adicionarTarefa();
});

// Carrega ao abrir
renderizar();