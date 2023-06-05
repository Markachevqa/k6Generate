export class Headers {
	// static value = ['application/json', 'application/ecmascript', 'multipart/mixed']
	constructor(options) {
		this.contentKey = options.contentKey
		this.authorizationKey = options.authorizationKey
		this.acceptKey = options.acceptKey
		this.contentValue = options.contentValue
		this.acceptValue = options.acceptValue
	}
	
	// set contentInfo(newInfo){
	// 	this.content = newInfo
	// }
}

export let contentType = ['application/json', 'application/ecmascript', 'multipart/mixed']