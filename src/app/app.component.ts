import { Component } from '@angular/core';
import { tap } from "rxjs";
import { StoreServices } from './pages/store/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'PlusCRUD';
  constructor(private readonly storeSvc: StoreServices){
    this.storeSvc.store()
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe();
  }
}
