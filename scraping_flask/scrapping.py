import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
import math

url = 'https://www.stacasa.com.br'

agent = requests.get('https://www.google.com/')

site = requests.get(url, headers=agent.request.headers)

soup = BeautifulSoup(site.content, 'html.parser')

links = soup.find_all('a', attrs={"class": "carousel-item"})

dados = []

for i in links:
    dados.append([
        url + i['href'],
        url + i.find('img')['src']
    ])