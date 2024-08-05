

//There are two methods to make object's properties non-writable

//1. Object.freeze(obj)
//Add New Properties	Not allowed	 
//Delete Properties	Not allowed	
// Modify Properties	Not allowed
// Configurable      	Properties become non-writable and non-configurable
//The prototype chain is also frozen


//2. Object.seal(obj)
//Add New Properties	Not allowed	 
//Delete Properties	Not allowed	
// Modify Properties Allowed if properties are writable
//Configurable Properties become non-configurable but remain writable if they were writable before sealing
//The prototype chain is not affected
//Partial immutability, allowing value modifications