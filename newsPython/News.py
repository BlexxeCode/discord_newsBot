from GoogleNews import GoogleNews
import pandas as pd

gnews = GoogleNews(period='1d')
gnews.search("World News")
gnews.search("Gaming")
gnews.search("Entertainment")
result = gnews.result()
df = pd.DataFrame(result)
link = []
for l in df['link'].str.split('&'):
    link.append(l[0])
    print(l[0])
    
#df['link'] = link
df.to_json('result.json')


