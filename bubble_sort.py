import random


def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n-i-1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista


def bubble_sort_comentada(lista):
    n = len(lista)
    for i in range(n):
        print(f"--- Iteração {i+1} ---")
        for j in range(0, n-i-1):
            if lista[j] > lista[j+1]:
                print(f"  Troca: {lista[j]} <-> {lista[j+1]}")
                lista[j], lista[j+1] = lista[j+1], lista[j]
        print(f"  Lista: {lista}")
    return lista


if __name__ == "__main__":
    lista = random.sample(range(20), 5)
    print(f"Original: {lista}\n")
    bubble_sort_comentada(lista)
    print(f"\nOrdenada: {lista}")
