class Person {
 constructor(firstName, lastName, dob, address, city, state, zipCode, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.email = email;
    this.phoneNumber = phoneNumber;
 }

 
 displayPerson() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`DOB: ${this.dob}`);
    console.log(`Address: ${this.address}, ${this.city}, ${this.state} ${this.zipCode}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone Number: ${this.phoneNumber}`);
 }
}


let person1 = new Person("Nandhini", "Perumal", "12/02/1994", "57g  arumugam street", "tirumangalam", "tamilnadu", "625706", "nandhuvigneshpb13@gmail.com", "8883020083");
person1.displayPerson();
