import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-splas',
  templateUrl: './splas.page.html',
  styleUrls: ['./splas.page.scss'],
})
export class SplasPage implements OnInit {

  constructor(private router : Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home')
    },2000)
  }

  ngOnInit() {
  }

}
