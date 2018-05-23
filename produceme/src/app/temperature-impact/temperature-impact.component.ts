import { Component, OnInit } from '@angular/core';

import { MapsService } from '../service_map/maps.service';
import { Marker } from '../classes/marker';

@Component({
  selector: 'app-temperature-impact',
  templateUrl: './temperature-impact.component.html',
  styleUrls: ['./temperature-impact.component.css']
})
export class TemperatureImpactComponent implements OnInit {
  lat: number = 41.403514;
  lng: number = 2.174310;
  zoom: number = 16;

  selectedMarker: any = null;


  constructor( public _ms: MapsService ) {

    this._ms.loadMarkers();

  }


  clickMap( event ) {

     console.log(event);
    let markerToInsert: Marker = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      title: "No title",
      description: ""
    }

    this._ms.insertMarker(markerToInsert);

  }


  clickMarker( marker: Marker, i: number ) {
    console.log(marker, i);
    this.selectedMarker = marker;
  }


  dragEndMarker( marker: Marker, event ) {
    console.log(marker, event);

    let lat = event.coords.lat;
    let lng = event.coords.lng;

    marker.lat = lat;
    marker.lng = lng;

    this._ms.saveMarker();

  }

  ngOnInit() {
  }

}
