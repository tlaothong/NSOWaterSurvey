import { NgModule } from '@angular/core';
import { SelectAllDirective } from './select-all/select-all';
import { RxFormDataDirective } from './rx-form-data/rx-form-data';
@NgModule({
	declarations: [SelectAllDirective,
    RxFormDataDirective],
	imports: [],
	exports: [SelectAllDirective,
    RxFormDataDirective]
})
export class DirectivesModule {}
