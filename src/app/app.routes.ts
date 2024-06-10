import { Routes } from '@angular/router';
import { MainPageComponent } from './components/landingPage/main-page/main-page.component';
import { FavoritesComponent } from './components/favorites/favorites/favorites.component';
import { RegisterComponent } from './components/registration/register/register.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'registration', component: RegisterComponent},
    {path: 'favorites', component: FavoritesComponent}
];
