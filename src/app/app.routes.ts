import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'achats',
        children: [
          {
            path: '',
            loadComponent: () => import('./dashboard/achats/achats.component').then(m => m.AchatsComponent),
            canActivate: [RoleGuard],
            data: { role: 'achats' }
          },
          {
            path: 'powerbi',
            loadComponent: () => import('./dashboard/powerbi/powerbi.component').then(m => m.PowerBIComponent),
            canActivate: [RoleGuard],
            data: { role: 'achats' }
          }
        ]
      },
      {
        path: 'developpement',
        children: [
          {
            path: '',
            loadComponent: () => import('./dashboard/developpement/developpement.component').then(m => m.DeveloppementComponent),
            canActivate: [RoleGuard],
            data: { role: 'developpement' }
          },
          {
            path: 'powerbi',
            loadComponent: () => import('./dashboard/powerbi/powerbi.component').then(m => m.PowerBIComponent),
            canActivate: [RoleGuard],
            data: { role: 'developpement' }
          }
        ]
      },
      {
        path: 'maintenance',
        children: [
          {
            path: '',
            loadComponent: () => import('./dashboard/maintenance/maintenance.component').then(m => m.MaintenanceComponent),
            canActivate: [RoleGuard],
            data: { role: 'maintenance' }
          },
          {
            path: 'powerbi',
            loadComponent: () => import('./dashboard/powerbi/powerbi.component').then(m => m.PowerBIComponent),
            canActivate: [RoleGuard],
            data: { role: 'maintenance' }
          }
        ]
      },
      {
        path: 'qualite',
        children: [
          {
            path: '',
            loadComponent: () => import('./dashboard/qualite/qualite.component').then(m => m.QualiteComponent),
            canActivate: [RoleGuard],
            data: { role: 'qualite' }
          },
          {
            path: 'powerbi',
            loadComponent: () => import('./dashboard/powerbi/powerbi.component').then(m => m.PowerBIComponent),
            canActivate: [RoleGuard],
            data: { role: 'qualite' }
          }
        ]
      }
    ]
  }
];