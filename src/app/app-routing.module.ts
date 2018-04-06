import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovielistComponent} from './movielist/movielist.component';


const routes: Routes = [
    { path: '', redirectTo: '/movielist', pathMatch: 'full' },
    { path: 'movielist', component: MovielistComponent }
    
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}