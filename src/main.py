def hello_world():
    """打印 Hello World 消息"""
    print("Hello, World from Python!")
    return "Success"

def greet_user(name):
    """问候用户"""
    return f"Hello, {name}! Welcome to our demo."

if __name__ == "__main__":
    hello_world()
    print(greet_user("GitHub User"))