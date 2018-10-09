import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { PumpComponent } from './pump/pump';
import { WaterSources8BComponent } from './water-sources8-b/water-sources8-b';
import { WaterSources9Component } from './water-sources9/water-sources9';
import { MachineWaterComponent } from './machine-water/machine-water';

import { FieldAreaComponent } from './field-area/field-area';
import { PoolAreaComponent } from './pool-area/pool-area';
import { TableCheckItemCountComponent } from './table-check-item-count/table-check-item-count';
import { WaterActivity5Component } from './water-activity5/water-activity5';
import { WaterActivity6Component } from './water-activity6/water-activity6';
import { WaterProblem4Component } from './water-problem4/water-problem4';
import { WaterProblem6Component } from './water-problem6/water-problem6';
import { RainStorageComponent } from './rain-storage/rain-storage';
import { LocationComponent } from './location/location';
import { TableBuyingComponent } from './table-buying/table-buying';
import { TableDisasterousComponent } from './table-disasterous/table-disasterous';
import { FieldAreaRiceComponent } from './field-area-rice/field-area-rice';
import { TableBuyingOtherComponent } from './table-buying-other/table-buying-other';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent,
    PumpComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    MachineWaterComponent,
    FieldAreaComponent,
    PoolAreaComponent,
    TableCheckItemCountComponent,
    WaterActivity5Component,
    WaterActivity6Component,
    WaterActivity5Component,
    WaterProblem4Component,
    WaterProblem6Component,
    RainStorageComponent,
    LocationComponent,
    TableBuyingComponent,
    TableDisasterousComponent,
    FieldAreaRiceComponent,
    TableBuyingOtherComponent,
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent),
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent,
    PumpComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    MachineWaterComponent,
    FieldAreaComponent,
    PoolAreaComponent,
    TableCheckItemCountComponent,
    WaterActivity5Component,
    WaterActivity6Component,
    WaterActivity5Component,
    WaterProblem4Component,
    WaterProblem6Component,
    RainStorageComponent,
    LocationComponent,
    TableBuyingComponent,
    TableDisasterousComponent,
    FieldAreaRiceComponent,
    TableBuyingOtherComponent,
    ]
})
export class ComponentsModule {}
