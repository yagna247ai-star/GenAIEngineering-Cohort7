import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'my-roadmap', loadComponent: () => import('./features/my-roadmap/my-roadmap.component').then(m => m.MyRoadmapComponent) },
  { path: 'learning-topics', loadComponent: () => import('./features/learning-topics/learning-topics.component').then(m => m.LearningTopicsComponent) },
  { path: 'workbooks', loadComponent: () => import('./features/workbooks/workbooks.component').then(m => m.WorkbooksComponent) },
  { path: 'workbooks/:id', loadComponent: () => import('./features/workbooks/workbook-detail.component').then(m => m.WorkbookDetailComponent) },
  { path: 'lab', loadComponent: () => import('./features/lab/lab.component').then(m => m.LabComponent) },
  { path: 'lab/:id', loadComponent: () => import('./features/lab/lab-detail.component').then(m => m.LabDetailComponent) },
  { path: 'roadmap', loadComponent: () => import('./features/roadmap/roadmap.component').then(m => m.RoadmapComponent) },
  { path: 'glossary', loadComponent: () => import('./features/glossary/glossary.component').then(m => m.GlossaryComponent) },
  { path: 'stuck', loadComponent: () => import('./features/stuck/stuck.component').then(m => m.StuckComponent) },
  // Session 01 — preserves exact Outskill deep-link hash as a dedicated page
  { path: 'session/foundations', loadComponent: () => import('./features/session/session.component').then(m => m.SessionComponent) },
  { path: '404', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) },
  { path: '**', redirectTo: '404' }
];
