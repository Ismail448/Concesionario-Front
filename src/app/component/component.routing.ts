import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ConcesionarioPrincipalComponent } from '../pages/apps/concesionario/components/concesionario-principal/concesionario-principal.component';
import { MarcaPrincipalComponent } from '../pages/apps/marca/components/marca-principal/marca-principal.component';
import { ModeloPrincipalComponent } from '../pages/apps/modelo/components/modelo-principal/modelo-principal.component';
import { CochePrincipalComponent } from '../pages/apps/coche/components/coche-principal/coche-principal.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
      {
        path: 'concesionario',
        component: ConcesionarioPrincipalComponent
      },
      {
        path: 'marca',
        component: MarcaPrincipalComponent
      },
      {
        path: 'modelo',
        component: ModeloPrincipalComponent
      },
      {
        path: 'coche',
        component: CochePrincipalComponent
      }
			/*{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: NgbdButtonsComponent
			}*/
		]
	}
];
