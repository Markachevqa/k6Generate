export class Request {
	constructor(options) {
		this.name = options.name
		this.method = options.method
		this.url = options.url
		this.body = options.body
		this.path = options.path
		this.typeHeader = options.typeHeader
		this.header = options.header
	}
}
