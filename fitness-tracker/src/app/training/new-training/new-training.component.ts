import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent implements OnInit {
  // @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];
  private db: Firestore = inject(Firestore);
  exercises$: Observable<Exercise[]>;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    // this.exercises = this.trainingService.getAvailableExercises();  
    const exercisesCollection = collection(this.db, 'AvailableExercises'); // get a reference to the AvailableExercises collection    
    this.exercises$ = collectionData(exercisesCollection) as Observable<Exercise[]>; // get documents (data) from the collection
    this.exercises$.subscribe(result => {
      this.exercises = result;
      console.log(result);
    });
  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit();          
    this.trainingService.startExercise(form.value.exerciseId);
  }
}
