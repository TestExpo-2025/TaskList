import os
import json
from bs4 import BeautifulSoup
extensions = ['.html', '.tsx', '.ts', '.js', '.jsx']
def extract_text_from_html_tags(file_path, tags):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        extracted_text = {}
        for tag in tags:
            elements = soup.find_all(tag)
            for i, element in enumerate(elements):
                key = f"{os.path.basename(file_path)}_{tag}_{i}"
                extracted_text[key] = element.get_text(strip=True)
        return extracted_text

def parse_directory_recursively(directory, tags):
    all_texts = {}
    for root, _, files in os.walk(directory):
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                file_path = os.path.join(root, file)
                extracted_text = extract_text_from_html_tags(file_path, tags)
                all_texts.update(extracted_text)
    return all_texts

def main():
    # Change this to your target directory
    directory_to_parse = './src'
    html_tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'button']

    # Parse and extract
    extracted_texts = parse_directory_recursively(directory_to_parse, html_tags)

    # Save to i18next format
    i18next_format = {
        "en": {
            "translation": extracted_texts
        }
    }

    with open('en.json', 'w', encoding='utf-8') as json_file:
        json.dump(i18next_format, json_file, ensure_ascii=False, indent=2)

    print("✅ en.json file has been created successfully.")

if __name__ == "__main__":
    main()