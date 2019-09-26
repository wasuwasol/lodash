// lodash
// rambda
// sugar
const lodash = require('lodash');


const cantidadDeHorasXDia = [1,2,3,4,5,6,7,8];
const dias = ['lun', 'mar', 'mier', 'jue', 'vie', 'sab', 'dom'];
const meses = [1,2,3,4,5,6,7,8,9,10,11,12];
// hacer funciones que retornen días de la semana de {lun a vier} {sab a dom}
// hacer funciones que retornen conjuntos de horasxActividad
// funciones que definan periodos cuatrimestrales de universidad
// funcion que festeje el cumpleaños
// funcion que nos devuelva la edad
// funcion que saca un dia random para jugar al futbol



let obj1 = {
    identidad: {
        id: 0,
        nombre: 'Pedro',
        apellido: 'Suarez',
        edad: '',
        añoNacimiento: 1990,
        diaDeNacimiento: 15,
        mesDeNacimiento: 2,
    },
    actividades: {        
        trabajo: [],
        universidad: [],
        futbol: [],
        vacaciones: [],
        cumpleaños: []
    }
}
let obj2 = {
    identidad: {
        id: 1,
        nombre: 'María',
        apellido: 'Suarez',
        edad: '',
        añoNacimiento: 1994,
        diaDeNacimiento: 23,
        mesDeNacimiento: 10
    },
    actividades: {
        trabajo: [],
        universidad: [],
        gimnasio: [],
        vacaciones: [],
        cumpleaños: []
    }
}


const prueba = function () {
    console.log('hola');
}
prueba();