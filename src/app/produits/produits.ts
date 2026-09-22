import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
@Component({
  imports: [CommonModule],
  selector: 'app-produits',
  styleUrl: './produits.css',
  templateUrl: './produits.html',
})

export class ProduitsComponent  {
produits : string[]; 
constructor() {
this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
}

}
