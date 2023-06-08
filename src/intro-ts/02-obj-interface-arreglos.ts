
//propiedades de un objeto, utilizamos interface lo cual es un molde para establecer tipos de datos
interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumnos:Alumno={
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com',
    matricula:123
}

// no se puede repetir las variables no importa como se definan porque no se puede
//redelcarar 
let vector1:Array<number>=[9,8,7,6,5];
vector1.push(34)
for(let elemento of vector1)
    console.log(elemento)
