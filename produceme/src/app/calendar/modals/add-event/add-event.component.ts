import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  completedObservable: Observable<void>;

  title: string;
  startDate: Date = new Date();
  endDate: Date = new Date();

  startTime: Date = new Date();
  endTime: Date = new Date();

  loading = false;

  constructor(public activeModal: BsModalRef, public db: AngularFireDatabase) { }

  ngOnInit() {
  }


  addEvent() {
    this.loading = true;
    const eventsRef = this.db.list<any>('events');

    eventsRef.push({
      title: this.title,
      start: moment(this.startDate).format('YYYY-MM-DD') + 'T' + moment(this.startTime).format('hh:mm:ssZ'),
      end:  moment(this.endDate).format('YYYY-MM-DD') + 'T' + moment(this.endTime).format('hh:mm:ssZ')
    });

    this.completedObservable.subscribe(_ => {
      this.loading = false;
      this.activeModal.hide();
    });
  }

}
