
function getProperty<X, Y extends keyof X>(Obj: X, Key: Y):X[Y] {
    return Obj[Key];
}


// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));