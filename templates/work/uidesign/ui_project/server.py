from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

updatedPros = None
current_id = 40


@app.route('/')
def home():
   return render_template('home.html') #used to be search_start.html

@app.route('/lesson_start')
def lesson():
    return render_template('lesson_start.html') 

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
   app.run(debug = True)