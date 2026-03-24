# 🛒 Tech Store

Um sistema de vendas online completo para e-commerce, desenvolvido com foco em oferecer uma interface amigável e uma excelente experiência para o usuário. O sistema gerencia desde a escolha dos produtos até a simulação da finalização da compra.

## 🔗 Links do Projeto

* **Acesso ao site:** [Deploy na Vercel](https://techstoreana.vercel.app/) | [Deploy no GitHub Pages](https://anaclara-gamair.github.io/tech_store/)
* **Repositório:** [Ver código fonte no GitHub](https://github.com/anaclara-gamair/tech_store/)

## 📸 Projeto

<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/38b2165b-5e7b-46f9-ab96-716918f6091d" />
<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/f3f15ee4-d60f-4dcc-8ea9-2968360faf53" />
<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/0703ded4-c136-4d3f-ba66-de17ef2e27d0" />
<img width="1918" height="899" alt="image" src="https://github.com/user-attachments/assets/b424750a-f7d4-4e9d-a3a5-d2f378a3f98a" />






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
* **CSS:** Estilização customizada, incluindo backgrounds em gradiente, animações, transições suaves (hover) e modais personalizados.
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
* **Gabriel Henrique** - [GitHub do Gabriel](https://github.com/malosghs)

---

## ⚙️ Como rodar o projeto localmente

1. Faça o clone deste repositório na sua máquina:
   ```bash
   git clone https://github.com/anaclara-gamair/tech_store.git
