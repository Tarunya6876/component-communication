import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private ss:SharedServiceService) { }
@Input() activevendorname: VendorModel[]=[];
@Output() public childEvent =new EventEmitter<VendorModel>();

selectedVendor:VendorModel = {} as VendorModel;
OnselectedVendor(vendor:VendorModel) {
  this.selectedVendor=vendor;
  console.log(this.selectedVendor);
  this.ss.setVendor(this.selectedVendor);
  this.childEvent.emit(vendor);

  //   this.selectedVendorName=vendor.name;
}
  ngOnInit(): void {
  }

}
