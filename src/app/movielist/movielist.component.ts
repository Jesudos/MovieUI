import { Component, OnInit } from '@angular/core';
import {MovielistService} from '../movielist.service';
import {Router} from '@angular/router';
import { error } from 'selenium-webdriver';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  providers:[MovielistService]
})
export class MovielistComponent implements OnInit {
  
  loading=false;
  movieList:any=[];

  constructor(
    private router:Router,
    private movieListService:MovielistService,
    private alertService : AlertService
  ) { 
    this.movieListService.getMovieList();
  }

  ngOnInit() {
    this.movieListService.getMovieList()
    .subscribe(
      data =>{
        this.movieList=data;
      },
      error=>{
         this.alertService.error(error.error.message);
         this.loading=false;   
      }
    );
  }
redirect(){
  this.router.navigate(['']);
}
}
