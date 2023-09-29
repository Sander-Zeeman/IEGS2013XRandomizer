from json import load
from os.path import isfile

def img_path(name, prefix):
  fixed_name = '_'.join(name.split(' '))
  return f'../assets/{prefix}/{fixed_name}.png'

def check_folder(data, group, group_name, prefix):
  missing = []
  lst = data[group]
  for elem in lst:
    name = elem['name']
    path = img_path(name, prefix)
    if not isfile(path):
      missing.append(name)

  if len(missing) > 0:
    print(f'{group_name} missing:')
    print(missing)


with open('../data.json', 'r') as f:
  data = load(f)

check_folder(data, 'teams', 'Team Emblems', 'emblems')
check_folder(data, 'coaches', 'Coaches', 'coaches')
check_folder(data, 'managers', 'Managers', 'managers')
check_folder(data, 'formations', 'Formations', 'formations')
