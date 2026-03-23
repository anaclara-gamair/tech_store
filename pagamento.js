const selectEnvio = document.getElementById('opcoes-envio');
const spanSubtotal = document.getElementById('valor-subtotal');
const spanTotal = document.getElementById('valor-total');
let metodoEscolhido = null; 

selectEnvio.addEventListener('change', calcularValores);

function calcularValores() {
 
    const valorSubtotal = parseFloat(spanSubtotal.getAttribute('data-valor')) || parseFloat(localStorage.getItem('td')) || 0;
    const valorFrete = parseFloat(selectEnvio.value) || 0;
    
   
    let totalBruto = valorSubtotal + valorFrete;
    const areaParcelas = document.getElementById('area-parcelas');
    const infoParcela = document.getElementById('info-parcela');


    if (!metodoEscolhido) {
        spanTotal.innerText = totalBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return;
    }

    if (metodoEscolhido === "Pix" || metodoEscolhido === "Dinheiro") {
        areaParcelas.style.display = "none"; 
        
        let totalComDesconto = totalBruto * 0.95; 
        spanTotal.innerText = totalComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " (5% OFF)";
        
    } else if (metodoEscolhido === "Cartão") {
        areaParcelas.style.display = "block"; 
        
       
        spanTotal.innerText = totalBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    
        let qtdParcelas = parseInt(document.getElementById('qtd-parcelas').value) || 1;
        let valorDaParcela = totalBruto / qtdParcelas;
        
        infoParcela.innerText = `${qtdParcelas}x de ${valorDaParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}

function set_medodo_pagamento(idClicado) {
  
    if (selectEnvio.value === "0" || !selectEnvio.value) {
        alert("Por favor, selecione uma forma de envio antes de pagar!");
        return;
    }

    metodoEscolhido = idClicado;
    document.getElementById('metodo-escolhido').innerText = idClicado;

   
    let botoes = document.querySelectorAll('.check_button');
    botoes.forEach(btn => {
        btn.style.background = "#8fd694";
        btn.style.color = "#fff";
    });

 
    let button = document.getElementById(idClicado);
    button.style.background = "#ffb7c5";
    button.style.color = "#4a7c59"; 

    calcularValores();
}

function fecharModal() {
    const modal = document.getElementById('modal-sucesso');
    modal.classList.remove('ativo');

    window.location.href = "home.html"; 
    
}

function finalizar_compra(){
  
    const metodo = document.getElementById('metodo-escolhido').innerText;
    if (!metodo) {
        alert("Selecione um método de pagamento antes de finalizar!");
        return;
    }

    const modal = document.getElementById('modal-sucesso');
    modal.classList.add('ativo');

  
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