#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numerouno;
    int numerodos;
    int resultado;

    printf("ingrese numero uno: ");
    scanf("%d",&numerouno);

    printf("ingrese numero dos: ");
    scanf("%d",&numerodos);

    resultado = numerouno+numerodos;

    printf("La Suma Es: %d",resultado);

        if (resultado >0)
        {
            printf("\nLa Suma Es Positiva.\n");
        }
        else
        {
            if(resultado<0)
            {
              printf("\nLa Suma Es Negativa.\n");
            }
            else
            {
                printf("\nLa Suma Es Igual A Cero.\n");
            }
        }

    return 0;
}
