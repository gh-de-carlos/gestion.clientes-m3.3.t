"use strict"
// ✔️ 1. Crea un arreglo "clientes" y define al menos 3 objetos cliente dentro de él
// siguiendo la estructura propuesta en el punto 1.
const clientes = [
  { id: 101, nombre: "Lucía", apellido: "Ramírez", email: "lucia@example.com", telefono: "+56 9 1111 2222", activo: true },
  { id: 102, nombre: "Tomás", apellido: "Fuentes", email: "tomas@example.com", telefono: "+56 9 2222 3333", activo: false },
  { id: 103, nombre: "Valentina", apellido: "Mora", email: "valentina@example.com", telefono: "+56 9 3333 4444", activo: true },
  { id: 101, nombre: "Lucía", apellido: "Ramírez", email: "lucia.ramirez2@example.com", telefono: "+56 9 5555 6666", activo: false }, // 🔁 Duplicate of id 101
  { id: 104, nombre: "Carlos", apellido: "Navarro", email: "carlos@example.com", telefono: "+56 9 7777 8888", activo: true },
  { id: 105, nombre: "María", apellido: "Vergara", email: "maria@example.com", telefono: "+56 9 8888 9999", activo: true },
  { id: 106, nombre: "Javiera", apellido: "Ortiz", email: "javiera@example.com", telefono: "+56 9 0000 1111", activo: false },
  { id: 102, nombre: "Tomás", apellido: "Fuentes", email: "tomas2@example.com", telefono: "+56 9 9999 8888", activo: true },   // 🔁 Duplicate of id 102
  { id: 103, nombre: "Valentina", apellido: "Mora", email: "valentina2@example.com", telefono: "+56 9 4444 3333", activo: false }, // 🔁 Duplicate of id 103
  { id: 107, nombre: "Elías", apellido: "Castro", email: "elias@example.com", telefono: "+56 9 1212 3434", activo: true }
]

// ✔️ PUNTO 3. Acceder a los datos de un cliente 
// Se ha utilizado un ciclo for para iterar sobre el arreglo
// y mostrar toda la información de cada cliente uno a la vez
// La única "extravagancia" acá es el uso de console.table
// para aprovechar de mostrarlos de forma ordenada.
for (let i = 0; i < clientes.length; i++) {
  console.table(clientes[i]);
}


// ✔️ PUNTO 4. Contar clientes: 
// usar for o foreach para contar cuántos clientes tienen 
// el campo "activo" con valor true. Se ha utilizado una 
// variable contador para respetar la pauta y no utilizar
// métodos más especializados que harían este trabajo sin 
// depender de variables externas.
let activos = 0;
clientes.forEach(cliente => {
  if (cliente.activo) activos++;
});

console.log(`Clientes activos: ${activos}`);


// ✔️PUNTO 5. Agregar un nuevo cliente: 
// cree una función que reciba los datos de un nuevo cliente
// y lo agregue al arreglo usando el método push()
// y luego se muestra usando .at(-1) 
// El método arr.at(index) admite índices negativos entre 
// [ -1 : -arr.length ] para hacer búsquedas en orden inverso
function addCliente(cliente) {
  clientes.push(cliente);
  console.log('%oCliente agregado:', clientes.at(-1));
}
const clienteNuevo = {
  id: 110,
  nombre: "Andrés",
  apellido: "Pérez",
  email: "andres.perez@yahoo.com",
  telefono: "+56 9 3344 5566",
  activo: true
};
addCliente(clienteNuevo);

