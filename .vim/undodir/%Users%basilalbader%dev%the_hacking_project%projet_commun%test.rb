Vim�UnDo� с&m��+@Uq��iǹ㼌)N�����~�                        ;       ;   ;   ;    `Y��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `Y��     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `Y��     �                  �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `Y�d     �         $      (      if params[:answer][:answer].blank?5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �         %        �         $    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�     �         &      .            @wrong_answer = @answer.is_correct5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�'     �         &      %            if @wrong_answer == false5�_�                       (    ����                                                                                                                                                                                                                                                                                                                                                v       `Y�)     �         &      1            if @alllllllllllwrong_answer == false5�_�      
                     ����                                                                                                                                                                                                                                                                                                                                                v       `Y�+     �         &                  if  == false�         &    5�_�         	       
          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�2     �                            @answer.is_correct5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                v       `Y�4     �         %                  #count = 05�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�6     �         %                  #chount = 05�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�7     �         %                  #count = 05�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�K     �         %                      #if count ==! 25�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�W     �         &                      �         %    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�g     �         &                      #end5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�p     �         &                      #if count === 35�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�s     �         &                    #count += 15�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       `Y�y     �                   end�                	      end�                            end�                                end�                                break ;�                ,                flash[:error] = "game over!"�                                if count === 3�                              count += 1�                *            if @answer.is_correct == false�                            count = 0�                            �                            end�                /                flash[:error] = "wrong answer!"�                5                redirect_to trivium_path(trivia.id+1)�                @                current_user.update(score: current_user.score+0)�                            else�                +                flash[:succes] = "correct!"�                5                redirect_to trivium_path(trivia.id+1)�                A                current_user.update(score: current_user.score+10)�                )            if @answer.is_correct == true�   
             J        TriviaUser.create(user_id: current_user.id, trivium_id: trivia.id)�   	             1        trivia = Trivium.find(@answer.trivium_id)�      
          7        @answer = Answer.find(params[:answer][:answer])�      	          
      else�                )        redirect_to trivium_path(@trivia)�                0        flash[:error] = "Answer cannot be blank"�                (      if params[:answer][:answer].blank?�                )      @trivia = Trivium.find(params[:id])5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �                  count = 0;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �         %    �         %    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �                  count = 0;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �         %       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �      
   %        �         %    5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                      #          v       `Y��     �   	      ,    5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                      $          v       `Y��     �   	      -       5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                      $          v       `Y��     �   	      -      g5�_�                    (        ����                                                                                                                                                                                                                                                                                                                            (           -           v        `Y��     �   '                  i = 0;   j = 0;       answer = '';   user_a5�_�                     (        ����                                                                                                                                                                                                                                                                                                                            (           (           v        `Y��     �   '   (          ser_a5�_�      !               '        ����                                                                                                                                                                                                                                                                                                                            (           (           v        `Y��     �   &   '           5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                      $          v       `Y��     �         &   	       count = 0   "    if @answer.is_correct == false         count += 1         if count === 3   $        flash[:error] = "game over!"           break ;   	      end       end     end5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �                	      end�      
              end�      	          	      end�                        break ;�                $        flash[:error] = "game over!"�                      if count === 3�                      count += 1�                "    if @answer.is_correct == false5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �             �             5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                v       `Y��    �               3    @answer = Answer.find(params[:answer][:answer])5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�     �                1  @answer = Answer.find(params[:answer][:answer])5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                      	          v       `Y�5     �                   �             5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                      	          v       `Y�7     �                   �             5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                      	          v       `Y�;     �                  count = 05�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�<     �                   if @answer.is_correct == false5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�<     �                    count += 15�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�<     �                    if count === 35�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�=     �                "      flash[:error] = "game over!"5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�=     �                      break ;5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�=     �                    end5�_�   .   2           /          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�>     �                  end5�_�   /   3   0       2           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�Q     �                  end�                    end�                      break ;�                "      flash[:error] = "game over!"�                    if count === 3�                    count += 1�   
                if @answer.is_correct == false5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �                   else5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                         "       v   "    `Y��     �                    else if5�_�   4   6           5          ����                                                                                                                                                                                                                                                                                                                                         "       v   "    `Y��     �                    else if �              5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                         	       v   	    `Y��     �         !       5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                                         	       v   	    `Y��     �         !            �         !    5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                 v       `Y��     �   
      &   	   "    if @answer.is_correct == false         count += 1         if count === 3   $        flash[:error] = "game over!"           break ;   	      end       end       F    TriviaUser.create(user_id: current_user.id, trivium_id: trivia.id)5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �   
             I       TriviaUser.create(user_id: current_user.id, trivium_id: trivia.id)5�_�   9   ;           :           ����                                                                                                                                                                                                                                                                                                                                                v       `Y��     �                 5�_�   :               ;          ����                                                                                                                                                                                                                                                                                                                                                v       `Y��    �               !      flash[:succes] = "correct!"    �                     �             5�_�   /   1       2   0           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�A     �               5�_�   0               1          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�D     �                 #@trivia = Trivium.find(params[:id])�                "if params[:answer][:answer].blank?�                *  flash[:error] = "Answer cannot be blank"�                #  redirect_to trivium_path(@trivia)�                else�                1  @answer = Answer.find(params[:answer][:answer])�                +  trivia = Trivium.find(@answer.trivium_id)�      	            count = 0�                D  TriviaUser.create(user_id: current_user.id, trivium_id: trivia.id)�                  if @answer.is_correct == true�                5    current_user.update(score: current_user.score+10)�                )    redirect_to trivium_path(trivia.id+1)�                    flash[:succes] = "correct!"�                  else�                4    current_user.update(score: current_user.score+0)�                )    redirect_to trivium_path(trivia.id+1)�                #    flash[:error] = "wrong answer!"�                  end�                end5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       `Y�j     �         &                      f count === 35�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       `Y�l     �         &                     la f count === 35�_�              
   	           ����                                                                                                                                                                                                                                                                                                                                                v       `Y�+     �         &    �         &      <            if @answer.is_correct@answer.is_correct == false5��