import json, os

class Database:
    def create_database(self, path, name):
        if not os.path.exists(path):
            os.makedirs(path)
            print(f"Caminho {path} criado.")
            
        full_path = os.path.join(path, f"{name}.json")
        if not os.path.exists(full_path):
            with open(full_path, 'w') as f:
                json.dump([], f, indent=4)
                print(f"Database criada em {full_path}.")
                return True
        
        print(f"Arquivo .json já existe em {path}.")
        return False
        
    def save(self, data, path):
        if not os.path.exists(path):
            print(f"Caminho para {path} não encontrado.")
            return False
        
        with open(path, 'w') as f:
            json.dump(data, f, indent=4)
            print(f"Dados salvos em {path}.")
        
        return True
        
    def load(self, path):
        if not os.path.exists(path):
            print(f"Caminho para {path} não encontrado.")
            return False
        
        with open(path, 'r') as f:
            data = json.load(f)
            
        return data