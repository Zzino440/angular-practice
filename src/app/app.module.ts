import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentalsNativeElemComponent } from './fundamentals-native-elem/fundamentals-native-elem.component';
import { FundamentalsDirectivesComponent } from './fundamentals-directives/fundamentals-directives.component';
import { FundamentalsAttributesComponent } from './fundamentals-attributes/fundamentals-attributes.component';
import { FundamentalsComponentsComponent } from './fundamentals-components/fundamentals-components.component';

import {HelloComponent} from "./fundamentals-components/components/hello.component";
import { FundamentalsPipesComponent } from './fundamentals-pipes/fundamentals-pipes.component';
import { FundamentalsCustomTypesComponent } from './fundamentals-custom-types/fundamentals-custom-types.component';
import { FundamentalsInjectionComponent } from './fundamentals-injection/fundamentals-injection.component';
import {Utility} from "./fundamentals-injection/service/utility";
import { FundamentalsHttpRESTAPIComponent } from './fundamentals-http-rest-api/fundamentals-http-rest-api.component';
import {HttpClientModule} from "@angular/common/http";
import { FormInputComponent } from './template-driven-form/form-input/form-input.component';
import { NgModelBindingComponent } from './template-driven-form/ng-model-binding/ng-model-binding.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FundamentalsNativeElemComponent,
    FundamentalsDirectivesComponent,
    FundamentalsAttributesComponent,
    FundamentalsComponentsComponent,
    HelloComponent,
    FundamentalsPipesComponent,
    FundamentalsCustomTypesComponent,
    FundamentalsInjectionComponent,
    FundamentalsHttpRESTAPIComponent,
    FormInputComponent,
    NgModelBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Utility
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
