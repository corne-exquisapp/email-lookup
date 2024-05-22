import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EmailJob } from './job/email.job';

@Module({
  controllers: [EmailController],
  providers: [EmailService, EmailJob],
})
export class EmailModule {}
