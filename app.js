const $result =document.getElementById("result");
const $btnConvert = document.getElementById("btn-Convert")
const $valor = document.getElementById("valor")




$btnConvert.addEventListener("click",()=>{


    
    let data = document.getElementsByName("divisa")


    for(i = 0; i<= data.length; i++){

        if(data[i].checked){
            
            if(data[i].value == "USD"){
        
                $result.textContent = convertUsd($valor.value)

            } else if(data[i].value == "MXN"){

                $result.textContent = convertMxn($valor.value)

            } else if(data[i].value == "EURO"){

                $result.textContent = convertEu($valor.value)

            }

            console.log(data[i].value)

        }

    }

    

})


function  convertUsd (valorBase){

    return  0.00022 * valorBase;


}

function convertMxn (valorBase){

    return 0.0040 * valorBase
}

function convertEu (valorBase){
    return 0.00020 * valorBase
}

