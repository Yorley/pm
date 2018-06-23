import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay
} from 'date-fns';
import { AngularFireDatabase } from 'angularfire2/database';

interface Event {
  title: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  viewDate = new Date();
  activeDayIsOpen = true;

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  events: CalendarEvent[] = [];
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    const eventsRef = this.db.list<Event>('events');

    /*eventsRef.push({
      title: 'Prueba',
      start: new Date().toISOString(),
      end: new Date().toISOString()
    });*/

    eventsRef.valueChanges().subscribe(events => {
      this.events = events.map(event => {
        return {
          title: event.title,
          start: new Date(Date.parse(event.start)),
          end: new Date(Date.parse(event.end)),
          color: this.colors[0]
        };
      });
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
}
