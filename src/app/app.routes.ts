import { Routes } from '@angular/router';
import { Books } from './pages/books/books';
import { Members } from './pages/members/members';

export const routes: Routes = [

    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', component: Books },
    { path: 'members', component: Members },

];