// ✔️PUNTO 6. Eliminar cliente: cree una función que elimine un cliente
// a través de su campo id usando el método splice.
// Esta función primero filtra el cliente usando findIndex para retornar
// el primer indice que coincide con la lógica entregada en el callback,
// en nuestro caso que el id del cliente sea igual al id pasado a la 
// función:
// cliente => (retorna el elemento cliente que)
// cliente.id === id (tiene un id igual al id pasado a la función)
// luego ya se utiliza splice para quitar ese elemento del arreglo.
// Se controlan los casos en que el id no existe y se avisa al usuario
function deleteClient(id) {
  const index = clientes.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    clientes.splice(index, 1);
    console.warn(`Cliente con id ${id} eliminado.`);
  } else {
    console.error(`El cliente con id ${id} no existe en nuestros registros.`);
  }
};
deleteClient(150);        // un cliente inexistente
deleteClient(110);        // el cliente que acabábamos de agregar

// ✔️PUNTO 7. Modificar cliente: cree una función que permite modificar
// los datos de un cliente (excepto el id, restricción interna)
// La función va a recibir un objeto que es subconjunto en claves
// del objeto cliente, o sea, mientras tenga un id, puede incorporar 
// cualquiera de los campos del cliente para modificarlos.
// Por simplicidad, este método no valida que el objeto pasado no
// contenga MÁS propiedades que el modelo de cliente, por lo que hacer
// esto no arrojará errores, pero tampoco es un requerimiento en esta
// etapa. Se ha decidido incorporar una restricción y es que no puede
// faltar el id en el objeto pasado. Tampoco valida tipo de datos para
// el id porque se entiende que no es el objeto de este ejercicio y su
// implementación haría más larga y confusa la lógica. La función 
// primero valida que venga el campo id en el objeto pasado. Si no, 
// realiza un retorno temprano terminando la ejecución. Si lo encuentra,
// utiliza findIndex para encontrar el índice del primer objeto que
// coincida con la lógica de búsqueda (que tengan el mismo id).
// id (RECORDAR que este ejercicio solicita explícitamente tener id's 
// duplicados). Luego el reemplazo se hace usando la notación de objeto
// literal con atributos implícitos en combinación con el operador spread: 
// clientes[index] = {...clientes[index], ...objTmpCliente}; usa el índice
// devuelto por findIndex para apuntarlo en el arreglo clientes.
// Entonces se asigna la siguiente expresión: 
// { ...clientes[index], ...objTmpCliente}
// donde clientes[index] es el cliente en el índice encontrado y objTmpCliente el
// objeto pasado a la función. El operador spread ... "dispersa" las propiedades
// de los objetos y las llaves { } crean un objeto a partir de ellas, creando 
// implícitamente los nombres de los campos a partir de los nombres pasados por
// el operador spread por lo que al pasar el objTmpCliente se sobreescriben los
// valores de todas los atributos repetidos. Ejemplo:
// objTmpCliente = { id: 10, nombre: 'Juan' }
// cliente = { id: 10, nombre: 'Esteban' }
// {...cliente, ...objTmpCliente } sería igual a:
// { id: 10, nombre: 'Esteban', //y todos los demás campos, id: 10, nombre: 'Juan' }
// por lo que terminaremos con el objeto clientes[i] con campos modificados
// excepto el id. 
// RESTRICCIÓN: siempre tiene que venir el campo id
function modificarCliente(objTmpCliente) {
  // cláusula de guarda para evitar procesar clientes sin id
  if (objTmpCliente.id === undefined) return "Falta un id de cliente";
  // se busca el cliente por id
  const index = clientes.findIndex((cliente, i) => 
    cliente.id === objTmpCliente.id)
  
  // si el cliente existe se fusionan las propiedades de los objetos
  // y se cambia la variable isUpdated que es una "bandera" que indica
  // que el cambio fue realizado al valor booleano true
  let isUpdated = false;
  if (index !== -1) {
      // unimos las propiedades del cliente original con las propiedades
      // pasadas a la función: las propiedades repetidas sobreescriben las
      // propiedades del objeto original, se "da vuelta" la bandera a true
      clientes[index] = { ...clientes[index], ...objTmpCliente };
      isUpdated = true;
  }
  
  // este es simplemente un ingenio con operador ternario para evitar 
  // un if en el mensaje. Pregunta si isUpdated es true, y retorna la 
  // expresión luego del "?" y si es false, la expresión luego de ":"
  // pudiendo crear dinámicamente cualquiera de las siguientes expresiones:
  // true: "El cliente con id xxx fue modificado"
  // false: "El cliente con id xxx no existe."
  return (`El cliente con id ${objTmpCliente.id} ${isUpdated ? ' fue modificado' : ' no existe'}.`);
}

