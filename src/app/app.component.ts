import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'enterprise-league-app';
  isMobile = false;
  isTablet = false;
  isDesktopDevice = false;

  menuItems: MenuItem[] = [
    {
      label: 'Product',
      icon: 'login'
    },
    {
      label: 'Use Cases',
      icon: 'help'
    },
    {
      label: 'Remote Work',
      icon: 'attach_money'
    },
    {
      label: 'Enterprise',
      icon: 'notes'
    },
    {
      label: 'Login',
      icon: 'rss_feed'
    },
  ];


  constructor(private deviceService: DeviceDetectorService) {
    this.deviceDetectorFunction();
   }

  
  ngOnInit(): void {
  }
  deviceDetectorFunction(){
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.isMobile);
    console.log(this.isTablet);
    console.log(this.isDesktopDevice);
  }
}
interface MenuItem {
  label: string;
  icon: string;
}
