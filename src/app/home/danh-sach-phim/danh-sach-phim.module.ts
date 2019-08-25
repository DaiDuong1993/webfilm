import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [DanhSachPhimComponent, ItemPhimComponent],
  imports: [
    CommonModule,
    CarouselModule,
    DanhSachPhimRoutingModule,
    
  ]
})
export class DanhSachPhimModule { }
