import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';

@Injectable()
export class OfficeService {
    constructor(
        @InjectRepository(Office) private readonly officeRepository: Repository<Office>
    ) { }

    async index(): Promise<Office[]> {
        return this.officeRepository.find();
    }

    async store(payload: any): Promise<Office> {
        return this.officeRepository.save(payload);
    }

    async show(id: number): Promise<Office> {
        return this.officeRepository.findOne(id);
    }

    async update(id: number, payload: any): Promise<any> {
        return this.officeRepository.update(id, payload);
    }
}
