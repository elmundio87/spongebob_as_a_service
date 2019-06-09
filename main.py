from flask import Flask, request
import random

app = Flask(__name__)

def spongebob(line):
  returnstring = ''
  for x in range(0, len(line)):
    if bool(random.randint(0,1)):
      returnstring += line[x].upper()
    else:
      returnstring += line[x].lower()
  return returnstring

@app.route("/", methods=['POST'])
def hello():
    return spongebob(request.form['tweet'])

if __name__ == "__main__":
  app.run()