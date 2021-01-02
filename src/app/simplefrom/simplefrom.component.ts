import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-simplefrom',
  templateUrl: './simplefrom.component.html',
  styleUrls: ['./simplefrom.component.scss']
})
export class SimplefromComponent implements OnInit {
userDetails;
  constructor() { }

  ngOnInit(): void {
    this.userDetails=new FormGroup({
      name:new FormControl('Ayush'),
      username:new FormControl('Mishra'),
      mobileNumber:new FormControl('8225022873'),
      address:new FormGroup({
        flatName:new FormControl('f5/22'),
        colonyName:new FormControl('Rishi Nagar'),
        CityName:new FormControl('Ujjain')
      }),
      contactList:new FormArray([])
    })
  }
  addToContact(){
  (<FormArray> this.userDetails.get('contactList')).push(new FormGroup({
    name:new FormControl(''),
    mobileNumber:new FormControl('')
  }))
  }
}
