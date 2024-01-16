let person = 
{
    fName : "Robbie" ,
    age : 19 ,
    favouriteColour : "red" , 
    sayHello: function(fName)
        {
            console.log("Hello" + fName  + "!")
        },
    getAge: function() 
    {
        return person.age
    }

}
//define global variable age
const age = person.getAge()

console.log(person)
console.table(person)
console.log(age) //output 19
// use passed argument in callback function
person.sayHello(" Sam")
// add new property
person.favouriteFood = "pizza" , "french fry"

console.log(person.favouriteFood, ) 
// pizza , french fry

let car = 
{
    make: `Toyota` , 
    model: `Yaris` , 
    colour: `Grey`
}
// log it all to console for Advertising 
console.log( " this is a " ,car.make , "It is  a "  ,car.make , car.model , "and it's available in" , car.colour) 
