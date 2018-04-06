import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UrlProviderService} from './url-provider.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovielistService {
  private getMovieListUrl:string;

  constructor(
    private http : HttpClient,
    private urlProv : UrlProviderService)
     { 
    this.getMovieListUrl=urlProv.getCompleteServiceUrl("");
  }
  getMovieList():Observable<any>{
    return this.http.get<any>(this.getMovieListUrl);
  }

}
