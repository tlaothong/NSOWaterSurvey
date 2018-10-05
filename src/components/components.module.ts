import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { PoolComponent } from './pool/pool';
import { WaterSources8BComponent } from './water-sources8-b/water-sources8-b';
import { WaterSources9Component } from './water-sources9/water-sources9';
import { EnginewaterActivity4Component } from './enginewater-activity4/enginewater-activity4';
import { EnginewaterActivity6Component } from './enginewater-activity6/enginewater-activity6';


@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    EnginewaterActivity4Component,
    EnginewaterActivity6Component,
    
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    EnginewaterActivity4Component,
    EnginewaterActivity6Component,
    
    ]
})
export class ComponentsModule {}
