import { APIGatewayProxyCallbackV2, APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, Context } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { bootstrapApplication } from './app';

let serverInstance: APIGatewayProxyHandlerV2;
async function bootstrapLambdaApi(): Promise<APIGatewayProxyHandlerV2<never>> {
	if (!serverInstance) {
		const { application } = await bootstrapApplication();
		await application.init();
		const expressInstance = application.getHttpAdapter().getInstance();
		serverInstance = serverlessExpress({
			app: expressInstance,
			// eventSourceRoutes: {
			// 	AWS_SQS: '/sqs',
			// 	AWS_SNS: '/sns',
			// 	AWS_DYNAMODB: '/dynamodb',
			// 	AWS_EVENTBRIDGE: '/event-bridge',
			// 	AWS_KINESIS_DATA_STREAM: '/kinesis'
			// }
		});
	}
	return serverInstance;
}

export async function handler(
	event: APIGatewayProxyEventV2,
	context: Context,
	callback: APIGatewayProxyCallbackV2
) {
	const server = await bootstrapLambdaApi();
	return server(event, context, callback);
}