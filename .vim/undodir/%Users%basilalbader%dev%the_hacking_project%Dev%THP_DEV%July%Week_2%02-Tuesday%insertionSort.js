Vim�UnDo� ֺ��̭\'^��|WcB� Zk�2���7��                    C       C   C   C    `�j�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���     �      	             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �               { 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   { 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   let i, key, j; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                       key = arr[i]; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                       j = i - 1; 5�_�      	                 
    ����                                                                                                                                                                                                                                                                                                                                                             `���     �               
        { 5�_�      
           	      
    ����                                                                                                                                                                                                                                                                                                                                                             `���     �               
        } 5�_�   	              
      !    ����                                                                                                                                                                                                                                                                                                                                                             `���     �               !            arr[j + 1] = arr[j]; 5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `���     �                           j = j - 1; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   } 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���    �                 } 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���    �                       arr[j + 1] = key; 5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                   let i, key, j;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                   let i; key, j;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �                   let key, j;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �             5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `��     �                
    let i;5�_�                      	    ����                                                                                                                                                                                                                                                                                                                                                             `��"    �                   for (i = 1; i < n; i++)5�_�                       2    ����                                                                                                                                                                                                                                                                                                                                                             `��0     �   
            2        /* Move elements of arr[0..i-1], that are 5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                             `��1     �               0        greater than key, to one position ahead 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��N     �                  �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��Q     �                    printArray(arr, n);�                    insertionSort(arr, n);�                    let n = arr.length;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��\     �                printArray(arr, n);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��\     �                    �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��^     �                  �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��f     �                 console.log(arr)5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `��i     �             �             5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             `��n     �               console.log(arr);5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             `��u     �                console.log("arr berfore: "arr);5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                             `��x     �             �             5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                             `��y     �                console.log(arr);5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             `��|    �                 "console.log("arr berfore: ", arr);5�_�   $   '           %           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                �             5�_�   %   (   &       '           ����                                                                                                                                                                                                                                                                                                                                                             `���    �                  �               5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                  V        `��   	 �             	       /*   let arr = [12, 11, 13, 5, 6 ];   let n = arr.length;       "console.log("arr berfore: ", arr);   insertionSort(arr, n);    console.log("arr after: ", arr);   */5�_�   (   *           )      	    ����                                                                                                                                                                                                                                                                                                                                                             `���     �                function insertionSort(arr, n) 5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                             `���     �             �                 �              5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �             �             5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                       -           V        `��     �                insertionSort(arr, n)    {       let key;   
    let j;           for (let i = 1; i < n; i++)       {           key = arr[i];           j = i - 1;       1        /* Move elements of arr[0..i-1], that are   /        greater than key, to one position ahead   $        of their current position */   &        while (j >= 0 && arr[j] > key)   	        {                arr[j + 1] = arr[j];               j = j - 1;   	        }           arr[j + 1] = key;       }   }5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                                  V        `��   
 �                }�                    }�                        arr[j + 1] = key;�                	        }�                            j = j - 1;�                             arr[j + 1] = arr[j];�                	        {�                &        while (j >= 0 && arr[j] > key)�                1        /* Move elements of arr[0..i-1], that are�   
                     j = i - 1;�   	                     key = arr[i];�      
              {�      	              for (let i = 1; i < n; i++)�                
    let j;�                    let key;�                {�                insertionSort(arr, n) 5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 $export default class InsertionSort {5�_�   .   0           /           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                  5�_�   /   1           0           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                }5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                             `��     �                    }�                	        }�                            arr[j + 1] = key;�                            }�                                j = j - 1;�                $                arr[j + 1] = arr[j];�                            {�                *            while (j >= 0 && arr[j] > key)�   
             5            /* Move elements of arr[0..i-1], that are�      
                      j = i - 1;�      	                      key = arr[i];�                	        {�                #        for (let i = 1; i < n; i++)�                        let j;�                        let key;�                    {�                     insertionSort(arr, n) 5�_�   1   3           2           ����                                                                                                                                                                                                                                                                                                                                                V       `��    �   
             1        /* Move elements of arr[0..i-1], that are   /        greater than key, to one position ahead   $        of their current position */5�_�   2   4           3           ����                                                                                                                                                                                                                                                                                                                                                V       `��    �                   �             �                  �               5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                V       `�	    �                   insertionSort;5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                                                             `�7    �                insertionSort(arr, n) 5�_�   5   7           6          ����                                                                                                                                                                                                                                                                                                                                                             `�;     �                const insertionSort(arr, n) 5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                                                             `�?     �                const insertionSort = (arr, n) 5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                             `�A     �                const insertionSort = (arr, n) 5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                                                             `�F    �                !const insertionSort = (arr, n) =>   {�               {5�_�   9   ;           :          ����                                                                                                                                                                                                                                                                                                                                                             `�U     �                   �             5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                                                             `�k     �                       �             5�_�   ;   =           <          ����                                                                                                                                                                                                                                                                                                                                                             `�r    �                   �             5�_�   <   >           =          ����                                                                                                                                                                                                                                                                                                                                                             `�     �                    return arr;5�_�   =   ?           >           ����                                                                                                                                                                                                                                                                                                                                                             `�     �                   �             5�_�   >   @           ?          ����                                                                                                                                                                                                                                                                                                                                                             `�    �               <    return (`Tri à bulle: ${count} comparaisons - ${arr}`);5�_�   ?   A           @           ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �                module.exports = {5�_�   @   B           A          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �                    insertionSort,5�_�   A   C           B           ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �                }5�_�   B               C           ����                                                                                                                                                                                                                                                                                                                                                             `�j�    �                  �               5�_�   %           '   &           ����                                                                                                                                                                                                                                                                                                                                                             `���    �                 �             	   */   */       */       */       */       */       */       */       */5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �              5��