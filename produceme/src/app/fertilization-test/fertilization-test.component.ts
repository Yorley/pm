import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { functions } from 'firebase';

interface Fertilizer {
  key: string;
  name: string;
  provider: string;
  details: string;
  picture: string;
}


@Component({
  selector: 'app-fertilization-test',
  templateUrl: './fertilization-test.component.html',
  styleUrls: ['./fertilization-test.component.css']
})

export class FertilizationTestComponent implements OnInit {

  fertilizers: Observable<Fertilizer[]>;
  fetilizerFilter = {};
  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const soilsRef = this.db.list<Fertilizer>('fertilizers');

    // Esto permite agregar el id de la fruta al objeto
    this.fertilizers = soilsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
 
}
