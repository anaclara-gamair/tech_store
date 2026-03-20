
const selectEnvio = document.getElementById('opcoes-envio');
const spanSubtotal = document.getElementById('valor-subtotal');
const spanTotal = document.getElementById('valor-total');


const valorSubtotal = parseFloat(spanSubtotal.getAttribute('data-valor'));

selectEnvio.addEventListener('change', function() {
    const valorFrete = parseFloat(this.value);
    const valorTotal = valorSubtotal + valorFrete;
    spanTotal.innerText = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});


function set_medodo_pagamento(idClicado) {
    let botoes = document.querySelectorAll('.check_button')
    let button = document.getElementById(idClicado)

    botoes.forEach(btn => {
        btn.setAttribute("value", "#8fd694")
        btn.style.background = "#8fd694"          
    })

    if (selectEnvio.value === "0") {
        alert("Por favor, selecione uma forma de envio antes de pagar!");
        return;
    }

   
    button.value = (button.getAttribute("value") == "#8fd694") ? "#ffb7c5" : "#8fd694"
    button.setAttribute("value", button.value)

    button.style.background = button.value
    document.getElementById('metodo-escolhido').innerText = idClicado;

}
function fecharModal() {
    const modal = document.getElementById('modal-sucesso');
    modal.classList.remove('ativo');
}

function finalizar_compra(){
    const modal = document.getElementById('modal-sucesso');
    modal.classList.add('ativo');
}