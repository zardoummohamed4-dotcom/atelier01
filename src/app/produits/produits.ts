import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

import { RouterLink } from '@angular/router';
@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-produits',
  standalone: true,
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class ProduitsComponent implements OnInit  {
  produits! : Produit[]; //un tableau de Produit


  constructor(private produitService: ProduitService) {
   //this.produits=[]
     
    
   }
  
   ngOnInit() {
    this.produits = this.produitService.listeProduits();
     }
   supprimerProduit(p: Produit) 
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p);
  }

}

