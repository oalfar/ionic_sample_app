import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  isWebViewOpen = false; // Tracks WebView state
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    var url = 'https://m.gameball.app/?lang=en&apiKey=973dafe728864abbaae0da5bbc9d2f89&playerid=kok&sdk=1.2.5&os=android-sdk-33'
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openWebView() {
    this.isWebViewOpen = true;
  }

  closeWebView() {
    this.isWebViewOpen = false;
  }
}
