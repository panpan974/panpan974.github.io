<?php
    //color1 sera la couleur principale du bouclier. Il y en aura 15 max. 
    if ($_GET['color1']==""){
        $_GET['color1'] ="white";
    }

    include("php/config.php");
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Créé ton propre blason !</title>
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <header>
            <h1>Créer ton blason!</h1>
        </header>

        <section class="mainPage">


        <div class="fixed">
            <div class="bouclier">
                <!--
                <div class="clickBox gauche" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                
                <div class="clickBox droite" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
-->
                <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 393.46 535.54">
                    <rect id="color1" ondrop="drop(event)" ondragover="allowDrop(event)" data-name="2" x="2.5" y="2.5" width="388.46" height="530.54" fill="white" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/>
                    <rect id="color2" ondrop="drop(event)" ondragover="allowDrop(event)" data-name="1" x="2.5" y="268.67" width="388.46" height="265.27" fill="white" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/>
                </svg>
<!--
                <svg id="svgBouclier" xmlns="http://www.w3.org/2000/svg" width="393.46" height="535.54" viewBox="0 0 393.46 535.54">
                    <g id="none"><rect id="color1" data-name="1" x="2.5" y="2.5" width="388.46" height="530.54" fill="none" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/></g>
                </svg>
                <svg version="1.1" id="svgBouclier" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="400px" height="400px" viewBox="0 0 226.5 298.9" enable-background="new 0 0 226.5 298.9" xml:space="preserve">
                        
                    <path id="droit"
                        fill= <?php echo $_GET['color1']; ?> 
                        stroke="#5A5A5A" 
                        stroke-width="10" 
                        stroke-miterlimit="10" 
                        d="M113.5,5H5v108.2c0,14,2.2,28,6.7,41.2
                        C23.5,189.6,54.3,256.8,113,293l0,0c58.7-36.2,90-103.4,101.8-138.5c4.5-13.3,6.7-27.2,6.7-41.2V5H113H113.5z"/>
                    <path id="gauche" 
                    fill="#FF0000" 
                    stroke="#5A5A5A" 
                    stroke-width="10" stroke-miterlimit="10" d="M113.5,5H5v108.2c0,14,2.2,28,6.7,41.2
                        C23.5,189.6,54.3,256.8,113,293l0,0c0-57.5,0-288,0-288H113.5z"/>-->
                </svg>

            </div>

            
        </div>

        

        
        <div class="colors" > 
            <div id="red" draggable="true" ondragstart="drag(event)"></div>
            <div id="blue" draggable="true" ondragstart="drag(event)"></div>
            <div id="green" draggable="true" ondragstart="drag(event)"></div>
            <div id="yellow" draggable="true" ondragstart="drag(event)"></div>
            <div id="white" draggable="true" ondragstart="drag(event)"></div>
        </div>
       
        

        <div class="allCoupes">
            <div class="coupe1">    
                <?php echo $coupeNone ?>
                <button>Aucune coupe.</button>
            </div>

            <div class="coupe2">
                <?php echo $coupeParti ?>
                <button>Coupe en parti.</button>

            </div>

            <div class="coupe3">
                <?php echo $coupeCoupe ?>
                <button>Coupe en coupé.</button>

            </div>
           

        </div>

        <!--
        <div class="allBoucliers">
            <div class="recentFR">
                <svg version="1.1" id="svgBouclier" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="0 0 226.5 298.9" enable-background="new 0 0 226.5 298.9" xml:space="preserve">
                    <path id="droit" fill="none" stroke="#5A5A5A" stroke-width="10" stroke-miterlimit="10" d="M113.5,5H5v108.2c0,14,2.2,28,6.7,41.2
                        C23.5,189.6,54.3,256.8,113,293l0,0c58.7-36.2,90-103.4,101.8-138.5c4.5-13.3,6.7-27.2,6.7-41.2V5H113H113.5z"/>
                </svg>

                <button class="btn recentFR">Récent bouclier FR</button>
            </div>
            <div class="vieuxFR">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="0 0 225.7 309.1" enable-background="new 0 0 225.7 309.1" xml:space="preserve">
                <path id="form"
                    fill="none"
                    stroke="#5A5A5A" 
                    stroke-width="10" stroke-miterlimit="10" d="M112.3,5H5v248.9c0,15,12.2,27.1,27.1,27.1h53
                    c9.9,0,19.2,5.2,24.2,13.8l4,5.2l0,0l2.9-5.2c5.1-8.6,14.3-13.8,24.2-13.8h53c15,0,27.1-12.2,27.1-27.1V5H113.3H112.3z"/>
                </svg>
                <button class="btn vieuxFR">Vieux bouclier FR</button>
            </div>
        </div>-->

        <div>
            
            <form method="get" action="php/bouclier_result.php">
                <p>Forme Paramètre</p>    
                <textarea name="coupe" id="forme"><?php echo htmlspecialchars($coupeNone); ?></textarea>
                <p>Couleur1 Paramètre</p>
                <input type="text" value="none" id="Fcolor1" name="Fcolor1">
                <p>Couleur2 Paramètre</p>
                <input type="text" value="none" id="Fcolor2">
                <input type="submit" value="envoyer">
            </form>
    
        </div>
            

        </section>
        
        <footer>

        </footer>

        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>