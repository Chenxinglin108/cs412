
import {{ Component }} from '@angular/core';

@Component({{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}})
export class AppComponent {{
  title = 'your-app-name';
  mockData = [{ name: 'Example', detail: 'This is a mock item' }]; // Replace with your actual mock data
  dataToDisplay = null;

  fetchData() {{
    this.dataToDisplay = this.mockData;
  }}
}}
