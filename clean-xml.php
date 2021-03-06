<?php
$path = 'data/tmp';
if ($handle = opendir($path)) {

  echo "Directory handle: $handle\n";
  echo "Entries:\n";

  while (false !== ($entry = readdir($handle))) {

    if(strpos($entry, '.gpx')){

      echo "$entry\n";
      $filePath = $path . '/' . $entry;
      if (file_exists($filePath)) {
        $xml = simplexml_load_file($filePath);

        //var_dump($xml->attributes());

        //var_dump($xml->trk->trkseg->trkpt);

        $nodesToRemove = array();

        foreach($xml->trk->trkseg->trkpt as $trkpt){

          if(
            test1($trkpt->attributes()->lat, $trkpt->attributes()->lon) ||
            test2($trkpt->attributes()->lat, $trkpt->attributes()->lon) ||
            test3($trkpt->attributes()->lat, $trkpt->attributes()->lon) ||
            test4($trkpt->attributes()->lat, $trkpt->attributes()->lon)
          ){

            $nodesToRemove[] = $trkpt;

          }
        }

        foreach ($nodesToRemove as $node) {
            unset($node[0]);
        }

        //$newFile = str_replace('.gpx', '-clean.gpx', $entry);
        // $xml->asXml($path . '/' . $newFile);
        $xml->asXml('data/xml/' . $entry);


      } else {
        exit('Failed to open ' . $entry . '.');
      }
    }
  }

  closedir($handle);
  echo "Complete!\n";
}

function test1($lat, $lon) {
  //51.447960, -0.042542
  //51.441480, -0.030215

  if (
    (($lat > '51.441480') && ($lat < '51.447960')) &&
    (($lon < '-0.030215') && ($lon > '-0.042542'))
  ) {
    return true;
  } else {
    return false;
  }
}

function test2($lat, $lon) {
  //51.525308, -0.078781
  //51.522029, -0.071724
  if (
    (($lat > '51.522029') && ($lat < '51.525308')) &&
    (($lon < '-0.071724') && ($lon > '-0.078781'))
  ) {
    return true;
  } else {
    return false;
  }
}

function test3($lat, $lon) {
  //51.513409, -0.123144
  //51.512441, -0.119367
  if (
    (($lat > '51.512441') && ($lat < '51.513409')) &&
    (($lon < '-0.119367') && ($lon > '-0.123144'))
  ) {
    return true;
  } else {
    return false;
  }
}

function test4($lat, $lon) {
  //51.528184, -0.104646
  //51.527343, -0.100440
  if (
    (($lat > '51.527343') && ($lat < '51.528184')) &&
    (($lon < '-0.100440') && ($lon > '-0.104646'))
  ) {
    return true;
  } else {
    return false;
  }
}
