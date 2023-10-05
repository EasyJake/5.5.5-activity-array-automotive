// Create an instance of the Vehicle class and display its make
let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

// Derived Car class extending the Vehicle class
class Car extends Vehicle {
    constructor(make, model, year, color, mileage, fuel) {
        super(make, model, year, color, mileage);
        this.fuel = fuel;
        this.numberOfWheels = 4; // Assuming a standard car has 4 wheels
    }

    loadPassenger(num) {
        this.passenger += num; // Add the number of passengers
    }

    // Overriding the start method to consider fuel
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

    // Method to check if the car needs service based on mileage
    scheduleService() {
        if (this.mileage > 30000) {
            return true; // Indicates that it's time for maintenance
        }
        return false; // Indicates that it's not time for maintenance yet
    }
}

// TO DO: Creating Instances and Testing Them
// Create and test instances of the Car class

let car1 = new Car("Mercury", "A28 Sedan", "2023", "Red", 25000, 10);
let car2 = new Car("Mercury", "A28 Sedan", "2023", "Blue", 35000, 0); // Car with 0 fuel

console.log(car1.start()); // Should print "engine started...!!!" and return true
console.log(car2.start()); // Should print "engine cannot start..." and return false
console.log(car2.scheduleService()); // Should return true since mileage is greater than 30000

// Test the inherited method from the Vehicle class
car1.typeOfVehicle(4); // Should print "Mercury A28 Sedan is a Car"
