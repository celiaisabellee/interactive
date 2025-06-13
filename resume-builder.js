var bgcolor = document.getElementById('bgcolor');
      var bgimg = document.getElementById('bgimg');
      var pgcolor = document.getElementById('pgcolor');
      var bgheight = document.getElementById('bgheight');
      var textcolor = document.getElementById('textcolor');
      var accentcolor1 = document.getElementById('accentcolor1');
      var accentcolor2 = document.getElementById('accentcolor2');
      var accentcolor3 = document.getElementById('accentcolor3');
      var accentcolor4 = document.getElementById('accentcolor4');
      var colorhover = document.getElementById('colorhover');
      var page = document.getElementById('page');
      var button = document.querySelector('button');
      var button2 = document.querySelector('button2');      
      var sectionheader = document.querySelector('sectionheader');
      var sectionheader2 = document.querySelector('sectionheader2');
      var subtitle = document.querySelector('subtitle');
      var subtitle2 = document.querySelector('subtitle2');
      var synopsis = document.querySelector('synopsis');
      var synopsis2 = document.querySelector('synopsis2');
      var buttonContainer = document.getElementById('buttonContainer');
      var headerbutton1 = document.getElementById('headerbutton1');
      var headerbutton2 = document.getElementById('headerbutton2');
      var headerbutton3 = document.getElementById('headerbutton3');
      var headerbutton4 = document.getElementById('headerbutton4');
      var footerbutton1 = document.getElementById('footerbutton1');
      var footerbutton2 = document.getElementById('footerbutton2');
      var footerbutton3 = document.getElementById('footerbutton3');
      button.addEventListener('click', function( event ) {
        event.preventDefault();
        document.getElementById("content").style.backgroundImage = "url('" +bgimg.value+ "')";
        document.getElementById("page").style.backgroundColor = pgcolor.value;
        document.getElementById("article").style.marginTop = bgheight.value;
        document.getElementById("content").style.backgroundColor = bgcolor.value;
        document.getElementById("sectionheader").style.backgroundColor = accentcolor2.value;
        var style = document.createElement('style')
        style.innerHTML = `#button:hover, #button2:hover {background-color: ${colorhover.value} !important;}`
        document.getElementsByTagName('head')[0].appendChild(style)
        document.getElementById("sectionheader2").style.backgroundColor = accentcolor2.value;
        document.getElementById("headerContainer").style.backgroundColor = accentcolor1.value;
        document.getElementById("footerContainer").style.backgroundColor = accentcolor4.value;
        document.getElementById("button").style.backgroundColor = accentcolor3.value;
        document.getElementById("button2").style.backgroundColor = accentcolor3.value;
      });
      document.getElementById("hideButton").addEventListener('click', function( event ) {
        document.getElementById("settingsBox").style.display = "none";
        document.getElementById("showButton").style.display = "block";
        document.getElementById("hideButton").style.display = "none";
      });
      document.getElementById("showButton").addEventListener('click', function( event ) {
        document.getElementById("settingsBox").style.display = "block";
        document.getElementById("hideButton").style.display = "block";
        document.getElementById("showButton").style.display = "none";
      });
      document.getElementById("formBlack").addEventListener('click', function( event ) {
        document.getElementById("subtitle").style.color = "#000000";
        document.getElementById("synopsis").style.color = "#000000";
        document.getElementById("subtitle2").style.color = "#000000";
        document.getElementById("synopsis2").style.color = "#000000";
      });
      document.getElementById("formWhite").addEventListener('click', function( event ) {
        document.getElementById("subtitle").style.color = "#ffffff";
        document.getElementById("synopsis").style.color = "#ffffff";
        document.getElementById("subtitle2").style.color = "#ffffff";
        document.getElementById("synopsis2").style.color = "#ffffff";
      });
      document.getElementById("headerBlack").addEventListener('click', function( event ) {
        document.getElementById("headerbutton1").style.color = "#000000";
        document.getElementById("headerbutton2").style.color = "#000000";
        document.getElementById("headerbutton3").style.color = "#000000";
        document.getElementById("headerbutton4").style.color = "#000000";
      });
      document.getElementById("headerWhite").addEventListener('click', function( event ) {
        document.getElementById("headerbutton1").style.color = "#ffffff";
        document.getElementById("headerbutton2").style.color = "#ffffff";
        document.getElementById("headerbutton3").style.color = "#ffffff";
        document.getElementById("headerbutton4").style.color = "#ffffff";
      });
      document.getElementById("buttonBlack").addEventListener('click', function( event ) {
        document.getElementById("button").style.color = "#000000";
        document.getElementById("button2").style.color = "#000000";
      });
      document.getElementById("buttonWhite").addEventListener('click', function( event ) {
        document.getElementById("button").style.color = "#ffffff";
        document.getElementById("button2").style.color = "#ffffff";
      });
      document.getElementById("sectionBlack").addEventListener('click', function( event ) {
        document.getElementById("sectionheadertitle").style.color = "#000000";
        document.getElementById("sectionheadertitle2").style.color = "#000000";
      });
      document.getElementById("sectionWhite").addEventListener('click', function( event ) {
        document.getElementById("sectionheadertitle").style.color = "#ffffff";
        document.getElementById("sectionheadertitle2").style.color = "#ffffff";
      });
      document.getElementById("footerBlack").addEventListener('click', function( event ) {
        document.getElementById("footerbutton1").style.color = "#000000";
        document.getElementById("footerbutton2").style.color = "#000000";
        document.getElementById("footerbutton3").style.color = "#000000";
      });
      document.getElementById("footerWhite").addEventListener('click', function( event ) {
        document.getElementById("footerbutton1").style.color = "#ffffff";
        document.getElementById("footerbutton2").style.color = "#ffffff";
        document.getElementById("footerbutton3").style.color = "#ffffff";
      });