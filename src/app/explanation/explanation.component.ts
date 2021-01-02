import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent implements OnInit {
  constructor() {}

  userData = {
    category: 'Milk',
    description: 'Hello Milk',
    childreen: [
      {
        SubCategory: 'DaiyMilk',
        description: 'Hello From Daily Milk',
        questions: [
          {
            options: ['A', 'B', 'C', 'D'],
            question: 'Hello To my Question',
          },
          { options: ['A', 'B', 'C', 'D'], question: 'Hello To my Question2' },
        ],
      },
      {
        SubCategory: 'KitKat',
        description: 'Hello From Kitkat',
        questions: [
          {
            options: ['A', 'B', 'C', 'D'],
            question: 'Hello To my Question',
          },
          { options: ['A', 'B', 'C', 'D'], question: 'Hello To my Question2' },
        ],
      },
    ],
  };
  UserformData;
  ngOnInit(): void {
    this.UserformData = new FormGroup({
      category: new FormControl(this.userData.category),
      description: new FormControl(this.userData.description),
      childreen: new FormArray([]),
    });

    this.userData.childreen.map((res) => {
      (<FormArray>this.UserformData.get('childreen')).push(
        new FormGroup({
          SubCategory: new FormControl(res.SubCategory),
          description: new FormControl(res.description),
          questions: new FormArray([]),
        })
      );
    });
  }
}
