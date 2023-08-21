const student= {
    fname:"Sanji",
    lname: "Dutta",
    age: 19,
    fullname: function()
    {
        console.log("Student full name is:", this.fname+""+this.lname);
    }
};

student.fullname()