/*Obtenemos el contenedor para saber en cual producto se hace click*/
let ConteinerProducts = document.getElementById('ConteinerProducts');

/*Obtenemos el contador para saber y modificar la cantidad de productos seleccionados*/

let QuantityProducts = document.getElementById('Counter');

ConteinerProducts.onclick = function( event )
{
    let Button = event.target;
    let Father = Button.parentElement;
    let Id = Father.id;
    let Selected = document.getElementById(Id);
    let NumberOfArticles = Number(QuantityProducts.textContent);

    Selected.classList.add("OcultProduct");

    NumberOfArticles = NumberOfArticles + 1;

    QuantityProducts.textContent = NumberOfArticles;

}

