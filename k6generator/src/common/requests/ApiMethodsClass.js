import {} from 'k6';
import http from 'k6/http';
import {Request} from "./RequestClass.js";
import {Headers} from "./HeadersClass.js";

let request = new Request({})
let headReq = new Headers({})

export class ApiMethodsClass {
	
	requestSend(request, headReq) {
		
		const HEADERS = {
			headers: {
				[headReq.contentKey]: headReq.contentValue || '',
				[headReq.acceptKey]: headReq.acceptValue || ''
			}
		}
		let req = http.request(request.method, `${request.url}${request.path}`, request.body, HEADERS);
	}
}
