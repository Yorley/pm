import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Fruit } from '../classes/fruit';
import { functions } from 'firebase';
@Component({
  selector: 'app-product-cycle',
  templateUrl: './product-cycle.component.html',
  styleUrls: ['./product-cycle.component.css']
})
export class ProductCycleComponent implements OnInit {

  fruits: Observable<Fruit[]>;
  selectedValue = {};

  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const fruitsRef = this.db.list<Fruit>('product');

    // Esto permite agregar el id de la fruta al objeto
    this.fruits = fruitsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

}
