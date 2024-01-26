import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'consejos', component: ConsejosComponent },
    { path: 'contacto', component: ContactoComponent },
];
