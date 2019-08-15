var x=0;
var y=0;

function dibuja(){
	var can = document.getElementById("canvas1");
	var ctxl = can.getContext("2d");
	
	ctxl.fillStyle="rgb(19, 19, 19)";
	ctxl.fillRect(x-25, y, 50, 50);
	
	
	ctxl.fillStyle="rgb(30, 207, 34)";
	ctxl.fillRect(x, y, 50, 50);
	x+=25;
	
	if(x>1000)
	{
		ctxl.fillStyle="rgb(19, 19, 19)";
		ctxl.fillRect(x-25, y, 50, 50);
		x=0;
		y+=50;
		if(y>700)
		{
			
		}
	}
	
	
		ctxl.fillStyle="rgb(19, 19, 19)";
	ctxl.fillRect(x, y-25, 50, 50);
	
	
	ctxl.fillStyle="rgb(30, 207, 34)";
	ctxl.fillRect(x, y, 50, 50);
	y+=25;
	
	if(y>700)
	{
		ctxl.fillStyle="rgb(19, 19, 19)";
		ctxl.fillRect(x, y-25, 50, 50);
		y=0;
		x+=50;
		if(x>1000)
		{
			
		}
	}
		

	
	setTimeout(dibuja, 30);
}

addEventListener("load", dibuja, false);



var can2;
var ctx2;
function inicio(){
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext("2d");
	imagen();
}

function imagen()
{	
   var foto=new Image();
   foto.src="ejemplo/Images/joker.jpg";
   foto.addEventListener("load", function()
   {
		ctx2.drawImage(foto,0,0);
        ctx2.translate(800, 0);
		ctx2.scale(-1, 1);
		ctx2.drawImage(foto, 0, 0);
	}, false);
}

addEventListener("load", inicio, false);


var can3;
var ctx3;
function inicio1(){
	can3 = document.getElementById("canvas3");
	ctx3 = can3.getContext("2d");
	imagen1();
}

function imagen1()
{	
   var foto1=new Image();
   foto1.src="ejemplo/Images/joker.jpg";
   foto1.addEventListener("load", function()
   {
		ctx3.drawImage(foto1,0,0);
		ctx3.drawImage(foto1,240,180,100,100,400,0,400,400);
	}, false);
}

addEventListener("load", inicio1, false);





/*
var can3;
var ctx3;
function inicio1(){
	can3 = document.getElementById("canvas3");
	ctx3 = can3.getContext("2d");
	imagen1();
}

function imagen1()
{	
   var foto1=new Image();
   foto1.src="ejemplo/Images/joker.jpg";
   foto1.addEventListener("load", function()
   {
		//ctx3.drawImage(foto1,0,0);
		ctx3.drawImage(foto1,400,0);
		var imagenData=ctx3.getImageData(400,0);
		for(var i=0;i<imagenData.data.length;i+=4)
		{
			imagenData.data[i]=imagenData.data[i];
			imagenData.data[i+1]=0;
			imagenData.data[i+2]=0;
			imagenData.data[i+3]=255;
		}
		ctx3.putImageData(imagenData,400,0);    
	}, false);
}

addEventListener("load", inicio1, false);
*/