import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieComponent } from './movie/movie.component';
import { AlertComponent } from './alert/alert.component';
import {MovielistService} from './movielist.service';
import {AlertService} from './alert.service';
import { HttpClientModule }    from '@angular/common/http';
import {UrlProviderService} from './url-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovielistComponent,
    MovieComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovielistService,
    AlertService,
    UrlProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
