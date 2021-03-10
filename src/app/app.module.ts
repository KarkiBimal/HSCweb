import { FireserviceService } from './fireservice.service';
import { environment } from '../environments/environment';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { XenograftComponent } from './xenograft/xenograft.component';
import { AboutComponent } from './about/about.component';
import { RCLPComponent } from './rclp/rclp.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { JournalCitationComponent } from './journal-citation/journal-citation.component';
import { NewsComponent } from './news/news.component';
import { CellreqsEftComponent } from './cellreqs-eft/cellreqs-eft.component';
import { CellreqsLeukComponent } from './cellreqs-leuk/cellreqs-leuk.component';
import { CellreqsNblComponent } from './cellreqs-nbl/cellreqs-nbl.component';
import { CellreqsNcipptpComponent } from './cellreqs-ncipptp/cellreqs-ncipptp.component';
import { CellreqsRhabComponent } from './cellreqs-rhab/cellreqs-rhab.component';
import { CellreqsBraintumorComponent } from './cellreqs-braintumor/cellreqs-braintumor.component';
import { CellreqsAllComponent } from './cellreqs-all/cellreqs-all.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClidComponent } from './clid/clid.component';
import { BrainTableComponent } from './brain-table/brain-table.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabase} from 'angularfire2/database';
import { CartComponent } from './cart/cart.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavigationComponent,
    XenograftComponent,
    AboutComponent,
    RCLPComponent,
    ProtocolsComponent,
    JournalCitationComponent,
    NewsComponent,
    CellreqsEftComponent,
    CellreqsLeukComponent,
    CellreqsNblComponent,
    CellreqsNcipptpComponent,
    CellreqsRhabComponent,
    CellreqsBraintumorComponent,
    CellreqsAllComponent,
    AboutusComponent,
    ClidComponent,
    BrainTableComponent,
    CartComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
     
        {path:'',component:HomeComponentComponent},
        {path:'xenograft', component:XenograftComponent},
        {path:'journal-citation', component:JournalCitationComponent},
        {path:'news', component:NewsComponent},
        {path:'protocols', component:ProtocolsComponent},
        {path:'RCLP', component:RCLPComponent},
        {path:'cellreqs-eft', component:CellreqsEftComponent},
        {path:'cellreqs-leuk', component:CellreqsLeukComponent},
        {path:'cellreqs-nbl', component:CellreqsNblComponent},
        {path:'cellreqs-ncipptp', component:CellreqsNcipptpComponent},
        {path:'cellreqs-rhab', component:CellreqsRhabComponent},
        {path:'cellreqs-braintumor', component:CellreqsBraintumorComponent},
        {path:'cellreqs-all', component:CellreqsAllComponent},
        {path:'aboutus', component:AboutusComponent},
        {path:'clid', component:ClidComponent},
        {path:'brain', component:BrainTableComponent},
        {path:'cart', component:CartComponent},

    
    

  ]),
    NgbModule
   

],
providers: [
  AngularFireDatabase,
  FireserviceService
   
],
bootstrap: [ AppComponent ]
 
})
export class AppModule { 
  constructor(){
    
  }
}
