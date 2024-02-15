import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";

export interface Game {
    title?: string,
    price: number,
    img: string
}

@Component({
    selector: 'su-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['../../game/game.component.css']
})
export class GameItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked {
    @ViewChild('title')
    title: ElementRef<HTMLElement>;
   //private _game: Game;
     @Input() sourceGame: Game;

    // @Input() set sourceGame(game: Game) {        
    //     this._game = game;
    //     console.log(`Game ${this._game.title} was changed!`);
    // }

    constructor(){
        console.log('Constructor', this.sourceGame);
        
    }

    ngOnInit(): void {
        console.log('GameItem Component created!', this.sourceGame.title);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('GameItem Component changes!', changes);

    }

    ngAfterViewInit(): void {
        console.log('GameItem Component initialized', this.title);

    }

    ngAfterViewChecked(): void {
        console.log('GameItem Component #AfterViewChecked!');

    }

    ngDoCheck(): void {
        console.log('GameItem Component checking!');

    }

    ngOnDestroy(): void {
        console.log('GameItem Component destroyed!');

    }
}