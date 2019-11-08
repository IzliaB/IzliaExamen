import { Component, OnInit } from '@angular/core';
import {InstagramService} from '../services/instagram.service';
import { modeloInstagram } from '../Models/instagram'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExamenI';
  
  name: string;


    private images=[
      {src: '../assets/1.jpg'},
      {src:'../assets/2.jpg'},
      {src:'../assets/3.jpg'},
      {src:'../assets/4.jpg'},
      {src:'../assets/5.jpg'},
      {src:'../assets/6.jpg'},
    ];
    
    private currentImage: any;
  
    constructor(private _InstagramService: InstagramService) {
      this.currentImage = this.updateRandomImage();
    }
  
    ngOnInit() {
       setInterval(() => {
         this.currentImage = this.updateRandomImage();
       }, 5000);
    }
  
    updateRandomImage() {
      const r= Math.floor(Math.random() * (this.images.length - 1)) + 0;
      return this.images[r];
    }
  
    getImage() {
      return this.currentImage.src;
    }
  
  }




