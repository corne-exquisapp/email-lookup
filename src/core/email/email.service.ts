import { Injectable } from '@nestjs/common';

import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-6.0";
import { Environment } from '@zohocrm/typescript-sdk-6.0';

@Injectable()
export class EmailService {

	lookupEmail() {
		return `This action returns all email`;
	}



	async getZohoInstance(): Promise<void> {
		const environment: Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
		const token = new ZOHOCRMSDK.OAuthBuilder()
			.clientId("clientId")
			.clientSecret("clientSecret")
			.grantToken("GRANT Token")
			.redirectURL("redirectURL")
			.build();
		return await new ZOHOCRMSDK.InitializeBuilder()
			.environment(environment)
			.token(token)
			.initialize()
			.catch(error => console.log(error));
	}

}
