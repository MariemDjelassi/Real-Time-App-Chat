import { ChatRoomComponent } from './chat-room/chat-room.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', pathMatch : 'full', redirectTo : 'HomePage' },
  { path: 'HomePage', component: HomeComponent },
  { path: 'LoginPage', component: LoginComponent },
  { path: 'RegisterPage', component: RegisterComponent },
  { path: 'ChatRoom', component: ChatRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
