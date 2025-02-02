//objetos literales.
const logicaPersona = (nombre,edad) => {
    console.log (`${nombre} tiene una edad de ${edad} años`);
    };
    const person = {
        id : 100,
        name : "Pedro",
        lastname : "Solorzano",
        age : 30,
        greet: function (){
            return ` Hola buenos dias, soy ${this.name} ${this.lastname}`;
        }
    }
    const {name,age}=person;
    logicaPersona (name,age);
    
    console.log(`${person.name} ${person.lastname}`);
    const estadoEdad = (person.age>=18) ? ` Usted es mayor de edad`
                                    : ` Usted es menor de edad`;
    console.log (estadoEdad)
    console.log (person.greet());