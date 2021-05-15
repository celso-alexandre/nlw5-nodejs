import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

export class Routes {
  public routes: Router;

  private settingsController: SettingsController;

  constructor() {
    this.routes = Router();
    this.settingsController = new SettingsController();

    this.routes.post('/settings', this.settingsController.create);
  }
}
