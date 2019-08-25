import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError, retry } from "rxjs/operators";
import { config } from '../Commons/Config';
import { Phim } from '../Models/phim';
@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {
  Slider:Phim[]= [
    {
      maPhim: 1,
      tenPhim: 'Địa Đạo Cá Sấu Tử Thần - Crawl',
      giaTien: '75000',
      hinhAnh: 'https://s3img.vcdn.vn/mobile/123phim/2019/07/dia-dao-ca-sau-tu-than-crawl-15645558446438_220x310.jpg',
      trailer:"https://www.youtube.com/watch?v=xYwC4oxldL0",
      banner:'https://s3img.vcdn.vn/123phim/2019/08/exit-15658707024185.jpg',
    },
    {
      maPhim: 2,
      tenPhim: 'Chuyện Ngày Xưa Ở Hollywood',
      giaTien: '75000',
      hinhAnh: 'https://s3img.vcdn.vn/mobile/123phim/2019/07/chuyen-ngay-xua-o-hollywood-once-upon-a-time-in-hollywood-15638864257140_220x310.jpg',
      trailer:"https://www.youtube.com/watch?v=NBdkQGFDNXY",
      banner:'https://s3img.vcdn.vn/123phim/2019/08/once-15659258753493.jpg',
    },
    {
      maPhim: 3,
      tenPhim: 'Angry Bird 2',
      giaTien: '75000',
      hinhAnh: 'https://s3img.vcdn.vn/mobile/123phim/2019/08/angry-birds-2-15655946946940_220x310.jpg',
      trailer:"https://www.youtube.com/watch?v=RDj8Y2K0ODA",
      banner:'https://s3img.vcdn.vn/123phim/2019/08/chym-15661840399175.jpg',
    },
    {
      maPhim: 4,
      tenPhim: 'Fast & Furious: Hobbs & Shaw',
      giaTien: '75000',
      hinhAnh: 'https://s3img.vcdn.vn/mobile/123phim/2019/07/fast-furious-hobbs-shaw-15632769023721_220x310.jpg',
      trailer:"https://www.youtube.com/watch?v=HZ7PAyCDwEg&t=1s",
      banner:'https://s3img.vcdn.vn/123phim/2019/08/fast-furious-hobbs-shaw-c16-15646483028927.jpg',
    },
  ];

  constructor(private http: HttpClient) { }
  layDanhSachPhim(): Observable<any> {
    const url = `${config.domain}QuanLyPhim/LayDanhSachPhim?maNhom=${config.maNhom}`;
    return this.http.get(url).pipe(
      tap(() => {

      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }
  laySlider(){
    return this.Slider;
  }
  handleError(err) {
    if (err.codeStatus === 404) {
      alert(err.message);
    }
    return err;
  }
}
