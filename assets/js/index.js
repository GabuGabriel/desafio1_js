const precio = 400000
const precioSpan = document.querySelector(".precio");
precioSpan.innerHTML = precio.toLocaleString();

const cantidadInput = document.querySelector("#cantidad")
const colorSelect = document.querySelector("#idcolor")

const valorTotal = document.querySelector(".valortotal")
const cantidadTotal = document.querySelector(".cantidadtotal")
const colorFinal = document.querySelector(".bola div")

let total = 0

function calcularTotal() {


    const cantidad = cantidadInput.value
    const color = colorSelect.value


    valorTotal.innerHTML = (cantidad * precio).toLocaleString();
    cantidadTotal.innerHTML = cantidad
    colorFinal.style.backgroundColor = color
}