Vim�UnDo� ��E��4B�r簳�b�\�2/�!�r9�   H                                   `�,)    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�*�     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�*�     �                  /**/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�*�     �                  K/*Flatten a nested array. You must account for varying levels of nesting.*/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�*�    �                 4 * You must account for varying levels of nesting.*/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�*�     �                  �               5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             `�+     �                    �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�+     �                 %steamrollArray([1, [2], [3, [[4]]]]);5�_�      	                 1    ����                                                                                                                                                                                                                                                                                                                                                             `�+"     �                 2console.log()steamrollArray([1, [2], [3, [[4]]]]);5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `�+)    �                 3console.log()steamrollArray([1, [2], [3, [[4]]]]));5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+`     �                 function steamrollArray(arr) {     const flattenedArray = [];     // Loop over array contents   (  for (let i = 0; i < arr.length; i++) {        if (Array.isArray(arr[i])) {   4      // Recursively flatten entries that are arrays   *      //  and push into the flattenedArray   5      flattenedArray.push(...steamrollArray(arr[i]));       } else {   *      // Copy contents that are not arrays   "      flattenedArray.push(arr[i]);       }     }     return flattenedArray;   };       4  // Call the function for each element in the array     arr.forEach(flatten);     return flattenedArray;   }       2console.log(steamrollArray([1, [2], [3, [[4]]]]));5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+c     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+f    �                  return flattenedArray;�                  arr.forEach(flatten);�                4  // Call the function for each element in the array�                  return flattenedArray;�                  }�                    }�                "      flattenedArray.push(arr[i]);�                *      // Copy contents that are not arrays�                    } else {�   
             5      flattenedArray.push(...steamrollArray(arr[i]));�   	             *      //  and push into the flattenedArray�      
          4      // Recursively flatten entries that are arrays�      	               if (Array.isArray(arr[i])) {�                (  for (let i = 0; i < arr.length; i++) {�                  // Loop over array contents�                  const flattenedArray = [];5�_�                           ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+q     �               };5�_�                           ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+~     �                   return flattenedArray;    �               }5�_�                            ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�    �                return flattenedArray;�                arr.forEach(flatten);�                2// Call the function for each element in the array5�_�                            ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�     �               %steamrollArray([1, [2], [3, [[4]]]]);5�_�                       1    ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�     �               2console.log()steamrollArray([1, [2], [3, [[4]]]]);5�_�                           ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�    �               3console.log()steamrollArray([1, [2], [3, [[4]]]]));5�_�                           ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�     �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�     �                // test here5�_�                            ����                                                                                                                                                                                                                                                                                                                                          1       v   1    `�+�     �                 �             5�_�                    !        ����                                                                                                                                                                                                                                                                                                                            !           !   1       v   1    `�+�     �   !               �   !            5�_�                             ����                                                                                                                                                                                                                                                                                                                            !           !   1       v   1    `�,(    �   F   H              : flatArr;�   E   G          1      : steamrollArray(arr.concat(elem), flatArr)�   D   F          /      ? steamrollArray(arr, [elem, ...flatArr])�   C   E              ? !Array.isArray(elem)�   B   D            return elem�   A   C            const elem = arr.pop();�   ;   =            return flatArr;�   :   <            });�   9   ;              else flatArr.push(item);�   8   :          ;    if (Array.isArray(item)) steamrollArray(item, flatArr);�   7   9            val.forEach(item => {�   1   3              });�   0   2                }�   /   1          B        return parseInt(v); // if a number in a string, convert it�   .   0                } else {�   -   /                  return v;�   ,   .          #        // if not a number (string)�   +   -                } else if (isNaN(v)) {�   *   ,                  return {};�   )   +          #        // bring back empty objects�   (   *          #      if (v == "[object Object]") {�   '   )              .map(function(v) {�   &   (               .split(",") // ['1','2','3']�   %   '          .    .replace(",,", ",") // "1,2,,3" => "1,2,3"�   $   &              .toString()�   #   %            return arr�                @  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;�                !  const flat = [].concat(...arr);5��