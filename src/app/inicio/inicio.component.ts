import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MenuComponent,NgOptimizedImage],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
