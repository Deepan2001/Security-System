var patternLock = (function () {
    var autoInit = true;
    var autoSubmit = true;
    var showResetButton = true;
    var isdrawing = false;
    var from = "";
    var to = "";
    var inputbox;
    var startbutton = 0;
    var gridsize = false;
    var buttons = []; 
    var lines = []; 
    var resets = []; 
    var init = function(){
        if (autoInit){
            var canAutosubmit = false;
            var pw = document.getElementsByTagName("input");
            for (var i=0;i<pw.length;i++){
                if(pw[i].className == 'patternlock'){
                    generate(pw[i]);
                }
                if((pw[i].type=='submit') && (autoSubmit)){
                    pw[i].style.display = 'none';
                    canAutosubmit = true;
                }
            }
            if (showResetButton && !canAutosubmit){
                autoSubmit = false;
                for (var r=0;r<resets.length;r++){
                    resets[r].style.display = "block";
                }
            }
        }
    };
    var generate= function(el){
        inputbox = el;
        el.style.display = 'none';
        var pel = el.parentNode;
        var patternTag = document.createElement("div");
        patternTag.className = "patternlockcontainer";
        var linesTag = document.createElement("div");
        linesTag.className = "patternlocklineshorizontalcontainer boxsizingcontentbox";
        var elid=["12","23","45","56","78","89"];
        for (var i=0;i<6;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "patternlocklinehorizontal boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            lines.push(lineTag);
            linesTag.appendChild(lineTag);
        }
        patternTag.appendChild(linesTag);
        linesTag = document.createElement("div");
        linesTag.className = "patternlocklinesverticalcontainer boxsizingcontentbox";
        elid=["14","25","36","47","58","69"];
        for (var i=0;i<6;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "patternlocklinevertical boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            lines.push(lineTag);
            linesTag.appendChild(lineTag);
        }
        patternTag.appendChild(linesTag);
        linesTag = document.createElement("div");
        linesTag.className = "patternlocklinesdiagonalcontainer boxsizingcontentbox";
        elid=["24","35","57","68"];
        for (var i=0;i<4;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "patternlocklinediagonalforward boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            lines.push(lineTag);
            linesTag.appendChild(lineTag);
        }
        patternTag.appendChild(linesTag);
        linesTag = document.createElement("div");
        elid=["15","26","48","59"];
        linesTag.className = "patternlocklinesdiagonalcontainer boxsizingcontentbox";
        for (var i=0;i<4;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "patternlocklinediagonalbackwards boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            lines.push(lineTag);
            linesTag.appendChild(lineTag);
        }
        patternTag.appendChild(linesTag);
        var buttonsTag = document.createElement("div");
        buttonsTag.className = "patternlockbuttoncontainer";
        for (var i=1;i<10;i++){
            var buttonTag = document.createElement("div");
            buttonTag.className = "patternlockbutton";
            buttonTag.id = "patternlockbutton" + i;
            if (window.navigator.msPointerEnabled) {
                buttonTag.onpointerdown = buttonTag.onmspointerdown = function(e){
                    e.preventDefault();
                    buttonTouchStart(this)
                };
                buttonTag.onpointermove = buttonTag.onmspointermove = function(e){
                    e.preventDefault();
                    processTouchMove(parseInt(e.pageX),parseInt(e.pageY));
                };
                buttonTag.onpointerup = buttonTag.onmspointerup = function(){
                    buttonTouchEnd(this);
                };
            }
            else {
                buttonTag.onmousedown = function(e){
                    if (e && e.preventDefault){
                       e.preventDefault();
                    }
                    buttonTouchStart(this)
                };
                buttonTag.ontouchstart = function(e){
                    if (!e) e = window.event;
                    e.preventDefault();
                    buttonTouchStart(this)
                };
                buttonTag.onmouseover = function(){buttonTouchOver(this)};
                buttonTag.ontouchmove = buttonTouchMove;
                buttonTag.onmouseup = function(){buttonTouchEnd(this)};
                buttonTag.ontouchend = function(){buttonTouchEnd()};
            }
            buttons.push(buttonTag);
            buttonsTag.appendChild(buttonTag);
        }
        patternTag.appendChild(buttonsTag);
        var imgTag = document.createElement("div");
        imgTag.style.display = 'none';
        imgTag.className = "patternlockbutton touched";
        patternTag.appendChild(imgTag);
        imgTag = document.createElement("div");
        imgTag.style.display = 'none';
        imgTag.className = "patternlockbutton touched multiple";
        patternTag.appendChild(imgTag);
        pel.appendChild(patternTag);
        if (showResetButton){
            var reset = document.createElement("div");
            reset.className = "patternreset";
            reset.style.display = "none";
            reset.innerHTML = "(reset)";
            reset.onclick = function(){
                clear();
            };
            resets.push(reset);
            pel.appendChild(reset);
        }
    };
    var buttonTouchStart = function(b){
        isdrawing = true;
        if (inputbox.value != "") clear();
        b.className = "patternlockbutton touched";
        from = "";
        to = b.id.split("patternlockbutton").join("");
        inputbox.value = to;
        startbutton = to;
        return false;
    };
    var buttonTouchOver = function(b){
        if (isdrawing){
            var thisbutton = b.id.split("patternlockbutton").join("");
            if(thisbutton != to){
                var cn = b.className;
                if(cn.indexOf('touched')<0){
                    b.className = "patternlockbutton touched"
                }else{
                    b.className = "patternlockbutton touched multiple"
                }
                from = to;
                to = thisbutton;
                inputbox.value += to;
                var thisline = document.getElementById("line" + from + to);
                if (to <  from){
                    thisline = document.getElementById("line" + to + from);
                }
                if (thisline){
                    thisline.style.visibility = 'visible';
                }
            }
        }
        return(false)
    };
    var buttonTouchMove = function(e){
        if(e.touches.length == 1){
            var touch = e.touches[0];
            processTouchMove(parseInt(touch.pageX),parseInt(touch.pageY));
        }
    };
    var processTouchMove = function(x,y){
        if (!gridsize){
            buttons[0].pos = findPos(buttons[0]);
            buttons[1].pos = findPos(buttons[1]);
            gridsize = parseInt(buttons[1].pos.left) - parseInt(buttons[0].pos.left);
        }
        var cox = x - parseInt(buttons[0].pos.left);
        var coy = y - parseInt(buttons[0].pos.top);
        var buttonnr = Math.min(2,Math.max(0,Math.floor(cox/gridsize))) + (Math.min(2,Math.max(0,Math.floor(coy/gridsize)))*3) + 1;
        if (buttonnr != to){
            var distancex = (cox % gridsize);
            var distancey = (coy % gridsize);
            if ((distancex< (gridsize/2)) && (distancey < (gridsize/2))){
                var newButton = buttons[buttonnr-1];
                buttonTouchOver(newButton);
            }
        }
    };
    var buttonTouchEnd = function(){
        if (isdrawing){
            isdrawing = false;
            gridsize = false;
            if (autoSubmit){
                var doSubmit = true;
                if (document.forms[0].onsubmit){ doSubmit = document.forms[0].onsubmit() }
                if(doSubmit){
                    document.forms[0].submit();
                }
            }
        }
        return(false)
    };
    var clear = function(){
        var i,len;
        for (i= 0, len=buttons.length; i<len; i++){
            buttons[i].className = "patternlockbutton";
        }
        for (i= 0, len=lines.length; i<len; i++){
            lines[i].style.visibility = 'hidden';
        }
        inputbox.value = "";
    };
    function findPos(obj) {
        var curleft = curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return {left: curleft,top: curtop};
    }
    var attach = function(target, functionref, tasktype){
        tasktype=(window.addEventListener)? tasktype : "on"+tasktype;
        if (target.addEventListener)
            target.addEventListener(tasktype, functionref, false)
        else if (target.attachEvent)
            target.attachEvent(tasktype, functionref)
    };
    attach(window, function(){init()}, "load") ;
    attach(document, function(){buttonTouchEnd()}, "mouseup") ;
    return{
        init: init,
        generate: generate,
        clear: clear
    }
}());