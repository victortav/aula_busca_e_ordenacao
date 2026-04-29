import random
import time

from busca_linear import busca_linear
from busca_binaria import busca_binaria


if __name__ == "__main__":
    lista = sorted(random.randint(0, 1000000) for _ in range(100000))
    alvo = random.choice(lista)

    inicio = time.perf_counter()
    idx_linear = busca_linear(lista, alvo)
    tempo_linear = time.perf_counter() - inicio

    inicio = time.perf_counter()
    idx_binaria = busca_binaria(lista, alvo)
    tempo_binaria = time.perf_counter() - inicio

    print(f"Alvo: {alvo}")
    print(f"Busca Linear  -> índice: {idx_linear}, tempo: {tempo_linear:.10f}s")
    print(f"Busca Binária -> índice: {idx_binaria}, tempo: {tempo_binaria:.10f}s")
