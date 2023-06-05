# **Генератор скриптов k6** 

___
## Описание
Данный проект предназначен для удобного составление сценариев нагрузки, с использованием k6

## Usage
Основная сумуляция описана в таком виде
```javascript
export default function simulation() {
	const payload = JSON.stringify({
		email: 'aaa',
		password: 'bbb',
	});
	
	ApiMethodsClass.prototype.requestSend({
		method: 'POST',
		url: 'http://test.k6.io',
		path: '/login',
		body: payload,
	}, {
		contentKey: 'Content-Type',
		contentValue: contentType[0],
	})
}
```

## Example

### Strategy
```javascript
//Нагрузочноая стартегия на примере smoke
export let options = smokeStrategy(5, '30s')
// Функция smoke стратегии 
export function smokeStrategy(VUS, duration = "") {
	return {
		vus: VUS,
		duration: duration,
	}
}
```
___Стратегии можно использовать как готовые из проекта, так и составить свои, под нужды проекта___
___
+ Для работы со сценариям достаточно дополнять файл simulation.js по приведенному примеру
+ Нагрузочноую стратегию выбираете сами 
+ Запускаете скрипт, удобным для вас способом(консоль, docker)
  + Через консоль, $ k6 run simulation.js
  + Через docker, $ docker run --rm -i grafana/k6 run - <simulation.js, при это нужно правильно оформить yaml файл 
___

[k6 docs](https://k6.io/docs/)