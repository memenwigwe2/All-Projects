people = [
    {"name":"Amara", "house": "UK"},
    {"name":"Chinemerem", "house": "England"},
    {"name":"Williams", "house": "Nigeria"}
    
]

people.sort(key=lambda person: person["name"])

print(people)