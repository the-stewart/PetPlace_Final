// menu.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentPage: string = 'inicio';

  changePage(page: string): void {
    this.currentPage = page;
  }
}
