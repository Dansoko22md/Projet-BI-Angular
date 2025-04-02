import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h3 class="text-lg sm:text-xl font-semibold">{{ title }}</h3>
        <button 
          *ngIf="showReset"
          (click)="resetData()"
          class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors w-full sm:w-auto"
        >
          Réinitialiser
        </button>
      </div>
      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div *ngFor="let field of fields" class="space-y-2">
          <label [for]="field.id" class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
          <input
            [type]="field.type"
            [id]="field.id"
            [name]="field.id"
            [(ngModel)]="formData[field.id]"
            [min]="field.min"
            [max]="field.max"
            [step]="field.step"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
            [placeholder]="field.placeholder"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors text-sm sm:text-base"
        >
          Prédire
        </button>
      </form>
      <div *ngIf="prediction" class="mt-4 p-3 sm:p-4 bg-emerald-50 rounded-md animate-slideUp text-sm sm:text-base">
        <p class="text-emerald-800">{{ prediction }}</p>
      </div>
    </div>
  `
})
export class PredictionFormComponent {
  @Input() title: string = '';
  @Input() fields: Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    min?: number;
    max?: number;
    step?: number;
  }> = [];
  
  @Output() onPrediction = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<void>();
  
  formData: { [key: string]: any } = {};
  prediction: string | null = null;
  showReset: boolean = false;

  onSubmit() {
    const predictionValue = Math.round(Math.random() * 100);
    this.prediction = `Prédiction basée sur les données entrées : ${predictionValue}%`;
    this.showReset = true;
    this.onPrediction.emit({
      prediction: predictionValue,
      data: this.formData
    });
  }

  resetData() {
    this.formData = {};
    this.prediction = null;
    this.showReset = false;
    this.onReset.emit();
  }
}