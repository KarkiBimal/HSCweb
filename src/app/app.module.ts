
import { environment } from '../environments/environment.prod';
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
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
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
import {HttpClientModule} from '@angular/common/http'


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
    
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    
    AppRoutingModule,
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

    
    

  ]),
    NgbModule
   

],
providers: [
],
bootstrap: [ AppComponent ]
 
})
export class AppModule { }
