import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolesDialogComponent } from 'src/app/components/roles-dialog/roles-dialog.component';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public results: any;
  public srResults: any;

  constructor(
    private api: ApiServiceService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit() {
    this.listaRoles();
  }

  openDialog() {
    const dialogRef = this.dialog.open(RolesDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('respuesta del dialogo: ' + result);
      this.cdr.detectChanges();

      const data = {
        "rol": result
      }

      this.api.registrarRole(data).subscribe(res => { console.log(res); this.listaRoles(); });
    });
  }

  async listaRoles() {
    await this.api.listaRoles().subscribe(
      res => {
        console.log(res);
        this.results = res;
        this.srResults = this.results['Datos'];
        console.log(this.srResults);
      }
    );
  }

}
