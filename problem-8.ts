function validateKeys<T extends object>(obj:T, keys:(keyof T|string)[]):boolean {
    return keys.every((key:string|keyof T):boolean =>key in obj);
}


// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age",]));