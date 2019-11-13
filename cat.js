function initializeCat(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  GAME = {
    canvas : {
      width : 600,
      height : 300
    },
    started : true,
    level : 1
  }
  CAT = {
    tunaCount: 0,
    Player1:{
    x : 50,
    y: 50,
    spawnX: 50,
    spawnY: 0,
    v: 0,
    a: .25,
    size: 25,
    lifeCount: 9,
    name: "Tuesday McDoom"
  },
  Player2:{
  x : 50,
  y: 50,
  spawnX: 50,
  spawnY: 0,
  v: 0,
  a: .25,
  size: 25,
  lifeCount: 1,
  name: "Monday McDoom"
  }
  };
}
function becomeCorpse(){
  CAT.Player2.v=0;
  addPlatform(CAT.Player2.x,CAT.Player2.y,CAT.Player2.size,CAT.Player2.size);
  CONTROLS.cat.instaDeath=false;
  CAT.Player2.lifeCount==-1;
}
function isOnAPlatform() {
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.Player1.x +CAT.Player1.size > plat.xpt && CAT.Player1.x < plat.xpt + plat.xl && CAT.Player1.y + CAT.Player1.size >= plat.ypt && CAT.Player1.y + CAT.Player1.size <= plat.ypt + 10) {
      b = plat.ypt;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAPlatform() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.Player1.x +CAT.Player1.size > plat.xpt && CAT.Player1.x < plat.xpt + plat.xl && CAT.Player1.y >= plat.ypt +plat.yl -10 && CAT.Player1.y <= plat.ypt +plat.yl) {
      b = plat.ypt + plat.yl;
    }
  }
  return b;
}

function isRightOfAPlatform() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.Player1.x > plat.xpt +plat.xl -10 && CAT.Player1.x <= plat.xpt + plat.xl && CAT.Player1.y + CAT.Player1.size > plat.ypt && CAT.Player1.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAPlatform() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.Player1.x +CAT.Player1.size >= plat.xpt && CAT.Player1.x +CAT.Player1.size <= plat.xpt +10  && CAT.Player1.y +CAT.Player1.size> plat.ypt && CAT.Player1.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function isOnAPlatform2() {
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.Player2.x +CAT.Player2.size > plat.xpt && CAT.Player2.x < plat.xpt + plat.xl && CAT.Player2.y + CAT.Player2.size >= plat.ypt && CAT.Player2.y + CAT.Player2.size <= plat.ypt + 10) {
      b = plat.ypt;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAPlatform2() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.Player2.x +CAT.Player2.size > plat.xpt && CAT.Player2.x < plat.xpt + plat.xl && CAT.Player2.y >= plat.ypt +plat.yl -10 && CAT.Player2.y <= plat.ypt +plat.yl) {
      b = plat.ypt + plat.yl;
    }
  }
  return b;
}

function isRightOfAPlatform2() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.Player2.x > plat.xpt +plat.xl -10 && CAT.Player2.x <= plat.xpt + plat.xl && CAT.Player2.y + CAT.Player2.size > plat.ypt && CAT.Player2.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAPlatform2() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.Player2.x +CAT.Player2.size >= plat.xpt && CAT.Player2.x +CAT.Player2.size <= plat.xpt +10  && CAT.Player2.y +CAT.Player2.size> plat.ypt && CAT.Player2.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}
function isOnAHazard2() {
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player2.x +CAT.Player2.size > haz.xpt && CAT.Player2.x < haz.xpt + haz.xl && CAT.Player2.y + CAT.Player2.size >= haz.ypt && CAT.Player2.y + CAT.Player2.size <= haz.ypt + 10) {
      b = true;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAHazard2() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player2.x +CAT.Player2.size > haz.xpt && CAT.Player2.x < haz.xpt + haz.xl && CAT.Player2.y >= haz.ypt +haz.yl -10 && CAT.Player2.y <= haz.ypt +haz.yl) {
      b = true;
    }
  }
  return b;
}

function isRightOfAHazard2() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player2.x > haz.xpt +haz.xl -10 && CAT.Player2.x <= haz.xpt + haz.xl && CAT.Player2.y + CAT.Player2.size > haz.ypt && CAT.Player2.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAHazard2() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player2.x +CAT.Player2.size >= haz.xpt && CAT.Player2.x +CAT.Player2.size <= haz.xpt +10  && CAT.Player2.y +CAT.Player2.size> haz.ypt && CAT.Player2.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}
//this function adds a platform with its top left corner at (x,y), a width of w, and a length of l
function addPlatform(x, y, w, l){
  PLATFORMS.push({xpt: x, ypt: y, xl: w, yl: l});
}

