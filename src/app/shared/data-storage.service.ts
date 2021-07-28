// Handling the HTTP requests in the recipe.service is perfectly fine & calling them on button click in the header template, but its saved here for easy finding/ referring back to the course material.
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient) {}
}