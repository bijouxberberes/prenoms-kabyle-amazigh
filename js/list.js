$(function(){
	var list = [
		{
			name:"Ania",
			desc:"Reine berbère",
			sex:"Female"
		},
		{
			name:"Chavha",
			desc:"La belle",
			sex:"Female"
		},
		{
			name:"Dihya",
			desc:"Prénom Amazigh de la reine Kahina",
			sex:"Female"
		},
		{
			name:"Djedjiga",
			desc:"Fleur",
			sex:"Female"
		},
		{
			name:"Djouhar",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Elkaissa/Kaïssa",
			desc:"La pausée",
			sex:"Female"
		},
		{
			name:"Feriel",
			desc:"La fille du roi Gaïa",
			sex:"Female"
		},
		{
			name:"Ferroudja",
			desc:"L'hirondelle en kabyle",
			sex:"Female"
		},
		{
			name:"Kahina",
			desc:"La dernière reine berbère",
			sex:"Female"
		},
		{
			name:"Lahna",
			desc:"La tranquillité en berbère",
			sex:"Female"
		},
		{
			name:"Louiza",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Lundja",
			desc:"La fille de l’ogresse",
			sex:"Female"
		},
		{
			name:"Massiliya",
			desc:"Province de l'ancienne Numidie",
			sex:"Female"
		},
		{
			name:"Massiva",
			desc:"Sœur de Massinissa",
			sex:"Female"
		},
		{
			name:"Ouardia",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Sekura",
			desc:"« la perdrix » en kabyle.",
			sex:"Female"
		},
		{
			name:"Taos",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Thanina",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Thasadhith",
			desc:"La chanceuse, l'heureuse",
			sex:"Female"
		},
		{
			name:"Thilleli",
			desc:"Liberté",
			sex:"Female"
		},
		{
			name:"Thinhinane",
			desc:"Reine touarègue qui serait originaire de Tafilalet,Son nom veut dire en tamachek, « elle qui se déplace » ou « ou celle qui vient de loin »",
			sex:"Female"
		},
		{
			name:"Thiziri",
			desc:"Clair de lune",
			sex:"Female"
		},
		{
			name:"Wezna",
			desc:"(Pas de description)",
			sex:"Female"
		},
		{
			name:"Aghiles",
			desc:"Lion",
			sex:"Male"
		},
		{
			name:"Amazigh",
			desc:"L'homme libre (le Berbère)",
			sex:"Male"
		},
		{
			name:"Ameqran/Mokrane",
			desc:"L'aîné, le grand, le sage, le respecté",
			sex:"Male"
		},
		{
			name:"Amezian/Meziane",
			desc:"Le petit, le cadet, le benjamin",
			sex:"Male"
		},
		{
			name:"Akli",
			desc:"Esclave",
			sex:"Male"
		},
		{
			name:"Arezki",
			desc:"(Pas de description)",
			sex:"Male"
		},
		{
			name:"Azwaw",
			desc:"(Pas de description)",
			sex:"Male"
		},
		{
			name:"Gaya/Gaïa",
			desc:"Roi Amazigh",
			sex:"Male"
		},
		{
			name:"Idir",
			desc:"« Vivant » en Tamazight.",
			sex:"Male"
		},
		{
			name:"Koceila",
			desc:"Nom d'un chef de tribu berbère",
			sex:"Male"
		},
		{
			name:"Massinissa",
			desc:"Premier roi de Numidie",
			sex:"Male"
		},
		{
			name:"Mohand",
			desc:"Un prénom berbère, dérivé du prénom arabe Mohammed porté par le prophète Mahomet.",
			sex:"Male"
		},
		{
			name:"Missipsa",
			desc:"",
			sex:"Male"
		},
		{
			name:"Takfarinas",
			desc:"Ancien soldat de l’armée romaine, qui a pris la tête d’une vaste insurrection contre les romaines",
			sex:"Male"
		},
		{
			name:"Syphax/Syfax",
			desc:"Roi de la Numidie occidentale",
			sex:"Male"
		},
		{
			name:"Youba/Juba",
			desc:"Roi Amazigh",
			sex:"Male"
		},
		{
			name:"Yugurten/Jugurtha",
			desc:"Roi de Numidie",
			sex:"Male"
		}

	];

	list=list.reverse();

	$.each(list,function(i,e){
		$("#introduction").after('<section id="name_'+(i+1)+'"  class="item_'+(i%6+1)+' item inactive">'+
        	'<div class="item_header">'+
        		'<h2><img src="img/'+e.sex+'-icon.png" width="40" />'+e.name+'</h2>'+
        		'<span class="check"></span>'+
        	'</div>'+
        	'<div class="content">'+
        		'<p class="instructions">'+e.desc+'</p>'+
			'</div>'+
        '</section>');
	})
	
	
})
