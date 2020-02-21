   var tries=0;//global variable  

function checkAns(ans) {
   if (document.getElementById("AnsValue").value == ans)
   {
    
     document.getElementById("RightAns").style.display = "block";
     document.getElementById("WrongAns").style.display = "none";
     document.getElementById("WrongAnsLastChance").style.display = "none";
     document.getElementById("CheckAns").style.display = "none";
     document.getElementById("NextPage").style.display = "block";

   }
   else
   {
      if (tries==2)
      {
         document.getElementById("RightAns").style.display = "none";
         document.getElementById("WrongAns").style.display = "none";
         document.getElementById("WrongAnsLastChance").style.display = "block";
         document.getElementById("CheckAns").style.display = "none";
         document.getElementById("NextPage").style.display = "block";
      }
      else
      {
         document.getElementById("RightAns").style.display = "none";
         document.getElementById("WrongAns").style.display = "block";
         document.getElementById("WrongAnsLastChance").style.display = "none";
         document.getElementById("CheckAns").style.display = "block";
         document.getElementById("NextPage").style.display = "none";
         tries = tries + 1;
      }
   }
}
