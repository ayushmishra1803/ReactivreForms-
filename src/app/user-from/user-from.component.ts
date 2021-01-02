import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.scss'],
})
export class UserFromComponent implements OnInit {
  constructor() {}
  childreen = [
    { user: 'Angular', age: 12, value: 20 },
    { user: 'Reactive', age: 12, value: 20 },
    { user: 'Froms', age: 12, value: 20 },
  ];
  userForm: any;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      user: new FormControl('Ayush'),
      userData: new FormArray([]),
    });
    this.childreen.map((res) => {
      (<FormArray>this.userForm.get('userData')).push(
        new FormGroup({
          user: new FormControl(res.user),
          age: new FormControl(res.age),
          value: new FormControl(res.value),
        })
      );
    });
    console.log(this.userForm.value.userData);
  }
  get UserDataFrom() {
    return this.userForm.get('userData');
  }
  submit() {
    console.log(this.userForm.value.userData);
  }
}
