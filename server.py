from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

updatedPros = None
current_id = 40


@app.route('/')
def home():
   return render_template('index.html') 

#@app.route('/art')
@app.route('http://www.nikikonforti.com/art')
def lesson():
    return render_template('art.html') 

@app.route('/resume')
def quiz():
    return render_template('resume.html')

@app.route('/github')
def github():
    return render_template('github.html')

if __name__ == '__main__':
   app.run(debug = True)
