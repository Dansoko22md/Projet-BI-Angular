import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../shared/kpi-card.component';
import { PredictionFormComponent } from '../shared/prediction-form.component';

@Component({
  selector: 'app-achats',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, PredictionFormComponent],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Direction des Achats & Production</h2>
        <p class="text-gray-600 mb-2">Tableau de bord pour l'optimisation de l'approvisionnement et de la production</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-kpi-card
          title="Niveau des Stocks"
          [value]="kpis.stocks"
          description="Taux d'occupation optimal des entrepôts"
          [isUpdating]="updating.stocks"
        ></app-kpi-card>
        <app-kpi-card
          title="Efficacité Production"
          [value]="kpis.efficacite"
          description="Taux de rendement global"
          [isUpdating]="updating.efficacite"
        ></app-kpi-card>
        <app-kpi-card
          title="Fournisseurs Durables"
          [value]="kpis.fournisseurs"
          description="Proportion de fournisseurs certifiés durables"
          [isUpdating]="updating.fournisseurs"
        ></app-kpi-card>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <app-prediction-form
          title="Prédiction des Besoins en Stock"
          [fields]="[
            { id: 'demande', label: 'Demande prévue (unités)', type: 'number', placeholder: '1000', min: 0 },
            { id: 'delai', label: 'Délai de livraison (jours)', type: 'number', placeholder: '30', min: 1 },
            { id: 'saisonalite', label: 'Facteur de saisonnalité', type: 'number', placeholder: '1.2', min: 0.1, max: 5, step: 0.1 }
          ]"
          (onPrediction)="updateKPIs($event)"
          (onReset)="resetKPIs()"
        ></app-prediction-form>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Objectifs de Développement Durable</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 12 : Consommation et production responsables
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 13 : Lutte contre les changements climatiques
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 9 : Industrie, innovation et infrastructure
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AchatsComponent {
  initialKpis = {
    stocks: '85%',
    efficacite: '92%',
    fournisseurs: '78%'
  };

  kpis = { ...this.initialKpis };

  updating = {
    stocks: false,
    efficacite: false,
    fournisseurs: false
  };

  updateKPIs(event: any) {
    Object.keys(this.updating).forEach(key => this.updating[key as keyof typeof this.updating] = true);
    
    setTimeout(() => {
      this.kpis = {
        stocks: `${Math.round(80 + Math.random() * 15)}%`,
        efficacite: `${Math.round(85 + Math.random() * 10)}%`,
        fournisseurs: `${Math.round(75 + Math.random() * 20)}%`
      };
      
      Object.keys(this.updating).forEach(key => this.updating[key as keyof typeof this.updating] = false);
    }, 500);
  }

  resetKPIs() {
    Object.keys(this.updating).forEach(key => this.updating[key as keyof typeof this.updating] = true);
    
    setTimeout(() => {
      this.kpis = { ...this.initialKpis };
      Object.keys(this.updating).forEach(key => this.updating[key as keyof typeof this.updating] = false);
    }, 500);
  }
}