import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  // { path: 'home', redirectTo: '', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  // { path: 'projects', component: ProjectsComponent},

  { path: 'professional', component: ProfessionalComponent
   },
  { path: 'personal', component: PersonalComponent,
    children: [
      { path: 'feedback', component: FeedbackComponent },
      { path: '', component: HomeComponent },
      
    ] },
  { path: 'relational', component: RelationshipComponent },
  { path: '**', component: ProfessionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
