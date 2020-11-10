import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'

  },

  {
    path: 'professorCadastrar',
    component: ProfessorCadastrarComponent

  },
  {
    path: 'ProfessorConsultar',
    component: ProfessorConsultarComponent
  },
  {
    path: 'ProfessorEditar',
    component: ProfessorEditarComponent
  },
  {
    path: 'CursoCadastrar',
    component: CursoCadastrarComponent
  },
  {
    path: 'EditarCurso',
    component: EditarCursoComponent
  },
  {
    path: 'CursoConsultar',
    component: CursoConsultarComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
