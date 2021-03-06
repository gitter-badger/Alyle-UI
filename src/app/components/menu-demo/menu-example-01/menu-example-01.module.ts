import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconButtonModule } from '@alyle/ui/icon-button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyRadioModule } from '@alyle/ui/radio';
import { MenuExample01Component } from './menu-example-01.component';

@NgModule({
  imports: [
    CommonModule,
    LyMenuModule,
    LyToolbarModule,
    LyButtonModule,
    LyIconButtonModule,
    LyIconModule,
    LyRadioModule
  ],
  exports: [MenuExample01Component],
  declarations: [MenuExample01Component]
})
export class MenuExample01Module { }
