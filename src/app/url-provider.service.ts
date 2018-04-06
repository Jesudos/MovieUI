import { Injectable } from '@angular/core';

@Injectable()
export class UrlProviderService {
 
  baseUrl:string;
  constructor() {
    this.baseUrl="http://localhost:8080/api/movie";
   }
 
   getCompleteServiceUrl(urlStub:string):string{
       return this.baseUrl + urlStub;
  }
}
