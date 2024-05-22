import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './core';
import { GmailModule } from './core/gmail/gmail.module';

@Module({
	imports: [EmailModule, GmailModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
