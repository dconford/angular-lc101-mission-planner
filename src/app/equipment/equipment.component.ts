import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   //remainingCargoMass: number = this.maximumAllowedMass - this.cargoMass;
   maxItems: number = 10;
   //holdNearlyFull: boolean = false;
   //hideCargo: boolean = false;
  //  buttonState: boolean[] = [true, true, true];

   constructor() { }

   ngOnInit() { }

 //  for equipmentItems.length. loop through list and see if this was selected item. see if selecting another one will be 
 // more than max weight. if so disable button
//    Bind the disabled attribute to the following conditions:

//    If all of the cargo hold spots are full (cargoHold.length === maxItems), disable the button.
//    If adding the item to the cargo hold would exceed maximumAllowedMass, disable the button.

// If active, make the button an attractive color.
   // Code your addItem function here:
   addItem(item: object): boolean {
      this.cargoHold.push(item);
      this.cargoMass += item['mass'];
      return this.maximumAllowedMass - this.cargoMass <= 200;
   }
}
