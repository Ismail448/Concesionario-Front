/*import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { MarcaService } from '../../services/marca.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { ConcesionarioStateService } from '../../../concesionario/services/concesionario-state.service';
import { MarcaStateService } from '../../services/marca-state.service';

@Component({
  selector: 'app-search-marca',
  templateUrl: './search-marca.component.html',
  styleUrls: []
})
export class SearchMarcaComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  marcas:Marca[]=[]
  sortOptions = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'direccion', 'telefono', 'email', 'sitioWeb'];
  operations = ['contains', 'equal'];

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations[0];
  value: string = '';

  constructor(
    private marcaService: MarcaService,
    private marcaStateService: MarcaStateService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.searchMarcas();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchMarcas(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.marcaService.searchMarca(request).subscribe(response => {
      const marcas = response.content || [];
      this.marcaStateService.setMarcas(marcas);
    }, error => {
      console.error('Error fetching concesionarios', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria = [{ key: this.searchKey, operation: this.operation, value: this.value }];
      this.searchMarcas();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchMarcas(); // Perform search after removing criteria
    }
  }


}*/

// search-marca.component.ts
/*import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { MarcaService } from '../../services/marca.service';
import { MarcaStateService } from '../../services/marca-state.service';

@Component({
  selector: 'app-search-marca',
  templateUrl: './search-marca.component.html',
  styleUrls: []
})
export class SearchMarcaComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  marcas: Marca[] = [];
  sortOptions = ['nombre', 'paisOrigen', 'sitioWeb', 'telefono', 'anyoFundacion'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'paisOrigen', 'sitioWeb', 'telefono', 'anyoFundacion'];
  operations = ['contains', 'equal'];

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations[0];
  value: string = '';

  constructor(
    private marcaService: MarcaService,
    private marcaStateService: MarcaStateService
  ) {}

  ngOnInit(): void {
    this.searchMarcas();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchMarcas(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.marcaService.searchMarca(request).subscribe(response => {
      const marcas = response.content || [];
      this.marcaStateService.setMarcas(marcas);
    }, error => {
      console.error('Error fetching marcas', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria = [{ key: this.searchKey, operation: this.operation, value: this.value }];
      this.searchMarcas();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchMarcas(); // Perform search after removing criteria
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { MarcaService } from '../../services/marca.service';
import { MarcaStateService } from '../../services/marca-state.service';

@Component({
  selector: 'app-search-marca',
  templateUrl: './search-marca.component.html',
  styleUrls: []
})
export class SearchMarcaComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  marcas: Marca[] = [];
  sortOptions = ['nombre', 'paisOrigen', 'sitioWeb', 'telefono', 'anyoFundacion'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'paisOrigen', 'sitioWeb', 'telefono', 'anyoFundacion'];
  operations = {
    text: ['contains', 'equal'],
    number: ['greater_than', 'equal', 'lower_than']
  };

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations.text[0];
  value: string = '';

  constructor(
    private marcaService: MarcaService,
    private marcaStateService: MarcaStateService
  ) {}

  ngOnInit(): void {
    this.searchMarcas();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchMarcas(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.marcaService.searchMarca(request).subscribe(response => {
      const marcas = response.content || [];
      this.marcaStateService.setMarcas(marcas);
    }, error => {
      console.error('Error fetching marcas', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria.push({ key: this.searchKey, operation: this.operation, value: this.value });
      this.searchMarcas();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchMarcas(); // Perform search after removing criteria
    }
  }

  updateOperations(): void {
    this.operation = this.searchKey === 'anyoFundacion' ? this.operations.number[0] : this.operations.text[0];
  }
}


