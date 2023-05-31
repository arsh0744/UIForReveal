import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxAvatarModule, IgxCalendarModule, IgxDialogModule, IgxInputGroupModule, IgxChipsModule, IgxCardModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardViewerComponent } from './dashboard-viewer/dashboard-viewer.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    MyTasksComponent,
    DashboardsComponent,
    DashboardViewerComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxCalendarModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxChipsModule,
    FormsModule,
    IgxCardModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
