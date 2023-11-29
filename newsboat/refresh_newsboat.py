import miniflux
client = miniflux.Client("https://oh-barak-rss.herokuapp.com/", "Ohbarak", "Barakoh16")
client.refresh_all_feeds()
