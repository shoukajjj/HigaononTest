firstName = input("First Name: ")
lastName = input("Last Name: ")
while True:
    try:
        age = int(input("Enter Age: "))
        break
    except ValueError:
        print("Invalid Input, age must be an integer to work.")
        
address = input("Enter Address: ")
status = input("Enter Status: ")

print("\nInformation\n")
print(f"Name: {firstName} {lastName} \nAge: {age} \nAdress: {address} \nStatus: {status}")