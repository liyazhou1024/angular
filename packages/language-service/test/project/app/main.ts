/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import * as ParsingCases from './parsing-cases';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    AppComponent,
    ParsingCases.CaseIncompleteOpen,
    ParsingCases.CaseMissingClosing,
    ParsingCases.CaseUnknown,
    ParsingCases.CounterDirective,
    ParsingCases.HintModel,
    ParsingCases.NoValueAttribute,
    ParsingCases.NumberModel,
    ParsingCases.StringModel,
    ParsingCases.TemplateReference,
    ParsingCases.TestComponent,
    ParsingCases.WithContextDirective,
  ]
})
export class AppModule {
}

declare function bootstrap(v: any): void;

bootstrap(AppComponent);
