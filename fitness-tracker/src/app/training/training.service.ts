import { Observable, Subject } from 'rxjs';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { collectionData, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { inject, Injectable } from '@angular/core';

import { Exercise } from './exercise.model';

Injectable()
export class TrainingService {
    private availableExercises: Exercise[] = [];
    // { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    // { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    // { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    // { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    //];
    private runningExercise: Exercise;
    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    private exercises: Exercise[] = [];
    private db: Firestore = inject(Firestore);
    exercises$: Observable<Exercise[]>;


    fetchAvailableExercises() {
        //return this.availableExercises.slice();
        const exercisesCollection = collection(this.db, 'AvailableExercises'); // get a reference to the AvailableExercises collection    
        this.exercises$ = collectionData(exercisesCollection) as Observable<Exercise[]>; // get documents (data) from the collection
        this.exercises$.subscribe((result) => {
            this.availableExercises = result;
            console.log(result);
            
            this.exercisesChanged.next([...this.availableExercises]);
        });
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    completeExercise() {
       // this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.addDataToDatabase({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        // this.exercises.push({
        //     ...this.runningExercise,
        //     duration: this.runningExercise.duration * (progress / 100),
        //     calories: this.runningExercise.calories * (progress / 100),
        //     date: new Date(),
        //     state: 'cancelled'
        // });
        this.addDataToDatabase({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getCompletedOrCancelledExercises() {
        return this.exercises.slice();
    }

    private addDataToDatabase(exercise: Exercise){        
        const collectionRef = collection(this.db, 'FinishedExercises');

        // Add documents to the new collection
         addDoc(collectionRef, exercise);         
    }
}