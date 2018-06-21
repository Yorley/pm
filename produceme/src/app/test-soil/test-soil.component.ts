import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'canvasjs' ;
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Fruit } from '../classes/fruit';
import { functions } from 'firebase';

interface Chart {
  key: string;
  labels: string[];
  chartData: {
      data: number[];
      label: string;
  }[];
}


@Component({
  selector: 'app-test-soil',
  templateUrl: './test-soil.component.html',
  styleUrls: ['./test-soil.component.css']
})
export class TestSoilComponent implements OnInit {
  fruits: Observable<Fruit[]>;
  soil: Observable<Fruit[]>;
  fruitFilter = {};
  allCharts: Chart[];

  constructor(public db: AngularFireDatabase ) {}

  ngOnInit() {
    const fruitsRef = this.db.list<Fruit>('product');

    // Esto permite agregar el id de la fruta al objeto
    this.fruits = fruitsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.fruits.subscribe(fruits => {
      console.log(JSON.stringify(fruits)); 
      this.allCharts= fruits.map(fruit => {
        return {
          key:fruit.name,
          labels: fruit.components.map(component => (component.name)),
          chartData: [{
            data:fruit.components.map(component => (component.percentage)),
            label:"Suelo Deseado"
          },
          {
            data:fruit.components.map(component => (component.percentage-10)),
            label:"Suelo Actual"
          }
        ]
        }
      })
      console.log(JSON.stringify(this.allCharts));
    })
  }
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    /** apartir de aca se borra */
    public barChartLabels:string[] = ["2006", '2007', '2008', '2009', '2010', '2011', '2012'];
    
    
   
    public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Suelo Deseado'},

      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Suelo Actual'}
    ];
    /** hasta aca se borra */
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

    /*
     * getComponentByProduct
    */
    public getComponentByProduct() {
      this.fruits.subscribe(fruits => {
        this.barChartData[0].data = fruits.map(fruit => fruit.components.map(component => (component.percentage)));
        console.log(JSON.stringify(this.barChartData[0].data));
      })
     
    }


    public randomize():void {
      
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }
  
  
}
