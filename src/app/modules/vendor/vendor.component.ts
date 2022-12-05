import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  public ivendor : VendorModel = {}  as VendorModel;
  constructor() { }
  
vendorlist:VendorModel[]=[
  {name:'Priya',age:21,city:'Hyderabad'},
  {name:'Adarsh',age:25,city:'Chennai'},
  {name:'NTR',age:30,city:'Delhi'}
];

  ngOnInit(): void {
  }
// getVendorList():VendorModel[]{
//   return this.vendorlist;
// }
// selectedVendorName?:string;
// onSelect(vendor:VendorModel):void {
//   this.selectedVendorName=vendor.name;
// }
}
