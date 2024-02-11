// import { NumberValidator } from "./validator";

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let list: number[] = [1, 2, 3];
let list01: Array<number> = [1, 2, 3];

let messages: ['Message01', 'Message02', 3];

// const validator = new NumberValidator();
// const result01 = validator.validate(5);
// const result02 = validator.validate('abc');
// const result03 = validator.validate('+-123');
// console.log(result01);
// console.log(result02);
// console.log(result03);


namespace Vehicle {
    //typescript will know that citroen value is 2
    export enum Car {
        Peugeot = 1,
        //Citroen = 2
        Citroen,
    }
    export enum Truck {
        Ford = 'ford',
        Tesla = 'tesla',
    }

    export interface ISuv {
        model: string;
    }

    export class Suv implements ISuv {
        constructor(public model: string) {

        }
        // drive(): void{
        //     console.log(`I am driving ${this.model}`);            
        // }
        drive(): string {
            return `I am driving ${this.model}`;
        }
    }

    export class SmallerSuv extends Suv {
        constructor(model: string, private size: number) {
            super(model)
        }

        park(): void {
            console.log(`I am parking ${this.model} in size ${this.size}`);

        }

        drive(): string {
            return super.drive() + ' called from child!';
        }
    }
}

let strictMessage: [Vehicle.Car] = [Vehicle.Car.Citroen];

//nested object
const car: {
    engine: {
        power: number,
    },
    doors: number
} = {
    engine: {
        power: 560
    },
    doors: 4
}

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>('Generics');
let outputNum = identity(5);

// const set = new Set<number>();
// set.add(10);

class KeyValuePair<Key, Value>{
    public key: Key;
    public value: Value;

}

const map = new KeyValuePair<string, number>();
const mapKey: string = map.key;
const mapValue: number = map.value;

// const suv = new Vehicle.Suv('Renault');
// console.log(suv.drive());

const smallerSuv = new Vehicle.SmallerSuv('Renault', 1);
console.log(smallerSuv.drive());

const alfaRomeo: Vehicle.ISuv = new Vehicle.Suv('Alfa Romeo');
console.log(alfaRomeo.model);

//In TS we can create object of type ISuv without creating class Suv

const fiat: Vehicle.ISuv = {
    model: 'Fiat'
}
console.log(fiat.model);

console.log('alfa', alfaRomeo instanceof Vehicle.Suv); //true
console.log(fiat instanceof Vehicle.Suv); //false

