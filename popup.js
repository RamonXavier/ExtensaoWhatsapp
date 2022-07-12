telefone.addEventListener('keyup', async () => {
	tratarNumero();
});

telefone.addEventListener('paste', async () => {
	tratarNumero();
});

abrirWhatsapp.addEventListener("click", async () => {
    let valor = document.getElementById('telefone').value;
	valor = removerTudoqueNaoEhDigito(valor);
    abrirJanelaConversa(valor);
});

function tratarNumero(){
    let valor = document.getElementById('telefone').value;
    valor = removerTudoqueNaoEhDigito(valor);
	valor = colocarHifen(valor);
    document.getElementById('telefone').value = valor;
	
	if(valor == '')
		document.getElementById('telefone').value = 55;
}

function removerTudoqueNaoEhDigito(valor){
	return valor.replace(/\D/g,"");
}

function colocarHifen(valor){
	return valor.replace(/(\d)(\d{4})$/,"$1-$2");
}

function colocarParentesesPrimeirosDigitos(valor){
	return valor.replace(/^(\d{2})(\d)/g,"($1) $2");
}

function abrirJanelaConversa(valor) {
    window.open('https://api.whatsapp.com/send?phone='+valor,'_blank');
}