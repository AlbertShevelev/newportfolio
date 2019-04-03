var entrence=document.querySelector(".entrence");
var mainpage=document.querySelector(".mainpage");
var rangeload=document.querySelector(".rangeload");
var inrange=document.querySelector(".inrange");
var btnanim=document.querySelector(".btnanim");
var deco=document.querySelectorAll(".deco");
var decos=document.querySelectorAll(".decos");
var main=document.querySelector(".main");
var logo=document.querySelector(".logo");
var container=document.querySelector(".container");
var about=document.querySelector(".about");
var achievments=document.querySelector(".achievments");
var myprojects=document.querySelector(".myprojects");
var off=document.querySelector(".off");
var dates=document.querySelector(".dates");
var inconhead=document.querySelector(".inconhead");
var inconhead2=document.querySelector(".inconhead2");
var inconhead3=document.querySelector(".inconhead3");
var incon2=document.querySelector(".incon2");
var incon=document.querySelector(".incon");
var incon3=document.querySelector(".incon3");
var ruscrd=document.querySelector(".ruscrd");
var date= new Date();
var a=0;
var b=0;
var mar=["purple","#009900","#009900","#009900"];
var logotext=[">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">W3LC0M3_T0_MY_P0RTF0L10",">N10Z01D_1S_H3R3!/"];
var bgs=["url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg.png)","url(img/bg1.png)"];
entrence.style.height=innerHeight+"px";

rangeload.style.marginTop=innerHeight/2+"px";

inrange.style.width=0+"px";

btnanim.style.marginLeft=(innerWidth/2)-37.5+"px";
if(innerWidth>620){
	main.style.height=innerHeight-150+"px";
}

var divcr=function(){
	var div=document.createElement("div");
	entrence.appendChild(div);
	a=Math.round(Math.random()*300);
	b=Math.round(Math.random()*300);
	div.style.position="absolute";
	//div.style.background="#009900";
	//div.style.height=a+"px";
	//div.style.width=b+"px";
	div.style.top=Math.round(Math.random()*innerHeight)-a+"px";
	div.style.left=Math.round(Math.random()*innerWidth)-b+"px";
	div.style.fontFamily="arrow";
	div.style.color="purple";
	var mar=["NH4X4RD.L04D1NG",">DK3GNN.dat","3R4NIM<.prjct"];
	var mara=Math.round(Math.random()*2);
	div.innerHTML=mar[mara];
}

btnanim.onclick=function(){
	inrange.style.width=1+"%";
	btnanim.innerHTML="loading...";
	document.body.style.overflow="hidden";
	divcr();
	ruscrd.style.fontFamily="arrow";
	ruscrd.style.color="purple";
	ruscrd.innerHTML="W3LC0M3!"
	var anim1=function(){
		inrange.style.width=15+"%";
		var anim2=function(){
			inrange.style.width=38+"%";
			var anim3=function(){
				inrange.style.width=38+"%";
				var anim4=function(){
					inrange.style.width=68+"%";
					var anim5=function(){
						inrange.style.width=89+"%";
						var anim6=function(){
							inrange.style.width=89+"%";
							var anim7=function(){
								inrange.style.width=94+"%";
								var anim8=function(){
									inrange.style.width=99+"%";
									var anim9=function(){
										inrange.style.width=100+"%";
										var anim0=function(){
											inrange.style.width=100+"%";
											entrence.style.display="none";
											mainpage.style.display="block";
											document.body.style.overflow="auto";
										}
										setTimeout(anim0,10);
									}
									setTimeout(anim9,2000);
								}
								setTimeout(anim8,10);
							}
							setTimeout(anim7,600);
						}
						setTimeout(anim6,100);
					}
					setTimeout(anim5,600);
				}
				setTimeout(anim4,600);
			}
			setTimeout(anim3,200);
		}
		setTimeout(anim2,2000);
	}
	setTimeout(anim1,1000);
	var simul=function(){
		divcr();
		divcr();
	}
	setInterval(simul,100);
}

container.onmousemove=function(){
	for(var i=0;i<deco.length;i++){
		deco[i].style.left=event.clientX+(Math.round(Math.random()*(10*(-10)))-10)+50+"px";
		deco[i].style.top=event.clientY+(Math.round(Math.random()*(10*(-10)))-10)+50+"px";
		deco[i].style.background=mar[Math.round(Math.random())];
		deco[i].style.width=Math.round(Math.random()*10)+"px";
		deco[i].style.height=Math.round(Math.random()*10)+"px";
	}
	
}

var timing=function(){
	logo.style.color=mar[Math.round(Math.random()*3)];
	logo.innerHTML=logotext[Math.round(Math.random()*25)];
	main.style.backgroundImage=bgs[Math.round(Math.random()*10)];
	for (var i = 0; i < decos.length; i++) {
		decos[i].style.left=Math.round(Math.random()*innerWidth)-50+"px";
		decos[i].style.top=Math.round(Math.random()*innerHeight)-50+"px";
		decos[i].style.background=mar[Math.round(Math.random())];
		decos[i].style.width=Math.round(Math.random()*20)+"px";
		decos[i].style.height=Math.round(Math.random()*20)+"px";
		
	}
}
setInterval(timing,250);

off.onclick=function(){
	for (var i = 0; i < decos.length; i++) {
		decos[i].style.display="none";
	}
	for (var i = 0; i < deco.length; i++) {
		deco[i].style.display="none";
	}

}

dates.innerHTML="Я родился 11-го Июня 2002-го года в Республике Саха(Якутия) в городе Якутск. И мне сейчас около "+(date.getFullYear()-2002)+" лет.";

inconhead.onclick=function(){
	if (innerWidth>620) {
		if(about.style.width=="100%"){
			about.style.height="50%";
			about.style.width="50%";
			myprojects.style.height="50%";
			myprojects.style.width="100%";
			achievments.style.height="50%";
			achievments.style.width="50%";
			incon.style.overflowY="hidden";
		} else{
			about.style.height="100%";
			about.style.width="100%";
			myprojects.style.height="0%";
			myprojects.style.width="0%";
			achievments.style.height="0%";
			achievments.style.width="0%";
			incon.style.overflowY="scroll";
		}
	} else{
		if(about.style.height=="100%"){
			about.style.height="0%";
		} else{
			about.style.height="100%";
		}
	}
}
inconhead2.onclick=function(){
	if(innerWidth>620){
		if(achievments.style.width=="100%"){
			about.style.height="50%";
			about.style.width="50%";
			myprojects.style.height="50%";
			myprojects.style.width="100%";
			achievments.style.height="50%";
			achievments.style.width="50%";
			incon2.style.overflowY="hidden";
		} else{
			about.style.height="0%";
			about.style.width="0%";
			myprojects.style.height="0%";
			myprojects.style.width="0%";
			achievments.style.height="100%";
			achievments.style.width="100%";
			incon2.style.overflowY="scroll";
		}
	} else{
		if(achievments.style.height=="100%"){
			achievments.style.height="0%";
			achievments.style.width="100%";
		} else{
			achievments.style.height="100%";
			achievments.style.width="100%";
		}

	}
}
inconhead3.onclick=function(){
	if(innerWidth>620){
		if(myprojects.style.height =="100%"){
			about.style.height="50%";
			about.style.width="50%";
			myprojects.style.height="50%";
			myprojects.style.width="100%";
			achievments.style.height="50%";
			achievments.style.width="50%";
			incon3.style.overflowY="hidden";
		} else{
			about.style.height="0%";
			about.style.width="0%";
			myprojects.style.height="100%";
			myprojects.style.width="100%";
			achievments.style.height="0%";
			achievments.style.width="0%";
			incon3.style.overflowY="scroll";
		}
	} else{
		if(myprojects.style.height =="100%"){
			myprojects.style.height="0%";
			myprojects.style.width="100%";
		} else{
			myprojects.style.height="100%";
			myprojects.style.width="100%";
		}
	}
	
}

var srcs=["img/1.png","img/2.png","img/3.png","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpeg","img/9.jpeg"];
var textachmass=["Конкурс под названием ВЫБОР.ПРОФ.Якутск имеет 20 направлений. Я выбрал IT. Честно, проект не был хорош и был сырым. Зато я увидел другие проекты. Первое место заняла девочка, которая сняла видеоклип.","«МОЗГОТОН» — это конкурс среди учащихся 7-10 классов городской IT- школы Алексея Илларионова, который проводится в целях визуализации идей по улучшению городского пространства.«МОЗГОТОН» — это конкурс среди учащихся 7-10 классов городской IT- школы Алексея Илларионова, который проводится в целях визуализации идей по улучшению городского пространства.","Ежегодный Республиканский конкурс среди учащихся с 8 по 11 классы средних общеобразовательных школ, образовательных организаций дополнительного образования детей, студентов и выпускников ВУЗ-ов, средних профессиональных образовательных учреждений и  иных физических лиц в возрасте до 30 лет, проживающие в Республике Саха (Якутия)","Урок «Час Кода» построен по принципу мини-миссии, в которой ребенок становится инженером-спасателем. Ему предстоит разобраться с некоторыми проблемами в работе подводной станции и восстановить части информационной системы, с помощью которых происходит ее управление.","Ежегодный Республиканский конкурс среди учащихся с 8 по 11 классы средних общеобразовательных школ, образовательных организаций дополнительного образования детей, студентов и выпускников ВУЗ-ов, средних профессиональных образовательных учреждений и  иных физических лиц в возрасте до 30 лет, проживающие в Республике Саха (Якутия)","Кембриджская Олимпиада по Ангийскому Языку проводится каждый год. Мне буквально 3 баллов не хватило, чтобы пройти на второй тур.","Всероссийский конкурс научно-технологических проектов включает в себя 2 трека:региональный (очный, проходит в регионах-участниках) и дистанционный (заочный, для регионов, где нет регионального трека) Победители в обоих треках участвуют в финальном Заключительном (очно-заочном) отборочном этапе на июльскую образовательную программу «Большие вызовы». По итогам данного этапа формируется состав финалистов конкурса – участников июльской Научно-технологической образовательной программы «Большие вызовы»","Научно-проектная Конференция, которая проводилась внутри СУНЦа. Самым лучшим проектам дают проход в Шаг в Будущее.","НТТУ 2019 - научная выставка. По кабинкам ходят эксперты и оценивают проект. Мы заняли первое место по направлению Инновационный Проект."];
var zagolmass=["Выбор Проф Якутск","Мозготон","Моя Профессия - IT 2017","Час кода","Моя Профессия - IT 2018","Кембриджская по Ангийскому Языку","Большие Вызовы","Чтения СУНЦ","НТТУ 2019, Якутск"];

for(var i=0;i<9;i++){
	var tons=document.createElement("div");
	incon2.appendChild(tons);
	tons.className="mozgoton";
	var headach1=document.createElement("div");
	tons.appendChild(headach1);
	headach1.className="headach1";
	var zagol=document.createElement("h2");
	headach1.appendChild(zagol);
	zagol.style.textAlign="center";
	zagol.style.color="purple";
	zagol.innerHTML=zagolmass[i];
	var conach1=document.createElement("div");
	tons.appendChild(conach1);
	conach1.className="conach1";
	var textach1=document.createElement("div");	
	conach1.appendChild(textach1);
	textach1.className="textach1";
	var pishka=document.createElement("p");
	textach1.appendChild(pishka);
	pishka.innerHTML=textachmass[i];
	textach1.innerHTML=textachmass[i];
	var imgach1=document.createElement("div");
	conach1.appendChild(imgach1);
	imgach1.className="imgach1";
	var achimg=document.createElement("img");
	imgach1.appendChild(achimg);
	achimg.src=srcs[i];
	achimg.className="achimg";
}

