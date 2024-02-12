abstract class Melon {
    public weight: number;
    public melonSort: string;
    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        let elementName = '';
        if (this instanceof Watermelon) {
            elementName = 'Water';
        } else if (this instanceof Firemelon) {
            elementName = 'Fire';
        }
        else if (this instanceof Earthmelon) {
            elementName = 'Earth';
        }
        else if (this instanceof Airmelon) {
            elementName = 'Air';
        }

        return `Element: ${elementName}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }

}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }

}
class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }
}

class Melolemonmelon extends Airmelon {
    private elements: Array<string> = ['Water', 'Fire', 'Earth', 'Air'];
    private currentIndex: number = -1;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)

    }
    
    public morph(): void {
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    }

    public toString(): string {
        return `Element: ${this.elements[this.currentIndex]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }

}

//let test: Melon = new Melon(100, 'Test');
//error TS2511: Cannot create an instance of an abstract class.

let waterMelon: Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(waterMelon.toString());

let melolemonMelon: Melolemonmelon = new Melolemonmelon(20, 'BigMelon');

melolemonMelon.morph();
console.log(melolemonMelon.toString());

melolemonMelon.morph();
console.log(melolemonMelon.toString());

melolemonMelon.morph();
console.log(melolemonMelon.toString());

melolemonMelon.morph();
console.log(melolemonMelon.toString());

melolemonMelon.morph();
console.log(melolemonMelon.toString());