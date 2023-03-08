class Vehicle {
  protected honk(): void {
    console.log('beep!');
  }
}

// by extending Vehicle class, Car has all the methods in Vehicle
class Car extends Vehicle {
  // I can override the method inherited from Vehicle
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

//====== 3 method modifiers in class ======//
// - public (any instance of the class can access )
// - private (only the class where the method is defined can access)
// - protected (parent and children of the class can access)

const vehicle = new Vehicle();
// I cannot call honk since it's marked as protected
vehicle.honk();

const car = new Car();
car.startDrivingProcess();
car.honk();
