from GoogleNews import GoogleNews
import pandas as pd
import sys


if __name__ == '__main__':
    topic = sys.argv[1]

    gnews = GoogleNews(period='1d')
    gnews.search(topic)
    result = gnews.result()
    df = pd.DataFrame(result)
    link = []
    for l in df['link'].str.split('&'):
        link.append(l[0])
        print(l[0])
    df['link'] = link
    df.to_json('result_topic.json')