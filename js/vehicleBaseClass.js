class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
        this.fuel = 0; // I've added this because it seems to be used in the class but wasn't defined.
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel -= 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            console.log("You need to start the engine first."); // Replaced alert with console.log
        }
    }

    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel -= 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel -= 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            console.log("You need to start the engine first."); // Replaced alert with console.log
        }
    }

    stop() {
        this.started = false;
    }

    drive() {
        this.accelerate();
    }

    brake() {
        this.decelerate();
    }

    autoPark() {
        // to be implemented
    }

    autoDrive() {
        // to be implemented
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a Car");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

module.exports = Vehicle;
