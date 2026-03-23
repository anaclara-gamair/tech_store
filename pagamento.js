const selectEnvio = document.getElementById('opcoes-envio');
const spanSubtotal = document.getElementById('valor-subtotal');
const spanTotal = document.getElementById('valor-total');

const valorSubtotal = parseFloat(spanSubtotal.getAttribute('data-valor')) || localStorage.getItem('td') ;

selectEnvio.addEventListener('change', function() {
    const valorFrete = parseFloat(this.value);
    const valorTotal = Number(valorSubtotal) + valorFrete;
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
    // Verifica se algum método foi escolhido antes de abrir o modal
    const metodo = document.getElementById('metodo-escolhido').innerText;
    if (!metodo) {
        alert("Selecione um método de pagamento antes de finalizar!");
        return;
    }

    const modal = document.getElementById('modal-sucesso');
    modal.classList.add('ativo');

    // Dispara a animação dos confetes
    jogarConfetes();
}

// Lógica para criar os confetes na tela
function jogarConfetes() {
    // Cores da sua paleta
    const cores = ['#8fd694', '#ffb7c5', '#fff3b0', '#4a7c59'];
    
    // Cria 70 confetes
    for (let i = 0; i < 720; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Espalha horizontalmente de forma aleatória
        confete.style.left = Math.random() * 100 + 'vw';
        
        // Pega uma cor aleatória da paleta
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        
        // Define que a animação dura entre 1.5 e 2.5 segundos
        confete.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        
        // Adiciona um leve atraso para eles não caírem todos perfeitamente alinhados
        confete.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confete);
        
        // Destrói o confete do HTML após 2.5 segundos para não pesar o navegador
        setTimeout(() => {
            confete.remove();
        }, 4500);
    }
}