// //TASK 
// //Personal Message: Store a person’s name in a variable, and print a message to that person.
// //  //Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// // let personNAME: String = "Eric";
// // console.log('Hello ${personName},would you like to learn some python today?');
// //TASK 3
// //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// // uppercase, and titlecase.
// // let personNAME: string ="SANA JAMEEL";
// //in lowercase
// // console.log("lowercase:", personNAME.toLowerCase());
// //in uppercase
// // console.log("uppercase:", personNAME.toUpperCase());
// //in titlecase
// // // // // // // // // // // // // // console.log("titlecase:", personNAME.replace(/\b\w/g,c=> c.toUpperCase()));
// // // // // // // // // // // // // //TASK 4
// // // // // // // // // // // // // //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// // // // // // // // // // // // // // Your output should look something like the following, including the quotation marks:
// // // // // // // // // // // // // //Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// // // // // // // // // // // // // let Quote: String = "A person who never made a mistake never tried anything new.";
// // // // // // // // // // // // // let author: string = "Albert Einstein";
// // // // // // // // // // // // // console.log('${author} once said, "${quote}"');
// // // // // // // // // // // // //TASK 5
// // // // // // // // // // // // //Famous Quote 2: Repeat Exercise 4, but this time store the 
// // // // // // // // // // // // //famous person’s name in a variable called famous_person. 
// // // // // // // // // // // // //Then compose your message and store it in a new variable called message. Print your message.
// // // // // // // // // // // // let famous_person: string = "Albert Einstein";
// // // // // // // // // // // // let message: string = '${famous_person} once said, "${quote}"'; 
// // // // // // // // // // // // console.log(message);
// // // // // // // // // // // // TASK 6
// // // // // // // // // // // //Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// // // // // // // // // // // // and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// // // // // // // // // // // //Print the name once, so the whitespace around the name is displayed.
// // // // // // // // // // // // Then print the name after striping the white spaces.
// // // // // // // // // // // let personNAME: string ="\t\n john doe \n\t" ;
// // // // // // // // // // // console.log("Orignal:", personNAME);
// // // // // // // // // // // console.log("Stripped:", personNAME.trim());
// // // // // // // // // // //TASK 7 // 8
// // // // // // // // // // //Number Eight: Write addition, subtraction, multiplication,
// // // // // // // // // // // and division operations that each result in the number 8. 
// // // // // // // // // //  //Be sure to enclose your operations in print statements to see the results.
// // // // // // // // // //  console.log(5 + 3);
// // // // // // // // // //  console.log(10 - 2);
// // // // // // // // // //  console.log(4 * 2);
// // // // // // // // // //  console.log(16 / 2); 
// // // // // // // // // //TASK 9
// // // // // // // // // //Favorite Number: Store your favorite number in a variable. Then, using that variable,
// // // // // // // // // // create a message that reveals your favorite number. Print that message.
// // // // // // // //TASK 10
// // // // // // // //Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// // // // // // //  //If you don’t have anything specific to write because your programs are too simple at this point, 
// // // // // // // // just add your name and the current date at the top of each program file.
// // // // // // //  // Then write one sentence describing what the program does.
// // // // // // //  //author: [SANA JAMEEL]
// // // // // // //  //date: [ Monday , Feburary 27 , 2024]
// // // // // // //  // let favoriteNumber: number = 4;
// // // // // // //  // reveling my favourite number in a message format.
// // // // // // //  console.log('my favorite number is ${favoriteNumber},');
// // // // // // //TASK 11
// // // // // // //Names: Store the names of a few of your friends in a array called names.
// // // // // //  //Print each person’s name by accessing each element in the list, one at a time.
//  let names : string [] =  ["sana","sara","khadija","mahnoor"];
//   console.log(names[0]);
// // // // // //TASK 12
// // // // // //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// // // // // // print a message to them. The text of each message should be the same, 
// // // // // //but each message should be personalized with the person’s name.
// let names : string [] =  ["sana","sara","khadija","mahnoor"];
// let message : string = "Do you like to play football?"
// console.log(names[0] + " "+ message);
//  console.log(names[1] + " "+ message);
//  console.log(names[2] + " "+ message);
// console.log(names[3] + " "+ message);
// // // // //task 13
// // // // //Your Own Array: Think of your favorite mode of transportation,
// // // // // such as a motorcycle or a car, and make a list that stores several examples.
// // // // //  Use your list to print a series of statements about these items,
// // // //  //such as “I would like to own a Honda motorcycle.”
// // // //  let transpotation : string [] = ["Honda Motocycle", "Audi", "Honda city"];
// // // //  transpotation.map((items) => console.log('I would like to own a ${items}'));
// // // //TASK 14
// // // //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// // // // Make a list that includes at least three people you’d like to invite to dinner.
// // // // Then use your list to print a message to each person, inviting them to dinner.
// let guestArr: string [] =  ["sana","sara","khadija","mahnoor"];
//  guestArr.map((items) =>(console.log('Dear ${items}, you are invited to the dinner')) )
// // //TASK 15
// // //Changing Guest List: You just heard that one of your guests can’t make the dinner,
// // // so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// // //• Start with your program from Exercise 14.
// //  //Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // //• Modify your list, replacing the name of the guest who can’t make it with the name of the
// // // new person you are inviting.
// // //• Print a second set of invitation messages, one for each person who is still in your list.
// let guestArr: string [] =  ["sana","sara","khadija","mahnoor"];
//   let canNotAttend : string = "Sana"
//  console.log(canNotAttend + ' '+ 'can not attend for you dinner party')
//  let newGuest: string = "sara"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//  console.log(guestArr)
//  guestArr.map((items) =>
// console.log('Dear ${items}, you are invited to the dinner,')
//  )
//TASK 16
//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
// let guestArr : string[] = ["Sana", "Sara ","khadija","Mahnoor"];
//  let canNotAttend : string = "Aqsa"
//  let newGuest = "Aleeza"
//  guestArr[guestArr.indexOf(canNotAttend)] = 'newGuest';
//  console.log(guestArr)
// guestArr.map((items)=>
//  console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
// );
// //PARAT 2
// let guestBag : string = "Aleeza"
// guestArr.unshift(guestBag);
// console.log(guestArr)
//PART 3
// let middleGuest : string = "Fatima"
// let middleindex = guestArr.length/3
// guestArr.splice(middleindex,0,middleGuest)
// console.log(guestArr)
// //PART 4
// guestArr.push("zeeshan")
// console.log(guestArr)
// //part 5
//guestArr.map((items) =>
// console.log(`Dear ${items}, you are invited in the more people category on dinner`));
//TASK 17
// initial list of guests
// let guests: string[] = ["Ali", "Bilal", "carry", "Dawood", "hamza"];
// informing that only two people can be inivited
//console.log("Due to limited space, only two people can be inivited for dinner.");
// // Removing guests until only two names remain
// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`sorry, ${removedGuest}, you're no longer inivited to dinner.`);
// }
// // printing invitations to the remaining  two guests
// guests.forEach((guests) => {
//     console.log(`Dear ${guests}, you're still invited to dinner.`);
// })
// // Removing the last two names from the list
// guests.pop();
// guests.pop();
// // printing the final list to confirm its empty
// console.log("final guest list:", guests);
//TASK 18
// store the location in an array
// let placeToVisit: string[] = ["Tokay", "Pakistan", "America", "Chaina", "Japan"];
//print the array in its orignal order
// console.log("original order:", placeToVisit);
// print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical order:", [...placeToVisit].sort());
//show that the array is still in its orignal order
// console.log("original order after sorting:", placeToVisit);
// // print the array in revers alphabetical order without changing the order of the original list
// console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());
// // show that array is still in its original order
//  console.log ("original order  after reverse sorting:", placeToVisit);
// // Reverse the order of the list 
//  placeToVisit.reverse();
//  console.log("Reverse order:", placeToVisit);
// // Reverse the order of the list again to get back to the original order
//  placeToVisit.reverse();
//  console.log("Back to original order:", placeToVisit)
// // sort the array in alphabetical order 
// placeToVisit.sort();
//  console.log("sorted in alphabetical order:", placeToVisit);
// // sort the array in reverse alphabetical order
// placeToVisit.sort((a, b) => b. localeCompare(a));
// console.log("sorted in reverse alphabetical order:", placeToVisit);
// TASK 20
// let country: string [] = ["Pakistan", "India", "NewYork", "Japan", "Chaina"];
// console.log("list of country:");
// console.log(country);
// TASK 21
// let person: {name: string, fname: string, age: number} = {name:"sana", fname: "female" , age: 22}
// console.log(person)
// TASK 22
// const days : string [] = ["sunday", "monday", "tuesday", "wednesday", "thuesday", "friday", "saturday"]
// console.log(days[6])
//TASK 23
//let car = "subaru";
// console.log("is car == 'subaru'? predict true")
// console.log(car == 'subaru')
// console.log("is car != 'honda city'? predict true")
// console.log(car != 'honda city')
// console.log("is car == 'SUBARU'? predict false")
// console.log(car == 'SUBARU')
// console.log("is car.length ==6? predict true")
// console.log(car.length == 6)
// console.log("is car.length != 10? predict true")
// console.log(car.length != 10)
// console.log("is 10 > 45 ? predict false")
// console.log(10 > 45)  
// console.log("is 3 <= 2 ? predict false")
// console.log(3 <= 2)
// console.log("is 72 >= 83 ? predict false")
// console.log(72 >=  83)
// console.log("is car == 'subaru' && car.length == 6? predict true")
// console.log(car == 'subaru' && car.length == 6)
// TASK 24
// let name_1 : string = "sana"
// let name_2 : string = "sana jameel"
// let name_3 : string = "miss sana jameel"
// if (name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")
// }
// if (name_1 != name_2){
//     console.log("names are  equal")
// }
// if (name_1 != name_3){
//         console.log("names are  equal")
// }
// let age_1 : number = 18
// let age_2 : number = 22
// if (age_1 == 18) {
//     console.log("eligible for vote")
// }
// if (age_1 == 22) {
//     console.log("eligible for vote in older categoey")
// }
// if (age_1 <= age_2){ // less
//     console.log("younger")
// }
// if (age_2 >= age_1){ // greater
//     console.log("older")
// }
// if (age_1 == 18 && age_2){
//     console.log("person is eligible for vote")
// } 
// if (age_1 == 18 && age_2 != 22){
//     console.log("person is eligible not for vote")
// } 
// let country : string [] = ["pakistan", "india", "japan", "china"];
// if (country.includes("pakistan")){
//     console.log("pakistan is in country list")
// }
// if (!country.includes ("america")){
//     console.log("america is not includes in an array")
// }
// TASK  25
//  let alien_color = "green"
//  if (alien_color == "green")
//     console.log("you earn 5 point")
// let alien_color: string = "red"
// if (alien_color == "red")
//     console.log("no output")
// TASK 26
//   let alien_color = "green"
//  if (alien_color == "green"){
//     console.log("player just earned 5 points for shooting the alien")
//  }else{
//     console.log("player just earned 10 point")
//  }
//TASK 27
// let alien_color: string = "red"
// if (alien_color == "green"){
//     console.log("5 points")
// }else if (alien_color == "yellow"){
//     console.log("10 point")
// } else {
//     console.log("15 points")
// }
// TASK 28
// let age : number = 76
// if (age < 2) {
//     console.log ("you are a baby")
// } else if (age < 4){
//     console.log("you are a toddler")
// } else if (age < 13){
//     console.log ("you are a kid")
// }else if (age < 20){
//     console.log("you are a teenager")
// }else if (age < 65){
//     console.log("you are a adult")
// }else {
//     console.log("you are older")
// }
// TASK 29
// let favorite_fruite : string [] = ["kivi", "orange", "apples"]
// if (favorite_fruite.includes("kivi")){
//     console.log("kivi")
// }
// if (favorite_fruite.includes("kivi")){
//     console.log("kivi")
// }
// if (favorite_fruite.includes("peach")){
//     console.log("you really like bananas")
// }
// if (favorite_fruite.includes("orange")){
//     console.log("orange")
// }
// if (favorite_fruite.includes("berry")){
//     console.log("you really like bananas")
// }
// TASK 30
// let users : string [] = ["sana", "sara", "alishba", "iqra", "mahnoor"]
// for(let user of users){
//     if (user === "sana"){
//         console.log("Hello sana, would you like to see a status report?")
//     }else {
//         console.log(`Hello ${user}, thank you logging in again`)
//     }
// }
//TASK 31
// let users : string [] = ["sana", "sara", "alishba", "saira", "saba"]
// if (users.length === 0){
//     console.log("Me need to find some users")
//     }else {
//         for (let user of users){
//             if (user === "sana"){
//                 console.log("Hello sana, would you like to see a status report?")
//             }else{
//                 console.log(`Hello ${user}, thank you logging in again`)
//             }
//         }
//     } 
// users = []
// if (users.length === 0){
//     console.log ("we need to find some users!")
// }
// TASK 32
// let current_users : string [] = ["sana", "sara", "saba", "alishba", "fatima"]
// let new_users : string [] = ["sana", "saba", "fatima", "aleeza", "noor"]
// let new_users_lower : string [] = current_users.map(user=> user.toLowerCase())
// for (let new_user of new_users){
//     if (current_users_lower.includes (new_user.toLowerCase())){
//         console.log(`sorry ${new_user}, that name is taken`)
//     }else {
//         console.log(`yes ${new_user}, is still in avaliable list`)
//     }
// }
// TASK 33
// let numbers : number [] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
//   if (number === 1){
//     console.log(`${numbers}st`) //1st
//   } else if (number === 2){
//     console.log(`${numbers}nd`) //2nd
//   } else if (number === 3){
//     console.log(`${numbers}rd`) //3rd
//   } else {
//     console.log(`${number}th`) //4th, 5th, 6th, 7th, 8th,9th,
//   }
// } 
// TASK 34
// let favorite_pizza : string [] = ["chicken", "tikka", "veg"]
// for (let pizza of favorite_pizza){
//   console.log(pizza)
// }
// console.log ("\n")
// for (let pizza of favorite_pizza){
//   console.log(`I really like ${pizza}pizza`)
// }
// console.log("\nI really love pizza!")
// TASK 35
// let animals : string [] = ["cat", "lion", "dog"]
// for (let animal of animals){
//   console.log(animal)
// }
// console.log ("\n")
// for (let animal of animals){
//   console.log(`A ${animal} has a long tail`)
// }
// TASK 36
// function makeShirt(size: string, text: string): void {
//   console.log(`\n you order a ${size} shirt that says ${text}`)
// }
// makeShirt(`large`, `"i love typescript"`)
// makeShirt(`medium`, `"i need a big shirt"`)
// TASK 37
// function makeShirt(size: string = 'large' text: string = `i love typescript`): void {
//     console.log(` you  have order a ${size} shirt that says ${text}`)
//    }
//    makeShirt();
//    makeShirt(`medium`)
//    //different message 
//    makeShirt(`small`, `i need a big shirt to wear`)
// TASK 38
// function describe_city(city: string, country: string = 'pakistan'): void{
//   console.log(`${city} is in ${country}`)
// }
// describe_city('karachi')
// describe_city('france', 'europe')
// describe_city('lahore', 'punjab')
// TASK 39
// function cityCountry(city: string, country: string): string {
//  return `${city}, ${country}` 
// }
// let c1 = cityCountry('lahore' , 'pakistan')
// let c2 = cityCountry('tokyo', 'japan')
// let c3 = cityCountry('paris', 'france')
// console.log(c1)
// console.log(c2)
// console.log(c3)
// TASK 40
// function makeAlbum (artist: string, title: string): {artist: string; title: string}  {
//   const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: title.charAt(0).toUpperCase() + title.slice
//   };
//   return dictionaries;
// }
// let album = makeAlbum("sana", "light")
// console.log(album)
// album = makeAlbum("bilal", "red wave")
// console.log(album)
// album = makeAlbum("hamza", "seenbreez")
// console.log(album)
// TASK 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
