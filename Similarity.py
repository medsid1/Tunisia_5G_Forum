import numpy as np

document = '"We’re very happy to demonstrate this VR service with Huawei at MWC. Telefonica is committed to becoming a pioneer in the 5G era and will work with Huawei through joint innovation to promote 5G commercial use," said Javier Gavilan, Planning and Technology Director of Core Network, Platforms and Transport, Telefonica Global CTIO Unit.'

def beautify_word(word):
    return word.lower().replace(".", "").replace(",", "").replace("!", "").replace("?", "")

word_dictionary = {}

def x_to_vect(x_loaded):
    all_words = []
    for content in x_loaded:
        content_str = beautify_word(str(content))
        content_words = content_str.split(" ")
        for content_word in content_words:
            all_words.append(content_word)

    for i in range(len(all_words)):
        word = all_words[i]
        if word not in word_dictionary:
            print(word)
            word_dictionary[word] = len(word_dictionary)

    x_replaced = []
    for content in x_loaded:
        content_str = beautify_word(str(content))
        content_words = content_str.split(" ")

        content_replaced = []
        for content_word in content_words:
            nr = word_dictionary[content_word]
            content_replaced.append(nr)

        x_replaced.append(content_replaced)

    return x_replaced

mm = x_to_vect(document)

def cos_sim(a, b):
	"""Takes 2 vectors a, b and returns the cosine similarity according 
	to the definition of the dot product
	"""
	dot_product = np.dot(a, b)
	norm_a = np.linalg.norm(a)
	norm_b = np.linalg.norm(b)
	return dot_product / (norm_a * norm_b)

# the counts we computed above
sentence_m = np.array([1, 1, 1, 1, 0, 0, 0, 0, 0]) 
sentence_h = np.array([0, 0, 1, 1, 1, 1, 0, 0, 0])
sentence_w = np.array([0, 0, 0, 1, 0, 0, 1, 1, 1])

# We should expect sentence_m and sentence_h to be more similar
print(cos_sim(sentence_m, sentence_h)) # 0.5
print(cos_sim(sentence_m, sentence_w)) # 0.25
