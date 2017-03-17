#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    int acumnumero;
    int acumimpar;
    int contadorpar;
    int contadorimpar;
    int sumaImpares;
    int promedio;
    int max;
    int numeromax;
    int minimpar;
    int flag=0;
    int contador=0;
    char respuesta='s';


    do
    {
        printf("Ingrese Un Numero: ");
        scanf("%d",numero);

        acumnumero= acumnumero+numero;

        if ((numero%2)==0)
        {
            contadorpar++;
        }


        if (!((numero%2)==0))
        {
            acumimpar=acumimpar+numero;
            contadorimpar++;
        }

        if(flag=0)
        {
            max=numero;
            minimpar=numero;
            flag++;
        }
        else
        {
            if(numero>max)
            {
                numeromax=numero;
            }
        }



        printf("Desea continuar? s/n");
        respuesta = getche(respuesta);

        contador++;

    }while(respuesta=='s');

     promedio= (float)acumnumero/contador;

    return 0;
}
