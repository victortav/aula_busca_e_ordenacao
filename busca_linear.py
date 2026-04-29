import random


def busca_linear(lista, alvo):
    for i, valor in enumerate(lista):
        if valor == alvo:
            return i       # índice encontrado
    return -1              # não encontrado


if __name__ == "__main__":
    lista = [random.randint(0, 19) for _ in range(10)]
    alvo = random.choice(lista)
    indice = busca_linear(lista, alvo)
    print(f"Lista: {lista}")
    print(f"Alvo: {alvo}")
    print(f"Encontrado no índice: {indice}")
