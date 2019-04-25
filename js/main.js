
	var isBlack = 0;
    function changeBackground() {
      if (isBlack == 0){
        var backgr = document.getElementById('bg').style="background-color:#52b0d6; color:white;";
			document.getElementById('selectback').innerHTML="CHANGE WEB BACKGROUND COLOR... (#2)";
			document.getElementById('selectback').style="background-color:#464141;";
			isBlack=true;
      isBlack= 1;
      }

      else{
        var dftBg = document.getElementById('bg').style="background-image:url('issets/images/backgrnd.jpg'); color:white;";
			document.getElementById('selectback').innerHTML="RESTORE TO DEFAULT BACKGROUND COLOR... (#3)";
			document.getElementById('selectback').style="background-color:black;";
			document.getElementById('centered').style="background-color:#464141;";
			isBlack=true;
      isBlack= 0;
      }
    }
