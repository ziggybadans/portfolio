import os
import json
from PIL import Image

def get_image_dimensions(directory, data):
    for item in data:
        # Prepend '/' to the start of every link if it's not already there
        if not item["link"].startswith('/'):
            item["link"] = '/' + item["link"]

        img_path = os.path.join(directory, item["link"])
        if os.path.isfile(img_path) and img_path.endswith(('.png', '.jpg', '.jpeg')):
            try:
                img = Image.open(img_path)
                width, height = img.size
                item["width"] = width
                item["height"] = height
                print(f'Sucessfully processsed {img_path}')
            except Exception as e:
                print(f'Failed to process {img_path} due to error {str(e)}')
    return data

def write_to_json(data, filename='images.json'):
    with open(filename, 'w') as f:
        json.dump({"data": data}, f, indent=4)

filepath = 'C:\\Users\\ziggy\\Documents\\Portfolio Website (new new)\\ziggybadans-portfolio\\public\\assets\\images.json'

# Load your existing data
with open(filepath, 'r') as f:
    data = json.load(f)["data"]

image_directory = './'
image_data = get_image_dimensions(image_directory, data)
write_to_json(image_data)