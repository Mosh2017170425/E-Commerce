import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
