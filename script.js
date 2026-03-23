// Seleciona o campo de CEP
const cepInput = document.getElementById("cep");
 
// Adiciona evento quando o usuário sai do campo
cepInput.addEventListener("blur", function () {
 
  // Remove qualquer caractere que não seja número
  let cep = cepInput.value.replace(/\D/g, '');
 
  // Valida se o CEP tem 8 dígitos
  if (cep.length !== 8) {
    alert("CEP inválido!");
    return;
  }
 
  // Faz requisição para a API ViaCEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
 
      // Verifica se o CEP não foi encontrado
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }
 
      // Preenche os campos com os dados retornados
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("estado").value = data.uf;
    })
    .catch(() => {
      alert("Erro ao buscar CEP");
    });
});

// CADASTRO OK ELE IRA MUDAR DE PÁGINA
document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault(); // impedindo o envio padrão do forms

    let inputs = document.querySelectorAll("#formCadastro input"); //seleciona o input do formulário
    let tudoPreenchido = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") { // se o input for vazio ele retorna falso
            tudoPreenchido = false;
        }
    });

    if (tudoPreenchido) {
        // se for verdade ele muda de página
        alert("Login realizado!");
        window.location.href = "home.html"; 
    } else {
        alert("Preencha todos os campos!");
    }
});

