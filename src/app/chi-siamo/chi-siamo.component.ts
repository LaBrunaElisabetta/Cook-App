import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {
  attivo = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.attivo = true;
    }, 300);
  }
}
