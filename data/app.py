from flask import Flask, render_template, request, url_for
from dotenv import load_dotenv
import http.client, os

load_dotenv()
app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('KEY-SECRET')

@app.route('/')
def home():
    return render_template('home/index.html')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('error_page/404.html')

@app.errorhandler(500)
def internal_error(error):
    return render_template('error_page/500.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)