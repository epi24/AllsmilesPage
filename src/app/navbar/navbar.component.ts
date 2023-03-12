import {Component, OnInit} from '@angular/core';
import {NavLink} from "../NavLink";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //
  navLinksEducation:NavLink[]=[
    {name:"All$miles Book Talk", link:"", },
    {name:"All$miles Black History Talk", link:""},
    {name:"Book Recommandations", link:""}
  ]
  navLinksAffirmation:NavLink[]=[
    {name:"For my Niggas (END)", link:"/end" },
    {name:"For my Sistas", link:""},
    {name:"For my Social Warriors", link:""}
  ]
  navLinksAbout:NavLink[]=[
    {name:"What is All$miles", link:""},
    {name:"How u can help", link:""}
  ];
  navLinksHead:NavLink[]=[
     {name:"Education", link:"", group:this.navLinksEducation},
     {name:"Affirmation", link:"", group:this.navLinksAffirmation},
     {name:"About", link:"",group:this.navLinksAbout},
   ];
}
