from app.packages.database import Database

class User(Database):
    def __init__(self, email: str, password: str, name: str, number: str):
        self.email = email
        self.password = password
        self.name = name
        self.number = number
        
    def create_user(self):
        new_user = {
            "email": self.email,
            "password": self.password,
            "name": self.name,
            "number": self.number
        }
        
        return new_user
    
class Client(User):
    def __init__(self, email: str, password: str, name: str, number: str):
        super().__init__(email, password, name, number)
        self.users = Database().load("app/database/users.json")
        
    def generate_code(self):
        temp_list = []
        for u in self.users:
            if u["code"][0] == 'C':
                temp_list.append(u["code"])
                
        temp_list.sort()

        for i in range(len(temp_list)):
            temp_list[i] = temp_list[i][1:]
            if not str(i + 1) == temp_list[i]:
                codigo = "C" + str(i + 1)
                return codigo
            
        codigo = "C" + str(len(temp_list) + 1)
        return codigo
    
    def create_user(self):
        user = super().create_user()
        user["type"] = "client"
        user["code"] = self.generate_code()
        self.users.append(user)
        Database().save(self.users, "app/database/users.json")
    
class Admin(User):
    def __init__(self, email: str, password: str, name: str, number: str):
        super().__init__(email, password, name, number)
        self.users = Database().load("app/database/users.json")
        
    def generate_code(self):
        temp_list = []
        for u in self.users:
            if u["code"][0] == 'A':
                temp_list.append(u["code"])
                
        temp_list.sort()

        for i in range(len(temp_list)):
            temp_list[i] = temp_list[i][1:]
            if not str(i + 1) == temp_list[i]:
                codigo = "A" + str(i + 1)
                return codigo
            
        codigo = "A" + str(len(temp_list) + 1)
        return codigo
    
    def create_user(self):
        user = super().create_user()
        user["type"] = "admin"
        user["code"] = self.generate_code()
        self.users.append(user)
        Database().save("app/database/users.json", self.users)
        