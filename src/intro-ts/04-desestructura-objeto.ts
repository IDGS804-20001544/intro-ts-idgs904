interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;

}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:123456,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023,

    }
}
//desestructuracion
const{matricula1,grupo:grupo1}=alumno2
const{grupo}=grupo1
console.log(`La matricula es:${matricula1}`)
console.log(`El nombre es:${alumno2.nombre}`)
console.log(`El grupo es:${grupo}`)
console.log(`El año del grupo es:${alumno2.grupo.year}`)

const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1:${gps[0]}`)
console.log(`grupo 2:${gps[1]}`)
console.log(`grupo 3:${gps[2]}`)

//arreglos desestructuracion
const[a,,b]=gps;
console.log(`grupo 1:${a}`)
console.log(`grupo 1:${b}`)





