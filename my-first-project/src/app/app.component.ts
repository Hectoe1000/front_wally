import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { PageNavbarComponent } from "./template/page-navbar/page-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateModule, PageNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
}
