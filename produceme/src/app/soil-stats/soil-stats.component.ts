import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'canvasjs' ;
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { functions } from 'firebase';


interface Chart {
  key: string;
  labels: string[];
  chartData: number[];
}

export class component {
  public name: string;
  public percentage: number; 
}
interface Soil {
  name: string;
  components: component[];
}
@Component({
  selector: 'app-soil-stats',
  templateUrl: './soil-stats.component.html',
  styleUrls: ['./soil-stats.component.css']
})

export class SoilStatsComponent implements OnInit {
  
  soils: Observable<Soil[]>;
  soilFilter = {};
  allCharts: Chart[];

  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const soilsRef = this.db.list<Soil>('soil');

    // Esto permite agregar el id de la fruta al objeto
    this.soils = soilsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
 
    this.soils.subscribe(soils => {
      //console.log(JSON.stringify(soils));
      
      this.allCharts= soils.map(soil => {
        return {
          key:soil.name,
          labels: soil.components.map(s_component => (s_component.name)),
          chartData: soil.components.map(s_component => (s_component.percentage))
        }
      })
      console.log(JSON.stringify(this.allCharts));      
    })
  }
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartType:string = 'doughnut';
    public barChartLegend:boolean = true;
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
    private convertStringToNumber(value: string): number {
      return +value;
    }


    public barChart_Labels:string[];

    

}
