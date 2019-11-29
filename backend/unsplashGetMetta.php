<?php
if ( isset($_POST['loadMore']) ) {
    $loadMore=$_POST['loadMore'];
}
else{
    $loadMore=0;
} 

$querySearched=$_POST["querySearched"];
$cleanQuery = str_replace(' ', '', $querySearched);
$url="https://api.unsplash.com/photos/search/?query=" . $cleanQuery . "&client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=30&page=" . $loadMore;
$contents = json_decode(@file_get_contents($url), TRUE);
if($contents == false) {
echo "<p class='uk-text-danger'><i class='ion-close'></i> NO result Found For " . $querySearched . "</p>";
}
if($contents == true) {
foreach($contents as $item) {
$jim= $item['urls']['regular'];
echo "<img class= 'scrapImages' src='",$jim,"'>";
}
}
?>