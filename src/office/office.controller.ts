import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('offices')
export class OfficeController {
    constructor(private officeService: OfficeService) { }

    @Get()
    async index() {
        return await this.officeService.index();
    }

    @Post()
    async store(@Body() body) {
        /* @Body('code_sucursal') code_sucursal: string, @Body('name_sucursal') name_sucursal: string, @Body('region') region: string, @Body('user_register') user_register: string, @Body('date_register') date_register: string */
        return await this.officeService.store(body);
    }

    @Get(':id')
    async show(@Param('id') id: number) {
        return await this.officeService.show(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body('name_sucursal') name_sucursal: string, @Body('region') region: string) {
        return await this.officeService.update(id, { name_sucursal, region });
    }
}
