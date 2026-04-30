import random
import time

from bubble_sort import bubble_sort
from merge_sort import merge_sort


if __name__ == "__main__":
    lista = random.sample(range(100000), 1000)

    copia_bubble = lista.copy()
    inicio = time.perf_counter()
    bubble_sort(copia_bubble)
    tempo_bubble = time.perf_counter() - inicio

    copia_merge = lista.copy()
    inicio = time.perf_counter()
    merge_sort(copia_merge)
    tempo_merge = time.perf_counter() - inicio

    print(f"Lista com {len(lista)} elementos")
    print(f"Bubble Sort -> tempo: {tempo_bubble:.10f}s")
    print(f"Merge Sort  -> tempo: {tempo_merge:.10f}s")
