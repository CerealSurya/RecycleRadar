import requests
from passlib.hash import sha256_crypt

url = "http://localhost:6900/"

command = input("Command: ")
print("\n")

if command == "createaccount":
    usern = input("Username of account: ")
    email = input("Email Address of account: ")
    passw = input("Password of account(dw its going to be encrypted): ")
    params = {
        "usern": usern,
        "email": email,
        "passw": str(sha256_crypt.encrypt(passw))
    }
    response = requests.post(f"{url}createaccount/", params=params)
    if response.status_code == 200:
        formattedResponse = response.json()
        print(formattedResponse["account"])
    else:
        print(response.status_code)

else:
    print("Command not found")