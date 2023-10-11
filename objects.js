const kids = [
    {
        Name: "Sofia",
        Age: 16,
        Hair: "Brown",
        GPA: -4,
    },
    {
        Name: "Sofie",
        Age: 6,
        Hair: "Brown",
        GPA: 4.0,
    },
    {
        Name: "Soft",
        Age: 11,
        Hair: "Red",
        GPA: 2.8,
    },
    {
        Name: "So",
        Age: 11,
        Hair: "Blonde",
        GPA: 2.8,
    },
    ];
    
    
    kids.forEach ((el)=> console.log(el.Name));
    kids.forEach ((el)=> console.log (el.Hair));
    
    
    
    const result = kids.filter((kid) => kid.Name = "So");
    
    console.log(result);
    