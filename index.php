 <!-- Google Fonts Export -->
<?php
$path = "backend/fonts.txt";
$request = file_get_contents($path );
$fonts = json_decode( $request );
?>
<!-- ------------- -->
 

<!-- Markup -->
<!DOCTYPE html>
<html>
<!-- links -->
<head>
<title>TOOL</title>
<!-- css -->
<!-- <link rel="stylesheet" type="text/css" href="css/fontAwesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="css/fontAwesome/css/font-awesome.min.css"> -->
<link rel="stylesheet" type="text/css" href="css/ionicons/css/ionicons.min.css">

<link rel="stylesheet" type="text/css" href="css/animate.css">    
<link rel="stylesheet" href="css/jquery.ui.rotatable.css">
<link rel="stylesheet" type="text/css" href="css/css_file.css">
<link media="all" rel="stylesheet" href="css/uikit/css/uikit.min.css" type="text/css">
<link media="all" rel="stylesheet" href="css/uikit3/css/uikit.min.css" type="text/css">
<!-- js  -->
<script src="js/jscolor.js"></script>
<script type="text/javascript" src='js/jquery.js'></script>
<script type="text/javascript" src='js/jquery-ui.min.js'></script>
<script src="js/jquery.ui.rotatable.js"></script>
<script type="text/javascript" src='js/js_file.js'></script>
</head>
<!-- -------- -->


<!-- body meta -->
<body>

<!-- header area -->
<div class="animated slideInLeft header" >

<div class="nav">
<span class="menuIcon"><i class=" ion ion-home"></i>Create Your Own </span>
</div>
<div  id='controlPanel'>
<div class="leftBar">
<ul>
<li forAttr=".textOptions" id="AddText">A</li>
<li forAttr="#Ctrig">C</li>
<li forAttr=".OurImages">G</li>
<li forAttr=".editOptions">E</li>
<li forAttr=".iconsP">I</li>

</ul>
<!-- Selected meta -->
</div><div class="rightBar">

<!-- by DEfault -->
<div class="OurImages metaBox">
<button id='imagesUnsplash' disabled="true">Search Gallery</button>
<div class="searchPanel">
<input  type='text' name="serchImage" id='querySearched' placeholder="Search Image">  
<button id="serchImage">GO</button>
<button id="clear">Clear</button>
<div class="result">
</div>
</div>
</div>

<div class="iconsP metaBox">
<div class="iconS">
<input  type='text' name="iconS" id='iconSearched' placeholder="Search Icons">  
</div> 
<div class='allIcon'>
<?php $content = file_get_contents('backend/font-awesome-v5.0.1.json');
$json = json_decode($content);
foreach ($json as $topping) {echo '<i class=" ',$topping,' "></i>';}?>
</div>
</div>

<div class="textOptions metaBox">
<label>Text Color</label>
<input class="jscolor"  style="cursor: pointer;" name="textcolor" forAttr='color' value="fff">
<br>
<label>Font Size</label>
<input class="uk-range sliders" type="range" forAttr="font-size" value="10" min="10" max="50" step="1">
<br>
<label>Letter Spacing</label>
<input class="uk-range sliders" type="range" forAttr="letter-spacing" value="1" min="0" max="4" step="0.2">


<br>
<label>Word Spacing</label>
<input class="uk-range sliders" type="range" forAttr="word-spacing" value="1" min="0" max="40" step="5">
<br>
<label>Line height</label>
<input class="uk-range sliders" type="range" forAttr="line-height" value="10" min="10" max="50" step="5" value="2" min="0" max="10" step="0.1">
<br>
<label>Font Weight</label>
 <select class="fontWeight">
  <option value="1000">Bold</option>
  <option value="100">Light</option>
</select>
<br> 
<label>Google Fonts</label>
 <div class="gFonts">
<select id="font-selector">
<?php foreach ( $fonts->items as $font ) { ?>
<option value="<?php echo str_replace(' ', '+', $font->family); ?>"><?php echo $font->family; ?></option>
<?php } ?>            
</select>
<br>
</div>
<br>
<br>
<br>
<button id="addMoreText" class="uk-button-danger">Add Text</button>
</div>





<div class="editOptions metaBox">
<input type="file" name="bgImage" id='Cimg'>
<label>Overlay Color</label>
<input class="jscolor"  style="cursor: pointer;" name="bgOverlay" id='COverlaycol' value="000">
<br>
<label>Overlay Opacity</label>
<input type="range" class="uk-range sliders" name="bgopacity" id="bgopacity" value="0" min="0" max="1" step="0.1" >
</div>
<!-- options -->

<div class="options">



<div class="changeC">
<form>



</form>
</div>

<!-- options ends -->


</div>


















</div>

</div>


</div>
<!-- header area ends---------- -->









<!-- <div class="AddText">
<button id="AddText">Add Text</button>
</div> -->

<div class="main ">

<div class='phoneBorder'></div>

<div class="OurBackground">
<!-- overlay -->
<div class="Overlay"></div>
<!-- cam -->
<div class="mainPhoneCam">
<img src="images/Camera.png">
<!-- add text -->
</div>
<div class="divText"></div>

</div>


</div>
<!-- 
<input id="btn-Preview-Image" type="button" value="Preview"/>
    <a id="btn-Convert-Html2Image" href="#">Download</a>
    <br/>
    <h3>Preview :</h3>
    <div id="previewImage">
    </div>  -->

</body>
</html>