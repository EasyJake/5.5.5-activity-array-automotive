// Assuming that vehicleBaseClass.js is in the same directory
const Vehicle = require('./vehicleBaseClass.js');

// Derived Car class extending the Vehicle class
class Car extends Vehicle {
    constructor(make, model, year, color, mileage, fuel) {
        super(make, model, year, color, mileage);
        this.fuel = fuel;
        this.numberOfWheels = 4; // Standard car has 4 wheels
    }

    addPassengers(num) {
        this.passenger += num; // Add number of passengers
    }

    removePassengers(num) {
        this.passenger -= num; // Remove number of passengers
        if (this.passenger < 0) this.passenger = 0; // Ensure passengers don't go negative
    }

    addFuel(amount) {
        this.fuel += amount;
    }

    scheduleService() {
        if (this.mileage > 30000) {
            console.log("It's time for maintenance.");
            return true; 
        } else {
            console.log("It's not time for maintenance yet.");
            return false; 
        }
    }
}

// TO DO: Creating Instances and Testing Them
let car1 = new Car("Mercury", "A28 Sedan", "2023", "Red", 25000, 10);
let car2 = new Car("Mercury", "A28 Sedan", "2023", "Blue", 35000, 0);

console.log(car1.start());
console.log(car2.start());
console.log(car2.scheduleService());
car1.typeOfVehicle(4);
