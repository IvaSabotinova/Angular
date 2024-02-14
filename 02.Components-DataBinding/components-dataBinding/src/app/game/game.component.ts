import { Component } from "@angular/core";

interface Game {
    title?: string,
    price: number,
    img: string
}

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    shouldPriceBeChocolate: boolean;
    games: Game[] = [
        { title: 'Minecraft', price: 10, img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1517/nHNEJjVSCYL7CCblJgybzatE.png' },
        { title: 'Candy Crush', price: 0, img: 'https://media.pocketgamer.com/artwork/na-wfertn/candy_crush_saga_5th_birthday_app_icon.png' },
        { title: 'Counter Strike', price: 120, img: 'https://www.slashgear.com/img/gallery/counter-strike-2-is-officially-coming-this-summer-to-replace-csgo/l-intro-1679510157.jpg' },
    ]

    constructor() {
        for (const game of this.games) {
            console.log(game.title?.length);

        }
    }

    handleExpandContentClick(gamesContainer: HTMLElement): void {
        //alert('Expand Clicked');
        //this.shouldPriceBeChocolate = this.shouldPriceBeChocolate ? false : true;
        this.shouldPriceBeChocolate = !this.shouldPriceBeChocolate;

        console.log(gamesContainer.children);

    }
}