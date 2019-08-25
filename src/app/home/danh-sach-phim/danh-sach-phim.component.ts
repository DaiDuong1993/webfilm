import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/core/services/quan-ly-phim.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Phim } from 'src/app/core/Models/phim';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  phimStatus: boolean = true;
  phimDangChieu: any =[];
  phimSapChieu:any = [];
  Slider: Phim[] = [];
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  }
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1040:{
        items:1
      }
    },
    nav: true,
    autoWidth:true,
    autoHeight: true
  }

  constructor(private quanLyDanhSachPhim : QuanLyPhimService) { }

  ngOnInit() {
    this.getSlider();
    this.getMovieList();
    
  }
  show(){
    this.phimStatus=true;
  }
  hide(){
    this.phimStatus=false;
  }
  getMovieList(){
    this.quanLyDanhSachPhim.layDanhSachPhim().subscribe((data:any)=>{
      
      data.map((phim, index)=>{
        if(index%2 === 0){
          this.phimDangChieu.push(phim);
          
        }
        else{
          this.phimSapChieu.push(phim);
        }
      })
      console.log(this.phimDangChieu);
      console.log(this.phimSapChieu)

    });
    

  }
  
  getSlider(){
    this.Slider = this.quanLyDanhSachPhim.laySlider();
    
  }
  
}
