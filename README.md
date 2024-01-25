# telegram-rss
A simple converter Telegram channel to RSS Feeds

[![NPM](https://nodei.co/npm/telegram-rss.png?mini=true)](https://www.npmjs.com/package/telegram-rss)
[![npm version](https://badge.fury.io/js/telegram-rss.svg)](https://www.npmjs.com/package/telegram-rss)

## Features

* ✅ No Authentication
* ✅ Plain Output
* ✅ Lightwight

## Demo

[https://codesandbox.io/p/devbox/telegram-channel-rss-2c4rwz](https://codesandbox.io/p/devbox/telegram-channel-rss-2c4rwz)

## Installation

```javascript
npm install telegram-rss
```

## Example Usage

```javascript
import telegram_rss from 'telegram-rss'

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_rss(telegram_channel_username)

	console.log(result)
	
}()
```

```javascript
const telegram_rss = require('telegram-rss').default

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_rss(telegram_channel_username)

	console.log(result)
	
}()
```

## Example App

```javascript
const telegram_rss = require('telegram-rss').default

const http = require('http')

const serverport =  process.env.PORT || 8080

let telegram_channel = 'telegram'

const server = http.createServer(async(req,res)=>{

	let result = await telegram_rss(telegram_channel)

	res.statusCode = 200
	
	res.setHeader('Content-Type','application/xml')
	
	res.setHeader('Access-Control-Allow-Origin','*')
	
	res.end(result)
	
})

server.listen(serverport,()=>{

	console.log(`Server running at ${serverport}`) 
	
})
```

## Example Output

```javascript

<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
	<channel>
		<title>telegram</title>
		<link>https://t.me/telegram</link>
		<description>RSS Feed from telegram Telegram channel</description>
		<pubDate>2024-01-25T05:17:14.725Z</pubDate>
		<item>
			<title>For all the details on giveaways, including how to set them up and how to participate in a massive giveaway sponsored by @durov, check out the latest blog: https://telegram.org/blog/giveaways  November Features 1 • 2 • 3 • More</title>
			<link>https://t.me/telegram/254</link>
			<description>For all the details on giveaways, including how to set them up and how to participate in a massive giveaway sponsored by @durov, check out the latest blog: https://telegram.org/blog/giveaways  November Features 1 • 2 • 3 • More</description>
			<pubDate>2023-11-07T12:16:32+00:00</pubDate>
		</item>
		<item>
			<title>Joining a channel now shows a list of similar public channels that you can check out.  November Features 1 • 2 • 3 • More</title>
			<link>https://t.me/telegram/255</link>
			<description>Joining a channel now shows a list of similar public channels that you can check out.  November Features 1 • 2 • 3 • More</description>
			<pubDate>2023-12-04T13:26:43+00:00</pubDate>
		</item>
		<item>
			<title>Stories from your friends and favorite channels can be reposted – with extra text, audio or even a video comment.  November Features 1 • 2 • 3 • More</title>
			<link>https://t.me/telegram/256</link>
			<description>Stories from your friends and favorite channels can be reposted – with extra text, audio or even a video comment.  November Features 1 • 2 • 3 • More</description>
			<pubDate>2023-12-04T13:26:56+00:00</pubDate>
		</item>
		<item>
			<title>When posting or reposting a story, you can now add a video message to include extra commentary or comedic effects.  November Features 1 • 2 • 3 • More</title>
			<link>https://t.me/telegram/257</link>
			<description>When posting or reposting a story, you can now add a video message to include extra commentary or comedic effects.  November Features 1 • 2 • 3 • More</description>
			<image>
				<url>https://cdn1.cdn-telegram.org/file/On16bORCNk2sRC0CvL2nG-mHMYExrksjjs9cQlQgpLYSujxh5zdPVyZflTbcBhX3g_aKHmurBiLBNq5-7o_Nn5dShTRshg9VnRQrW5XT6jbK3LKZCXrjzSY4k_ZwH0rd5er6xyxS746im-Mb76i8_KsA3f4kZZGDVFVAa4ztbOSnz7SOI-cV5jPYg3X5TklWlCnDhMpYZ2CdGy-d2yvo-JpLxApuLsGquz_ZSJEodP0Z6kaWYm_dzIzW787TeFZaudvbPK1eBR8F9WUFSS59j7B-mfGjPAXY6quNLA2TmJhcmv2X1GvUUAm3FVJwy25jPpfSpCpd50fZKynPtH85DQ.jpg</url>
				<title>When posting or reposting a story, you can now add a video message to include extra commentary or comedic effects.  November Features 1 • 2 • 3 • More</title>
				<link>https://t.me/telegram/257</link>
			</image>
			<pubDate>2023-12-04T13:27:10+00:00</pubDate>
		</item>
	</channel>
</rss>
```

## License

MIT