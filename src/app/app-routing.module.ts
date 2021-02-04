import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EntregasComponent } from './entregas/entregas.component';
import { HomeComponent } from './home/home.component'
import { ModelosComponent } from './modelos/modelos.component';

const routes: Routes = [ 
  {path: '', component:HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'modelos', component: ModelosComponent},
  {path: 'entregas', component: EntregasComponent},
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
