import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesCalculationService {

  constructor() { }

  calculatePartyExpenses(TotalAttendees: number,PizzaSlicesPerPerson: number, PizzaSlicesPerPizza: number, PricePerPizza: number): number{
    return Math.ceil(((TotalAttendees * PizzaSlicesPerPerson) / PizzaSlicesPerPizza )* PricePerPizza / PricePerPizza ) * PricePerPizza;
  }
}
