let smarties = ["Plato","Lao Tzu","St. Augustine","Ibn Arabi","Max Planck","David Bohm"];

let arreglo = Iterator.from(smarties).map(x => x.length).toArray();  // [5, 7, 13, 9, 10, 10]

arreglo = Iterator.from(smarties).map(x => x.length).filter(x => x < 10).toArray(); // [5, 7, 9]

arreglo = Iterator.from(smarties).map(x => x.length).filter(x => x < 10).take(2).toArray() // [5, 7]

// Función generadora
// Puede pausar su ejecución y luego reanudarla más tarde
function* getSmartiesNames() {
    yield "Plato";
    yield "Lao Tzu";
    yield "St. Augustine";
    yield "Ibn Arabi";
    yield "Max Planck";
    yield "David Bohm";
}

arreglo = Iterator.from(getSmartiesNames()) 
    .map(name => name.length)                            
    .filter(length => length < 10) 
    .take(2)
    .toArray();

arreglo.forEach(element => console.log(element));

// Conjuntos

let set = new Set(["A","B","C"]);
let set2 = new Set(["C","D","E"]);

let set3 = set.intersection(set2); // yields {‘C’}
//console.log(set3)

set3 = set.difference(set2); // yields {“A”,”B”}
console.log(set3)
