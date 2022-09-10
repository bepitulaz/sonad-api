require('module-alias/register');
import createServer from '@lib/presentation/http/server';
import { buildServices } from '@lib/config/service-locator';
import dotenv from 'dotenv';

try {
	dotenv.config();
	const services = buildServices();

	createServer(services);
} catch (err) {
	/* eslint-disable no-console */
	console.log(err);
	process.exit(1);
}
