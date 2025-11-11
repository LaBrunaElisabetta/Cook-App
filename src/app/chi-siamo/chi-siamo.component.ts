import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent {
  attivo = false;          // per la prima sezione
  mostraSeconda = false;   // per la seconda sezione

  ngOnInit(): void {
    setTimeout(() => {
      this.attivo = true;
    }, 300);
  }

  toggleSeconda(): void {
    this.mostraSeconda = !this.mostraSeconda;
  }
}