console.log("Ejemplo hardcodeado para ilustra uso: ", clientes[0]);   // id 101
let modify = modificarCliente({id: 101, nombre: 'Calcetín con rombos', apellido: 'man'});
console.log(modify);
console.log("Nuevos valores, mismo objeto: ", clientes[0]);

console.log("Ejemplo hardcodeado para ilustra uso: id inexistente");
modify = modificarCliente({id: 150, nombre: 'Pedrito'});
console.log(modify);

// ✔️PUNTO 8. Consultar clientes: usar filter para crear un nuevo arreglo
// con los clientes que tienen el campo "activo" con valor "false";
const inactiveClients = clientes.filter(cliente => cliente.activo === false);
console.log('Clientes inactivos:')
console.table(inactiveClients);

// ✔️PUNTO 9.1 Crea función que recibe dos arreglos, uno de clientes antiguos
// y otro de nuevos clientes y agrega los nuevos al arreglo de CL antiguos
// Se utiliza el operador spread que "esparce" los elementos del arreglo newClients
// como una lista de elementos individuales (objetos) separados por coma y los 
// pushea al arreglo antiguo
function mergeNewClients(oldClients, newClients) {
  oldClients.push(...newClients);
}

const oldOnes = [
  { id: 118, nombre: "Isidora", apellido: "Rojas", email: "isidora@example.com", telefono: "+56 9 8989 7878", activo: true },
  { id: 119, nombre: "Tomás", apellido: "Muñoz", email: "tomas@example.com", telefono: "+56 9 5656 3434", activo: false },
  { id: 120, nombre: "Camila", apellido: "Reyes", email: "camila.reyes@example.com", telefono: "+56 9 7878 1212", activo: true }
];
const newOnes = [
  { id: 121, nombre: "Sebastián", apellido: "Pizarro", email: "sebastian.p@example.com", telefono: "+56 9 2323 4545", activo: false },
  { id: 122, nombre: "Martina", apellido: "González", email: "martina@example.com", telefono: "+56 9 6767 7878", activo: true },
  { id: 123, nombre: "Joaquín", apellido: "Salas", email: "joaquin.salas@example.com", telefono: "+56 9 9898 1010", activo: false }
];
console.log("Arreglo original: ", oldOnes);
mergeNewClients(oldOnes, newOnes);
console.log("Arreglo original con nuevas inserciones: ", oldOnes);


