import os
import shutil

current_working_directory = os.getcwd()
docs_folder = os.path.join(current_working_directory, 'docs')
dist_folder = os.path.join(current_working_directory, 'dist')

shutil.rmtree(docs_folder)
os.rename(dist_folder, docs_folder)