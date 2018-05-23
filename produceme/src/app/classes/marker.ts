export class Marker {

    public lat: number;
    public lng: number;

    public title = 'Sin Título';
    public description = 'Sin Descripción';


    constructor( lat: number,  lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }

}