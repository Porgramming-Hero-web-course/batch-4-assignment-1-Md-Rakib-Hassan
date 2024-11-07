interface Profile{
    name: string,
    age: number,
    email: string,
}

function updateProfile(Obj:Profile, Par:Partial<Profile>):Profile {
    return { ...Obj, ...Par };
}


// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));