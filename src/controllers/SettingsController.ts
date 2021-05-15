import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Setting } from '../database/entities/Setting';
import { SettingsRepository } from '../database/repositories/SettingsRepository';

export class SettingsController {
  // private settingsRepository: SettingsRepository;

  // constructor() {
  //   this.settingsRepository = getCustomRepository(SettingsRepository);
  // }

  async create(request: Request, response: Response) {
    const { chat, username } = request.body as Pick<Setting, 'chat' | 'username'>;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const setting = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(setting);

    return response.json(setting);
  }
}
