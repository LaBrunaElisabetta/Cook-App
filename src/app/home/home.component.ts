import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ricette = [
    {
      titolo: 'Risotto ai Funghi Porcini',
      immagine: 'assets/risotto-funghi.jpg',
      alt: 'Risotto ai funghi porcini servito caldo',
      descrizione: 'Un classico autunnale, cremoso e profumato, ideale per valorizzare i funghi di stagione.'
    },
    {
      titolo: 'Torta salata zucca e gorgonzola',
      immagine: 'assets/torta-salata.jpg',
      alt: 'Torta salata con zucca e gorgonzola',
      descrizione: 'Un antipasto dal gusto deciso, con zucca dolce e gorgonzola intenso.'
    },
    {
      titolo: 'Omelette con zucca e funghi',
      immagine: 'assets/omelette-zucca.jpg',
      alt: 'Omelette con zucca e funghi',
      descrizione: 'Una ricetta veloce e nutriente, perfetta per una cena leggera nelle sere d\'autunno.'
    },
    {
      titolo: 'Vellutata di castagne e porri',
      immagine: 'assets/vellutata-castagne.jpg',
      alt: 'Vellutata cremosa di castagne e porri',
      descrizione: 'Una zuppa calda e avvolgente, perfetta per le giornate più fredde.'
    },
    {
      titolo: 'Strudel di mele e noci',
      immagine: 'assets/strudel-mele.jpg',
      alt: 'Strudel autunnale con mele e noci',
      descrizione: 'Un dolce tipico del nord Italia, con frutta secca e profumo di cannella.'
    }
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }
}
