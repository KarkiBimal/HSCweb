import { ALKComponent } from './alk/alk.component';
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
import { MasterWebComponent } from './master-web/master-web.component';
import { EwingsComponent } from './ewings/ewings.component';
import { LymphoidComponent } from './lymphoid/lymphoid.component';
import { RhabdomyosarcomaComponent } from './rhabdomyosarcoma/rhabdomyosarcoma.component';
import { BrainncciComponent } from './brainncci/brainncci.component';
import { EwingsnciiComponent } from './ewingsncii/ewingsncii.component';
import { NeuroblastomanciiComponent } from './neuroblastomancii/neuroblastomancii.component';
import { LeukemianciiComponent } from './leukemiancii/leukemiancii.component';
import { Rhabdomyosarcom2Component } from './rhabdomyosarcom2/rhabdomyosarcom2.component';
import { NeuropdxComponent } from './neuropdx/neuropdx.component';
import { OthercancerComponent } from './othercancer/othercancer.component';
import { MasterComponent } from './master/master.component';
import { NeuropageComponent } from './neuropage/neuropage.component';
import { DxComponent } from './dx/dx.component';
import { PdPdPmComponent } from './pd-pd-pm/pd-pd-pm.component';
import { MYCNComponent } from './mycn/mycn.component';
import { MYCNamplifiedComponent } from './mycnamplified/mycnamplified.component';
import { ALTESTComponent } from './alt-est/alt-est.component';
import { TERTComponent } from './tert/tert.component';
import { DataarchiveComponent } from './dataarchive/dataarchive.component';
import { ExternallinksComponent } from './externallinks/externallinks.component';
import { HelpComponent } from './help/help.component';
import { EpendymomaComponent } from './ependymoma/ependymoma.component';
import { HepatoblastomaComponent } from './hepatoblastoma/hepatoblastoma.component';
import { RetinoblastomaComponent } from './retinoblastoma/retinoblastoma.component';
import { WilmsComponent } from './wilms/wilms.component';
import { GermcellComponent } from './germcell/germcell.component';







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
    MasterWebComponent,
    EwingsComponent,
    LymphoidComponent,
    RhabdomyosarcomaComponent,
    BrainncciComponent,
    EwingsnciiComponent,
    NeuroblastomanciiComponent,
    LeukemianciiComponent,
    Rhabdomyosarcom2Component,
    NeuropdxComponent,
    OthercancerComponent,
    MasterComponent,
    NeuropageComponent,
    DxComponent,
    PdPdPmComponent,
    MYCNComponent,
    MYCNamplifiedComponent,
    ALTESTComponent,
    TERTComponent,
    DataarchiveComponent,
    ExternallinksComponent,
    HelpComponent,
    EpendymomaComponent,
    HepatoblastomaComponent,
    RetinoblastomaComponent,
    WilmsComponent,
    GermcellComponent,
    
    
   
   
    
    
    
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
        {path:'master-web', component:MasterWebComponent},
        {path:'ewings', component:EwingsComponent},
        {path:'lymphoid', component:LymphoidComponent},
        {path:'rhb', component:RhabdomyosarcomaComponent},
        {path:'brainncii', component:BrainncciComponent},
        {path:'ewingsncii', component:EwingsnciiComponent},
        {path:'neuroblastomancii', component:NeuroblastomanciiComponent},
        {path:'leukemiancii', component:LeukemianciiComponent},
        {path:'rhb2', component:Rhabdomyosarcom2Component},
        {path:'neuropdx', component:NeuropdxComponent},
        {path:'othercancer', component:OthercancerComponent},
        {path:'neuropage', component:NeuropageComponent},
        {path:'master', component:MasterComponent},
        {path:'dx', component:DxComponent},
        {path:'pdpdpm', component:PdPdPmComponent},
        {path:'alk', component:ALKComponent},
        {path:'mycn', component:MYCNComponent},
        {path:'mycnamp', component:MYCNamplifiedComponent},
        {path:'altest', component:ALTESTComponent},
        {path:'tert', component:TERTComponent},
        {path:'news', component:NewsComponent},
        {path:'elinks', component:ExternallinksComponent},
        {path:'help', component:HelpComponent},
        {path:'epen', component:EpendymomaComponent},
        {path:'hepatoblastoma', component:HepatoblastomaComponent},
        {path:'retinoblastoma', component:RetinoblastomaComponent},
        {path:'wilms', component:WilmsComponent},
        {path:'germ', component:GermcellComponent},












       


    
    

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
