document.getElementById("getInvolvedBtn").addEventListener("click", function () {
    fazerDoacao();
});

function fazerDoacao() {
    // Obtenha os valores dos campos
    var nome = document.getElementById("nome").value;
    var valorDoacao = document.getElementById("doacao").value;

    
    if (nome && valorDoacao) {
        alert("Obrigado, " + nome + ", pela sua doação de R$" + valorDoacao + ". A sua contribuição é valiosa para nós.");
    } else {
        alert("Por favor, preencha todos os campos antes de fazer a doação.");
    }
}