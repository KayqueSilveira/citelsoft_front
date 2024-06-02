import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importa o AppModule

platformBrowserDynamic().bootstrapModule(AppModule) // Inicia o AppModule
  .catch(err => console.error(err));
