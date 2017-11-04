import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { CrisisListComponent } from './components/crisis-list/crisis-center.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [

  // { path: 'crisis-center', component: CrisisCenterComponent},
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
