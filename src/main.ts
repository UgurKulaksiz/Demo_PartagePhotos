import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

registerLocaleData(fr.default); // Enregistrement de la locale française pour les pipes de date et de nombre

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
