import {
	hystrixSSEStream as HystrixStream
} from 'hystrixjs'

import { Observable } from 'rxjs'
import { interval } from 'rxjs'

export default (request: any, response: any) => {
	console.log('Starting hystrix stream')
	response.append('Content-Type', 'text/event-streamcharset=UTF-8')
	response.append('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
	response.append('Pragma', 'no-cache')

	const subscription = HystrixStream.toObservable().subscribe(
		function onNext(sseData) {
			response.write('data: ' + sseData + '\n\n')
		},
		function onError(error) {
			console.log(error)
		},
		function onComplete() {
			return response.end()
		}
	)

	return subscription
}
