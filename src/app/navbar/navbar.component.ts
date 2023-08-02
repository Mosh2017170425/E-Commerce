// import { Component, inject } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   private breakpointObserver = inject(BreakpointObserver);

//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );
// }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',   
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  // BrowserAnimationsModule,
 
  
  imports: [MatSidenavModule, MatButtonModule,BrowserAnimationsModule, MatListModule,MatIconModule],
})
export class SidenavBackdropExample {}