/*var pageType = pageType*/  /*DONT FORGET TO UNCOMMENT THIS AND ADD THE PAGE TYPE*/
            /*function addInfoArray (idNum, name, desc, source, type) {
                idNum = nameList[idNum] = name; descList[idNum] = desc; sourceList [idNum] = source; pageType [idNum] = type;
            }
            function getInfoArray (idNum) {
                var gameName = nameList[idNum]; var gameDesc = DescList[idNum]; var gameSource = sourceList[idNum]; var pageType = typeList[idNum];
                return(gameName, gameDesc, gameSource, pageType);
            }
            
            function loadInfoObject (idNum, name, desc, source, type) {
                var pageInfo = {idNum: idNum, name: name, desc: desc, source: source, type: type};
           }
           function getInfoObject (requestedInfo, idNum) {
                return requestedInfo [idNum - 1];
           }
        */
        function setCookie (key, info, expiration_date) {
                document.cookie()
            }
            function searchCookies (requestedInfo) {
                for (var i = 0; i <=cookies.length - 1; i++) {
                    
                }
            }
            function detectIfNewVisitor() {
                var cookies = document.cookie
                
            }
            function secretStuff() {
                var passwordAnswer = prompt("What's the password?");
                if (passwordAnswer === "please"){
                    alert ("nope, thats the magic word, but not a password, try again");
                }
                else if (passwordAnswer === "Jace Robin") {
                    alert ("Hey there, how ya doin :)");
                }
                else if (passwordAnswer === "CHS") {
                    alert ("Good job... just kidding, that'd be too easy!");
                }
                else if (passwordAnswer === "Louisiana") {
                    alert ("You are here");
                } 
                else if (passwordAnswer === "underground") {
                    alert("good job dude, ya found the password, enjoy it while it lasts");
                    window.location.href="/main-pages/hidden_index.html";
                }
                else {
                    alert("Not an accepted password!");
                }
            }
            function redirect(location) {
                window.location.href=location.html;
            };