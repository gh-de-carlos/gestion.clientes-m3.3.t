# <img src="favicon.svg" width=25/> Módulo 3 - AE3 grupal - "Gestión clientes" <img src="favicon.svg" width=25/>

![mockup o entrega del ejercicio][0]

## 😶‍🌫️ GRUPO 1 somos:
* Natalia Devia
* Sebastián Gallegos
* Hernán Barrales
* Jorge Rodríguez
* Carlos Pizarro

## 🚀 OBJETIVO

El equipo ha sido asignado para desarrollar una parte de una aplicación de gestión de clientes para una empresa. El objetivo es utilizar arreglos y objetos para almacenar y gestionar la información de los clientes. El sistema debe permitir agregar, editar, eliminar y consultar datos de los clientes, al mismo tiempo que permite realizar operaciones con sus datos de manera eficiente utilizando arreglos y ciclos.

En este ejercicio grupal, cada miembro del equipo será responsable de una parte del desarrollo, trabajando en conjunto para implementar el sistema de gestión de clientes. Las tareas incluyen el uso de objetos, arreglos, ciclos y buenas prácticas de programación.

## 👉 REQUISITOS

1. ✔️Definir un objeto cliente: Crear una estructura de objeto cliente con las siguientes propiedades:
    * id (número)
    * nombre (string)
    * apellido (string)
    * email (string)
    * telefono (string)
    * activo (booleano: true O false)
2. Crear un arreglo de objetos cliente:
    * ✔️Crear un arreglo vacío donde se almacenarán los objetos cliente.
    * ✔️Definir al menos 3 objetos cliente dentro de este arreglo, cada uno con diferentes datos.
3. Acceder a la información de un cliente:
    * ✔️Usar un ciclo for para iterar sobre el arreglo de clientes y mostrar los datos de cada cliente (nombre, apellido, email, teléfono).
4. Contar la cantidad de clientes activos:
    * ✔️Utilizar un ciclo for o forEach para contar cuántos clientes tienen el valor activo igual a true.
5. Agregar un nuevo cliente:
    * Crear una función que reciba los datos de un nuevo cliente y lo agregue al arreglo utilizando el método push().
6. Eliminar un cliente:
    * ✔️Crear una función que elimine un cliente por su id utilizando el método splice() para eliminar el objeto del arreglo.
    * ✔️Asegúrese de que, al eliminar el cliente, el arreglo se actualice correctamente.
7. Modificar los datos de un cliente:
    * ✔️Crear una función que modifique los datos de un cliente existente en el arreglo, por ejemplo, cambiar el teléfono o el estado de activo de false a true.
8. Consultar los clientes inactivos:
    * ✔️Usar el método filter() para crear un nuevo arreglo con los clientes que tienen el campo activo igual a false.
9. Ålgebra con arreglos y objetos:
    * ✔️Crear una función que reciba dos arreglos de clientes (por ejemplo, uno con clientes nuevos y Otro con clientes existentes) y realice una unión de ambos, agregando los nuevos clientes al arreglo original.
    * ✔️Crear Otra función para filtrar clientes duplicados (con el mismo id), mostrando solo los clientes únicos.
10. Ciclos while, for y forEach
    * ✔️Usar un ciclo while para simular una operación repetitiva en el sistema, por ejemplo, consultar los datos de un cliente hasta que se ingrese un id válido.
    * ✔️Usar for o forEach para realizar una consulta masiva de todos los clientes, mostrando los datos solo de aquellos que están activos.
11. Combinacién de ciclos con if/eise
    * ✔️Crear una condici6n dentro de un ciclo que determine si un cliente es activo o inactivo, y mostrar un mensaje diferente dependiendo de su estado.
12. C6digo limpio y buenas prácticas:
    * ✔️Asegúrese de que el código sea limpio, modular y fácil de entender. Utilicen convenciones claras para nombrar las variables, funciones y objetos.
    * ✔️Cada miembro del equipo debe documentar su código con comentarios explicativos sobre qué hace cada parte.

## 👀 NOTAS

- El código se ha comentado exhaustivamente incluso si esto no es la mejor práctica por un objetivo pedagógico: así los colaboradores del grupo que no tienen el mismo conocimiento en Javascript pueden leer con calma y cuántas veces quieran estos para hacerse una idea y consultar todas las dudas (si es que y) cuando lo necesiten. Esto es distinto a simplemente mostrar una vez cómo se hace algo.
- El ejercicio 9.2 no indica qué hacer con los objetos duplicados así que hemos enfocado el ejercicio en mostrar los únicos. De todas maneras, la función está preparada para devolver ambos de forma muy simple cambiando la línea `return iUnicos.map(index => clientes[index]);` por la siguiente: 
```Js
return {
    unicos: iUnicos.map(index => clientes[index]), 
    duplicados: iRepetidos.map(index => clientes[index])
}

// si quieres extra seguridad (no es el foco por ahora)
return {
  unicos: iUnicos.map(i => clientes[i]).filter(Boolean),
  duplicados: iRepetidos.map(i => clientes[i]).filter(Boolean)
};
// esto elimina cualquier valor 'undefined'.
// también se pueden generar cláusulas y lógica de guarda
// en la propia función pero insistimos:  no es el foco acá.
```

## 📁 ESTRUCTURA GENERAL DEL PROYECTO

```
📁 m3.3.t-gestion.clientes/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    ├── 📁js/  
    └── 📁utils/  
```

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png

