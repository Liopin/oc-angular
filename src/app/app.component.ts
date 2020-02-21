import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  title = 'OC-angular';

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';


appareils = [
    {
    name: 'Machine à laver',
    status: 'éteint'
  },
  {
    name: 'Frigo',
    status: 'allumé'
  },
  {
    name: 'Ordinateur',
    status: 'allumé'
  },
];


  constructor(){
    setTimeout(
      ()=> {
        this.isAuth = true;
      }, 4000
    )
  }

  onAllumer(){
    console.log('On allume tout');
  }
}

