import os
import json
from PIL import Image

def get_image_dimensions(directory):
    data = []
    images_directory = os.path.join(directory, 'images')
    for root, dirs, files in os.walk(images_directory):
        for file in files:
            if file.endswith(('.png', '.jpg', '.jpeg')):
                img_path = os.path.join(root, file)
                try:
                    img = Image.open(img_path)
                    width, height = img.size
                    item = {
                        "text": file, 
                        "link": '/' + os.path.relpath(img_path, directory).replace("\\", "/"), 
                        "size": "normal", 
                        "tags": [], 
                        "width": width, 
                        "height": height
                    }
                    data.append(item)
                    print(f'Successfully processed {img_path}')
                except Exception as e:
                    print(f'Failed to process {img_path} due to error {str(e)}')
    return data


def write_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump({"data": data}, f, indent=4)

def append_new_images(directory, filename):
    # Load your existing data
    with open(filename, 'r') as f:
        existing_data = json.load(f)["data"]
    existing_links = {item["link"] for item in existing_data}

    new_data = get_image_dimensions(directory)
    new_data = [item for item in new_data if item["link"] not in existing_links]

    write_to_json(existing_data + new_data, filename)

filepath = 'C:\\Users\\ziggy\\Documents\\Portfolio Website (new new)\\ziggybadans-portfolio\\public\\assets\\images.json'
image_directory = 'C:\\Users\\ziggy\\Documents\\Portfolio Website (new new)\\ziggybadans-portfolio\\public'

append_new_images(image_directory, filepath)
