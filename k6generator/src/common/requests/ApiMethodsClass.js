import {} from 'k6';
import http from 'k6/http';
import {Request} from "./RequestClass.js";
import {Headers} from "./HeadersClass.js";

let request = new Request({})
let headers = new Headers({})

export class ApiMethodsClass {
	
	requestSend(request, headers, anyHeaders) {
		
		const HEADERS = {
			headers: Object.assign({
				[headers.contentKey]: headers.contentValue || '',
				[headers.acceptKey]: headers.acceptValue || '',
			}, anyHeaders)
		}
		let req = http.request(request.method, `${request.url}${request.path}`, request.body, HEADERS);
	}
}
