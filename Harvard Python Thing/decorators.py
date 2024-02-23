def announce(f):
    def wrapper():
        print("We are aboout to run a function...")
        f()
        print("The function has run succesfully.")
    return wrapper
    
@announce
def hello():
    print("Hello!")
    
hello()