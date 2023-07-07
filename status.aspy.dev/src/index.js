import config from '../config.json'



async function cronTask() {
	return console.log("CronTask Executed!")
}

async function handleRequest(request) {
	let url = new URL(request.url).pathname
	console.log()
	if (url == "/1") {
		return new Response("1")
	} else {
		return new Response("2")
	}

}

async function checkDomain(domain) {
	let url = new URL(domain)
}




addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request));
})

addEventListener('scheduled', (event) => {
	event.waitUntil(cronTask());
})




async function main() {
	console.log("Starting Worker!")
	console.log(config)

}


main()

// async function handleRequest(request) {
// 	let url = new URL(request.url).pathname
// 	console.log()
// 	if (url == "/1") {
// 		return new Response("1")
// 	} else {
// 		return new Response("2")
// 	}

// }
