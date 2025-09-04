var expressao = "0";
var visor = document.getElementById("visor");

function mostrar(e) {
    let valor = e.target.innerText;

    if (valor === "," || valor === ".") {
        let partes = expressao.split(/[\+\-\×\÷]/);
        let ultimoNumero = partes[partes.length - 1];

        if (ultimoNumero.includes(",") || ultimoNumero.includes(".")) {
            return; 
        }
    }

    if (expressao == "0" && valor !== "," && valor !== ".") {
        expressao = valor;
    } else {
        expressao = expressao + valor;
    }
    atualiza_valor();    
}

function limpar(e) {
    expressao = "0";
    atualiza_valor();
}

function atualiza_valor(){
    visor.innerText = expressao;
}

function calcular(e){
    try {
        
        let res = eval(
            expressao
                .replace(/÷/g, "/")
                .replace(/×/g, "*")
                .replace(/,/g, ".")
        );
        
        expressao = res.toString().replace(".", ",");
        atualiza_valor();
    } catch {
        expressao = "Erro";
        atualiza_valor();
    }
}
