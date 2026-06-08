import urllib.request

ids = [
    "1469854523086-cc02fe5d8800",
    "1476514525535-07fb3b4ae5f1",
    "1507525428034-b723cf961d3e",
    "1548345680-f5475ea5df84",
    "1527631746610-bca00a040d60",
    "1506012787146-f92b2d7d6d96",
    "1488646953014-85cb44e25828",
    "1539635278303-d4002c07eae3",
    "1556388158-158ea5ccacbd",
    "1436491865332-7a61a109cc05",
    "1493976040374-85c8e12f0c0e",
    "1547471080-7fc2caa6f571",
    "1505118380757-91f5f5632de0",
    "1542401886-65d6c61db217",
    "1516026672322-bc52d61a55d5",
    "1473116763249-2faaef81ccda",
    "1519046904884-53103b34b206",
    "1500530855697-b586d89ba3ee"
]

for i in ids:
    url = f"https://images.unsplash.com/photo-{i}?w=100"
    try:
        req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"{i}: {res.status}")
    except Exception as e:
        print(f"{i}: Error {e}")
