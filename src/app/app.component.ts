import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
   
  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
     "August", "September", "October", "November", "December"];



  myMessage()
  {

alert("hello");

}
}