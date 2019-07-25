
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://ec2-18-224-182-74.us-east-2.compute.amazonaws.com:8080/superemp/employees';

getConfig() {
  return this.http.get(this.configUrl);
}
}    

