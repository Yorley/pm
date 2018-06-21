import { Component, OnInit } from '@angular/core';
import { Marker } from '../classes/marker';
import { AngularFireDatabase } from 'angularfire2/database';
import { Fruit } from '../classes/fruit';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface producer {
  key: string;
  name: string;
  latitude: string;
  longitude: string;
  details: string;
  products_id:string[];
}
interface Chart {
  key: string;
  labels: string[];
  chartData: number[];
}
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  lat = 9.5649173;
  lng = -84.0078721;
  zoom = 11;

  visibleMarkers = {};
 
  producers: Observable<producer[]>;
  markers: Observable<Marker[]>;
  fruits: Observable<Fruit[]>;
  allMarkers: Chart[];


  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const producerRef = this.db.list<producer>('producers');

    // Esto permite agregar el id de la fruta al objeto
    this.producers = producerRef.snapshotChanges().pipe(
      
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))

      ));
      
    ;
    const fruitsRef = this.db.list<Fruit>('product');
    // Esto permite agregar el id de la fruta al objeto
    this.fruits = fruitsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

   




//----------------------------------------------------------------------------------
  }

  private convertStringToNumber(value: string): number {
    return +value;
  }

}