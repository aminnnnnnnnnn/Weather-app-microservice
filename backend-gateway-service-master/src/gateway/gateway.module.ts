import { Module } from '@nestjs/common';
import {GatewayController} from "../GateWayController/GatewayController";

@Module({
    controllers: [GatewayController],
})
export class GatewayModule {}
