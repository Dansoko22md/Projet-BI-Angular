import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../shared/kpi-card.component';
import { PredictionFormComponent } from '../shared/prediction-form.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, PredictionFormComponent],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Directeur Maintenance</h2>
        <p class="text-gray-600 mb-2">Tableau de bord pour la gestion de la maintenance et des équipements</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-kpi-card
          title="Disponibilité"
          value="94.5%"
          description="Taux de disponibilité des équipements"
        ></app-kpi-card>
        <app-kpi-card
          title="Maintenance Préventive"
          value="78%"
          description="Taux de réalisation du planning préventif"
        ></app-kpi-card>
        <app-kpi-card
          title="Efficacité Énergétique"
          value="89%"
          description="Performance énergétique des installations"
        ></app-kpi-card>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <app-prediction-form
          title="Prédiction des Pannes"
          [fields]="[
            { id: 'age', label: 'Age de l\\'équipement (années)', type: 'number', placeholder: '5', min: 0, step: 0.5 },
            { id: 'utilisation', label: 'Taux d\\'utilisation (%)', type: 'number', placeholder: '80', min: 0, max: 100 },
            { id: 'temperature', label: 'Température moyenne (°C)', type: 'number', placeholder: '25', min: -50, max: 100 }
          ]"
        ></app-prediction-form>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Objectifs Techniques</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 9 : Innovation et infrastructure
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 12 : Utilisation efficace des ressources
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              ODD 7 : Efficacité énergétique
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class MaintenanceComponent {}