import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSetterComponent } from './components/data-setter/data-setter.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'exercise-1', component: ItemListComponent, pathMatch: 'full'},
  {path: 'exercise-2', component: DataSetterComponent, pathMatch: 'full'},
  {path: 'exercise-3', component: ReactiveFormComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
