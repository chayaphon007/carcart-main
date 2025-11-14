import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Trust} from "../trust/trust";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Booking } from "../booking/booking";
import { Howitwork } from '../howitwork/howitwork';
import { Popular } from "../popular/popular";
import { Whychoose } from "../whychoose/whychoose";


@Component({
  selector: 'app-mainscreen',
  imports: [Navbar, Trust, Footer, Header, Booking, Howitwork, Popular, Whychoose],
  templateUrl: './mainscreen.html',
  styleUrl: './mainscreen.css',
})
export class Mainscreen {

}
