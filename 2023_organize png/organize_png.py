import os
import shutil

# 1. 'Main' 폴더 내에 'icons'라는 이름의 폴더 생성
main_folder = 'Main'
icons_folder = os.path.join(main_folder, 'icons')

if not os.path.exists(icons_folder):
    os.makedirs(icons_folder)

# 2. '다운로드' 폴더에 있는 모든 png 파일을 'icons' 폴더로 
download_folder = '../Downloads' 

for file in os.listdir(download_folder):
    if file.endswith('.png'):
        file_path = os.path.join(download_folder, file)
        shutil.move(file_path, icons_folder)

# 3. 모든 png 파일명 앞에 'icon_'가 붙도록 파일 이름 형식 수정
for file in os.listdir(icons_folder):
    if file.endswith('.png'):
        old_file_path = os.path.join(icons_folder, file)
        new_file = 'icon_' + file
        new_file_path = os.path.join(icons_folder, new_file)
        os.rename(old_file_path, new_file_path)
