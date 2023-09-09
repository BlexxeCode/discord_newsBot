import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

def summerize(text,percent):
    nlp = spacy.load('en_core_web_sm')
    doc = nlp(text)
    tokens = [token.text for token in doc]
    word_freq = {}
    for word in doc:
        if word.text.lower() not in list(STOP_WORDS):
            if word.text.lower() not in punctuation:
                if word.text not in word_freq.keys():
                    word_freq[word.text] = 1
                else:
                    word_freq[word.text] += 1
    max_freq = max(word_freq.values())
    for word in word_freq.keys():
        word_freq[word] = word_freq[word] /max_freq
    sentence_tokens = [sent for sent in doc.sents]
    sentence_scores = {}
    for sent in sentence_tokens:
        for word in sent:
            if word.text.lower() in word_freq.keys():
                if sent not in sentence_scores.keys():
                    sentence_scores[sent] = word_freq[word.text.lower()]
                else:
                    sentence_scores[sent] += word_freq[word.text.lower()]
    length = int(len(sentence_tokens)*percent)
    summary = nlargest(length, sentence_scores, key=sentence_scores.get)
    final_summary = [word.text for word in summary]
    summary = ''.join(final_summary)
    return summary.strip()


    

