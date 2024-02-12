class Box<T>{
    private boxes: T[];
    constructor() {
        this.boxes = [];
    }

    public add(element: T): void {
        this.boxes.push(element);
    }

    public remove(): void {
        this.boxes.pop();
    }

    get count(): number {
        return this.boxes.length;
    }
}

export default Box;

let box = new Box<number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let boxStr = new Box<string>();
boxStr.add('Pesho');
boxStr.add('Gosho');
console.log(boxStr.count);
boxStr.remove();
console.log(boxStr.count);