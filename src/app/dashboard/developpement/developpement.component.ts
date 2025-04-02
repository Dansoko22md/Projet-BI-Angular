import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../shared/kpi-card.component';
import { PredictionFormComponent } from '../shared/prediction-form.component';

@Component({
  selector: 'app-developpement',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, PredictionFormComponent],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Responsable Développement Durable</h2>
        <p class="text-gray-600 mb-2">Tableau de bord pour la gestion de l'empreinte écologique</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-kpi-card
          title="Réduction CO2"
          value="-15%"
          description="Réduction des émissions depuis janvier"
        ></app-kpi-card>
        <app-kpi-card
          title="Énergie Renouvelable"
          value="45%"
          description="Part d'énergie renouvelable utilisée"
        ></app-kpi-card>
        <app-kpi-card
          title="Recyclage"
          value="82%"
          description="Taux de recyclage des déchets"
        ></app-kpi-card>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <app-prediction-form
          title="Prédiction de l'Empreinte Carbone"
          [fields]="[
            { id: 'production', label: 'Volume de production (tonnes)', type: 'number', placeholder: '1000', min: 0 },
            { id: 'energie', label: 'Consommation énergétique (kWh)', type: 'number', placeholder: '50000', min: 0 },
            { id: 'dechets', label: 'Volume de déchets (tonnes)', type: 'number', placeholder: '100', min: 0 }
          ]"
        ></app-prediction-form>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Objectifs Environnementaux</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 7 : Énergie propre et abordable
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 12 : Production responsable
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 13 : Action climatique
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class DeveloppementComponent {}