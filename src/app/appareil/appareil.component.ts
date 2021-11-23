import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string = "";
  @Input() appareilStatus: string = ""; 
  @Input() indexOfAppareil: number = -1; 
  @Input() id: number = 0;
  

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus (){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'allumé'){
      return 'green';
    }
    else{
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }
}
