<!DOCTYPE html> <html>
<body>
<h1>Tropicana Flavors</h1>
<table style="border:1px solid black; margin:auto"> <thead> <tr>
        <th>Flavors</th> </tr>
    </thead>
    <tbody>
    <?php

    $data = array("caribbean sunset","island punch","pina colda","berry blast","strawberry kiwi", "watermelon breeze");
    for($i=0; $i<count($data); $i++){
    echo "<tr><td >$data[$i]</td> </tr>";
    ?>

    </tbody>
</table>
</body>
</html>