// ✔️PUNTO 9.2 Crear una función para filtrar clientes duplicados (mismo id)
// mostrando solo clientes únicos.
// NOTA: este ejercicio no dice "qué hacer" con el filtrado, por lo que se
// ha decidido filtrarlos para mostrar sólo los únicos.
// Esta función es relativamente simple, utilizando ciclos for in y 
// for-de-toda-la-vida para iterar por el arreglo encontrando los duplicados. 
// 1. Crea dos arreglos, uno para índices repetidos y otro para índices únicos.
// 2. Comienza a iterar por los indices de clientes (for in) capturando el índice en i
// 3. Pregunta si el índice ya se encuentra en iRepetidos. Si es así continúa al 
//>> siguiente y si no,
// 4. setea una bandera isUnique en true
// 5. comienza a recorrer el mismo arreglo pero en una posición más que la actual 
//>> del for in. O sea, si for está recorriendo i = 3, este comienza por 4.
// 6. Si el elemento.id que está siendo recorrido por el for in [i] tiene el mismo
//>> índice que el elemento siendo recorrido por el for [j], se setea la bandera
//>> isUnique en false y se pushea el índice al arreglo iRepetidos. Se termina
//>> la ejecución del for [j] actual para seguir al siguiente for in [i]
// 7. Si el for [j] termina sin encontrar id's duplicados, se agrega [i] al 
//>> arreglo de indices únicos iUnicos.
// 8. Terminan ambos loops y se retorna el arreglo resultado de mapear iUnicos
// y usando esos índices para retornar solo esos clientes.
// ESTE código no valida arreglos vacíos para concentrarse en ilustrar la
// lógica de filtrado.
function filterUniqueClients() {
  const iUnicos = [];
  const iRepetidos = [];
  for (let i in clientes) {
    if (iRepetidos.includes(+i)) continue;
    let isUnique = true;
    for (let j = (+i) + 1; j < clientes.length; j++) {
      if (clientes[i].id === clientes[j].id) {
        isUnique = false;
        iRepetidos.push(j);
        break;
      }
    }
    if (isUnique) iUnicos.push(+i);
  }

  return iUnicos.map(index => clientes[index]);
}
const uniques = filterUniqueClients();
console.log("Los clientes con id único son:");
console.table(uniques)

// ✔️PUNTO 10.1 Usa while para simular que se solicita la información de un
// cliente por su id, repitiendo el proceso mientras id no exista.
// 1. creamos una función utilitaria getRnd que nos de un rango de
// valores entre 101 y 125 que serán los índices a buscar.
// 2. Creamos una bandera isFound para indicar si fue encontrado o no y
// terminar la ejecución del ciclo do while.
// 3. usamos un do while para que siempre busque al menos 1 vez. 
// 4. Pedimos un id al azar a nuestra función. Avisamos el id al usuario.
// 5. Se usa find para filtrar el índice buscado. Esto nos permite buscar
// directamente el cliente. (Solo el primero, omitimos la rareza de tener
// id's duplicados). 
// 6. Se evalúa if(cliente) Aunque esto es un poco extraño para personas 
// que recién comienzan o vienen de otros lenguajes como Java, acá se 
// aprovecha la cualidad de "veracidad" de los objetos para evaluarlo:
// si cliente tiene un objeto, if (cliente) evaluará a true
// si cliente tiene undefined, if (cliente) evaluará a false,
// ejecutando la rama correspondiente del if/else.
// Si lo encuentra, la rama mostrará el id, el objeto y seteará la bandera
// isFound en true para terminar la ejecución del do while
// si no, simplemente avisa que el id no existe.
// Más información: 
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
const getRnd = () => Math.floor(Math.random() * 25 + 101);
let isFound = false;

do {
  const id = getRnd();
  console.log(`Buscando por id ${id}`);
  const cliente = clientes.find(cliente => cliente.id === id);
  if (cliente) {
    console.log(`El id ${id} fue encontrado. Es`, cliente);
    isFound = true;
  } else {
    console.log(`El id ${id} no existe en nuestros registros`);
  }
} while (!isFound)

// ✔️PUNTO 10.2 Usar for o foreach para hacer consulta masiva de clientes
// mostrando los datos solo de aquellos que están con activo: true
console.log("Listado de clientes activos")
clientes.forEach(cliente => {
  if (cliente.activo) console.table(cliente);
})

// ✔️PUNTO 11 Combinación if/for: crea una condición dentro de un ciclo que
// determine si un cliente es activo o inactivo mostrando un mensaje
// diferente para cada tipo.
for (let i = 0; i < clientes.length; i++) {
  if (clientes[i].activo) {
    console.log(`El cliente con id ${clientes[i].id} está activo`)
  } else {
    console.log(`El cliente con id ${clientes[i].id} está inactivo`)
  }
}

// ✔️PUNTO 12. 
// 1. utilice código limpio, modular, fácil de entender.
// 2. Utilice convenciones claras para nombrar identificadores
// 3. Documentar explicando qué hace cada parte.