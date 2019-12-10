import { Item } from './item.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingCart: Item[];

  items: Item [] =
    [{
    title: 'surfbooard',
    price: 30,
    // tslint:disable-next-line
    imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.cdscdn.com%2Fpdt2%2F2%2F7%2F9%2F1%2F550x550%2Fmp11288279%2Frw%2Fcole-haan-adams-grand-chukka-boot-hedhd-taille-43.jpg&imgrefurl=http%3A%2F%2Fremedial.biocoop-auriol.fr%2F11-ncjac.news&docid=KgZDUEocqvuIsM&tbnid=fo6b2POa2W7OoM%3A&vet=10ahUKEwiLuqrOjKnmAhUIZlAKHQdfAPwQMwhHKA0wDQ..i&w=700&h=700&itg=1&client=safari&bih=1017&biw=1920&q=hedhd&ved=0ahUKEwiLuqrOjKnmAhUIZlAKHQdfAPwQMwhHKA0wDQ&iact=mrc&uact=8'
  },
      {
    title: 'house',
    price: 300,
    // tslint:disable-next-line
    imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.washingtonian.com%2Fwp-content%2Fuploads%2F2019%2F09%2Flead.jpg&imgrefurl=https%3A%2F%2Fwww.washingtonian.com%2F2019%2F09%2F05%2Fthe-best-looking-open-houses-this-weekend-9-7-9-8%2F&docid=XZ-6E1HYP8-ImM&tbnid=Ny3RV2seyoVG4M%3A&vet=10ahUKEwiisK-D1armAhVN3KQKHbXABPQQMwh7KAMwAw..i&w=1280&h=853&client=safari&bih=1017&biw=1920&q=house&ved=0ahUKEwiisK-D1armAhVN3KQKHbXABPQQMwh7KAMwAw&iact=mrc&uact=8'
  }];

  addTCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item){
  //TODO
  }

}
