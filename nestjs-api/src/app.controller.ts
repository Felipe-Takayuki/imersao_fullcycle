import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';


@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('/hello_world')
  getHello(): string { 
    return this.appService.getHello();
  }    
}
