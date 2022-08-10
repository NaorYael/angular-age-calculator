import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from '@angular/material/form-field'

const modules = [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule {
}
