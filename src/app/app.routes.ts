import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits';
import { AddProduitComponent } from './add-produit/add-produit';
import { UpdateProduitComponent } from './update-produit/update-produit';

export const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"}
];



