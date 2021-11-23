import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppareilService]
})
export class AppComponent implements OnInit{

  secondes: number = 0;
  //counterSubscription: Subscription =  ;

  constructor() {}


  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('Une Erreur a été rencontrée !');
      },
      () => {
        console.log('Observable complétée ! ');
      }
    )
  }

}
