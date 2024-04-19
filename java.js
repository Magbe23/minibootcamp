let miDinero;
let precioLaptop;
let precioConDescuento = precioLaptop - (precioLaptop * .20) //Precio del portátil al 20% de descuento

if (miDinero >= precioLaptop || miDinero >= precioConDescuento){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log("¡Conseguiste una nueva laptop!");
}
else {
    //La condición era falsa. Se ejecutará el código de este bloque.
    console.log("¡No puedo pagarlo, todavía!");
}
