import random


def merge(esq, direita):
    resultado = []
    i = j = 0
    while i < len(esq) and j < len(direita):
        if esq[i] <= direita[j]:
            resultado.append(esq[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1
    resultado.extend(esq[i:])
    resultado.extend(direita[j:])
    return resultado


def merge_sort(nums):
    if len(nums) <= 1:
        return nums
    meio = len(nums) // 2
    esq = merge_sort(nums[:meio])
    direita = merge_sort(nums[meio:])
    return merge(esq, direita)


def merge_sort_comentada(nums, nivel=0):
    prefixo = "  " * nivel
    print(f"{prefixo}Recebida: {nums}")
    if len(nums) <= 1:
        print(f"{prefixo}Retornando: {nums}")
        return nums
    meio = len(nums) // 2
    print(f"{prefixo}Dividindo em {nums[:meio]} e {nums[meio:]}")
    esq = merge_sort_comentada(nums[:meio], nivel + 1)
    direita = merge_sort_comentada(nums[meio:], nivel + 1)
    resultado = merge(esq, direita)
    print(f"{prefixo}Merge de {esq} + {direita} -> {resultado}")
    return resultado


if __name__ == "__main__":
    lista = random.sample(range(20), 5)
    print(f"Original: {lista}\n")
    ordenada = merge_sort_comentada(lista)
    print(f"\nOrdenada: {ordenada}")
