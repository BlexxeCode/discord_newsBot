from keras.models import load_model
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Embedding, Conv1D, MaxPooling1D, Bidirectional, LSTM, Dense, Dropout
from keras.metrics import Precision, Recall
from keras.optimizers import SGD
from keras.optimizers import RMSprop
from keras import datasets
import tensorflow as tf
import pickle

def sentiment(text):

    model = load_model('LSTMsave.keras')

    with open('tokenizer2.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    sentiment_classes = ['Negative', 'Positive']
    max_len = 600

    xt = tokenizer.texts_to_sequences(text)
    xt = pad_sequences(xt, padding='post', maxlen=max_len)

    yt = model.predict(xt, verbose=0).argmax(axis=1)

    print('Disclaimer--- Sentiment prediction is not 100 percent accurate. There will be mistakes')
    print(f'This news article is predicted to be or close to {sentiment_classes[yt[0]]}')