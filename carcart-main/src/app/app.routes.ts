import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Mainscreen } from './mainscreen/mainscreen';
import { Howitwork } from './howitwork/howitwork';
import { Popular } from './popular/popular';
import { Whychoose } from './whychoose/whychoose';
import { Trust } from './trust/trust';

export const routes: Routes = [
    {path:'navbar',component:Navbar},
    {path:'footer',component:Footer},
    {path:'mainscreen',component:Mainscreen},
    {path:'howitwork',component:Howitwork},
    {path:'poppular',component:Popular},
    {path:'whychoose',component:Whychoose},
    {path:'trust',component:Trust}
   
];
