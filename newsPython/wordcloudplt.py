from wordcloud import WordCloud, STOPWORDS
from nltk.corpus import stopwords
import matplotlib.pyplot as plt

def create_wordcloud(text):

    wc = WordCloud(background_color='black', max_words=50, stopwords=STOPWORDS)
    wc.generate(''.join(text))
    plt.figure()
    plt.imshow(wc)
    plt.axis('off')
    plt.savefig('wordcloud.png')