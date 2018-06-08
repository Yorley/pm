import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS}    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SoilStatsComponent } from './soil-stats/soil-stats.component';
import { ProductCycleComponent } from './product-cycle/product-cycle.component';
import { TestSoilComponent } from './test-soil/test-soil.component';
import { TestWasteComponent } from './test-waste/test-waste.component';
import { ChangesSoilComponent } from './changes-soil/changes-soil.component';
import { TestVulnerabilityComponent } from './test-vulnerability/test-vulnerability.component';
import { FertilizationTestComponent } from './fertilization-test/fertilization-test.component';
import { TemperatureImpactComponent } from './temperature-impact/temperature-impact.component';
import { HomeComponent } from './home/home.component';
import { CostComponent } from './cost/cost.component';
import { SaleComponent } from './sale/sale.component';
import { WasteComponent } from './waste/waste.component';
import { WarningComponent } from './warning/warning.component';
import { ChatComponent } from "./chat/chat.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, DssService } from './_services/index';
import { UchatComponent } from './uchat/uchat.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SoilStatsComponent,
    ProductCycleComponent,
    TestSoilComponent,
    TestWasteComponent,
    ChangesSoilComponent,
    TestVulnerabilityComponent,
    FertilizationTestComponent,
    TemperatureImpactComponent,
    HomeComponent,
    CostComponent,
    SaleComponent,
    WasteComponent,
    WarningComponent,
    ChatComponent,
    RegisterComponent,
    LoginComponent,
    ViewProfileComponent,
    UchatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'produceMe'),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARl6VyKE8_p5e1pmToZLR_xw3CLRvvBOI'
    })
  ],
  providers: [
    
    AuthGuard,
    AlertService,
    AuthenticationService,
    DssService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
// provider used to create fake backend
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
