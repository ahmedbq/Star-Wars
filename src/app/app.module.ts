import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './Component/home/home.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { PeopleService } from './Service/people.service';
import { PeopleTableComponent } from './Component/people-table/people-table.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PeopleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatInputModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
