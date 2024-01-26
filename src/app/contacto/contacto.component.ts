import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formulario = this.formBuilder.group({
    nombre: [''],
    telefono: [''],
    correo: ['']
  });

  constructor(private formBuilder:FormBuilder){}
}
