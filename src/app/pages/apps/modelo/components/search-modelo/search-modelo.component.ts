import { Component, OnInit } from '@angular/core';
import { Modelo } from '../../interfaces/Modelo.model';
import { ModeloService } from '../../service/modelo.service';
import { ModeloStateService } from '../../service/modelo-state.service';


@Component({
  selector: 'app-search-modelo',
  templateUrl: './search-modelo.component.html',
  styleUrls: []
})
export class SearchModeloComponent implements OnInit {
  searchCriteria: any[] = [];
  sortCriteria: any = { sortBy: 'nombre', valueSortOrder: 'ASC' };
  advancedSearchVisible: boolean = false;
  modelos: Modelo[] = [];
  sortOptions = ['nombre', 'tipoCoche', 'anyoLanzamiento'];
  sortOrderOptions = ['ASC', 'DESC'];
  searchKeys = ['nombre', 'tipoCoche', 'anyoLanzamiento'];
  operations = {
    text: ['contains', 'equal'],
    number: ['greater_than', 'equal', 'lower_than']
  };

  searchKey: string = this.searchKeys[0];
  operation: string = this.operations.text[0];
  value: string = '';

  constructor(
    private modeloService: ModeloService,
    private modeloStateService: ModeloStateService
  ) {}

  ngOnInit(): void {
    this.searchModelos();
  }

  toggleAdvancedSearch() {
    this.advancedSearchVisible = !this.advancedSearchVisible;
  }

  searchModelos(): void {
    const request = {
      listOrderCriteria: [this.sortCriteria],
      listSearchCriteria: this.searchCriteria,
      page: {
        pageIndex: 0,  // Siempre empezar desde la primera página para nuevas búsquedas
        pageSize: 1000 // Valor alto para obtener todos los resultados
      }
    };

    this.modeloService.searchModelo(request).subscribe((response: { content: never[]; }) => {
      const modelos = response.content || [];
      this.modeloStateService.setModelos(modelos);
    }, (error: any) => {
      console.error('Error fetching modelos', error);
    });
  }

  addSearchCriteria(): void {
    if (this.value) {
      this.searchCriteria.push({ key: this.searchKey, operation: this.operation, value: this.value });
      this.searchModelos();
      this.value = ''; // Clear the input value after adding criteria
    }
  }

  removeSearchCriteria(criteria: any): void {
    const index = this.searchCriteria.indexOf(criteria);
    if (index > -1) {
      this.searchCriteria.splice(index, 1);
      this.searchModelos(); // Perform search after removing criteria
    }
  }

  updateOperations(): void {
    this.operation = this.searchKey === 'anyoLanzamiento' ? this.operations.number[0] : this.operations.text[0];
  }
}
