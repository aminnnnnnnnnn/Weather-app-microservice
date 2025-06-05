import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayController } from "./GateWayController/GatewayController";

@Module({
  imports: [HttpModule],
  controllers: [AppController, GatewayController],
  providers: [AppService],
})
export class AppModule {}
