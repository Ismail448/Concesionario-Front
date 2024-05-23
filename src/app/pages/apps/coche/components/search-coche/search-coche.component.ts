/*import { Component, OnInit } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { CocheStateService } from '../../services/coche-state.service';
import { Coche } from '../../interfaces/Coche.model';

@Component({
  selector: 'app-search-coche',
  templateUrl: './search-coche.component.html',
  styleUrls: []
})
export class SearchCocheComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'matricula', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  coches: Coche[] = [];
  sortOptions = ['matricula', 'color', 'precio', 'fechaFabricacion'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['matricula', 'color', 'precio', 'fechaFabricacion'];
  operations = {
    text: ['contains', 'equal'],
    number: ['greater_than', 'equal', 'lower_than']
  };

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations.text[0];
  value: string = '';

  constructor(
    private cocheService: CocheService,
    private cocheStateService: CocheStateService
  ) {}

  ngOnInit(): void {
    this.searchCoches();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchCoches(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.cocheService.searchCoche(request).subscribe(response => {
      const coches = response.content || [];
      this.cocheStateService.setCoches(coches);
    }, error => {
      console.error('Error fetching coches', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria.push({ key: this.searchKey, operation: this.operation, value: this.value });
      this.searchCoches();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchCoches(); // Perform search after removing criteria
    }
  }

  updateOperations(): void {
    this.operation = ['precio', 'fechaFabricacion'].includes(this.searchKey) ? this.operations.number[0] : this.operations.text[0];
  }
}*/

import { Component, Output, EventEmitter } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { Coche } from '../../interfaces/Coche.model';

@Component({
  selector: 'app-search-coche',
  templateUrl: './search-coche.component.html',
  styleUrls: []
})
export class SearchCocheComponent {
  @Output() searchResults = new EventEmitter<Coche[]>();

  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'matricula', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  sortOptions = ['matricula', 'color', 'precio', 'fechaFabricacion'];
  searchKeys = ['matricula', 'color', 'precio', 'fechaFabricacion'];
  operations = {
    text: ['contains', 'equal'],
    number: ['greater_than', 'equal', 'lower_than']
  };

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations.text[0];
  value: string = '';

  constructor(private cocheService: CocheService) {}

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchCoches(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.cocheService.searchCoche(request).subscribe(response => {
      const coches = response.content || [];
      this.searchResults.emit(coches);
    }, error => {
      console.error('Error fetching coches', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria.push({ key: this.searchKey, operation: this.operation, value: this.value });
      this.searchCoches();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchCoches(); // Perform search after removing criteria
    }
  }

  updateOperations(): void {
    this.operation = ['precio', 'fechaFabricacion'].includes(this.searchKey) ? this.operations.number[0] : this.operations.text[0];
  }
}

