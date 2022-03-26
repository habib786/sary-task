import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // CLI imports router


// Service.
import { HeroesService } from '../heroes.service';
import { ApiService } from '../api.service';

interface Food {
  value: string;
  viewValue: string;
}


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers:  [ HeroesService ]
})

export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'email', 'date', 'country', 'company' ];
  dataSource = new MatTableDataSource(this._heroesService.getHeroesList());
  showFiller = false;

  filterForm = new FormGroup({
    "name": new FormControl(""),
    "phone": new FormControl(""),
    "email": new FormControl(""),
    "date": new FormControl(""),
    "country": new FormControl(""),
    "company": new FormControl(""),
  });


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private _heroesService: HeroesService, private _apiService: ApiService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this._apiService.getCountries()
      .subscribe(countries => {
          console.log('countries in heroes component', countries);
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    console.log('this.filterForm', this.filterForm.value);

    let configuration = [{
      title: 'Email',
      type: 'text',
      value: this.filterForm?.value?.email || ''
    },
    {
      title: 'Phone',
      type: 'text',
      value: this.filterForm?.value?.phone || ''
    },
    {
      title: 'Name',
      type: 'text',
      value: this.filterForm?.value?.name || ''
    },
    {
      title: 'Company',
      type: 'text',
      value: this.filterForm?.value?.company || ''
    },
   {
      title: 'country',
      type: 'dropdown',
      api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
      multiple: false,
      value: this.filterForm?.value?.country || ''
    },
    {
      title: 'Date',
      type: 'date',
      value: this.filterForm?.value?.date || ''
    }];

    this.router.navigate(
      ['/heroes'],
      { queryParams: {
        name: this.filterForm?.value?.name || '',
        phone: this.filterForm?.value?.phone || '',
        email: this.filterForm?.value?.email || '',
        date: this.filterForm?.value?.date ? this.filterForm.value.date.toISOString().slice(0, 10) : '',
        country: this.filterForm?.value?.country || '',
        company: this.filterForm?.value?.company || ''
      } }
    );

  }

}