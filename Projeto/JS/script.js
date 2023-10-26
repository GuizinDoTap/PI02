// Get elements
const registerTab = document.getElementById("registerTab");
const loginTab = document.getElementById("loginTab");
const addItemTab = document.getElementById("addItemTab");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const addItemForm = document.getElementById("addItemForm");

// Event listeners to switch between tabs
registerTab.addEventListener("click", () => showForm(registerForm));
loginTab.addEventListener("click", () => showForm(loginForm));
addItemTab.addEventListener("click", () => showForm(addItemForm));

function showForm(formToShow) {
    // Hide all forms
    registerForm.classList.remove("show");
    loginForm.classList.remove("show");
    addItemForm.classList.remove("show");

    // Show the selected form
    formToShow.classList.add("show");
}

// Event listener for registration form submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your registration logic here
    alert("Registro enviado com sucesso!"); // Exemplo: mostrar um alerta
});

// Event listener for login form submission
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your login logic here
    alert("Login enviado com sucesso!"); // Exemplo: mostrar um alerta
});

// Event listener for add item form submission
const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your item creation logic here
    alert("Item adicionado com sucesso!"); // Exemplo: mostrar um alerta
});

const produtosRegistrados = [
    {
        nomeProduto: "Camiseta",
        descricaoProduto: "Camiseta em bom estado",
        tamanhoProduto: "M",
        imagemProduto: "imagem1.jpg",
        nomeUsuario: "João",
        enderecoUsuario: "Rua ABC, 123",
        numeroCelularUsuario: "(11) 9876-5432"
    },
    {
        nomeProduto: "Calça Jeans",
        descricaoProduto: "Calça jeans nova",
        tamanhoProduto: "L",
        imagemProduto: "imagem2.jpg",
        nomeUsuario: "Maria",
        enderecoUsuario: "Avenida XYZ, 456",
        numeroCelularUsuario: "(11) 9876-1234"
    }
];

// Função para exibir produtos registrados na página
function exibirProdutosRegistrados() {
    const productList = document.getElementById("productList");

    produtosRegistrados.forEach((produto) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${produto.nomeProduto}</h3>
            <p>${produto.descricaoProduto}</p>
            <p>Tamanho: ${produto.tamanhoProduto}</p>
            <img src="${produto.imagemProduto}" alt="Imagem do Produto">
            <h4>Informações do Usuário:</h4>
            <p>Nome: ${produto.nomeUsuario}</p>
            <p>Endereço: ${produto.enderecoUsuario}</p>
            <p>Número de Celular: ${produto.numeroCelularUsuario}</p>
        `;

        productList.appendChild(listItem);
    });
}

// Chame a função para exibir produtos registrados quando a página carregar
window.addEventListener("load", exibirProdutosRegistrados);

// Simulação de informações de usuário (substitua por dados reais)
const usuarioSimulado = {
    email: "usuario@example.com",
    senha: "senha123"
};

// Event listener for login form submission
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtenha os valores do email e da senha inseridos pelo usuário
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginPassword").value;

    // Verifique se o email e a senha correspondem ao usuário simulado
    if (email === usuarioSimulado.email && senha === usuarioSimulado.senha) {
        // Login bem-sucedido, redirecione o usuário para a página de home
        alert("Login bem-sucedido!");
        // Redirecione para a página de home ou execute a ação desejada após o login
        window.location.href = "home.html";
    } else {
        // Exiba uma mensagem de erro se o login não for bem-sucedido
        alert("Email ou senha incorretos. Tente novamente.");
    }
});

// Event listener for registration form submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your registration logic here
    alert("Registro enviado com sucesso!"); // Exemplo: mostrar um alerta
    // Redirecione para a página de login após o registro bem-sucedido
    window.location.href = "login.html";
});

// Event listener for login form submission
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your login logic here
    alert("Login enviado com sucesso!"); // Exemplo: mostrar um alerta
    // Redirecione para a página de home após o login bem-sucedido
    window.location.href = "home.html";
});

// Event listener for add item form submission
const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your item creation logic here
    alert("Item adicionado com sucesso!"); // Exemplo: mostrar um alerta
});