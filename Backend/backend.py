from flask import Flask, request, jsonify
from flask_cors import CORS
import Levenshtein
from PyPDF2 import PdfReader

app = Flask(__name__)
CORS(app, origins='http://localhost:4200')


def extract_text_from_pdf(file):
    text = ""
    reader = PdfReader(file)
    for page_num in range(len(reader.pages)):
        text += reader.pages[page_num].extract_text()
    return text


def calculate_plagiarism_score(text1, text2):
    distance = Levenshtein.distance(text1, text2)
    max_length = max(len(text1), len(text2))
    plagiarism_score = 1 - (distance / max_length)
    return plagiarism_score


@app.route('/calculate_plagiarism', methods=['POST'])
def calculate_plagiarism():
    file1 = request.files.get('pdf1')
    file2 = request.files.get('pdf2')
    print(file1)
    print(file2)
    if not file1 or not file2:
        return jsonify({'error': 'PDF files not found'})

    text1 = extract_text_from_pdf(file1)
    text2 = extract_text_from_pdf(file2)

    # print(text1, text2)
    plagiarism_score = calculate_plagiarism_score(text1, text2)

    return jsonify({'plagiarism_score': plagiarism_score})


if __name__ == "__main__":
    app.run(debug=True)
