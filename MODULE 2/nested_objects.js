let person=
{
    name:"khan",
    age:18,
    gender:"male",
    eyecolor:"black",
    cars:
    {
        car1:"honda",
        car2:"BMW"
    }
}
for( i in person.cars){ 
    console.log(person.cars[i]);
}