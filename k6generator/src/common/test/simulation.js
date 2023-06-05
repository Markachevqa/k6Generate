import {ApiMethodsClass} from "../requests/ApiMethodsClass.js";
import {TEST_CONFIG} from "../../../resources/contours/testStand.js";
import {smokeStrategy} from "../strategy/Smoke.js";
import {contentType} from "../requests/HeadersClass.js";

//Нагрузочноая стартегия на примере smoke
export let options = smokeStrategy(5, '30s')

let apiMethodsClass = new ApiMethodsClass()
export default function simulation() {
	const payload = JSON.stringify({
		email: 'aaa',
		password: 'bbb',
	});
	
	apiMethodsClass.requestSend({
		method: 'POST',
		url: 'http://test.k6.io',
		path: '/login',
		body: payload,
	}, {
		contentKey: 'Content-Type',
		contentValue: contentType[0],
	}, {
		'Accept': 'TXT',
		'TEST': 'TEST'
	})
}