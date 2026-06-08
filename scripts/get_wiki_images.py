import urllib.request
import urllib.parse
import json

cities = ['Mogadishu', 'Hargeisa', 'Garowe', 'Bosaso', 'Galkayo', 'Kismayo', 'Baidoa', 'Nairobi']
results = {}

for city in cities:
    try:
        # Fetch page info to get main image title
        url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles={urllib.parse.quote(city)}&format=json&pithumbsize=1000"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req).read()
        data = json.loads(response)
        pages = data['query']['pages']
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                results[city] = pages[page_id]['thumbnail']['source']
                break
    except Exception as e:
        print(f"Error fetching {city}: {e}")

for city, img in results.items():
    print(f"{city}: {img}")
