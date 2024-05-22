import { Controller, Get } from '@nestjs/common';
import { GmailService } from './gmail.service';

@Controller('gmail')
export class GmailController {
	constructor(
		private readonly gmailService: GmailService
	) { }


  @Get('lookup')
  getMails() {
		return this.gmailService.getMails();
  }


}
