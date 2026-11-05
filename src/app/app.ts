import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 jo_ido_van: boolean = false;

 showModal: boolean = true;
 name = 'Irén';
 fruitLists= ["alma","korte","barack","szilva"];


 toggleGood(){
  this.jo_ido_van = !this.jo_ido_van

 }

 closeModal(){
  this.showModal = false
 }



 createSome(){
  this.showModal = true
 }


 employeeList= [
  
  {id:1, name:"Erős István", city:"Szeged"},
  {id:2, name:"Huncut Jakab", city:"Szeszélyes Katlan"},
  {id:3, name:"Mugiwara Luffy", city:"Elbaph"}
]

}
