//para definir una funcion
function sumar(a,b):void{
    console.log(a+b)
}

const resultad = sumar('Axel', 'Hernandez')
//establecemos los tipos de datos
function suma2(n1:number,n2:number):number{
    return n1+n2
}
console.log(suma2(4,6))

function multiplicar(n3:number, n4:number,n5:number=5):number{
    let tem=n3*n5
    return tem
}
console.log(multiplicar(3,0,6))

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}
//definimos interface y funcion
function datosMascota(mascota:Mascotas,x:number):void{
    mascota.edad+=x
    console.log(mascota)
}

const nuevaMascota:Mascotas={
    nombre:'juan',
    edad:23,
    mostrarEdad():void{
        console.log('La edad es:',this.edad)
    }
}
//lo ponemos en uso con la funcion
datosMascota(nuevaMascota,4)

//funcion anonima
let funcSuma=function(n1:number , n2:number):number{
    return n1+n2
}
console.log(funcSuma(4,3))
//funciones con parametros rest
function sumar3(...valores:number[]){
    let suma= 0
    for(let x=0; x<valores.length;x++)
        suma+=valores[x];
    return suma    
}

console.log(sumar3(10,2,3,4))
console.log(sumar3(1,2))

