# 🛒 Tech Store

Um sistema de vendas online completo para e-commerce, desenvolvido com foco em oferecer uma interface amigável e uma excelente experiência para o usuário. O sistema gerencia desde a escolha dos produtos até a simulação da finalização da compra.

## 🔗 Links do Projeto

* **Acesso ao site:** [Deploy na Vercel](https://techstoreana.vercel.app/) | [Deploy no GitHub Pages](https://anaclara-gamair.github.io/tech_store/)
* **Repositório:** [Ver código fonte no GitHub](https://github.com/anaclara-gamair/tech_store/)

## 📸 Projeto

![Banner da Tech Store](./IMG/2.jpg)

---

## 🚀 Funcionalidades e Conteúdo

* **Carrinho de Compras Dinâmico:** Os produtos são adicionados a um carrinho lateral interativo, com soma automática de valores e armazenamento temporário utilizando `LocalStorage`.
* **Cadastro e Busca de CEP Automática:** Formulário de cadastro de clientes com integração à **API ViaCEP**. Ao digitar o CEP, os dados de logradouro, bairro, cidade e estado são preenchidos automaticamente.
* **Página de Planos (Pricing):** Cards interativos oferecendo diferentes níveis de benefícios de frete (Básico, Premium e Black). A interação conta com animações de confetes e alertas personalizados indicando novidades futuras.
* **Dúvidas Frequentes (FAQs):** Seção informativa detalhando opções de entrega (retirada, padrão e expressa), métodos de pagamento (cartão, PIX, dinheiro) e políticas de garantia.
* **Formulário de Contato:** Área dedicada ao atendimento ao cliente, pronta para receber nome, e-mail, assunto e mensagem.
* **Validação de Dados:** O sistema impede o envio de formulários de cadastro se houver campos em branco.

---

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

* **HTML5:** Estruturação semântica das páginas.
* **CSS3:** Estilização customizada, incluindo backgrounds em gradiente, animações, transições suaves (hover) e modais personalizados.
* **JavaScript (Vanilla):** Manipulação da DOM, regras de negócio do carrinho de compras e requisições assíncronas (Fetch API).
* **Bootstrap 5:** Framework utilizado para responsividade (grids), navegação e componentes visuais rápidos.
* **Bootstrap Icons:** Biblioteca para os ícones utilizados na interface.
* **API ViaCEP:** Consumo de API RESTful externa para consulta de endereços.
* **Bibliotecas Externas:** * `canvas-confetti`: Para efeitos visuais de celebração.
  * `SweetAlert2`: Para pop-ups e modais de aviso estilizados e modernos.

---

## 👥 Criadores

Desenvolvido com muita dedicação por:

* **Ana Gamair** - [GitHub da Ana](https://github.com/anaclara-gamair)
* **Gabriel Henrique** - [GitHub do Gabriel](https://github.com/malusghs)

---

## ⚙️ Como rodar o projeto localmente

1. Faça o clone deste repositório na sua máquina:
   ```bash
   git clone https://github.com/anaclara-gamair/tech_store.git
