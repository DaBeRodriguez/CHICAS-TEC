function datos() {
    
var clima =document.getElementById('frutas').value;

switch (clima) {
    case 'manzana' :
        alert ('el precio de 1k de  manzanas es: $1.50' );
        break;
    case 'pera' :
        alert ('el precio de 1k de  peras es: $2.50' );
        break;
    case 'platano':
        alert ('el precio de 1k de  platanos es: $3.00' );
        break;
    case'uva' :
        alert('el precio de 1k de uvas es $3.50');
        break;
    case 'fresa' :
        alert ('el precio de 1k de fresas es $4.50');
        break;
    default:
        alert ('el producto ingresado no se encuentra disponible' );
        break;
}

}
