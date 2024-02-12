"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function () {
    function Box() {
        this.boxes = [];
    }
    Box.prototype.add = function (element) {
        this.boxes.push(element);
    };
    Box.prototype.remove = function () {
        this.boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.default = Box;
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
var boxStr = new Box();
boxStr.add('Pesho');
boxStr.add('Gosho');
console.log(boxStr.count);
boxStr.remove();
console.log(boxStr.count);
