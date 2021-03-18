

const Converter = document.getElementById("Converter");


function conversao(){
    const escolha = document.getElementById("escolha").value;
    const escolha2 = document.getElementById("escolha2").value;
    const digite_a_temperatura = document.getElementById("digite_a_temperatura").value;
    const resultado = document.getElementById("resultado");

    if  (escolha !== "Selecione" && digite_a_temperatura !== ""){

        /*Para os espertinhos que quiserem quebrar meu programa */

        if (escolha == "Celsius" && escolha2  == "Celsius"){
            resultado.textContent = "HAHAHA, JURA QUE EU VOU FAZER ESSE CÁLCULO"
        }

        if (escolha == "Fahrenheit" && escolha2 == "Fahrenheit"){
            resultado.textContent = "ORR, VOU CALCULAR NAN"
        }

        if (escolha == "Kelvin" && escolha2 == "Kelvin"){
            resultado.textContent = "MÓ PAZ..."
        }

        

        /* calculo de todas as temperaturas*/

        if (escolha == "Celsius" && escolha2 == "Fahrenheit"){
            const conta = ((parseInt(digite_a_temperatura) * 9) / 5) + 32;
            resultado.textContent = conta + "GRAUS FAHRENHEIT";
        }

        if (escolha == "Fahrenheit" && escolha2 == "Celsius"){
            const conta2 = (parseInt(digite_a_temperatura) - 32) /1.8;
            resultado.textContent = conta2 + "GRAUS CELSIUS";
        }

        if (escolha == "Celsius" && escolha2 == "Kelvin"){
            const conta3 = parseInt(digite_a_temperatura) + 273;
            resultado.textContent = conta3 + "GRAUS KELVIN";
        }

        if (escolha == "Kelvin" && escolha2 == "Celsius"){
            const conta4 = parseInt(digite_a_temperatura) - 273;
            resultado.textContent = conta4 + "GRAUS CELSIUS";
        }

        if (escolha == "Fahrenheit" && escolha2 == "Kelvin"){
            const conta5 = (parseInt(digite_a_temperatura) - 32) / 1.8;
            const conta5meio = conta5 + 273;
            resultado.textContent = conta5meio + "GRAUS KELVIN"
        }

        if (escolha == "Kelvin" && escolha2 == "Fahrenheit"){
            const conta6 = ((parseInt(digite_a_temperatura) - 273.15) * 9 / 5) +32;
            resultado.textContent = conta6 + "GRAUS FAHRENHEIT";
        }

        
    }else {
        resultado.textContent = "Preencha todos os campos!"
    }
}

Converter.addEventListener("click", conversao)


