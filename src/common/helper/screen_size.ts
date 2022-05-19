import { useWindowSize } from "common/custom_hooks/use_window_size"


export class ScreenSize {
  
  constructor(public width: number = 0.0, public height:number = 0.0) {
    this.width = width;
    this.height = height;
  };

  get isMobileView():boolean {
    return this.width <= 480;

  }

  get isTabletView():boolean {
    return this.width <= 768 && this.width >= 481;
  }

  get isSmallScreen():boolean {
    return !(this.isTabletView || this.isMobileView);
  }

  get isLargeDesktop():boolean {
    return this.width >= 1080;
  }

}