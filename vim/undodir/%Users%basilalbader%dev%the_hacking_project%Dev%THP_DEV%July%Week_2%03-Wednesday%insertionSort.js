Vim�UnDo� Gl�`8��'�~�sۃu�����F��)���M(                                     `�pk   	 _�                            ����                                                                                                                                                                                                                                                                                                                                                             `�R     �               A    return (`Tri par insertion: ${count} comparaisons - ${arr}`);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�c     �                        count++;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�f    �                    let count = 0;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�w     �               C    //return (`Tri par insertion: ${count} comparaisons - ${arr}`);5�_�                       @    ����                                                                                                                                                                                                                                                                                                                                                             `�{     �               A    return (`Tri par insertion: ${count} comparaisons - ${arr}`);5�_�                       >    ����                                                                                                                                                                                                                                                                                                                                                             `�}     �               ?    return (`Tri par insertion: ${count} comparaisons - ${arr};5�_�                       :    ����                                                                                                                                                                                                                                                                                                                                                             `�~    �               >    return (`Tri par insertion: ${count} comparaisons - ${arr;5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             `�n     �                #const insertionSort = (arr, n) => {5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `�n     �                    let key;5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `�n     �                
    let j;5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                 V       `�n!     �                        for (let i = 1; i < n; i++)       {           key = arr[i];           j = i - 1;       &        while (j >= 0 && arr[j] > key)   	        {                arr[j + 1] = arr[j];               j = j - 1;   	        }           arr[j + 1] = key;       }       return arr;   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       `�n,     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       `�n.     �                   �             5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                 V       `�nG     �                       �             �               $    for (let i = l + 1; i <= r; i++)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       `�nU     �                       let temp = arr[i]5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       `�nv     �                        while (j >= l && arr[j])5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                 V       `�n~     �         
                  �         	    �               '        while (j >= l && arr[j] > temp)5�_�                           ����                                                                                                                                                                                                                                                                                                                            	           	          V       `�n�     �         
                  arr[j + 1]5�_�                           ����                                                                                                                                                                                                                                                                                                                            	           	          V       `�n�     �         
                  arr[j + 1] = arr[j]5�_�                           ����                                                                                                                                                                                                                                                                                                                            
           
          V       `�n�     �      
                 �      
       5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                 V       `�n�    �      
                 arr[j + 1]5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                 V       `�n�    �   
                �   
          5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�pj   	 �   
                 return arr;5��