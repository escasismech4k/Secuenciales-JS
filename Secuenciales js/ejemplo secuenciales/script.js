let v1,v2,v3;
let totalPagar = 0;
let totalVentas = 0;
let salarioBase = 0;
let comisiones = 0;

salarioBase = Number(prompt('ingrese salario base'));
v1 = Number(prompt('Ingrese valor de venta 1'));
v2 = Number(prompt('Ingrese valor de venta 2'));
v3 = Number(prompt('Ingrese valor de venta 3'));

totalVentas = v1+v2+v3;

comisiones = totalVentas * 0.1;

totalPagar = salarioBase + comisiones;

alert('El total a pagar del vendedor sera de: ' + totalPagar);

