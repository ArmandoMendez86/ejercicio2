function calcularMultiplos() {
    let plantilla = '';
    let numero = document.querySelector('#IngresaNumero').value;

    for (let index = 1; index <= 100; index++) {

        plantilla +=
            `<tr>
            <td>${numero}</td>
            <td>X ${index}</td>
            <td> ${index * numero}</td>
        </tr>`

        console.log(numero * index)
    }

    document.querySelector('#tbody').innerHTML = plantilla;
}




