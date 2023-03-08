// this interface is very specific to cars
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

// This is more generic, therefore more reusable
interface Reportable {
  // I can add function
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const mydrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

printSummary(mydrink);
