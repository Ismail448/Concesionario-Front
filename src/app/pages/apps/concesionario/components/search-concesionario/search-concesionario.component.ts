/*import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { Concesionario } from '../../interfaces/Concesionario.model';

@Component({
  selector: 'app-search-concesionario',
  templateUrl: './search-concesionario.component.html',
  styleUrls: []
})

export class SearchConcesionarioComponent implements OnInit {
  concesionarios: Concesionario[] = [];
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  pageIndex: number = 0;
  pageSize: number = 5;
  advancedSearchVisible: boolean = false;

  sortOptions = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  operations = ['contains', 'equal'];

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations[0];
  value: string = '';

  constructor(private concesionarioService: ConcesionarioService) {}

  ngOnInit(): void {
    this.searchConcesionarios();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchConcesionarios(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
    };

    this.concesionarioService.searchConcesionarios(request).subscribe(response => {
      this.concesionarios = response.content || [];
    }, error => {
      console.error('Error fetching concesionarios', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria = [{ key: this.searchKey, operation: this.operation, value: this.value }];
      this.searchConcesionarios();
      this.value = ''; // Clear the input value after adding criteria
    }
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { ConcesionarioStateService } from '../../services/concesionario-state.service';
import { Concesionario } from '../../interfaces/Concesionario.model';

@Component({
  selector: 'app-search-concesionario',
  templateUrl: './search-concesionario.component.html',
  styleUrls: []
})
export class SearchConcesionarioComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  pageIndex: number = 0;
  pageSize: number = 5;
  totalItems: number = 0;
  advancedSearchVisible: boolean = false;

  sortOptions = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  operations = ['contains', 'equal'];

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations[0];
  value: string = '';

  constructor(
    private concesionarioService: ConcesionarioService,
    private concesionarioStateService: ConcesionarioStateService
  ) {}

  ngOnInit(): void {
    this.searchConcesionarios();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchConcesionarios(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
    };

    this.concesionarioService.searchConcesionarios(request).subscribe(response => {
      const concesionarios = response.content || [];
      this.concesionarioStateService.setConcesionarios(concesionarios);
    }, error => {
      console.error('Error fetching concesionarios', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria = [{ key: this.searchKey, operation: this.operation, value: this.value }];
      this.searchConcesionarios();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchConcesionarios();
      location.reload(); // Perform search after removing criteria
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { ConcesionarioStateService } from '../../services/concesionario-state.service';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { EditarConcesionarioComponent } from '../editar-concesionario/editar-concesionario.component';

@Component({
  selector: 'app-search-concesionario',
  templateUrl: './search-concesionario.component.html',
  styleUrls: []
})
export class SearchConcesionarioComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  concesionarios:Concesionario[]=[]
  sortOptions = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  operations = ['contains', 'equal'];

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations[0];
  value: string = '';

  constructor(
    private concesionarioService: ConcesionarioService,
    private concesionarioStateService: ConcesionarioStateService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.searchConcesionarios();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchConcesionarios(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.concesionarioService.searchConcesionarios(request).subscribe(response => {
      const concesionarios = response.content || [];
      this.concesionarioStateService.setConcesionarios(concesionarios);
    }, error => {
      console.error('Error fetching concesionarios', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria = [{ key: this.searchKey, operation: this.operation, value: this.value }];
      this.searchConcesionarios();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchConcesionarios(); // Perform search after removing criteria
    }
  }


}



