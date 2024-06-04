const modalTemp = document.querySelector(".Modal-temp");
const buttonTemp = document.getElementById("TemperaturaBotão"); 
const buttonCloseTemp = document.querySelector(".ButtonCloseTemp"); 

buttonTemp.onclick = function () {
    modalTemp.showModal(); 
}

buttonCloseTemp.onclick = function () {
    modalTemp.close(); 
}

window.onclick = function(event) {
  if (event.target == modalTemp || event.target == modalCo2 || event.target == modalTvoc || event.target == modalbateria || event.target == modalDesc || event.target == modalQuemSomos) { 
    modalTemp.close();
    modalCo2.close();
    modalTvoc.close();
    modalbateria.close();
    modalDesc.close();
    modalQuemSomos.close();
  }
}

// Modal Co2

const modalCo2 = document.querySelector(".Modal-co2");
const buttonCo2 = document.getElementById("Co2Botão");
const buttonCloseCo2 = document.querySelector(".ButtonCloseCo2");   

buttonCo2.onclick = function () {
    modalCo2.showModal(); 
}

buttonCloseCo2.onclick = function () {
    modalCo2.close(); 
}

// Modal Tvoc

const modalTvoc = document.querySelector(".Modal-Tvoc");
const buttonTvoc = document.getElementById("TvocBotão");
const buttonCloseTvoc = document.querySelector(".ButtonCloseTvoc");   

buttonTvoc.onclick = function () {
    modalTvoc.showModal(); 
}

buttonCloseTvoc.onclick = function () {
    modalTvoc.close(); 
}

// Modal Bateria

const modalbateria = document.querySelector(".Modal-bateria");
const buttonbateria = document.getElementById("bateriaBotão");
const buttonClosebateria = document.querySelector(".ButtonClosebateria");   

buttonbateria.onclick = function () {
    modalbateria.showModal(); 
}

buttonClosebateria.onclick = function () {
    modalbateria.close(); 
}

// Modal Descrição

const modalDesc = document.querySelector(".Modal-Desc");
const buttonDesc = document.querySelector(".ButtonHeaderDesc");
const buttonCloseDesc = document.querySelector(".ButtonCloseDesc");   

buttonDesc.onclick = function () {
    modalDesc.showModal(); 
}

buttonCloseDesc.onclick = function () {
    modalCloseDesc.close(); 
}

//quem somos

const modalQuemSomos = document.querySelector(".Modal-QS");
const buttonQuemSomos = document.querySelector(".ButtonHeaderQS");
const buttonCloseQuemSomos = document.querySelector(".ButtonCloseQuemSomos");

buttonQuemSomos.onclick = function () {
    modalQuemSomos.show();
}

buttonCloseQuemSomos.onclick = function () {
    modalQuemSomos.close();
}

fetch('https://seu_servidor.com/dados_sensor')
.then(response => response.json())
.then(data => {

    document.getElementById('text_Co2').innerText += data.MedCo2 + " ppm";
    document.getElementById('text_Tvoc').innerText += data.MedTvoc + " mg";
    document.getElementById('text_temp').innerText += data.MedTemperatura + " °C";
    document.getElementById('text_bateria').innerText += data.CargaBateria + " %";
})
.catch(error => console.error('Erro ao obter os dados do servidor:', error));