//this function CLEARS the level of all platforms, but keeps the floor. If there was some sort of levelCount, I'd put it in here.
function newLevel(){
  PLATFORMS= [{xpt: 0,   ypt:300,  xl: 600, yl: 200}];
}
function killCat(){
if(CAT.Player1.lifeCount>1){
  addPlatform(CAT.Player1.x,CAT.Player1.y,CAT.Player1.size,CAT.Player1.size);
  CONTROLS.cat.instaDeath=false;
  CAT.Player1.lifeCount-=1;
}
CAT.Player1.x=50;
CAT.Player1.y=50
CAT.Player1.v=0;
}
function killCat2(){
  CAT.Player2.x=CAT.Player1.x;
  CAT.Player2.y=CAT.Player1.y;
  CAT.Player2.v=0;
}
function isOnAHazard() {
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player1.x +CAT.Player1.size > haz.xpt && CAT.Player1.x < haz.xpt + haz.xl && CAT.Player1.y + CAT.Player1.size >= haz.ypt && CAT.Player1.y + CAT.Player1.size <= haz.ypt + 10) {
      b = true;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAHazard() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player1.x +CAT.Player1.size > haz.xpt && CAT.Player1.x < haz.xpt + haz.xl && CAT.Player1.y >= haz.ypt +haz.yl -10 && CAT.Player1.y <= haz.ypt +haz.yl) {
      b = true;
    }
  }
  return b;
}

function isRightOfAHazard() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player1.x > haz.xpt +haz.xl -10 && CAT.Player1.x <= haz.xpt + haz.xl && CAT.Player1.y + CAT.Player1.size > haz.ypt && CAT.Player1.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAHazard() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.Player1.x +CAT.Player1.size >= haz.xpt && CAT.Player1.x +CAT.Player1.size <= haz.xpt +10  && CAT.Player1.y +CAT.Player1.size> haz.ypt && CAT.Player1.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}


//this function adds a platform with its top left corner at (x,y), a width of w, and a length of l
function addHazard(x, y, w, l){
  HAZARDS.push({xpt: x, ypt: y, xl: w, yl: l});
}
function isOnATuna() {
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player1.x +CAT.Player1.size > tuna.xpt && CAT.Player1.x < tuna.xpt + tuna.xl && CAT.Player1.y + CAT.Player1.size >= tuna.ypt && CAT.Player1.y + CAT.Player1.size <= tuna.ypt + 10) {
      b = true;
      tuna.collected=true;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderATuna() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player1.x +CAT.Player1.size > tuna.xpt && CAT.Player1.x < tuna.xpt + tuna.xl && CAT.Player1.y >= tuna.ypt +tuna.yl -10 && CAT.Player1.y <= tuna.ypt +tuna.yl) {
      b = true;
      tuna.collected=true;
    }
  }
  return b;
}

function isRightOfATuna() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player1.x > tuna.xpt +tuna.xl -10 && CAT.Player1.x <= tuna.xpt + tuna.xl && CAT.Player1.y + CAT.Player1.size > tuna.ypt && CAT.Player1.y  < tuna.ypt + tuna.yl) {
      b = true;
      tuna.collected=true;
    };
  }
  return b;
}

function isLeftOfATuna() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player1.x +CAT.Player1.size >= tuna.xpt && CAT.Player1.x +CAT.Player1.size <= tuna.xpt +10  && CAT.Player1.y +CAT.Player1.size> tuna.ypt && CAT.Player1.y  < tuna.ypt + tuna.yl) {
      b = true;
      tuna.collected=true;
    };
  }
  return b;
}

function isOnATuna2() {
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player2.x +CAT.Player2.size > tuna.xpt && CAT.Player2.x < tuna.xpt + tuna.xl && CAT.Player2.y + CAT.Player2.size >= tuna.ypt && CAT.Player2.y + CAT.Player2.size <= tuna.ypt + 10) {
      b = true;
      tuna.collected=true;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderATuna2() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player2.x +CAT.Player2.size > tuna.xpt && CAT.Player2.x < tuna.xpt + tuna.xl && CAT.Player2.y >= tuna.ypt +tuna.yl -10 && CAT.Player2.y <= tuna.ypt +tuna.yl) {
      b = true;
      tuna.collected=true;
    }
  }
  return b;
}

function isRightOfATuna2() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player2.x > tuna.xpt +tuna.xl -10 && CAT.Player2.x <= tuna.xpt + tuna.xl && CAT.Player2.y + CAT.Player2.size > tuna.ypt && CAT.Player2.y  < tuna.ypt + tuna.yl) {
      b = true;
      tuna.collected=true;
    };
  }
  return b;
}

function isLeftOfATuna2() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const tuna of TUNA) {
    if (!tuna.collected&&CAT.Player2.x +CAT.Player2.size >= tuna.xpt && CAT.Player2.x +CAT.Player2.size <= tuna.xpt +10  && CAT.Player2.y +CAT.Player2.size> tuna.ypt && CAT.Player2.y  < tuna.ypt + tuna.yl) {
      b = true;
      tuna.collected=true;
    };
  }
  return b;
}
