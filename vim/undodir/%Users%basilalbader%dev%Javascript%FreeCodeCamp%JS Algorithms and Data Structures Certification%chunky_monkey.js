Vim�UnDo� �>��q�V�S�M#��E5s_&n�F�r�sj��                     "       "   "   "    `���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                  /**/5�_�                       P    ����                                                                                                                                                                                                                                                                                                                                                             `���    �                  �/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                  �               5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                             `��-     �             �                 &function chunkArryaInGroups(arr, size)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��R     �                (function chunkArryaInGroups(arr, size) {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��S     �                 5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             `��S     �                }5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             `��T     �                  �               5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             `��W     �                  return result;�                +  if (temp.length !== 0) result.push(temp);�                  }�                    }�                      temp = [];�                      result.push(temp);�   
                   temp.push(arr[a]);�   	             
    else {�      
          1    if (a % size !== size - 1) temp.push(arr[a]);�      	          (  for (let a = 0; a < arr.length; a++) {�                  let result = [];�                  let temp = [];5�_�   
                 	   "    ����                                                                                                                                                                                                                                                                                                                                                             `��k     �   	          �               5        if (a % size !== size - 1) temp.push(arr[a]);5�_�                    
        ����                                                                                                                                                                                                                                                                                                                               
                 v       `��v     �   	             5�_�                    
       ����                                                                                                                                                                                                                                                                                                                               
                 v       `��x     �   	                        �   
          5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `��z     �   
                    } temp.push(arr[a]);5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `��|    �   
            	        }   else {�                       else {5�_�                            ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                (function chunkArrayInGroups(arr, size) {5�_�                           ����                                                                                                                                                                                                                                                                                                                            
   
       
          v       `���     �                    let temp = [];5�_�                           ����                                                                                                                                                                                                                                                                                                                            	   
       	          v       `���     �                    let result = [];5�_�                            ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                *    for (let a = 0; a < arr.length; a++) {5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                $        if (a % size !== size - 1) {5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                            temp.push(arr[a]);5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                        } else {5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                            temp.push(arr[a]);5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                            result.push(temp);5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                            temp = [];5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                	        }5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                    }5�_�                            ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                -    if (temp.length !== 0) result.push(temp);5�_�                            ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                    return result;5�_�      !                       ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                }5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���     �                  �               5�_�   !               "           ����                                                                                                                                                                                                                                                                                                                               
                 v       `���    �   	               return newArr;�      
            }�      	          (    newArr.push(arr.slice(i, i + size));�                .  for (let i = 0; i < arr.length; i += size) {�                  let newArr = [];�                  // Break it up.5��