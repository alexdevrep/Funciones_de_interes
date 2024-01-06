"""
Es un ejercicio del RoadMap retos de programación de mouredev en 
el que imprimimos todos aquellos números entre 10 y 55 que sean pares menos el 
número 16 y que no sean múltiplos de 3
"""

numero9 = 10
for numero9 in range (9,55):
    numero9 = numero9 + 1
    if (numero9 % 2 == 0 and numero9 != 16 and numero9 % 3 !=0):
        print (numero9)