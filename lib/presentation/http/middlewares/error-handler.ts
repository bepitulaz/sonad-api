import { Request, Response, NextFunction } from 'express';

export class CustomError {
	message!: string;
	status!: number;
	additionalInfo!: any;

	constructor(message: string, status = 500, additionalInfo: any = {}) {
		this.message = message;
		this.status = status;
		this.additionalInfo = additionalInfo;
	}
}

const errorHandler = (err: TypeError | CustomError, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof CustomError) {
		return res.status((err as CustomError).status).send(err);
	}

	return res.status(500).send('Something went wrong');
};

export default errorHandler;
