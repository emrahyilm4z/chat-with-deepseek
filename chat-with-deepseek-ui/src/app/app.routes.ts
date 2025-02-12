import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  { path: 'app-chat', component:  ChatComponent },
  { path: '', component: ChatComponent },
];
