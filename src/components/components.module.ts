import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { PoolComponent } from './pool/pool';
import { WaterSources8BComponent } from './water-sources8-b/water-sources8-b';
import { WaterSources9Component } from './water-sources9/water-sources9';
import { FieldAreaComponent } from './field-area/field-area';
import { PoolAreaComponent } from './pool-area/pool-area';
import { RectanglePoolComponent } from './rectangle-pool/rectangle-pool';
import { CirclePoolComponent } from './circle-pool/circle-pool';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    FieldAreaComponent,
    PoolAreaComponent,
    RectanglePoolComponent,
    CirclePoolComponent
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent,
    WaterSources8BComponent,
    WaterSources9Component,
    FieldAreaComponent,
    PoolAreaComponent,
    RectanglePoolComponent,
    CirclePoolComponent
    ]
})
export class ComponentsModule {}
