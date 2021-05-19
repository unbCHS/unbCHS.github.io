function redirect (title, iframe, info) {
       sessionStorage.setItem("title", title);
       sessionStorage.setItem("iframe", iframe);
       sessionStorage.setItem("info", info);
       //window.location.replace = "/template_testing.html";
       console.log(sessionStorage.getItem("title"))
       console.log(sessionStorage.getItem("iframe"))
       console.log(sessionStorage.getItem("info"))
    };
function setCookie (key, info, expiration_date) {
    document.cookie()
    };
function searchCookies (requestedInfo) {
    for (var i = 0; i <=cookies.length - 1; i++) {
        
        }
    };
function detectIfNewVisitor() {
    var cookies = document.cookie
    
    };
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
    };
function redirect(location) {
    window.location.href=location.html;
    };            
function setCookie (key, info, expiration_date) {
                document.cookie(key = info, expiration_date)
    }
function searchCookies (requestedInfo) {
    for (var i = 0; i <=cookies.length - 1; i++) {
                    
        }
    }
function detectIfNewVisitor() {
    var cookies = document.cookie
                
    }
function changeColorScheme(colorBG, colorText, colorBody) {

}