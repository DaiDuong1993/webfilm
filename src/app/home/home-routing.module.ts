import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';


const routes: Routes=[
    {
        path:"",
        component:HomeComponent,
        children:[
            //Trang Chu
            {
                path:"",
                loadChildren:
                "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
            },
            {
                path:"trang-chu",
                component:TrangChuComponent
            },
            //Trang Danh Sach Phim
            {
                path:"danh-sach-phim",
                loadChildren:
                "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
            },
            // Trang Chi Tiet Phim
            {
                path:"chi-tiet-phim/:id",
                component:ChiTietPhimComponent
            },
            // Trang DatVe
            {
                path:"dat-ve-phim/:maLichChieu",
                component:ChiTietDatVeComponent
            },
            // trang Dang Nhap
            {
                path:"dang-nhap",
                component:DangNhapComponent

            },
            // Trang Dat Ve
            {
                path:"tin-tuc",
                component:TinTucComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule],
    exports: [RouterModule]
  })
export class HomeRoutingModule {}