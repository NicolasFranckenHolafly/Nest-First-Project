import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //here we make the module global, so it can be used in other modules without importing it
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
