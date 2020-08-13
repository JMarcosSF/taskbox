import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskComponent} from './components/task.component';
import {TaskListComponent} from './components/task-list.component';
import {PureTaskListComponent} from './components/pure-task-list.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {TaskModule} from './components/task.module';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {InboxScreenComponent} from './components/inbox-screen.component';
import {PureInboxScreenComponent} from './components/pure-inbox-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent,
  ],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
