import urllib.request
import re
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

queries = {
    'Mogadishu': 'Mogadishu somalia city unsplash',
    'Nairobi': 'Nairobi skyline unsplash',
    'Bosaso': 'Bosaso somalia unsplash',
    'Global': 'airplane flying international travel unsplash',
    'Hargeisa': 'Hargeisa somalia unsplash',
    'Garowe': 'Garowe somalia unsplash',
    'Galkayo': 'Galkayo somalia unsplash',
    'Kismayu': 'Kismayu somalia unsplash',
    'Baidoa': 'Baidoa somalia unsplash',
    'Corporate': 'corporate business travel lounge unsplash',
    'Airport': 'airport terminal passenger unsplash'
}
results = {}

for name, query in queries.items():
    try:
        url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        # match photo IDs
        ids = re.findall(r'unsplash\.com/photos/[a-zA-Z0-9-]+-([a-zA-Z0-9]{11})', html)
        if not ids:
             ids = re.findall(r'images\.unsplash\.com/photo-([0-9]{13}-[a-z0-9]{12})', html)
        if not ids:
             ids = re.findall(r'images\.unsplash\.com/photo-([a-zA-Z0-9-]+)', html)
             
        if ids:
            results[name] = f"https://images.unsplash.com/photo-{ids[0]}?w=1400&q=75"
    except Exception as e:
        pass

print(json.dumps(results, indent=2))
