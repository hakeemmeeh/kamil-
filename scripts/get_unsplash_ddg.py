import urllib.request
import re
import json

queries = ['mogadishu somalia', 'hargeisa', 'nairobi skyline', 'commercial airplane flying', 'corporate travel business', 'airport terminal']
results = {}

for query in queries:
    try:
        url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote('site:unsplash.com ' + query)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        ids = re.findall(r'unsplash\.com/photos/[a-zA-Z0-9-]+-([a-zA-Z0-9]{11})', html)
        if ids:
            results[query] = f"https://images.unsplash.com/photo-{ids[0]}?w=1400&q=75"
    except Exception as e:
        print(f"Error {query}: {e}")

print(json.dumps(results, indent=2))
