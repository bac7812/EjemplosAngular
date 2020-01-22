import { LayoutModule as MaterialLayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { CopyrightComponent } from './shell/copyright/copyright.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

@NgModule({
  declarations: [
    ShellComponent,
    TopBarComponent,
    CopyrightComponent,
    MainContentComponent,
    NavShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [NavShellComponent]
})
export class LayoutModule {}
