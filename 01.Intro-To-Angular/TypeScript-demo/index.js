// import { NumberValidator } from "./validator";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var list = [1, 2, 3];
var list01 = [1, 2, 3];
var messages;
// const validator = new NumberValidator();
// const result01 = validator.validate(5);
// const result02 = validator.validate('abc');
// const result03 = validator.validate('+-123');
// console.log(result01);
// console.log(result02);
// console.log(result03);
var Vehicle;
(function (Vehicle) {
    //typescript will know that citroen value is 2
    var Car;
    (function (Car) {
        Car[Car["Peugeot"] = 1] = "Peugeot";
        //Citroen = 2
        Car[Car["Citroen"] = 2] = "Citroen";
    })(Car = Vehicle.Car || (Vehicle.Car = {}));
    var Truck;
    (function (Truck) {
        Truck["Ford"] = "ford";
        Truck["Tesla"] = "tesla";
    })(Truck = Vehicle.Truck || (Vehicle.Truck = {}));
    var Suv = /** @class */ (function () {
        function Suv(model) {
            this.model = model;
        }
        // drive(): void{
        //     console.log(`I am driving ${this.model}`);            
        // }
        Suv.prototype.drive = function () {
            return "I am driving ".concat(this.model);
        };
        return Suv;
    }());
    Vehicle.Suv = Suv;
    var SmallerSuv = /** @class */ (function (_super) {
        __extends(SmallerSuv, _super);
        function SmallerSuv(model, size) {
            var _this = _super.call(this, model) || this;
            _this.size = size;
            return _this;
        }
        SmallerSuv.prototype.park = function () {
            console.log("I am parking ".concat(this.model, " in size ").concat(this.size));
        };
        SmallerSuv.prototype.drive = function () {
            return _super.prototype.drive.call(this) + ' called from child!';
        };
        return SmallerSuv;
    }(Suv));
    Vehicle.SmallerSuv = SmallerSuv;
})(Vehicle || (Vehicle = {}));
var strictMessage = [Vehicle.Car.Citroen];
//nested object
var car = {
    engine: {
        power: 560
    },
    doors: 4
};
function identity(arg) {
    return arg;
}
var output = identity('Generics');
var outputNum = identity(5);
// const set = new Set<number>();
// set.add(10);
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
var map = new KeyValuePair();
var mapKey = map.key;
var mapValue = map.value;
// const suv = new Vehicle.Suv('Renault');
// console.log(suv.drive());
var smallerSuv = new Vehicle.SmallerSuv('Renault', 1);
console.log(smallerSuv.drive());
var alfaRomeo = new Vehicle.Suv('Alfa Romeo');
console.log(alfaRomeo.model);
//In TS we can create object of type ISuv without creating class Suv
var fiat = {
    model: 'Fiat'
};
console.log(fiat.model);
console.log('alfa', alfaRomeo instanceof Vehicle.Suv); //true
console.log(fiat instanceof Vehicle.Suv); //false
