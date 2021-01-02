import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      name:new FormControl(''),
      username:new FormControl(''),
      mobileNumber:new FormControl()
    })
  }

}
