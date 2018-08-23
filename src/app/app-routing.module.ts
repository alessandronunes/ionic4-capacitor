import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'accessibility', loadChildren: './accessibility/accessibility.module#AccessibilityPageModule' },
  { path: 'app', loadChildren: './app/app.module#AppPageModule' },
  { path: 'browser', loadChildren: './browser/browser.module#BrowserPageModule' },
  { path: 'backgroundtask', loadChildren: './background-task/background-task.module#BackgroundTaskPageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'clipboard', loadChildren: './clipboard/clipboard.module#ClipboardPageModule' },
  { path: 'console', loadChildren: './console/console.module#ConsolePageModule' },
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
  { path: 'filesystem', loadChildren: './filesystem/filesystem.module#FilesystemPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'haptics', loadChildren: './haptics/haptics.module#HapticsPageModule' },
  { path: 'keyboard', loadChildren: './keyboard/keyboard.module#KeyboardPageModule' },
  { path: 'modals', loadChildren: './modals/modals.module#ModalsPageModule' },
  { path: 'motion', loadChildren: './motion/motion.module#MotionPageModule' },
  { path: 'network', loadChildren: './network/network.module#NetworkPageModule' },
  { path: 'share', loadChildren: './share/share.module#SharePageModule' },
  { path: 'splashscreen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
  { path: 'statusbar', loadChildren: './status-bar/status-bar.module#StatusBarPageModule' },
  { path: 'storage', loadChildren: './storage/storage.module#StoragePageModule' },
  { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
