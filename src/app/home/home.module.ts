import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { HomeRoutingModule } from './home-routing.module';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, ChiTietPhimComponent, ChiTietDatVeComponent, DangNhapComponent, TinTucComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
