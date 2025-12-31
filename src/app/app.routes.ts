import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { UserListView } from '../Components/user-list-view/user-list-view';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './AppDashboard',
      }).then((m) => m.AppDashboard),
  },
  {
    path: 'settings',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './SettingsAppComponent',
      }).then((m) => m.SettingsAppComponent),
  },
  {
    path: '**',component: UserListView
  },
];
