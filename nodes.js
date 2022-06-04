//Containers
const containerAllCards = document.querySelector('.main__container--cards');
const containerInput = document.querySelector('.main__container--loaderPage')
const containerFiltered = document.querySelector('.main__container--personalize')
const paginacion = document.querySelector('.paginacion')

//Clikcs 
const search = document.querySelector('#searchPage');
const filtered = document.querySelector('.filtered');
const titleHome = document.querySelector('header h1');

//Buttons
const button = document.querySelector('#search')
const buttonFilter = document.querySelector('.sendFiltered')

//Inputs

const getValueInputSelectGender = document.querySelector('select[name=gender]')
const getValueInputSelectStatus = document.querySelector('select[name=status]')
const getValueInputSelectSpecies = document.querySelector('select[name=species]')


//Filter 



// const prueba = document.querySelector('#selectGender')
// const valueSelect = prueba.options[prueba.selectedIndex].value;

//console.log(valueSelect);

// //Guardamos en una variable el nombre del campo provincia.
// var idprovincia = document.getElementById("idprovincia");
// var pro = idprovincia.options[idprovincia.selectedIndex].value;
// //Creamos un nodo de texto que agregaremos al div.
// var pro_valor = document.createTextNode("Provincia: "+pro);
// //Añadimos el nuevo nodo al final de la lista.
// div.appendChild(pro_valor);