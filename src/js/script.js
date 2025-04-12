const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Adiciona evento de clique a cada botão de aba
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tab = button.getAttribute("data-tab");

    // Remover classe ativa de todos os botões e painéis
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove("active"));

    // Ativar o botão e o painel selecionado
    button.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function showTab(id) {
    tabPanels.forEach(panel => panel.classList.remove("active"));
    tabButtons.forEach(btn => btn.classList.remove("active"));

    const targetPanel = document.getElementById(id);
    const targetBtn = document.querySelector(`.tab-btn[data-tab="${id}"]`);

    if (targetPanel) targetPanel.classList.add("active");
    if (targetBtn) targetBtn.classList.add("active");
  }

  // Clique nas abas superiores
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");
      showTab(tab);
    });
  });

  // Botões de navegação
  const steps = ["dados-pessoais", "documentos", "dados-complementares", "revisar-dados"];

  steps.forEach((step, index) => {
    const proximo = document.getElementById(`proximo${index + 1}`);
    const anterior = document.getElementById(`anterior${index}`);

    if (proximo) {
      proximo.addEventListener("click", () => {
        if (index + 1 < steps.length) {
          showTab(steps[index + 1]);
        }
      });
    }

    if (anterior) {
      anterior.addEventListener("click", () => {
        if (index > 0) {
          showTab(steps[index - 1]);
        }
      });
    }
  });
});

function alinharCampo(input) {
  const container = input.parentElement;
  container.classList.add('alinhado');
}

function preencherDadosRevisao() {
  // Preenchendo os campos com os valores inseridos nas abas anteriores
  document.getElementById('nomeCompleto').value = document.getElementById('nome').value || '';
  document.getElementById('nacionalidade').value = 'BRASIL'; // Nacionalidade fixa para o Brasil
  document.getElementById('dataNascimentoRevisao').value = document.getElementById('dataNascimento').value || '';
  document.getElementById('sexo').value = document.getElementById('sexo').value || '';
  document.getElementById('naturalidade').value = document.getElementById('naturalidade').value || '';
  document.getElementById('filiacao').value = document.getElementById('filiacao').value || '';
}

// Chamar a função preencherDadosRevisao quando a aba de Revisão for ativada
document.querySelectorAll('.tab-buttons input').forEach(function(tab) {
  tab.addEventListener('change', function() {
      if (document.getElementById('tab4').checked) {  // Verifica se a aba de Revisão foi ativada
          preencherDadosRevisao();
      }
  });
});