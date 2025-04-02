import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-powerbi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Tableau de Bord Power BI</h2>
        <div class="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <!-- Replace this with your actual Power BI embed code -->
          <iframe
            class="w-full h-[600px] rounded-lg"
            src="about:blank"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  `
})
export class PowerBIComponent {}