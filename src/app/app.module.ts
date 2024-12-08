import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChartComponent } from './chart/chart.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalComponent } from './personal/personal.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PopupComponent } from './popup/popup.component';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ContactComponent,
    FeedbackComponent,
    ProjectsComponent,
    ChartComponent,
    ScrollButtonComponent,
    SkillsComponent,
    ProfessionalComponent,
    PersonalComponent,
    RelationshipComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule // Required for Angular Material
  ],
  providers: [httpInterceptorProviders, 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent] // Only needed for Angular versions before 9
})
export class AppModule { }
