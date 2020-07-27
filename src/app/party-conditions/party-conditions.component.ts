import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ExpensesCalculationService} from "../services/expenses-calculation.service";
import {assertNumber} from "@angular/core/src/render3/assert";

interface PartyConditions {
  PizzaSlicesPerPerson: number;
  PizzaSlicesPerPizza: number;
  PricePerPizza: number;
}

interface PartyResult {
  TotalAttendees: number;
  TotalCost: number;
}



@Component({
  selector: 'app-party-conditions',
  templateUrl: './party-conditions.component.html',
  styleUrls: ['./party-conditions.component.scss']
})
export class PartyConditionsComponent implements OnInit {

  attendeesForm: FormGroup;



  partyResult: PartyResult = {
    TotalAttendees: 0, TotalCost: 0
  }

  attendees = [{name: 'Who?', number: 1}];

  partyConditions: PartyConditions = {
    PizzaSlicesPerPerson: 0,
    PizzaSlicesPerPizza: 0,
    PricePerPizza: 0,
  };

  keysOfPartyConditions = Object.keys(this.partyConditions);
  partyConditionsFormGroup: FormGroup = new FormGroup({})


  constructor(private fb: FormBuilder, private ecs: ExpensesCalculationService) {

  }

  get attendeesArray(): FormArray {
    return this.attendeesForm.get("attendeesArray") as FormArray
  }

  ngOnInit() {

    this.attendeesForm = this.fb.group({
      attendeesArray: this.fb.array([]),
    });


    this.keysOfPartyConditions.forEach(key => {
      this.partyConditionsFormGroup.addControl(
        key.toString(), new FormControl(this.partyConditions[key])
      );
    })
  }


  addAttendee() {
    this.attendeesArray.push(this.newAttendee());
  }

  newAttendee(): FormGroup {
    return this.fb.group({
      name: '',
      number: 0
    })
  }

  removeAttendee(i: number) {
    this.attendeesArray.removeAt(i);
  }

  onSubmitAttendees() {

    let sumOfPeople: number =0;
    this.attendeesForm.value.attendeesArray.map(value => {
      sumOfPeople += value.number
    })
  }

  onCalculate(formGroup: FormGroup) {

    console.log(formGroup.getRawValue());


    this.partyResult.TotalAttendees = this.calculateTotalAttendees() || 0;
    this.partyResult.TotalCost = this.calculateTotalExpenes(this.partyResult.TotalAttendees,formGroup.getRawValue().PizzaSlicesPerPerson,formGroup.getRawValue().PizzaSlicesPerPizza, formGroup.getRawValue().PricePerPizza)



  }

  calculateTotalExpenes(TotalAttendees: number, PizzaSlicesPerPerson: number, PizzaSlicesPerPizza: number, PricePerPizza: number): number {
    return this.ecs.calculatePartyExpenses(TotalAttendees,PizzaSlicesPerPerson, PizzaSlicesPerPizza, PricePerPizza);
  }

  private calculateTotalAttendees(): number {
    let sumOfPeople: number = 0;
    this.attendeesForm.value.attendeesArray.map(value => {
      sumOfPeople += value.number
    })

    console.log(sumOfPeople)

    return sumOfPeople || 0;


  }
}
