interface MarkerIcon {
    url: string;
    scaledSize: {
        height: number;
        width: number;
    };
}
export interface Marker {

    lat: number;
    lng: number;
    title: string;
    min_temperature: string;
    max_temperature: string;
    description: string;
    icon: MarkerIcon | string;
    id: string;
}
