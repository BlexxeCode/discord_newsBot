from newspaper import Article
import pandas as pd
import sys
from wordcloudplt import create_wordcloud
from textSummary import summerize
from textSentiment import sentiment

def fullArticle(num):
    news = pd.read_json('result_topic.json')
    article = Article(news.loc[num, 'link'])
    article.download()
    article.parse()
    article.nlp()
    print(summerize(article.text, 0.5))
    create_wordcloud(article.text)
    print()
    sentiment(article.text)
    

    
if __name__ == '__main__':
    number = int(sys.argv[1])
    fullArticle(number)
