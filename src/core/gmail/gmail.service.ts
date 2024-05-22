import { HttpException, Injectable } from '@nestjs/common';

import { google } from 'googleapis';


@Injectable()
export class GmailService {

	// https://developers.google.com/gmail/api/reference/rest/v1/users.messages/get
	async getMails() {
		try {
			const { data: { messages } } = await this.getGmailInstance().users.messages.list({ userId: 'me' });
			return messages;
		} catch (error) {
			console.log(error);
			throw new HttpException(error.messages, error.status || 500);
		}
	}

	private getGmailInstance() {
		const auth = new google.auth.GoogleAuth({
			keyFilename: 'PATH_TO_SERVICE_ACCOUNT_KEY.json',
			
			// https://developers.google.com/gmail/api/auth/scopes
			scopes: ['https://www.googleapis.com/auth/gmail.readonly	']
		});
		return google.gmail({ version: "v1", auth });
	}

}
