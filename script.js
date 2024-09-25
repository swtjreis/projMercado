function calcularPromocao() {
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);

    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    
    const precoTotal = preco * 2;

    const precoComDesconto = Math.floor(precoTotal);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Promoção: Na compra de 2 unidades de ${descricao}, o valor total é de R$ ${precoComDesconto},00`;
}
