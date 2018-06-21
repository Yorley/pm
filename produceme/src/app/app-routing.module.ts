import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SoilStatsComponent }   from './soil-stats/soil-stats.component';
import { ProductCycleComponent }   from './product-cycle/product-cycle.component';
import { ChangesSoilComponent } from "./changes-soil/changes-soil.component";
import {FertilizationTestComponent  } from "./fertilization-test/fertilization-test.component";
import { TemperatureImpactComponent } from "./temperature-impact/temperature-impact.component";
import { TestSoilComponent } from "./test-soil/test-soil.component";
import { TestVulnerabilityComponent } from "./test-vulnerability/test-vulnerability.component";
import {TestWasteComponent  } from "./test-waste/test-waste.component";
import {HomeComponent  } from "./home/home.component";
import {CostComponent  } from "./cost/cost.component";
import {SaleComponent  } from "./sale/sale.component";
import {WasteComponent  } from "./waste/waste.component";
import {WarningComponent  } from "./warning/warning.component";
import { GeolocationComponent } from "./geolocation/geolocation.component";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";
import { ChatComponent } from "./chat/chat.component";
import { UchatComponent } from "./uchat/uchat.component";
import { CalendarComponent } from './calendar/calendar.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'soilStats', component: SoilStatsComponent },  
  { path: 'changeSoil', component: ChangesSoilComponent },//no
  { path: 'fertilizationTest', component: FertilizationTestComponent },//no
  { path: 'temperatureImpact', component: TemperatureImpactComponent },
  { path: 'testSoil', component: TestSoilComponent },//no
  { path: 'testVulnerability', component: TestVulnerabilityComponent },//no
  { path: 'testWaste', component: TestWasteComponent },//no
  { path: 'cycle', component: ProductCycleComponent },
  { path: 'costs', component: CostComponent },
  { path: 'warning', component: WarningComponent },
  { path: 'waste', component: WasteComponent },
  { path: 'sales', component: SaleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewProfile', component: ViewProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path:'chating', component: ChatComponent},
  { path:'chat', component: UchatComponent},
  { path:'geolocation', component: GeolocationComponent},
  { path:'calendar', component: CalendarComponent}
  
   
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
