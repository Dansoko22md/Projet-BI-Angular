import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-base sm:text-lg font-semibold text-gray-800">{{ title }}</h3>
        <span class="text-emerald-600">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </span>
      </div>
      <p class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 transition-all duration-500 transform" [class.scale-110]="isUpdating">
        {{ displayValue }}
      </p>
      <p class="text-xs sm:text-sm text-gray-600">{{ description }}</p>
    </div>
  `
})
export class KpiCardComponent implements OnChanges {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() description: string = '';
  @Input() isUpdating: boolean = false;

  displayValue: string = '';
  private animationFrame: number | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] && changes['value'].currentValue !== changes['value'].previousValue) {
      this.animateValue(changes['value'].previousValue, changes['value'].currentValue);
    }
  }

  private animateValue(start: string, end: string) {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    const startNum = parseInt(start || '0');
    const endNum = parseInt(end || '0');
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const current = Math.round(startNum + (endNum - startNum) * easeOutQuart);
      this.displayValue = `${current}%`;

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(updateValue);
      } else {
        this.displayValue = end; // Ensure we end up with the exact target value
        this.animationFrame = null;
      }
    };

    this.animationFrame = requestAnimationFrame(updateValue);
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}