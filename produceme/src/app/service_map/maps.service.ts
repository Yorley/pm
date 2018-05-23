import { Injectable } from '@angular/core';
import { Marker } from "../classes/marker";

@Injectable()
export class MapsService {

  markers: Marker[] = [];


  constructor() {

    let newMarker: Marker = {

      lat: 41.403514,
      lng: 2.174310,
      title: "Fresa",
      description: "Fruto de la zona"
  

    }

    this.markers.push(newMarker);
    console.log(this.markers)

  }


  insertMarker( marker: Marker ) {
    this.markers.push(marker);
    this.saveMarker();
  }


  deleteMarker( index: number ) {
    this.markers.splice(index, 1);
    this.saveMarker();
  }


  saveMarker() {
    localStorage.setItem('mapMarkers', JSON.stringify(this.markers));
  }


  loadMarkers() {

    if ( localStorage.getItem('mapMarkers') ) {
      this.markers = JSON.parse(localStorage.getItem('mapMarkers'));
    } else {
      this.markers = [];
    }

  }

}
