from app.packages.database import Database

class Search(Database):
    def search_email(self, email):
        users = Database().load("app/database/users.json")
        for u in users:
            if u["email"] == email:
                print("Conta encontrada.")
                return u
            
        print("Nenhuma conta encontrada")
        return False
    
    def search_code(self, code):
        users = Database().load("app/database/users.json")
        for u in users:
            if u["code"] == code:
                print("Conta encontrada.")
                return u
            
        print("Nenhuma conta encontrada")
        return False