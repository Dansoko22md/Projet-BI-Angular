import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  role: 'achats' | 'developpement' | 'maintenance' | 'qualite';
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly users: { [key: string]: User } = {
    'achats@entreprise.com': { 
      id: '1', 
      role: 'achats', 
      name: 'Direction des Achats & Production',
      email: 'achats@entreprise.com'
    },
    'dev@entreprise.com': { 
      id: '2', 
      role: 'developpement', 
      name: 'Responsable Développement Durable',
      email: 'dev@entreprise.com'
    },
    'maintenance@entreprise.com': { 
      id: '3', 
      role: 'maintenance', 
      name: 'Directeur Maintenance',
      email: 'maintenance@entreprise.com'
    },
    'qualite@entreprise.com': { 
      id: '4', 
      role: 'qualite', 
      name: 'Responsable Qualité & Conformité',
      email: 'qualite@entreprise.com'
    }
  };

  login(email: string, password: string): Observable<boolean> {
    return new Observable(subscriber => {
      setTimeout(() => {
        const user = this.users[email.toLowerCase()];
        // Mot de passe commun pour tous les utilisateurs : "Durable2025!"
        if (user && password === 'Durable2025!') {
          this.currentUserSubject.next(user);
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
        subscriber.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}