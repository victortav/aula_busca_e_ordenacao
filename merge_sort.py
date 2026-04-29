import random


def merge(esq, dir):
    resultado = []
    i = j = 0
    while i < len(esq) and j < len(dir):
        if esq[i] <= dir[j]:
            resultado.append(esq[i])
            i += 1
        else:
            resultado.append(dir[j])
            j += 1
    resultado.extend(esq[i:])
    resultado.extend(dir[j:])
    return resultado


def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    meio = len(lista) // 2
    esq = merge_sort(lista[:meio])
    direita = merge_sort(lista[meio:])
    return merge(esq, direita)


def merge_sort_comentada(lista, nivel=0):
    prefixo = "  " * nivel
    print(f"{prefixo}Recebida: {lista}")
    if len(lista) <= 1:
        print(f"{prefixo}Retornando: {lista}")
        return lista
    meio = len(lista) // 2
    print(f"{prefixo}Dividindo em {lista[:meio]} e {lista[meio:]}")
    esq = merge_sort_comentada(lista[:meio], nivel + 1)
    direita = merge_sort_comentada(lista[meio:], nivel + 1)
    resultado = merge(esq, direita)
    print(f"{prefixo}Merge de {esq} + {direita} -> {resultado}")
    return resultado


if __name__ == "__main__":
    lista = random.sample(range(20), 5)
    print(f"Original: {lista}\n")
    ordenada = merge_sort_comentada(lista)
    print(f"\nOrdenada: {ordenada}")
