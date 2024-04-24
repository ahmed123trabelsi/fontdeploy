import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { SelectionModel } from '@angular/cdk/collections';
import { UnsubscribeOnDestroyAdapter } from '@shared';

import { Direction } from '@angular/cdk/bidi';
import { TableExportUtil, TableElement } from '@shared';
import { formatDate, NgClass, DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CookieService } from 'ngx-cookie-service';
import { TasksModel } from './my-tasks.model';
import { EstimatesService } from 'app/admin/projects/estimates/estimates.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'app/admin/projects/all-projects/core/project.service';
import Swal from 'sweetalert2';
import { AuthService } from '@core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgClass,
    MatCheckboxModule,
    FeatherIconsComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class MyTasksComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  tasks: TasksModel[] = [];
  columns: string[] = ['NomTask', 'description', 'statut', 'priority','FinishDate','startDate','actions'];
  exampleDatabase?: EstimatesService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<TasksModel>(true, []);
  index?: number;
  id?: string;
  p!:any
  user!:any
userfinded!:any
  t!:any
  constructor(
    private actR : ActivatedRoute,
    public httpClient: HttpClient,
    private projectService: ProjectService,
    public dialog: MatDialog,
    public estimatesService: EstimatesService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService ,
    private auth:AuthService
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  ngOnInit() {
  
    this.estimatesService.getTasks().subscribe({
      next: (data: any) => {
        this.tasks = data;
      
      },
      error: (error) => {
        console.error('Il y a eu une erreur lors de la récupération des tâches :', error);
      }
    });
    this.retrieveUserData()

  }
  retrieveUserData() {
    const cookieData = this.cookieService.get('user_data');
    if (cookieData) {
      try {
        const userData = JSON.parse(cookieData);
        this.user = userData.user; // Store user data in the component's variable
        console.log(this.user.id); // You can now access user data within this component
        this.auth.getUserById(this.user.id).subscribe((data)=>{this.userfinded=data;
          console.log('dd',this.userfinded.tasks)
        });
      } catch (error) {
        console.error('Error decoding cookie:', error);
      }
    } else {
      console.error('Cookie "user_data" is not set');
    }
  }
  refresh() {
this.ngOnInit()
  }
  addNew(idProject:string) {
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
   
       action: 'add',
         idProject:idProject ,
         tasks :this.tasks   ,
         task:this.t      
      },
      direction: tempDirection,
    });
    this.subs.sink =  dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé.', result);
      if (result) {
       
        this.tasks=result
      }
    });
  }
  editCall(row: TasksModel) {
    this.id = row._id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        // estimates: row,
        taskId:row._id,
        action: 'edit',
        task:row,
      tasks :this.tasks    },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
          (x) => x._id === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        if (foundIndex !== undefined) {
          if (this.exampleDatabase) {
            this.exampleDatabase.dataChange.value[foundIndex] =
              this.estimatesService.getDialogData();
          }
          // And lastly refresh table
     
          this.showNotification(
            'black',
            'Edit Record Successfully...!!!',
            'bottom',
            'center'
          );
        }
      }
    });
  }
  public deleteItem(row: any): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.estimatesService.deleteTask(row._id).subscribe(() => {
          Swal.fire(
            'Supprimé!',
            'Votre projet a été supprimé.',
            'success'
          );
          this.ngOnInit(); // Ou une autre méthode pour actualiser la liste des projets
        }, (error) => {
          // Gérer l'erreur ici, par exemple :
          Swal.fire(
            'Erreur!',
            'La suppression du projet a échoué.',
            'error'
          );
        });
      }
    });
  }

  /** Whether the number of selected elements matches the details number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const detailsSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex(
        (d) => d === item
      );
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      this.exampleDatabase?.dataChange.value.splice(index, 1);
     
      this.selection = new SelectionModel<TasksModel>(true, []);
    });
    this.showNotification(
      'snackbar-danger',
      detailsSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  public loadData() {
    this.exampleDatabase = new EstimatesService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }
  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        NomTask: x.NomTask,
        description: x.description,
        startDate: x.startDate?.toISOString(), // Convert Date to string
        FinishDate: x.FinishDate?.toISOString(), 
        priority: x.priority,
        statut: x.statut,
  
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
export class ExampleDataSource extends DataSource<any> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: TasksModel[] = [];
  renderedData: TasksModel[] = [];
  constructor(
    public exampleDatabase: EstimatesService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getTasks();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((estimates: TasksModel) => {
            const searchStr = (
              estimates.NomTask+
              estimates.description+
              estimates.startDate+
              estimates.FinishDate 
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  disconnect() {
    //disconnect
  }
  /** Returns a sorted copy of the database data. */
  sortData(data: any[]): any[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'cName':
          [propertyA, propertyB] = [a.cName, b.cName];
          break;
        case 'estDate':
          [propertyA, propertyB] = [a.estDate, b.estDate];
          break;
        case 'country':
          [propertyA, propertyB] = [a.country, b.country];
          break;
        case 'expDate':
          [propertyA, propertyB] = [a.expDate, b.expDate];
          break;
        case 'status':
          [propertyA, propertyB] = [a.status, b.status];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }


}

