import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../shared/kpi-card.component';
import { PredictionFormComponent } from '../shared/prediction-form.component';

@Component({
  selector: 'app-qualite',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, PredictionFormComponent],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Responsable Qualité & Conformité</h2>
        <p class="text-gray-600 mb-2">Tableau de bord pour le suivi de la qualité et de la conformité</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-kpi-card
          title="Conformité"
          value="96%"
          description="Taux de conformité aux normes"
        ></app-kpi-card>
        <app-kpi-card
          title="Qualité Produits"
          value="99.2%"
          description="Taux de produits conformes"
        ></app-kpi-card>
        <app-kpi-card
          title="Traçabilité"
          value="100%"
          description="Taux de traçabilité des lots"
        ></app-kpi-card>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <app-prediction-form
          title="Prédiction de la Qualité"
          [fields]="[
            { id: 'temperature', label: 'Température du process (°C)', type: 'number', placeholder: '20', min: 0, max: 100 },
            { id: 'humidite', label: 'Humidité relative (%)', type: 'number', placeholder: '60', min: 0, max: 100 },
            { id: 'duree', label: 'Durée du process (heures)', type: 'number', placeholder: '2', min: 0, step: 0.5 }
          ]"
        ></app-prediction-form>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Objectifs Qualité</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 12 : Qualité des processus
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 16 : Conformité réglementaire
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 9 : Innovation qualité
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class QualiteComponent {}