import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SharedBroadcastService } from './shared/index';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import {
  MonacoEditorComponent, MonacoDiffEditorComponent, ZjsDiffEditorComponent
} from './monaco-editor/index';
import {
  AppConfigComponent, ConfigLangComponent, ConfigThemeComponent,
  ConfigIndentComponent, ConfigTypeComponent
} from './app-config/index';
import {
  ZjsHintComponent, ZjsTitleComponent, ZjsNoticeComponent, ZjsInfoComponent,
  ZjsHistComponent, ZjsLoadingComponent, ZjsUpdateComponent, ZjsCompareComponent
} from './attachments';

export function TranslateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    HttpClientModule, BrowserAnimationsModule,
    BsDropdownModule.forRoot(), ModalModule.forRoot(),
    TranslateModule.forRoot({loader: {
      provide: TranslateLoader, deps: [HttpClient],
      useFactory: TranslateFactory
    }})
  ],
  declarations: [
    AppComponent, AppConfigComponent, ConfigLangComponent,
    ConfigThemeComponent, ConfigIndentComponent, ConfigTypeComponent,
    MonacoEditorComponent, MonacoDiffEditorComponent,
    ZjsDiffEditorComponent, ZjsHintComponent, ZjsTitleComponent,
    ZjsNoticeComponent, ZjsInfoComponent, ZjsHistComponent,
    ZjsLoadingComponent, ZjsUpdateComponent, ZjsCompareComponent
  ],
  providers: [
    AppService, SharedBroadcastService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
