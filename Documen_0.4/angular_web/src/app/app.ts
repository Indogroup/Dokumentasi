import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: 'src/app/app.html',
  styleUrls: ['src/app/app.css']
})
export class App {
  heading: string;
  text: string;

  constructor() {
    this.heading = `Angular v${VERSION.full}`;
    this.text = "Caution: do not look into laser with remaining eye.";
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
}
