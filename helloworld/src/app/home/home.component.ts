import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  title="Bienvenue";
  imageUrl="assets/image.jpg";

  nameList=['Ali','Ahmed','Imen'];
  condition=true
  date=new Date()

 

  constructor() { }

  ngOnInit(): void {
  }

}
