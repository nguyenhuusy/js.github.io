<DOCTYPE! html>
<html>

    <head>
        <link rel="stylesheet" href="./project2.css" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/aa114b73c6.js" crossorigin="anonymous"></script>

    </head>

    <body>
        <h1 class="title">Student list</h1>
        <div id="time"></div>
        <div class="body-2">
            <!-- ------------------------------------------------------>
            <form>
                <div class= "form-item">
                    <label class="form-label" for="name">Name</label>
                    <input class="form-input" type="text" name="Name" id="Name"/>
                    <div id="canhbao"></div>
                </div>
                <div class= "form-item">
                    <label class="form-label" for="gender">Gender</label>
                    <div class="form-radio">
                        <input class=" form-input" type="radio" name="Gender" id="Male" value="male" checked/>
                        <label for="Male">Male</label>
                    </div>
                    <div class="form-radio">
                        <input class="form-input" type="radio" name="Gender" id="Female" value="female"/>
                        <label for="Female">Female</label>
                    </div>
                </div>
                <div class="form-item">
                    <label class="form-label" for="math-point">Math point</label>
                    <input class="form-input" type="text" name="math" id="math"/>
                </div>
                <div class="form-item">
                    <label class="form-label" for="english-point">English point</label>
                    <input class="form-input" type="text" name="english" id="english"/>              
                </div>
                <button id="button-table" type="submit">Button</button>
            </form>
            <!-- ----------------------------------------- -->
            
            <!-- <button id="button-table-2">Hide data</button> -->
            <table class="main-table">
                
                <thread class="main-table-title">
                    <!-- //tiêu đề -->
                    <tr class="main-table-row-title">
                        <!-- //hàng -->
                        <td class="table-row-title-item">ORDER</td>
                        <!-- //cột -->
                        <td class="table-row-title-item">NAME</td>
                        <td class="table-row-title-item">GENDER</td>
                        <td class="table-row-title-item">MATH</td>
                        <td class="table-row-title-item">ENG</td>
                        <td class="table-row-title-item">AVERAGE</td>
                    </tr>
                </thread>
                <tbody id="table-content">

                </tbody>
            </table>


        </div>
        <!-- <div class="clock">
            <div class="hour-hand"></div>
            <div class="minute-hand"></div>
            <div class="second-hand"></div>
            <div class="center"></div>
            <ul class="number">
                <li class="number-item">1</li>
                <li class="number-item">2</li>
                <li class="number-item">3</li>
                <li class="number-item">4</li>
                <li class="number-item">5</li>
                <li class="number-item">6</li>
                <li class="number-item">7</li>
                <li class="number-item">8</li>
                <li class="number-item">9</li>
                <li class="number-item">10</li>
                <li class="number-item">11</li>
                <li class="number-item">12</li>
            </ul>
            
        </div> -->
        <div class="clock">
            <div class="hourHand"></div>
            <div class="minuteHand"></div>
            <div class="sec"><div class="secondHand"></div></div>
            <div class="center"></div>
            <div class="red-center center"></div>
            <ul>
                <li><span>1</span></li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
                <li><span>6</span></li>
                <li><span>7</span></li>
                <li><span>8</span></li>
                <li><span>9</span></li>
                <li><span>10</span></li>
                <li><span>11</span></li>
                <li><span>12</span></li>
            </ul>
          </div>
        <script src="./project2.js"></script>
    </body>

</html>
    </DOCTYPE>
