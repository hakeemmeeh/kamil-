import urllib.request
import re

queries = {
    'mogadishu': 'https://unsplash.com/s/photos/mogadishu',
    'nairobi': 'https://unsplash.com/s/photos/nairobi-skyline',
    'coastal': 'https://unsplash.com/s/photos/coastal-city',
    'desert': 'https://unsplash.com/s/photos/desert-city',
    'airport': 'https://unsplash.com/s/photos/airport',
    'airplane': 'https://unsplash.com/s/photos/airplane-flying',
    'business': 'https://unsplash.com/s/photos/business-travel'
}

for name, url in queries.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        ids = list(set(re.findall(r'photo-[0-9]{13}-[a-z0-9]{12}', html)))
        if not ids:
             ids = list(set(re.findall(r'photo-[0-9a-zA-Z-]+', html)))
        # filtering out non-ids
        clean_ids = [i for i in ids if len(i) > 20][:3]
        print(f"{name}: {clean_ids}")
    except Exception as e:
        print(f"{name}: {e}")
