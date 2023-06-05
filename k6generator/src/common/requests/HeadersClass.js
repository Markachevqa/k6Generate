export class Headers {
	
	constructor(options) {
		this.contentKey = options.contentKey
		this.authorizationKey = options.authorizationKey
		this.acceptKey = options.acceptKey
		this.contentValue = options.contentValue
		this.acceptValue = options.acceptValue
	}
}

export let contentType = ['application/json', 'application/ecmascript', 'multipart/mixed']