let carrinho = []

document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".btn-comprar")
    const carrinhoLateral = document.getElementById("carrinho-lateral")
    const abrirCarrinho = document.getElementById("abrir-carrinho")
    const fecharCarrinho = document.getElementById("fechar-carrinho")
    const overlay = document.getElementById("overlay")

    // ABRIR
    abrirCarrinho.addEventListener("click", () => {
        carrinhoLateral.classList.add("ativo")
        overlay.classList.add("ativo")
    })

    // FECHAR
    fecharCarrinho.addEventListener("click", fechar)
    overlay.addEventListener("click", fechar)

    function fechar() {
        carrinhoLateral.classList.remove("ativo")
        overlay.classList.remove("ativo")
    }

    // ADICIONAR PRODUTO
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {

            const nome = botao.dataset.nome
            const preco = parseFloat(botao.dataset.preco)

            carrinho.push({ nome, preco })

            atualizarCarrinho()
        })
    })
})

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho")
    const totalSpan = document.getElementById("total")
    const contador = document.getElementById("contador")

    lista.innerHTML = ""

    let total = 0

    carrinho.forEach(item => {
        total += item.preco

        lista.innerHTML += `
            <div class="item-carrinho">
                <p>${item.nome}</p>
                <strong>R$ ${item.preco.toFixed(2)}</strong>
            </div>
        `
    })

    totalSpan.innerText = total.toFixed(2)
    contador.innerText = carrinho.length

    localStorage.setItem('td',total.toFixed(2))
}

function Pg_open(){
    const total  = localStorage.getItem('td')
    if (total){
        if (total>0){
            window.location.href="pagamento.html"
        }
    }

}