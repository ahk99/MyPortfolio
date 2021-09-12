----------------MY PORTFOLIO----------------
.nav-link {
        position: relative;
    }

    position: absolute;



    <div class="container" >
        <div class="row1" id="flexh">
            <div class="col-lg-6">
                <div class="home-content">
                  <div class="circle" id="cl"></div>
                    <h1 id="th1">Hello,</h1>
                    </br>
                    <h2 id="th2">I'm Anagha Harikrishnan</h2>
                    </br>
                    <h4 id="th4">Computer Science Student</h4>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="home-img">
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"></link>

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"></link>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>


.nav-item {
        padding: 0;
        width: 100%;
        opacity: 0;
        animation-name: navitem;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        padding-left: 30px;
        padding-right: 30px;
        font-family: sans-serif;
        font-weight: 500;
    }
   .navbar {
        opacity: 0;
        width: 100%;
        animation-name: fadein;
        animation-duration: 2s;
        animation-delay: 4s;
        animation-fill-mode: forwards;
    }


    function shownofla() {
    document.getElementById("flexh").style.display = "flex";
}
setTimeout("shownofla()", 6000)



<script src="./script.js"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&family=Style+Script&display=swap" rel="stylesheet">

 #cl {
                        position: absolute;
                        opacity: 0;
                        width: 50%;
                        height: 50%;
                        border-radius: 50%;
                        background-color: rgb(38, 39, 37);
                        margin-left: 220px;
                        margin-top: 100px;
                        animation-name: circleanimate;
                        animation-duration: 0.5s;
                        animation-delay: 3s;
                        animation-fill-mode: forwards;
                    }


                    @keyframes circleanimate {
                        from {
                            transform: scale(0);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }



