import random


def busca_binaria(lista, alvo):
    esq, dir = 0, len(lista) - 1
    while esq <= dir:
        meio = (esq + dir) // 2
        if lista[meio] == alvo:
            return meio
        elif lista[meio] < alvo:
            esq = meio + 1
        else:
            dir = meio - 1
    return -1


if __name__ == "__main__":
    lista = sorted(random.randint(0, 19) for _ in range(10))
    alvo = random.choice(lista)
    indice = busca_binaria(lista, alvo)
    print(f"Lista: {lista}")
    print(f"Alvo: {alvo}")
    print(f"Encontrado no índice: {indice}")
