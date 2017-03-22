from chatterbot import ChatBot

from flask import Flask, render_template
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from flask import request
from flask import render_template
from flask import flash
from flask import jsonify

app = Flask(__name__)

english_bot = ChatBot("zee")
english_bot.set_trainer(ChatterBotCorpusTrainer)
english_bot.train("chatterbot.corpus.english")

english_bot.train('chatterbot.corpus.english.greetings')
english_bot.train('chatterbot.corpus.english.conversations')

@app.route("/")
def home1():

    return render_template("get.html")

@app.route("/ask", methods=['POST'])
def ask():
	message = (request.form['messageText'])


	while True:
	    if message == "":
	        continue

	    else:
	        bot_response =   str(english_bot.get_response(message))
	        # print bot_response
	        return jsonify({'status':'OK','answer':bot_response})


if __name__ == "__main__":
    app.run()