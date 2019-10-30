import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  pieceBeingEdited: string = '';
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(equipPiece: string) {
    this.equipment.push(equipPiece);
  }
  
  remove(equipPiece: string) {
    let index = this.equipment.indexOf(equipPiece);
    this.equipment.splice(index, 1)
  }

  edit(equipPiece: string) {
    this.pieceBeingEdited = equipPiece;
 }
 
  save(pieceBeingEdited: string, equipPiece: string) {
  //save() {
    //let index = this.equipment.indexOf(equipPiece)
    //this.equipment.splice(index,1,this.pieceBeingEdited);
    this.pieceBeingEdited= equipPiece;
    //equipPiece = this.pieceBeingEdited;
    this.pieceBeingEdited = null;
  }

}



