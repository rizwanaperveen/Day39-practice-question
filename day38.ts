//Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

//Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

const countries = new Map<string, string>();
countries.set("Pakistan","Islamabad");
countries.set("Afghanistan","Kabul");
countries.set("Iraq","Baghdad");
countries.set("Nepal","Khatmando");
console.log(countries);

//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

//Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.

function logCanada(countries:Map<string, string>): void{
if(countries.has("Canada")){
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
}else{
    console.log("The Canada is not found in the map.");
}

}
  logCanada(countries);
//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

//Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.

// const students = new Map<number, string>();
// students.set(1, "Alice");
// students.set(2, "Bob");
// students.set(3, "Charlie");

// // Iterates over the Map and logs each student ID and name
// students.forEach((name, id) => {
//   console.log(`Student ID: ${id}, Name: ${name}`);
// });
const students = new Map<number, string>();
students.set(1,"Ali");
students.set(2,"Bashir");
students.set(3,"Danish");
students.set(4,"Fahad");
students.set(5,"Hassan");

students.forEach((name, id) => {
    console.log(`Student Id: ${id}, Name: ${name}`);
});
