var twitter = require('twitter-text-js')
twitter.autoLink(twitter.htmlEscape('#hello < @world >'))
