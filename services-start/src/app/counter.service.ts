export class CounterService{
    activeToInactiveAction = 0;
    inactiveToActiveAction = 0;

    incrementInactiveToActive(){
        this.inactiveToActiveAction++;
        console.log('Inactive to active actions - ' + this.inactiveToActiveAction);        
    }

    incrementActiveToInactive(){
        this.activeToInactiveAction++;
        console.log('Active to inactive actions - ' + this.activeToInactiveAction);
    }
}