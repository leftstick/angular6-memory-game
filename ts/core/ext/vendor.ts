// Angular
if (process.env.NODE_ENV === 'production') {
    require('@angular/platform-browser');
}
if (process.env.NODE_ENV !== 'production') {
    require('@angular/platform-browser-dynamic');
}
import '@angular/core';
import '@angular/common';
import '@angular/router';

//redux
import '@angular-redux/store';

// RxJS
import 'rxjs';
