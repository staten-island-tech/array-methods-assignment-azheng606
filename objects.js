const kids = [
    {
        Name: "Sofia",
        Age: 16,
        Hair: "Brown",
        GPA: -4,
        Siblings: ["ana","cara"],
    },
    {
        Name: "Sofie",
        Age: 6,
        Hair: "Brown",
        GPA: 4.0,
        Siblings: ["snow","snap"],
    },
    {
        Name: "Soft",
        Age: 11,
        Hair: "Red",
        GPA: 2.8,
        Siblings: ["are","sare"],
    },
    {
        Name: "So",
        Age: 11,
        Hair: "Blonde",
        GPA: 2.8,
        Siblings: ["marry","john"],
    },
    ];
    
    
    kids.forEach ((kid)=> console.log(kid.Name))

    kids.forEach ((kid)=> 
    kid.Siblings.forEach((Sibling) => console.log(Sibling)))
    const out = kids.filter((kid)=> kid.Age < 10)
    console.log(out);