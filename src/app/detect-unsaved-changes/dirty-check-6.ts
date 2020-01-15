const routes: Routes = [
  { path: 'settings', component: SettingsComponent, canDeactivate: [DirtyCheckGuard] }
];