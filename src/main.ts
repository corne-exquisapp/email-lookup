import { Logger } from '@nestjs/common';

import { bootstrapApplication } from './app';

async function bootstrap() {
	const { application } = await bootstrapApplication();
	await application.listen(3000);
	Logger.verbose('Server running on http://localhost:3000/api');
}
bootstrap();
