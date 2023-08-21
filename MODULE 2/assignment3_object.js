let pet=
{
    type:"dog",
    name:"husky",
    legs:"4",
    color:"white",
    food:
    {
        food1:"milk",
        food2:"bone",
        food3:"pedigree"
    }
}
for (i in pet.food)
{
    console.log(pet.food[i]);
}