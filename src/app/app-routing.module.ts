import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogViewerComponent } from './pages/log-viewer/log-viewer.component';

const routes: Routes = [
  {
    path: "log-viewer",
    component: LogViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
