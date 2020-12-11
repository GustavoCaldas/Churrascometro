let botao = document.getElementById("botao");
botao.addEventListener("click", churrascometro);

function churrascometro(){
    let inputs = document.getElementsByClassName("inputs");
    let outputs = document.getElementsByClassName("li-item");

    let adultos = Number(inputs[0].value);
    let criancas = Number(inputs[1].value);
    let duracao = Number(inputs[2].value);

    let pessoas = adultos + (criancas / 2);
    
    let carne = null;
    let cerveja = null;
    let refrigerante_agua = null;

    if(duracao <= 6 && duracao > 0){
        /*
        *  400 g carne por pessoa
        *  1200ml de cerveja por adulto
        *  1000ml por pessoa
        *  criancas contam como 0,5
        */
        carne = 400 * pessoas;
        cerveja = 1200 * adultos;
        refrigerante_agua = 1000 * pessoas;
        outputs[0].innerHTML = "Carne: " + toKG(carne);
        outputs[1].innerHTML = "Cerveja: " + cerveja;
        outputs[2].innerHTML = "Refrigerante/agua: " + refrigerante_agua;
    }else if(duracao > 6){
        /* 
        *  650 g carne por pessoa
        *  2000ml de cerveja por adulto
        *  1500ml por pessoa
        *  criancas contam como 0,5 
        */
        carne = 650 * pessoas;
        cerveja = 2000 * adultos;
        refrigerante_agua = 1500 * pessoas;
        outputs[0].innerHTML = "Carne: " + carne;
        outputs[1].innerHTML = "Cerveja: " + cerveja;
        outputs[2].innerHTML = "Refrigerante/agua: " + refrigerante_agua;
    }
}

function toKG(e1){
    return e1 / 1000;
}