const btnSalvar = document.getElementById("btn-salvar");

btnSalvar.addEventListener("click", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const cpf = document.querySelector("#cpf").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;
  const curso = document.querySelector("#curso").value;
  const matricula = document.querySelector("#matricula").value;
  const turno = document.querySelector("input[name='turno']:checked").value;
  const data = document.querySelector("#data").value;

  const tabela = document.querySelector("#tabela tbody");
  const criarLinha = document.createElement("tr");

  const adicionarNome = document.createElement("td");
  adicionarNome.textContent = nome;
  const adicionarCpf = document.createElement("td");
  adicionarCpf.textContent = cpf;
  const adicionarEmail = document.createElement("td");
  adicionarEmail.textContent = email;
  const adicionarTelefone = document.createElement("td");
  adicionarTelefone.textContent = telefone;
  const adicionarCurso = document.createElement("td");
  adicionarCurso.textContent = curso;
  const adicionarMatricula = document.createElement("td");
  adicionarMatricula.textContent = matricula;
  const adicionarTurno = document.createElement("td");
  adicionarTurno.textContent = turno;
  const adicionarData = document.createElement("td");
  adicionarData.textContent = data;
  const adicionarExcluir = document.createElement("td");

  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.classList.add("btn-excluir");

  btnExcluir.addEventListener("click", () => {
    tabela.removeChild(criarLinha);
  });

  adicionarExcluir.appendChild(btnExcluir);

  criarLinha.appendChild(adicionarNome);
  criarLinha.appendChild(adicionarCpf);
  criarLinha.appendChild(adicionarEmail);
  criarLinha.appendChild(adicionarTelefone);
  criarLinha.appendChild(adicionarCurso);
  criarLinha.appendChild(adicionarMatricula);
  criarLinha.appendChild(adicionarTurno);
  criarLinha.appendChild(adicionarData);
  criarLinha.appendChild(adicionarExcluir);

  tabela.appendChild(criarLinha);
});
