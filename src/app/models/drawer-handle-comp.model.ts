export interface DrawerHandlerComponent {
  component: any;
  data: any;
  width?: any;
}

export interface DrawerHandlerComponents {
  [key: string]: DrawerHandlerComponent;
}
