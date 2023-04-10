class Vehicle {
  //==== one way to add color property with a constructor ====//
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  //==== shorter way to do the same thing ====//
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep!');
  }
}

// by extending Vehicle class, Car has all the methods in Vehicle
// class Car extends Vehicle {
//   // I can override the method inherited from Vehicle
//   private drive(): void {
//     console.log('vroom');
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

//====== 3 method modifiers in class ======//
// - public (any instance of the class can access )
// - private (only the class where the method is defined can access)
// - protected (parent and children of the class can access)

const vehicle = new Vehicle('orange');
// I cannot call honk since it's marked as protected
// vehicle.honk();
console.log(vehicle.color);

// const car = new Car();
// car.startDrivingProcess();
// car.honk();

let index1: number = 1;

function turingTest() {
  let index2: number = 2;

  if (index2 > index1) {
    let index3: number = 3;
    index3++;
  }

  while (index1 < index2) {
    let index4: number = 4;
    index1++;
  }

  console.log(index1);
  console.log(index2);
  // console.log(index3);
  // console.log(index4);
}

// turingTest();

// function Foo() {
//   this.bar = 10;
// }
// Foo.prototype.bar = 42;

// var foo = new Foo();
// console.log(foo.bar);

// delete foo.bar;
// console.log(foo.bar);

// b: any = [];
// let a = [] + b + 'turing'.split('');
// console.log(a);

// var languages = ['1', '2', '3'];
// languages.length = 0;
// languages.push('4');
// console.log(languages);

// var p = new Promise((r, rej) => {
//   rej(Error('message'));
// });

// p.catch((error: any) => console.log(error.message));
// p.catch((error: any) => console.log(error.message));

// const a = [1, 2];
// a[0] = 10;
// a[1] = 20;
// a[2] = 30;
// console.log(a);

// let arr = [1, 'turing', { x: 2 }, [3, 4]];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'turing') arr.splice(i, 1);
//   else console.log(arr[i]);
// }

// let a = [1, 'a', { x: 1 }, [1, 2], { x: 1 }];
// console.log(a.indexOf({ x: 1 }));

// const x = [1, 2, 3];
// x[-1] = -1;
// console.log(x[x.indexOf(10000)]);

// console.log(typeof x);
// console.log(Number('10') - 10 == 0);

// class TuringPoint {
//   x: number;
//   y: number;
// }
// interface Point3d extends TuringPoint {
//   z: number;
// }
// let point3d: Point3d = { x: 3, y: 8, z: 9 };
// console.log(point3d);

// module Vehicle {
//   class Car {
//     constructor(public make: string, public model: string) {}
//   }
//   var tesla = new Car('tesla', 's');
// }

// var honda = new Vehicle.Car('honda', 'crv');
// console.log(honda);

var index = 1,
  count = {};

count: {
  begin: 2;
  baz: ++index;
}

// count.begin + count.index + index;
