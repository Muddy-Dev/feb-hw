const digitalCraftsCrew = [
	"Jamie",
	"Dr. Vicki",
	"Jada",
	"Athena",
	"Dee",
	"Ernesto",
	"Robbie"
	];
    //Length of the array
	console.log(digitalCraftsCrew.length)
    //Add a new item to the END of the array
    digitalCraftsCrew.push("Milo")
	console.log(digitalCraftsCrew.push("Milo"))
    //Remove item from the END of the array
	digitalCraftsCrew.pop();
    //Get the index of "Dr. Vicki"
    const foundValue = digitalCraftsCrew.indexOf("Dr. Vicki");
    console.log(foundValue)