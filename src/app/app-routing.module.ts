import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'toast', 
    loadChildren: './toast/toast.module#ToastPageModule' 
  },
  { 
    path: 'accessibility', 
    loadChildren: './accessibility/accessibility.module#AccessibilityPageModule' 
  },
  { path: 'app', loadChildren: './app/app.module#AppPageModule' },
  { path: 'browser', loadChildren: './browser/browser.module#BrowserPageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'haptics', loadChildren: './haptics/haptics.module#HapticsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
