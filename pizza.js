 	// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
	// HINT: likesPizza accepts a boolean.
	const myObject = {
        fullName: 'Milo Davanzo',
        age: 19,
        faveColor: 'Aqua',
        likesPizza: false
    }
	// 2. Create a new variable and set it equal to the faveColor property.
	color = myObject.faveColor
	// 3. Update your fullName to only be your last name.
	myObject.fullName = 'Davanzo'
	// 4. Delete the likesPizza property.
	delete myObject.likesPizza
	// 5. Add a new key that represents your fave food and mirrors the likePizza. The value will represent the fact that you like it :)
	// For example, I would like put likesCookies.
    myObject.likesChickenNuggets = true
    console.log(myObject)
    console.log(color)