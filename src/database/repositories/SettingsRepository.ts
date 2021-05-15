import { Repository, EntityRepository } from 'typeorm';
import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
export class SettingsRepository extends Repository<Setting> {

}
