import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-popular',
  imports: [CommonModule],
  templateUrl: './popular.html',
  styleUrl: './popular.css',
})
export class Popular {
  onButtonClick() {
    const isConfirmed = window.confirm('ยืนยันการกดลงตะกร้า');

    if (isConfirmed) {
      console.log('ผู้ใช้ยืนยันแล้ว! กำลังเพิ่มลงตะกร้า...');
      alert('เพิ่มลงตะกร้าเรียบร้อย!');
    } else {
      console.log('ผู้ใช้กดยกเลิก');
    }
  }
  data_new = [
    {
      img: '',
      name: 'ข้าวผัดปู',
      price: '120 บาท',
    },
    {
      img: './assets/popular1.jpg',
      name: 'ส้มตำไทย',
      price: '80 บาท',
    },
    {
      img: 'assets/popular3.png',
      name: 'ต้มยำกุ้ง',
      price: '150 บาท',
    },
    {
      img: 'assets/popular4.png',
      name: 'ผัดไทยกุ้งสด',
      price: '100 บาท',
    },
    {
      img: './assets/popular1.jpg',
      name: 'ผัดไทยกุ้งสด',
      price: '100 บาท',
    },
  ];
  constructor( private service : Service ) {
    console.log(this.service.title);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
