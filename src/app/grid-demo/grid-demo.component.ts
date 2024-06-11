import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-grid-demo',

  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css']
})
export class GridDemoComponent implements OnInit {
  private gridApi!: GridApi<any>;
  userList:any[]=[];
  public rowSelection :'single' | 'multiple'='multiple'; 

  colDefs: ColDef[] = [
    { field: "id" , headerName:'User Id',headerCheckboxSelection:true, checkboxSelection:true,
      cellRenderer:(item:any)=>{
        return "EMP-"+ item.value
      }
    },
    { field: "name" , headerName:'Name ' ,filter:true},
    { field: "username", headerName:'User Name ' },
    { field: "email", headerName:'Email ', editable:true },
    { field: "address.street", headerName:'Street Name '}
  ];
  defalutColDef={
    flex:1,
    minWdth:100
  }



constructor(private http:HttpClient){}


ngOnInit(): void {
  this.getUser();
    }


  // Additional methods or properties can be added here for further customization

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList=res;

    })

  }
  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }
  onGridReady(event: GridReadyEvent<any>) {
    this.gridApi = event.api;

   
  }
}
