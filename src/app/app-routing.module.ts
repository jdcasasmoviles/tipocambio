import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertComponent } from './Operacion/convert/convert.component';
import { ListarComponent } from './Operacion/listar/listar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'convert',component:ConvertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
