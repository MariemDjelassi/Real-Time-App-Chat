import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule { }
