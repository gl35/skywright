(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>[e>>16&255,e>>8&255,e&255];function t(t){let n=[e(t.land[0])].concat(t.land.map(e));return n[0]=n[1].map(e=>e*.8),{...t,pal:{land:n,side:n.map(e=>e.map(e=>e*.62)),water:t.water.map(e)}}}var n={temperate:t({name:`Temperate isles`,sea:.55,hs:40,cloud:.55,storm:.04,trees:!0,land:[14865050,8176474,6270540,4165955,3111484,9080709,7764594,10132886,15265522,16186108,16777215],water:[2056110,2782402,4825304,12576501]}),tropical:t({name:`Tropics`,sea:.57,hs:36,cloud:.6,storm:.14,trees:!0,land:[15983526,7327834,5225290,3119685,2064188,8227434,6977114,9213048,11122074,12766390,14673622],water:[1470648,2069455,5230808,13956850]}),desert:t({name:`Desert coast`,sea:.5,hs:34,cloud:.25,storm:.05,trees:!1,land:[15522208,14926462,14264673,13208910,12088127,10837816,9391923,8012590,12159590,14202260,15719620],water:[2318240,3112888,6272463,13495024]}),alpine:t({name:`High ranges`,sea:.45,hs:75,cloud:.5,storm:.2,trees:!0,land:[12169356,7186528,4161352,3107392,7830656,6712176,9080724,14673902,15660023,16317437,16777215],water:[1920908,2779046,5214144,12901614]}),arctic:t({name:`Polar ice`,sea:.5,hs:50,cloud:.6,storm:.3,trees:!1,land:[13229030,14477808,15332087,16054779,16777215,13623273,12045787,14411758,15660536,16449022,16777215],water:[1392750,2053768,3899310,14085366]}),volcanic:t({name:`Fire islands`,sea:.58,hs:70,cloud:.65,storm:.42,trees:!1,land:[4867140,5925450,4873280,4012602,4866112,5915716,6965824,8014394,10504746,13656106,15769648],water:[1723002,2384538,4163768,12179174]}),loess:t({name:`Loess hills and river fields`,sea:.5,hs:38,cloud:.4,storm:.06,trees:!0,land:[14272138,10469218,8826197,12165468,13217126,12096851,10846794,9400130,8019772,10521194,12892060],water:[3829647,4884131,6989752,12573912]}),guanzhong:t({name:`Farmland under the southern mountains`,sea:.49,hs:42,cloud:.45,storm:.05,trees:!0,land:[14471064,9422684,11979098,7319630,5215813,4030272,7307368,9081222,11054756,14015190,15791089],water:[3108762,4163760,6465732,13034730]}),plain:t({name:`Yellow River plain`,sea:.52,hs:22,cloud:.4,storm:.04,trees:!0,land:[14206089,11061344,13159526,10009944,8038478,6198343,8227436,9937036,11910058,14080719,15658984],water:[9075274,10259286,11904104,14274464]}),jiangnan:t({name:`River country, mist and paddies`,sea:.56,hs:34,cloud:.75,storm:.12,trees:!0,land:[13617050,8373354,6271072,4889688,3835472,3109448,6258540,8362122,10728874,13227469,15133928],water:[2779772,3835026,5940906,12903132]}),moon:t({name:`Lunar highlands and maria`,sea:.5,hs:46,cloud:0,storm:0,trees:!1,land:[9408662,10132385,10921901,11645624,12369346,10329764,9145490,11119280,12895690,13948377,15132650],water:[5592926,6185064,6908787,8027268]}),mars:t({name:`Canyons and dust`,sea:.46,hs:62,cloud:.3,storm:.34,trees:!1,land:[13201471,12149306,13072965,11031603,9848878,11888700,9060138,8009254,10769722,13208162,15123360],water:[6958882,8009768,9192238,10836540]}),alien:t({name:`A sea no chart has`,sea:.56,hs:44,cloud:.5,storm:.2,trees:!0,land:[15259632,5232320,3981230,3122586,2591624,5926832,6971328,8213960,11565792,14264560,16179455],water:[2760540,3811962,5914792,13482239]})};for(let e of Object.keys(n))n[e].id=e;var r={earth:{id:`earth`,name:`Earth`,seed:1337,water:!0,gravity:1,dark:0,pad:`runway`,clouds:[`white`,`storm`],sky:[150,200,240],stops:[{name:`Wrenfield`,tag:`Home field`,biome:`temperate`,x:0,y:0,marks:[`hangar`,`tower`]},{name:`Port Calloway`,tag:`Harbour town`,biome:`temperate`,x:1300,y:-180,marks:[`hangar`,`tower`]},{name:`Mango Key`,tag:`Tropical outpost`,biome:`tropical`,x:2900,y:220,marks:[`hangar`,`tower`]},{name:`Saffron Quay`,tag:`Desert trading port`,biome:`desert`,x:4800,y:-120,marks:[`hangar`,`tower`]},{name:`Highgate`,tag:`Mountain airstrip`,biome:`alpine`,x:6800,y:260,marks:[`hangar`,`pagoda`]},{name:`Frostholm`,tag:`Polar research station`,biome:`arctic`,x:9200,y:-260,marks:[`dome`,`tower`]},{name:`Cinder Reach`,tag:`Volcano observatory`,biome:`volcanic`,x:12200,y:150,marks:[`hangar`,`tower`]},{name:`Juniper Atoll`,tag:`Last stop before home`,biome:`tropical`,x:14800,y:-200,marks:[`hangar`,`tower`]},{name:`Wrenfield`,tag:`Home field, the long way round`,biome:`temperate`,x:17e3,y:0,marks:[`hangar`,`tower`]},{name:`Carrier Albatross`,tag:`Aircraft carrier`,biome:`arctic`,x:10400,y:-4600,marks:[`bridge`],slots:[[4,5]],carrier:!0}]},han:{id:`han`,name:`Eastern Han, 132 CE`,seed:2132,water:!0,gravity:1,dark:0,pad:`plaza`,clouds:[`white`,`storm`],sky:[170,200,225],stops:[{name:`Luo River meadow`,tag:`Where the door opened`,biome:`loess`,x:0,y:0,marks:[`door`]},{name:`Luoyang`,tag:`Capital of the Eastern Han`,biome:`loess`,x:1250,y:160,marks:[`gate`,`pagodaSmall`]}]},tang:{id:`tang`,name:`Tang, 725 CE`,seed:2725,water:!0,gravity:1,dark:0,pad:`plaza`,clouds:[`white`,`storm`],sky:[160,205,235],stops:[{name:`Zhongnan foothills`,tag:`Where the door opened`,biome:`guanzhong`,x:0,y:0,marks:[`door`]},{name:`Chang'an`,tag:`A city of a million people`,biome:`guanzhong`,x:1300,y:-140,marks:[`pagoda`,`gate`]}]},song:{id:`song`,name:`Northern Song, 1092 CE`,seed:3092,water:!0,gravity:1,dark:0,pad:`plaza`,clouds:[`white`,`storm`],sky:[175,205,225],stops:[{name:`Yellow River bank`,tag:`Where the door opened`,biome:`plain`,x:0,y:0,marks:[`door`]},{name:`Kaifeng`,tag:`The eastern capital`,biome:`plain`,x:1350,y:120,marks:[`clock`,`gate`]}]},ming:{id:`ming`,name:`Ming, 1405 CE`,seed:3405,water:!0,gravity:1,dark:0,pad:`plaza`,clouds:[`white`,`storm`],sky:[165,205,220],stops:[{name:`Purple Mountain`,tag:`Where the door opened`,biome:`jiangnan`,x:0,y:0,marks:[`door`]},{name:`Longjiang Shipyard`,tag:`On the Yangtze at Nanjing`,biome:`jiangnan`,x:1400,y:-160,marks:[`ship`,`gate`]}]},moon:{id:`moon`,name:`The Moon`,seed:4001,water:!1,gravity:.17,dark:1,pad:`pad`,clouds:null,sky:[4,6,22],stops:[{name:`Tranquil Ground`,tag:`Lunar landing ground`,biome:`moon`,x:0,y:0,marks:[`dome`,`mast`]}]},mars:{id:`mars`,name:`Mars`,seed:4002,water:!1,gravity:.38,dark:.25,pad:`pad`,clouds:[`dustLight`,`dust`],sky:[214,150,110],stops:[{name:`Ares Slip`,tag:`A dry dock in a canyon`,biome:`mars`,x:0,y:0,marks:[`dome`,`ship`]}]},deep:{id:`deep`,name:`The Far Shore`,seed:4003,water:!0,gravity:.8,dark:.55,pad:`plaza`,clouds:[`mist`,`violet`],sky:[90,60,150],stops:[{name:`The Far Shore`,tag:`Under a sky with two suns`,biome:`alien`,x:0,y:0,marks:[`spire`,`lantern`]}]}},i={engine:{name:`Engine`,fail:`ENGINE MISFIRE`,effect:`Half power`},frame:{name:`Airframe`,fail:`JAMMED CONTROLS`,effect:`Sluggish, pulls right`},fuel:{name:`Fuel system`,fail:`FUEL LEAK`,effect:`Burning fuel 4x faster`},avionics:{name:`Avionics`,fail:`INSTRUMENTS DARK`,effect:`Navigation is dark`}},a=Object.keys(i),o={sparrow:{name:`Sparrow`,kind:`Vintage biplane trainer`,tier:1,nose:`#c8402f`,speed:16,ceil:20,climb:5,tank:70,burn:.5,turn:.95,wear:1.25,floats:!1,start:{engine:58,frame:72,fuel:54,avionics:66,tank:.45},blurb:`Nan's old biplane. Slow and leaky, but she flies.`},heron:{name:`Heron`,kind:`Floatplane`,tier:1.3,nose:`#f2f4f5`,speed:19,ceil:26,climb:5.5,tank:115,burn:.58,turn:.9,wear:1,floats:!0,start:{engine:74,frame:60,fuel:82,avionics:55,tank:.5},blurb:`Lands on water, so you can stop and fix things at sea.`},marlin:{name:`Marlin`,kind:`Racing flying boat`,tier:1.5,nose:`#24407a`,speed:24,ceil:24,climb:6.5,tank:95,burn:.62,turn:1.15,wear:1.15,floats:!0,start:{engine:64,frame:70,fuel:60,avionics:58,tank:.5},blurb:`A racing flying boat. Fast, nimble, thirsty.`},dragonfly:{name:`Dragonfly`,kind:`Clockwork ornithopter`,tier:1.6,nose:`#c9a24a`,speed:21,ceil:26,climb:7,tank:100,burn:.42,turn:1.5,wear:1.1,floats:!1,start:{engine:66,frame:52,fuel:78,avionics:70,tank:.6},blurb:`Four beating wings. Turns on a coin.`},kestrel:{name:`Kestrel`,kind:`Twin turboprop`,tier:2,nose:`#d2d8dd`,speed:25,ceil:40,climb:8,tank:170,burn:.8,turn:.8,wear:.85,floats:!1,start:{engine:62,frame:80,fuel:70,avionics:48,tank:.5},blurb:`Climbs over mountains and most storms.`},comet:{name:`Comet`,kind:`Light jet`,tier:2.6,nose:`#f5f7fa`,speed:34,ceil:58,climb:12,tank:250,burn:1.25,turn:.7,wear:.7,floats:!1,start:{engine:78,frame:70,fuel:58,avionics:74,tank:.55},blurb:`Fast, high, long range.`},meteor:{name:`Meteor`,kind:`Rocket plane`,tier:3.2,nose:`#4f5564`,speed:44,ceil:95,climb:16,tank:300,burn:1.8,turn:.6,wear:.65,floats:!1,space:1,start:{engine:70,frame:64,fuel:72,avionics:60,tank:.6},blurb:`Reaches the edge of space. Twice as fast up there.`},ark:{name:`Tinker's Ark`,kind:`Patchwork airship with a door`,tier:1.8,nose:`#7a4f2e`,speed:15,ceil:30,climb:3.5,tank:260,burn:.34,turn:.6,wear:.7,floats:!0,hover:!0,start:{engine:60,frame:55,fuel:68,avionics:50,tank:.7},blurb:`Hovers, lands anywhere, and has a very odd door.`},starling:{name:`Starling`,kind:`Star raft`,tier:4,nose:`#f4f5f7`,speed:40,ceil:220,climb:22,tank:420,burn:3,turn:.55,wear:.6,floats:!1,space:5,orbit:!0,start:{engine:72,frame:78,fuel:66,avionics:62,tank:.8},blurb:`Reaches orbit and beyond. Come down gently.`}},s={sparrow:{ability:{id:`loop`,name:`LOOP`,dur:2.2,cd:8,desc:`Dodges storms, frees jammed controls.`},surf:{land:`flat`}},marlin:{ability:{id:`race`,name:`RACE`,dur:4,cd:12,desc:`+50% speed, double fuel.`},surf:{water:!0}},heron:{ability:{id:`lean`,name:`LEAN`,dur:14,cd:20,desc:`Burns a third of the fuel.`},surf:{water:!0}},dragonfly:{ability:{id:`hover`,name:`HOVER`,dur:6,cd:5,desc:`Stops in mid-air.`},surf:{land:`climb`}},kestrel:{ability:{id:`highclimb`,name:`CLIMB`,dur:7,cd:18,desc:`Climbs fast, past its ceiling.`},surf:{land:`flat`}},comet:{ability:{id:`burner`,name:`BURNER`,dur:5,cd:15,desc:`Much faster, triple fuel.`},surf:{land:`flat`}},meteor:{ability:{id:`zoom`,name:`ZOOM`,dur:3,cd:15,desc:`Straight up, very fast.`},surf:{land:`flat`}},ark:{ability:{id:`mend`,name:`MEND`,dur:9,cd:25,desc:`Stops and patches broken parts. No kit needed.`},surf:{water:!0,land:`flat`}},starling:{ability:{id:`shield`,name:`SHIELD`,dur:8,cd:20,desc:`No heat or storm damage.`},surf:{land:`flat`}}};for(let e of Object.keys(s))Object.assign(o[e],s[e]);var c=e=>{let t=e.surf.water,n=e.surf.land;return t&&n?`Sails and taxis.`:t?`Sails. No wheels.`:n===`climb`?`Walks over rough ground.`:`Taxis on flat ground.`},l={engine:{name:`Engine tuning`,desc:`+8% speed and climb`},tank:{name:`Fuel trimming`,desc:`+15% range`},frame:{name:`Bracing and doping`,desc:`Parts wear 15% slower`},avionics:{name:`Instruments`,desc:`Storm radar. 20% fewer breakdowns`}},u=[200,500,1e3],d=()=>({v:3,mission:0,money:140,fleet:{},up:{engine:0,tank:0,frame:0,avionics:0},kits:2,kitCap:3,shift:!1,seen:{}}),f={title:`The logbook`,nan:`"Fly the long way round first. Then try the key."`,body:[`Nan circled the world in 1938 and never said where she went. She left you a biplane, a logbook and a brass key.`,`Fix the Sparrow. Head east.`]},p=[{ch:`Chapter 1 · The Long Way Round`,title:`First light`,world:`earth`,from:0,to:1,craft:`sparrow`,pay:420,brief:`Fly the mail to Port Calloway. Pack a repair kit.`,arrive:[`"I know this plane," says the harbour master. "A woman flew it in before the war and left on that floatplane."`,`The Heron is yours. Next: open ocean.`]},{title:`Open water`,world:`earth`,from:1,to:2,craft:`heron`,pay:520,brief:`Open sea all the way. The Heron can land on water.`,arrive:[`On the radio shack wall: a photo of Nan with this same Heron.`,`"She kept asking about a ship in the sky with no engines." There is a racing flying boat here too. Take either.`]},{title:`Storm alley`,world:`earth`,from:2,to:3,craft:`heron`,pay:620,also:[`marlin`],brief:`Storms ahead. Go round them or stay low.`,arrive:[`A clockmaker studies Nan’s strange pages. "Not a language. A parts list."`,`He has built a machine that beats its wings. Only it can thread the mountain passes.`]},{title:`The passes`,world:`earth`,from:3,to:4,craft:`dragonfly`,pay:720,brief:`The peaks are too high to climb. Follow the valleys.`,arrive:[`In a cave behind the monastery: a wrecked airship with a brass-locked door.`,`"She went through," says the abbot. "She came out older." The monks will ship it home. Finish the lap.`]},{title:`Over the top`,world:`earth`,from:4,to:5,craft:`kestrel`,pay:860,brief:`A borrowed Kestrel. Climb over the mountains and the storms.`,arrive:[`Frostholm, 1938: a compass needle pointed straight up for six minutes.`,`Nan signed the visitors’ book that week. Occupation: "carpenter."`]},{title:`The General`,world:`earth`,from:5,to:9,craft:`kestrel`,pay:1400,radio:20,wind:[6,1.2],brief:`Fly the General to her carrier, far out at sea. Radio silence: one fix every 20 seconds. Fill the tank and mind the crosswind.`,arrive:[`The General steps onto the deck. "Your grandmother found my mother’s ship with no radio at all."`,`She lends you the jet lashed to the deck: the Comet.`]},{title:`The long crossing`,world:`earth`,from:9,to:6,craft:`comet`,pay:1e3,brief:`The longest leg, mostly ocean. Watch the fuel.`,arrive:[`Dredged from the crater lake: a bronze earthquake bowl, eighteen centuries old.`,`Stamped inside the rim: a wren.`]},{title:`Ash and rain`,world:`earth`,from:6,to:7,craft:`comet`,pay:1100,brief:`Rough air and storms. Two legs to go.`,arrive:[`A stranded test pilot hands you her rocket plane.`,`"Go high enough and you will see a road on the ocean that is on no chart."`]},{title:`The edge of the sky`,world:`earth`,from:7,to:8,craft:`meteor`,pay:1200,brief:`Home. Climb till the sky goes black, then come down gently.`,arrive:[`All the way round. A crate the size of a house is waiting: the Ark.`,`The key turns. The door opens on a river meadow in spring.`]},{ch:`Chapter 2 · The Door in the Ark`,title:`Han: the listening bronze`,world:`han`,from:0,to:1,craft:`ark`,pay:900,brief:`The year is 132. Follow the river to Luoyang.`,arrive:[`Zhang Heng, court astronomer, walks round the Ark. "You are the second."`,`He has eight earthquake bowls. Seven point at the sky. "Things fall along roads up there." He gives you the chart.`],real:`Real: Zhang Heng’s seismoscope, 132 CE. Invented: the other seven, and the sky roads.`},{title:`Tang: the monk who measured the world`,world:`tang`,from:0,to:1,craft:`ark`,pay:900,brief:`The year is 725. Fly north to Chang’an, the biggest city on Earth.`,arrive:[`A market of forty languages. The monk Yi Xing has just measured the Earth.`,`His water clock ticks with a tiny rocking gate. He fits a copy to the Ark’s engines.`],real:`Real: Yi Xing’s survey and water-driven globe, about 725. Invented: the gift.`},{title:`Song: the tower that kept the sky`,world:`song`,from:0,to:1,craft:`ark`,pay:900,brief:`The year is 1092. Follow the Yellow River to Kaifeng’s clock tower.`,arrive:[`Kaifeng: night markets, paper money, printed books.`,`Su Song’s clock tower hides a room that tracks the Moon, Mars and a third place. He copies you the tables. Nan’s script was always numbers.`],real:`Real: Su Song’s clock tower, about 1094. Invented: the hidden room.`},{title:`Ming: the star raft`,world:`ming`,from:0,to:1,craft:`ark`,pay:900,brief:`The year is 1405. Fly downriver to the treasure fleet’s shipyard.`,arrive:[`The sailors call the great ships star rafts.`,`Aunt Ruan, shipwright, shows you a hull never meant for water. "It needs an engine that does not exist." You can build it now. She hands you the drawing.`],real:`Real: the Longjiang shipyard and Zheng He’s "star rafts", 1405. Invented: Aunt Ruan’s drawing.`},{ch:`Chapter 3 · Star Raft`,title:`First orbit`,world:`earth`,from:0,to:8,craft:`starling`,pay:1500,brief:`Take the Starling round the world. Climb to the black sky, coast, come down slowly.`,arrive:[`One lap in one flight.`,`From orbit you see it: a straight track of light running to the Moon.`]},{title:`The Moon`,world:`earth`,from:0,craft:`starling`,pay:2e3,transit:{world:`moon`,to:0},brief:`Climb above 100 km and hold. She makes the burn herself. Low gravity: land gently.`,transitText:[`Three days. Earth shrinks to a blue coin, then the Moon fills the windscreen.`],arrive:[`A landing ring of fitted stone, and a dome.`,`Inside: a mallet marked O.W. and a bronze bowl. Its dragons point at a red star.`]},{title:`Mars`,world:`moon`,from:0,craft:`starling`,pay:2500,transit:{world:`mars`,to:0},brief:`Follow the dragons. Lift off, climb and hold. Beware dust storms.`,transitText:[`Eleven days on the road. Mars comes up the colour of rust.`],arrive:[`A dry dock in a canyon, and a half-built ship.`,`Chalked on a rib, in Nan’s hand: "Ran out of timber. Gone ahead. Bring tea."`]},{title:`The wide universe`,world:`mars`,from:0,craft:`starling`,pay:0,transit:{world:`deep`,to:0},brief:`The third table is not round this sun. Climb, hold, let the road take you.`,transitText:[`The stars bunch up and turn blue. Then: a violet sea and two small suns.`],arrive:[`Lanterns line the landing ground. Someone lights them every evening, in case.`,`An old woman in a deck chair opens one eye. "You took the long way round," says Nan. "Good. Sit down."`]}],m=`The logbook has blank pages again. Fly anywhere.`,h={0:{prop:`lighthouse`,type:`low`,t:.5,off:-130,pay:120,label:`Drop newspapers: fly low over the lighthouse`,after:`Right on the keeper’s doorstep.`},1:{prop:`boat`,type:`land`,water:!0,t:.45,off:150,pay:220,label:`Help the fishing boat: land beside it`,after:`A fuel filter and a flask of tea. He is under way.`},2:{prop:`buoy`,water:!0,type:`pass`,t:.5,off:-160,pay:150,label:`Fly over the weather buoy`,after:`Readings noted. The glass is falling.`},3:{prop:`tents`,type:`land`,t:.55,off:110,pay:240,label:`Medicine for the camp: land there`,after:`The doctor’s parcel is delivered.`},4:{type:`high`,alt:34,pay:200,label:`Survey photo: climb above 17,000 ft`,after:`The whole range under your wing. Click.`},6:{prop:`icebreaker`,water:!0,type:`pass`,t:.4,off:190,pay:180,label:`Fly over the icebreaker`,after:`A hundred tiny arms wave.`},7:{prop:`vent`,type:`low`,t:.5,off:-170,pay:220,label:`Drop the sensor: fly low over the crater`,after:`Into the steam it goes.`},8:{type:`high`,alt:80,pay:250,label:`Climb till the sky is black`,after:`There: a straight line on the sea.`},9:{prop:`hut`,type:`land`,t:.5,off:120,pay:260,label:`Collect the casting: land at the foundry`,after:`One bronze dragon head, still warm.`},10:{prop:`kite`,type:`pass`,t:.45,off:-140,pay:200,label:`Fly past the survey kite`,after:`A kite, a plumb line, a brave monk’s notebook.`},11:{prop:`hut`,type:`low`,t:.5,off:150,pay:220,label:`Drop handbills: fly low over the town`,after:`A thousand printed sheets flutter down.`},12:{prop:`rafts`,type:`land`,water:!0,t:.5,off:-150,pay:260,label:`Take on teak: land by the rafts`,after:`The raftsmen laugh at your paddle wheels.`},13:{type:`high`,alt:175,pay:300,label:`Reach orbit: climb above 100 km`,after:`The engines go quiet. You are falling round the world.`}},g=[[`han`,9],[`tang`,10],[`song`,11],[`ming`,12]],_={han:[{id:`han_paper`,title:`The paper makers`,text:`Bark, hemp and old nets, pulped and dried into sheets.`,note:`Real: Cai Lun, 105 CE. Invented: the biplane sketched on one sheet.`},{id:`han_bellows`,title:`The water bellows`,text:`A waterwheel pumps the furnace bellows. Nobody on the treadles.`,note:`Real: Du Shi, 31 CE. Invented: the two sisters who run it.`},{id:`han_road`,title:`The western road`,text:`Camels from the west, carrying glass, horses and grape vines.`,note:`Real: the Silk Road. Invented: the trader who has seen your ship before.`}],tang:[{id:`tang_pagoda`,title:`The Wild Goose Pagoda`,text:`Brick storeys over the monastery where Xuanzang translated his scriptures.`,note:`Real: built 652, raised 704. Invented: the wren scratched near the top.`},{id:`tang_polo`,title:`Polo on the palace ground`,text:`Riders in silk chase a fist-sized ball. The women play as hard as the men.`,note:`Real: the Tang court loved polo. Invented: the rider who salutes you.`},{id:`tang_canal`,title:`The Grand Canal`,text:`Grain barges nose to tail, feeding a city of a million.`,note:`Real: finished 609. Invented: nothing. It was that big.`}],song:[{id:`song_type`,title:`The printer’s shop`,text:`Each character is a clay block: set, inked, pressed, reused.`,note:`Real: Bi Sheng, about 1040. Invented: today’s handbill, for a flying ship.`},{id:`song_compass`,title:`The needle that points south`,text:`A magnet needle floats in a bowl. It points a little east of south.`,note:`Real: Shen Kuo, 1088. Invented: his list of faults in your compass.`},{id:`song_bridge`,title:`The rainbow bridge`,text:`A timber arch crosses the river in one span. Half the city is on it, buying snacks.`,note:`Real: Kaifeng’s rainbow bridge. Invented: the snack seller who wants to hire the Ark.`}],ming:[{id:`ming_wall`,title:`The longest wall`,text:`Thirty kilometres of wall. Every brick is stamped with its maker’s name.`,note:`Real: built 1366 to 1393. Invented: one brick with a name you know.`},{id:`ming_book`,title:`The encyclopedia`,text:`Two thousand scholars copy everything worth knowing into eleven thousand volumes.`,note:`Real: the Yongle Encyclopedia, 1403 to 1408. Invented: the flying-machine entry you correct.`},{id:`ming_dock`,title:`The dry docks`,text:`Build the hull on the dry floor, open the gate, and the river floats her out.`,note:`Real: the Longjiang basins. Invented: Aunt Ruan waving from the gate.`}]},v=2;function y(e,t){let n=o[e];return{speed:n.speed*v*(1+.08*t.engine),climb:n.climb*1.4*(1+.08*t.engine),ceil:n.ceil,tank:n.tank,burn:n.burn*v/(1+.15*t.tank),turn:n.turn*1.3,wear:n.wear*(1-.15*t.frame),failMul:1-.2*t.avionics,radar:t.avionics>=1,floats:n.floats,space:n.space||0,orbit:!!n.orbit,hover:!!n.hover}}function b(e){return e.visit?{free:!0,excursion:!0,title:`A visit to ${r[e.visit].name}`,world:e.visit,from:0,to:0,craft:`ark`,pay:0,brief:`Explore. Fly low over the blue beams. The glowing door takes you home.`}:e.mission<p.length?p[e.mission]:{free:!0,title:`Free flight`,world:`deep`,from:0,to:0,craft:`starling`,pay:0,brief:`Fly for the joy of it.`}}var x=(e,t,n)=>!!e.fleet[n]&&(!t.transit||!!o[n].orbit)&&(!t.excursion||n===`ark`);function S(e){let t=e.transit?e.transit.world:e.world,n=e.transit?e.transit.to:e.to;return{world:t,index:n,stop:r[t].stops[n]}}function C(e){if(e.transit)return 0;let t=r[e.world].stops;return Math.hypot(t[e.to].x-t[e.from].x,t[e.to].y-t[e.from].y)}var w=(e,t)=>t/(e.burn*.73)*e.speed*.85*(1+e.space*.6),T=(e,t)=>Math.ceil(t*1.3*o[e].tier),E=e=>Math.ceil(e*.6),D=e=>u[e],O=(e,t)=>e.shift?Math.max(25,Math.ceil(E(t.tank)*.25)):60,k=e=>Math.round(e/10);function ee(e){return e<=60?(Math.round(e*500/100)*100).toLocaleString(`en-US`)+` ft`:Math.round(9+(e-60)*(e-60)/128)+` km`}var te=(e,t)=>e.space?Math.max(0,Math.min(1,(t-50)/(e.ceil-60))):0,ne=(e,t)=>Math.min(255,(e>>16&255)*t)<<16|Math.min(255,(e>>8&255)*t)<<8|Math.min(255,(e&255)*t)|1,A=class{constructor(e,t,n,r=1){this.k=r,this.nx=e*r,this.ny=t*r,this.nz=n*r,this.d=new Uint32Array(this.nx*this.ny*this.nz)}get(e,t,n){return e<0||t<0||n<0||e>=this.nx||t>=this.ny||n>=this.nz?0:this.d[e+this.nx*(t+this.ny*n)]}put(e,t,n,r){e<0||t<0||n<0||e>=this.nx||t>=this.ny||n>=this.nz||(this.d[e+this.nx*(t+this.ny*n)]=r||1)}each(e){for(let t=0;t<this.nz;t++)for(let n=0;n<this.ny;n++)for(let r=0;r<this.nx;r++){let i=r+this.nx*(n+this.ny*t),a=this.d[i];if(!a)continue;let o=e(r,n,t,a);o!==void 0&&(this.d[i]=o)}}topZ(e,t){for(let n=this.nz-1;n>=0;n--)if(this.d[e+this.nx*(t+this.ny*n)])return n;return-1}paintTop(e,t,n,r,i){let a=this.k;for(let o=Math.round(t*a);o<=Math.round(r*a)+a-1;o++)for(let t=Math.round(e*a);t<=Math.round(n*a)+a-1;t++){if(t<0||o<0||t>=this.nx||o>=this.ny)continue;let e=this.topZ(t,o);if(e<0)continue;let n=i(t/a,o/a,this.d[t+this.nx*(o+this.ny*e)],e);n!==void 0&&(this.d[t+this.nx*(o+this.ny*e)]=n)}}set(e,t,n,r){this.box(e,t,n,e,t,n,r)}box(e,t,n,r,i,a,o){let s=this.k;for(let c=Math.round(n*s);c<=Math.round(a*s)+s-1;c++)for(let n=Math.round(t*s);n<=Math.round(i*s)+s-1;n++)for(let t=Math.round(e*s);t<=Math.round(r*s)+s-1;t++)this.put(t,n,c,o)}ellipsoid(e,t,n,r,i,a,o){let s=this.k,c=(s-1)/2,l=e*s+c,u=t*s+c,d=n*s+c,f=r*s+c,p=i*s+c,m=a*s+c;for(let e=Math.floor(d-m);e<=Math.ceil(d+m);e++)for(let t=Math.floor(u-p);t<=Math.ceil(u+p);t++)for(let n=Math.floor(l-f);n<=Math.ceil(l+f);n++){let r=(n-l)/f,i=(t-u)/p,a=(e-d)/m;r*r+i*i+a*a<=1&&this.put(n,t,e,typeof o==`function`?o(Math.floor(n/s),Math.floor(t/s),Math.floor(e/s)):o)}}tube(e,t,n,r,i,a){let o=this.k,s=(o-1)/2,c=n*o+s,l=r*o+s;for(let n=Math.round(e*o);n<=Math.round(t*o)+o-1;n++){let e=i(n/o)*o+s*.6;if(!(e<=0))for(let t=Math.floor(l-e);t<=Math.ceil(l+e);t++)for(let r=Math.floor(c-e);r<=Math.ceil(c+e);r++){let i=r-c,s=t-l;i*i+s*s<=e*e+.3&&this.put(n,r,t,typeof a==`function`?a(Math.floor(n/o),Math.floor(r/o),Math.floor(t/o)):a)}}}};function re(e,t){let n=Math.cos(t),r=Math.sin(t),i=Math.ceil(e.ny*Math.abs(r)+e.nz*Math.abs(n))+2;i%2!=e.nz%2&&i++;let a=new A(e.nx,e.ny,i),o=(e.ny-1)/2,s=(e.nz-1)/2,c=(i-1)/2;for(let l=0;l<i;l++)for(let i=0;i<e.ny;i++){let u=i-o,d=l-c,f=o+u*n-d*r,p=s+u*r+d*n,m=Math.round(f),h=Math.round(p),g=Math.abs(f-m)>Math.abs(p-h),_=g?m+(f>m?1:-1):m,v=g?h:h+(p>h?1:-1);for(let n=0;n<e.nx;n++){let r=e.get(n,m,h)||(t===0?0:e.get(n,_,v));r&&(a.d[n+a.nx*(i+a.ny*l)]=r)}}return a}function j(e,{light:t=!0}={}){let{nx:n,ny:r,nz:i}=e,a=document.createElement(`canvas`);a.width=n*i,a.height=r;let o=a.getContext(`2d`),s=o.createImageData(n*i,r),c=document.createElement(`canvas`);c.width=n,c.height=r;let l=c.getContext(`2d`),u=l.createImageData(n,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++)for(let r=0;r<n;r++){let c=e.get(r,o,a);if(!c)continue;let l=1;if(t){l=e.get(r,o,a+1)?.72:1.06,e.get(r,o-1,a)||(l*=1.05),e.get(r,o+1,a)||(l*=.88),l*=.84+.16*(a/Math.max(1,i-1));let t=0;for(let n=2;n<=5;n++)(e.get(r,o,a+n)||e.get(r+1,o-1,a+n))&&t++;l*=1-t*.06}let d=(o*n*i+a*n+r)*4;s.data[d]=Math.min(255,(c>>16&255)*l),s.data[d+1]=Math.min(255,(c>>8&255)*l),s.data[d+2]=Math.min(255,(c&255)*l),s.data[d+3]=255,u.data[(o*n+r)*4+3]=255}return o.putImageData(s,0,0),l.putImageData(u,0,0),{atlas:a,sil:c,nx:n,ny:r,nz:i,cz:(i-1)/2,vox:e}}function M(e,t,n=0){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1274126177);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function ie(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i;a=a*a*(3-2*a),o=o*o*(3-2*o);let s=M(r,i,n),c=M(r+1,i,n),l=M(r,i+1,n),u=M(r+1,i+1,n);return s+(c-s)*a+(l-s)*o+(s-c-l+u)*a*o}function ae(e,t,n=0,r=5){let i=.5,a=1,o=0,s=0;for(let c=0;c<r;c++)o+=i*ie(e*a,t*a,n+c*17),s+=i,i*=.5,a*=2.03;return o/s}function oe(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var N=(e,t,n)=>e<t?t:e>n?n:e,P=(e,t,n)=>e+(t-e)*n;function se(e,t,n){return n=N((n-e)/(t-e),0,1),n*n*(3-2*n)}var ce=2,le=9426158,F=3355708,ue=2902638,de=e=>e===le||e===F||e===ue;function fe(e,t={}){let n=(e.ny-1)/2;if(e.each((r,i,a,o)=>{if(de(o))return;let s=.97+.06*M(r+a*31,i,9),c=!e.get(r,i,a+1);return t.panels!==!1&&c&&(r%10==0||Math.round(Math.abs(i-n))%10==9)&&(s*=.84),c&&!e.get(r+1,i,a)&&(s*=1.09),ne(o,s)}),t.lights===!1)return;let r=(t,n)=>{for(let r=e.nx-1;r>=0;r--){let i=e.topZ(r,t);if(i>=0)return e.put(r,t,i,n),e.put(r-1,t,i,n),!0}return!1};for(let t=0;t<e.ny&&!r(t,16726832);t++);for(let t=e.ny-1;t>=0&&!r(t,3538794);t--);}function I(e,t,n,r,i=ue){let a=r*ce+1;for(let r=t*ce;r<=n*ce+1;r++){if(r%4>1)continue;let t=-1,n=-1;for(let i=0;i<e.ny;i++)e.get(r,i,a)&&(t<0&&(t=i),n=i);t>=0&&(e.put(r,t,a,i),e.put(r,n,a,i))}}function pe(e,t,n,r,i=2772904,a=16052710,o=13123631){e.paintTop(t-r,n-r,t+r,n+r,(e,s)=>{let c=Math.hypot(e-t,s-n);return c<r*.38?o:c<r*.72?a:c<=r?i:void 0})}var L=(e,t,n,r,i,a)=>e.paintTop(t,n,r,i,(e,t,n)=>de(n)?void 0:a);function me(){let e=new A(27,27,9,ce),t=13123631,n=15786678,r=9067060;e.tube(3,22,13,3.5,e=>e<8?.6+(e-3)*.2:e>20?1.3:1.6,t),e.tube(22,23.5,13,3.5,()=>1.45,F);for(let t=0;t<6.28;t+=.9)e.set(22.5,13+Math.cos(t)*1.7,3.5+Math.sin(t)*1.7,9080732);e.box(12,2,2,16,24,2,n),e.box(13,1,6,17,25,6,n),e.box(13,1,6,17,2,6,t),e.box(13,24,6,17,25,6,t);for(let t of[5,21])e.box(14,t,3,14,t,5,r),e.box(16,t,3,16,t,5,r),e.box(15,t,4,15,t,4,r);e.box(15,11,5,15,15,5,r),e.box(3,8,3,5,18,3,n),e.box(2,13,4,5,13,6,t),e.box(2,13,6,3,13,6,n),e.box(10,13,5,11,13,5,F),e.box(12,12.5,5,12,13.5,5.5,le);for(let t of[10,16])e.box(15,t,0,16,t,1,F),e.box(15.5,t,1.5,15.5,t,2,9080732);return e.box(15.5,10,1,15.5,16,1,9080732),e.box(19,14.5,3,21,14.5,3,6967360),fe(e),pe(e,15,6,1.9),pe(e,15,20,1.9),L(e,8,11,8.5,15,n),L(e,3,8,5,8.5,t),L(e,3,17.5,5,18,t),{vox:e,vs:.5,props:[{x:24.4,y:0,z:3.5,r:3.2}],jets:[],tips:12}}function R(){let e=new A(31,31,10,ce),t=15922421,n=2071200;for(let t of[10,20])e.tube(8,23,t,1,e=>e>21?.5+(23-e)*.3:e<10?.7:1.1,13620956),e.box(12,t,2,12,t,3,F),e.box(19,t,2,19,t,3,F),e.box(12,Math.min(t,15),2,12,Math.max(t,15),2,9080732);e.tube(3,26,15,4.5,e=>e<9?.7+(e-3)*.2:e>24?1.4:2,(e,r,i)=>i===4?n:t),e.tube(26,27.5,15,4.5,()=>1.3,F),e.box(14,1,7,18,29,7,n),e.box(14,1,7,18,3,7,t),e.box(14,27,7,18,29,7,t),e.box(13.5,5,7,13.5,25,7,15133420);for(let t of[10,20])e.box(16,t,4,16,t,6,9080732);return e.box(3,10,5,5,20,5,n),e.box(2,15,6,5,15,8,n),e.box(20,14,6,22.5,16,6.5,le),fe(e),I(e,11,19,4),L(e,14,14.5,18,15.5,t),L(e,2,15,5,15,t),{vox:e,vs:.5,props:[{x:28.4,y:0,z:4.5,r:3.2}],jets:[],tips:14}}function he(){let e=new A(31,31,12,ce),t=2375802,n=15786678,r=14263361,i=9080732;e.tube(3,27.5,15,3,e=>e>23?1.9-(e-23)*.3:e<10?.7+(e-3)*.17:1.9,(e,n,i)=>i===3?r:t),e.box(12,14,1,22,16,1,1716060),e.box(13,2,6,18,28,6,n),e.box(13,2,6,18,3.5,6,t),e.box(13,26.5,6,18,28,6,t),e.box(12.5,6,6,12.5,24,6,14865058);for(let t of[13,17])e.box(14,t,4,14,t,5,i),e.box(17,t,4,17,t,5,i);for(let n of[4,26])e.tube(13,18,n,3.3,e=>e>17?.5:.8,t),e.box(15.5,n,4,15.5,n,5,i);e.tube(12,19,15,8.4,e=>e>18?.8:1.15,i),e.tube(19,19.5,15,8.4,()=>.7,F);for(let t of[14,17])e.box(t,15,7,t,15,7.5,i);e.box(13,16,9,16,16,9,6967360);for(let n=0;n<=4;n+=.5)e.box(3+n*.3,15,4+n,6.5-n*.3,15,4+n,t);for(let t=0;t<=4;t+=.5)e.box(3+t*.2,15-t,6,6,15+t,6,n);e.box(19.5,15,5,20.5,15,5,F),e.box(21.5,14.5,5,21.5,15.5,5.5,le),fe(e);for(let t of[8,22])L(e,14,t,17,t+.5,r);return L(e,4,15,5.5,15,r),{vox:e,vs:.5,props:[{x:20.2,y:0,z:8.4,r:3}],jets:[],tips:13}}function z(){let e=new A(35,37,10,ce),t=13818077,n=15764004;e.tube(2,32,18,4,e=>e<9?.8+(e-2)*.2:e>29?2.2-(e-29)*.5:2.2,(e,r,i)=>i===4?n:t);for(let r=0;r<=17;r+=.5){let i=14+r*.18,a=20-r*.1,o=r>14.5?n:t;e.box(i,18-r,3,a,18-r,3,o),e.box(i,18+r,3,a,18+r,3,o),e.set(a,18-r,3,F),e.set(a,18+r,3,F)}for(let t of[11,25])e.tube(15,23,t,3.5,e=>e>21?1.1:1.35,n),e.tube(23,24,t,3.5,()=>.9,F),e.box(16,t,5,18,t,5,6967360);e.box(2,18,5,6,18,8,n);for(let n=0;n<=6;n+=.5)e.box(2+n*.1,18-n,8,5-n*.15,18+n,8,t);return e.box(27,16.5,5.5,29.5,19.5,6,le),fe(e),I(e,12,25,4),L(e,3,18,5,18,16052710),{vox:e,vs:.5,props:[{x:25.4,y:-7,z:3.5,r:2.6},{x:25.4,y:7,z:3.5,r:2.6}],jets:[],tips:17}}function ge(){let e=new A(39,35,10,ce),t=16119802,n=2777040;e.tube(2,37,17,4,e=>e<8?.8+(e-2)*.2:e>32?2-(e-32)*.36:2,(e,r,i)=>i===4?n:t);for(let r=1;r<=16;r+=.5){let i=23-r*.85,a=i-(5-r*.2),o=r>13.5?n:t;e.box(a,17-r,3,i,17-r,3,o),e.box(a,17+r,3,i,17+r,3,o)}for(let t of[13,21])e.tube(6,12,t,5,()=>1.15,14672872),e.tube(12,12.5,t,5,()=>.8,F),e.tube(5.5,6,t,5,()=>.9,F);for(let t=0;t<=3;t+=.5)e.box(2+t*.2,17,5+t,6-t,17,5+t,n);for(let n=0;n<=6;n+=.5){let r=5-n*.5;e.box(r-2,17-n,9,r,17-n,9,t),e.box(r-2,17+n,9,r,17+n,9,t)}return e.box(32,15.5,5.5,34.5,18.5,6,le),fe(e),I(e,14,29,4),L(e,7,12.5,11,13.5,n),L(e,7,20.5,11,21.5,n),{vox:e,vs:.5,props:[],jets:[{x:5,y:-4,z:5},{x:5,y:4,z:5}],tips:16}}function _e(){let e=new A(37,27,9,ce),t=5199204,n=16742954;e.tube(2,34.5,13,3.5,e=>e>27?1.7-(e-27)*.21:1.7,(e,r,i)=>e>31?F:i===4?n:t);for(let r=1;r<=11;r+=.5){let i=24-r*1.6,a=r>9.5?n:t;e.box(5,13-r,3,i,13-r,3,a),e.box(5,13+r,3,i,13+r,3,a)}for(let t of[9,17])for(let r=0;r<=2;r+=.5)e.box(3+r*.5,t,4+r,7-r*.5,t,4+r,n);e.tube(1,2,13,3.5,()=>1.2,F),e.box(27,12.5,5,29.5,13.5,5.5,le),fe(e);for(let t of[-1,1])L(e,6,13+t*3,14,13+t*3.5,16052710),L(e,6,13+t*6,10,13+t*6.5,16052710);return L(e,16,12.5,20,13.5,16052710),{vox:e,vs:.5,props:[],jets:[{x:1,y:0,z:3.5}],tips:11}}function ve(){let e=new A(41,33,11,ce),t=16053751,n=2632241,r=14263361;e.tube(3,38.5,16,4.5,e=>e>31?2.6-(e-31)*.34:2.6,(e,r,i)=>i<=3?n:t);for(let t=1;t<=14;t+=.5){let r=27-t*1.45;for(let i of[16-t,16+t])e.box(5,i,3,r,i,3,15133165),e.box(r-1,i,3,r,i,3,n)}for(let n=0;n<=3;n+=.5)e.box(3+n*.3,16,7+n,9-n*2,16,7+n,t);for(let[t,n]of[[14.4,5],[17.6,5],[16,3.6]])e.tube(1,2.5,t,n,()=>1,F);for(let t of[12.5,19.5])e.tube(3,7,t,5.5,()=>.9,14672872);e.box(31,14.5,7,33.5,17.5,7.5,le),fe(e),L(e,12,16,26,16,12173256);for(let t=12;t<=26;t+=3.5)L(e,t,14,t,18,13225686);for(let t of[-1,1])L(e,6,16+t*5,12,16+t*5.5,r),L(e,5,16+t*9,8,16+t*9.5,r);return I(e,27,30,5),e.paintTop(27,15,29,17,(e,t)=>Math.abs(t-16)<=(29-e)*.5?r:void 0),{vox:e,vs:.5,props:[],jets:[{x:1,y:-1.6,z:5},{x:1,y:1.6,z:5},{x:1,y:0,z:3.6}],tips:14}}function ye(){let e=new A(33,19,17,ce),t=[15260072,14262362,11884090,6266004,13348986,9072552],n=13214282,r=6047280;e.ellipsoid(16,9,11,15,6.2,4.8,(e,n,r)=>t[Math.floor(M(Math.floor(e/3),Math.floor(r/2.5)+(n>9?40:0),3)*t.length)]);for(let t=0;t<=6;t+=.5)e.box(1+t*.2,9,9+t,4.5-t*.25,9,9+t,11884090);for(let t=0;t<=5;t+=.5)e.box(1+t*.3,9-t,11,4.5,9+t,11,11884090);for(let t=9;t<=24.5;t+=.5){let r=t>21?(24.5-t)*.7:t<10.5?1+(t-9)*.7:2.2;e.box(t,9-r,1,t,9+r,3,8015662),e.box(t,9-r,3.5,t,9-r,4,n),e.box(t,9+r,3.5,t,9+r,4,n)}e.box(10.5,7,3.5,21,11,3.5,11569752),e.box(11,7.5,0,21,10.5,.5,6044450),e.box(18,8,4,20,10,5,9067060),e.box(20,8,4.5,20,10,5,le),e.box(14,9,4,14,9,5.5,F);for(let t of[11,13.5,16,18.5,21])for(let n of[-1,1])e.box(t,9+n*2,4,t,9+n*3,6.5,r);for(let t of[4,14])e.box(13,Math.min(t,9),2,13,Math.max(t,9),2,F),e.tube(12,15,t,2,()=>.9,n);for(let t of[5.8,12.2]){for(let n=0;n<6.283;n+=.2)e.set(16.5+Math.cos(n)*2.4,t,2.2+Math.sin(n)*2.4,11875114);for(let n=0;n<3.14;n+=.785)for(let r=-2;r<=2;r+=.5)e.set(16.5+Math.cos(n)*r,t,2.2+Math.sin(n)*r,14262362)}fe(e,{panels:!1,lights:!1}),e.each((e,t,n,r)=>{if(!(n<12)&&(e%6==0||n%5==0))return ne(r,.78)});for(let t=4;t<=28;t+=4)L(e,t,3,t,15,r);I(e,12,17,2,16767082);for(let t=2;t<=7;t++)for(let r=30;r<=33;r++){let i=-1;for(let n=0;n<e.ny;n++)e.get(r,n,t)&&(i=n);i>=0&&e.put(r,i,t,r===30||r===33||t===7?n:9434879)}return e.put(48,18,8,16767082),e.put(18,18,9,16767082),{vox:e,vs:.55,props:[{x:11.4,y:-5,z:2,r:2.4},{x:11.4,y:5,z:2,r:2.4}],jets:[],tips:6,rollK:.25}}function be(e=0){let t=new A(27,31,13,ce),n=13214282,r=11888442,i=8219188,a=4165514;t.tube(8,21,15,5,e=>e<12?.9:1.5,e=>e%3==0?r:n),t.tube(2,8,15,5,()=>.45,r);for(let e=0;e<=3;e+=.5)t.box(1,15-e,5,3.5-e*.5,15+e,5,a);t.box(2,15,6,3,15,7,a),t.ellipsoid(22.5,15,5.3,2,1.8,1.6,le),t.box(22,15,6.5,23,15,6.5,n),t.tube(14,15,15,6.6,()=>.8,F);let o=[.45,0,-.45,0][e],s=(e,n,r)=>{for(let a=0;a<=12;a+=.5){let o=2+a*Math.cos(r),s=6+a*Math.sin(r),c=a>10?e+(a-10)*.6:e,l=a>10?n-(a-10)*.6:n;for(let e of[15-o,15+o])t.box(c,e,s,l,e,s,a%3==0||a>=12?i:13625536),t.set(l,e,s,i)}};return s(15,19,o),s(10,13,-o*.8),t.box(14,15,3,15,15,3,F),t.box(18,15,3,19,15,3,F),fe(t,{panels:!1}),{vox:t,vs:.5,props:[],jets:[],tips:13,poses:4,fps:14}}var xe={sparrow:me,heron:R,marlin:he,dragonfly:be,kestrel:z,comet:ge,meteor:_e,ark:ye,starling:ve},Se={};function Ce(e){if(Se[e])return Se[e];let t=xe[e](0),n=[];for(let r=0;r<(t.poses||1);r++){let i=r===0?t.vox:xe[e](r).vox,a=[];for(let e=-4;e<=4;e++)a.push(j(re(i,e*10*Math.PI/180)));n.push(a)}let r=e=>({x:e.x*ce+.5,y:e.y*ce,z:e.z*ce+.5,r:(e.r||0)*ce});return Se[e]={rollK:1,fps:0,...t,vs:t.vs/ce*1.2,tips:t.tips*ce,props:t.props.map(r),jets:t.jets.map(r),frames:n,rolls:n[0],nx:t.vox.nx,ny:t.vox.ny,nz:t.vox.nz}}var we={white:[11846874,13885164,15660025,16777215],storm:[3882837,4935526,6119800,7369868],dustLight:[12159590,13607548,14727572,15585456],dust:[8014380,9657400,11235398,12880474],mist:[10475728,12576992,14480880,15925243],violet:[3810406,5321610,7030701,9069516]};function Te(e,t){let n=new A(34,34,9,2),r=4+Math.floor(e()*4);for(let i=0;i<r;i++){let r=e()*6.283,i=e()*9,a=4+e()*5;n.ellipsoid(17+Math.cos(r)*i,17+Math.sin(r)*i*.8,2+e()*2,a,a,a*.62,(e,n,r)=>t[Math.min(3,Math.floor(r/2.2))])}return j(n,{light:!1})}function Ee(e,t,n,r,i,a,o,s,c=3){e.box(t-i,n-a,r,t+i,n+a,r+c-1,o);for(let o of[-1,1])for(let s of[-1,1])e.box(t+o*i,n+s*a,r,t+o*i,n+s*a,r+c-1,8006176);e.box(t-i-1,n-a-1,r+c,t+i+1,n+a+1,r+c,s);for(let o of[-1,1])for(let l of[-1,1])e.put(t+o*(i+2),n+l*(a+2),r+c+1,s);return e.box(t-i+1,n-a+1,r+c+1,t+i-1,n+a-1,r+c+1,ne(s,.85)),r+c+2}var De=4743258,Oe=12076335,ke=9277322;function Ae(e){let t=new A(15,15,e*5+5),n=0;t.box(1,1,0,13,13,0,ke),n=1;for(let r=0;r<e;r++){let e=Math.max(1,4-Math.floor(r*.6));n=Ee(t,7,7,n,e,e,r%2?14207144:Oe,De)}return t.box(7,7,n,7,7,n+2,14263361),{m:j(t),vs:.55}}function je(){let e=new A(25,15,17);e.box(1,2,0,23,12,5,ke),e.box(11,2,0,13,12,3,F);for(let t=1;t<=23;t+=2)e.put(t,2,6,10987939),e.put(t,12,6,10987939);return Ee(e,12,7,Ee(e,12,7,6,8,3,Oe,De),6,2,Oe,De),{m:j(e),vs:.65}}function Me(){let e=new A(17,15,27),t=9067060,n=13214282,r=Ee(e,7,7,0,5,5,t,3950148,5);r=Ee(e,7,7,r,4,4,10119744,3950148,4),r=Ee(e,7,7,r,3,3,t,3950148,3);for(let t=0;t<6.283;t+=.25){let i=Math.round(Math.cos(t)*3),a=Math.round(Math.sin(t)*3);e.put(7+i,7+a,r+3,n),e.put(7+i,7,r+3+a,n),e.put(7,7+i,r+3+a,n)}for(let t=0;t<6.283;t+=.3)e.put(14,7+Math.round(Math.cos(t)*3),4+Math.round(Math.sin(t)*3),6989752);e.box(13,7,4,15,7,4,t);for(let t=4;t<=10;t+=2)e.put(t,2,3,16767082);return{m:j(e),vs:.55}}function Ne(){let e=new A(36,13,19);for(let t=2;t<=33;t++){let n=Math.round(4.6*Math.sin(Math.PI*(t-1)/33)**.55);e.box(t,6-n,1,t,6+n,4,9067060),e.box(t,6-n+1,5,t,6+n-1,5,11569752),e.put(t,6-n,5,14263361),e.put(t,6+n,5,14263361)}e.box(3,3,5,9,9,8,10119744),e.box(3,2,9,9,10,9,De);for(let t of[6,14,22,29])e.box(t,4,0,t,8,0,6044450);for(let[t,n]of[[12,17],[19,18],[26,16]]){e.box(t,6,5,t,6,n,6044450);for(let r=8;r<n;r++)e.box(t+1,2,r,t+1,10,r,r%3==0?8003609:11875114)}return{m:j(e),vs:.7}}function Pe(){let e=new A(17,17,9);return e.ellipsoid(8,8,0,7,7,7,(e,t,n)=>(e+n)%4==0||(t+n)%4==0?12830928:15659251),e.box(0,7,0,2,9,2,9080732),e.box(0,8,0,0,8,1,F),e.box(11,1,0,15,4,0,2777040),e.box(11,12,0,15,15,0,2777040),{m:j(e),vs:.7}}function Fe(){let e=new A(7,7,17);for(let t=0;t<=13;t++)e.put(3,3,t,10133677),t%3==0&&e.box(2,2,t,4,4,t,8028300);return e.ellipsoid(3,3,14,3,3,1.2,15659251),e.put(3,3,16,16726832),{m:j(e),vs:.5}}function Ie(){let e=new A(19,19,24),t=oe(77);for(let n=0;n<9;n++){let r=3+Math.floor(t()*13),i=3+Math.floor(t()*13),a=6+Math.floor(t()*16),o=+(a>14);for(let t=0;t<=a;t++){let s=t<a-2?o:0;e.box(r-s,i-s,t,r+s,i+s,t,t>a-2?16186367:n%2?8213960:3981230)}}return{m:j(e),vs:.6}}function Le(){let e=new A(21,5,7);for(let t=1;t<=19;t+=6)e.box(t,2,0,t,2,4,6044450),e.box(t-1,1,5,t+1,3,5,16767082),e.put(t,2,6,11875114);return{m:j(e,{light:!1}),vs:.6}}function Re(){let e=new A(9,3,11);return e.box(1,1,0,1,1,9,9067060),e.box(7,1,0,7,1,9,9067060),e.box(1,1,9,7,1,9,13214282),e.box(2,1,0,6,1,8,9434879),e.box(3,1,1,5,1,7,15138559),{m:j(e,{light:!1}),vs:.6}}function ze(){let e=new A(14,10,7);e.box(0,0,0,13,9,3,12172480),e.box(0,3,0,0,6,2,4474446);for(let t=0;t<10;t++)e.box(0,t,4,13,t,4+Math.round(2*Math.sin(t/9*Math.PI)),t%3==0?11552306:13128250);return{m:j(e),vs:.6}}function Be(){let e=new A(12,6,16),t=9278364;return e.box(0,0,0,11,5,4,t),e.box(1,0,5,7,5,6,le),e.box(1,0,7,7,5,7,t),e.box(9,2,5,10,3,8,F),e.box(4,2,8,4,3,13,6975610),e.box(2,2,12,6,3,12,13225686),e.put(4,2,14,16726832),{m:j(e),vs:.6}}function Ve(){let e=new A(5,5,11);return e.box(1,1,0,3,3,7,14211280),e.box(0,0,8,4,4,9,le),e.box(0,0,10,4,4,10,13128250),{m:j(e),vs:.5}}function He(){let e=new A(7,7,17);for(let t=0;t<=11;t++)e.box(2,2,t,4,4,t,t%5>=3?13123631:16052710);return e.box(1,1,12,5,5,12,F),e.box(2,2,13,4,4,14,16769658),e.box(2,2,15,4,4,15,13123631),e.put(3,3,16,13123631),e.box(0,0,0,6,6,0,9277322),{m:j(e,{light:!1}),vs:.7}}function Ue(e,t,n){let r=new A(e+2,9,10);for(let n=1;n<=e;n++){let i=Math.max(1,Math.round(3*Math.sin(Math.PI*n/(e+1))**.5));r.box(n,4-i,0,n,4+i,2,t),r.box(n,4-i+1,3,n,4+i-1,3,11569752)}return n(r,e),r}function We(){return{m:j(Ue(12,2777040,e=>{e.box(3,3,4,5,5,6,16052710),e.box(8,4,4,8,4,9,6044450),e.box(9,4,6,10,4,8,13123631)})),vs:.6}}function Ge(){return{m:j(Ue(22,13123631,e=>{e.box(5,2,4,12,6,6,16052710),e.box(6,3,7,10,5,8,16052710),e.box(8,4,9,9,4,9,F),e.box(15,3,4,16,5,7,16765514)})),vs:.8}}function Ke(){let e=new A(5,5,8);return e.ellipsoid(2,2,1,2,2,1.4,13123631),e.box(2,2,2,2,2,5,16765514),e.put(2,2,6,16769658),e.box(1,2,4,3,2,4,16765514),{m:j(e,{light:!1}),vs:.7}}function qe(){let e=new A(16,9,6);for(let[t,n]of[[1,15260072],[9,14262362]])for(let r=0;r<=3;r++)e.box(t+r,1+r,r,t+6-r,7-r,r,r===3?11884090:n);return e.put(8,4,0,16751164),e.put(8,4,1,16769658),{m:j(e),vs:.6}}function Je(){let e=new A(13,13,9);return Ee(e,6,6,0,3,3,14207144,De,3),e.box(10,9,0,10,9,6,6044450),e.put(10,9,7,16751164),{m:j(e),vs:.6}}function Ye(){let e=new A(9,9,16);for(let t=0;t<=11;t++)e.put(4,4,t,6047280);for(let t=0;t<=3;t++)e.box(4-(3-t),4-t,12,4+(3-t),4+t,12,t%2?16052710:13123631);for(let t=1;t<=3;t++)e.put(1-t,4,12-t,16765514);return{m:j(e,{light:!1}),vs:.6}}function Xe(){let e=new A(18,12,3);for(let t=1;t<=10;t++)t%3!=0&&e.box(1+t%2,t,0,15+t%2,t,0,t%2?9067060:8015662);return e.box(7,4,1,9,6,1,15260072),e.put(8,5,2,13123631),{m:j(e),vs:.7}}function Ze(){let e=new A(9,9,5);return e.ellipsoid(4,4,0,4,4,3,(e,t,n)=>n>1?13656106:4866112),e.box(3,3,2,5,5,3,15769648),e.put(4,4,4,16774056),{m:j(e,{light:!1}),vs:.8}}function Qe(e){let t=new A(4,3,8),n=4014674,r=15251600,i=e===0?[0,1]:e===1?[1,0]:[0,0];return t.box(1+i[0],0,0,1+i[0],0,2,n),t.box(1+i[1],2,0,1+i[1],2,2,n),t.box(1,0,3,1,2,5,8015662),e===2&&(t.put(2,0,4,r),t.put(2,2,4,r),t.put(3,1,4,9080732)),t.put(0,1,5,13123631),t.put(1,1,6,r),t.put(2,1,6,3355708),t.put(1,1,7,4863268),j(t,{light:!1})}function $e(){let e=oe(4242),t={};for(let n of Object.keys(we)){t[n]=[];for(let r=0;r<(n===`white`?6:4);r++)t[n].push(Te(e,we[n]))}return{clouds:t,marks:{bridge:Be(),hangar:ze(),tower:Ve(),pagoda:Ae(6),pagodaSmall:Ae(3),gate:je(),clock:Me(),ship:Ne(),dome:Pe(),mast:Fe(),spire:Ie(),lantern:Le(),door:Re(),lighthouse:He(),boat:We(),icebreaker:Ge(),buoy:Ke(),tents:qe(),hut:Je(),kite:Ye(),rafts:Xe(),vent:Ze()},pilot:[Qe(0),Qe(1),Qe(2)]}}var et=1e3,tt=1001,nt=1002,rt=1003,it=1004,at=1005,ot=1006,st=1007,ct=1008,lt=1009,ut=1010,dt=1011,ft=1012,pt=1013,mt=1014,ht=1015,gt=1016,_t=1017,vt=1018,yt=1020,bt=35902,xt=1021,St=1022,Ct=1023,wt=1024,Tt=1025,Et=1026,Dt=1027,Ot=1028,kt=1029,At=1030,jt=1031,Mt=1033,Nt=33776,Pt=33777,Ft=33778,It=33779,Lt=35840,Rt=35841,zt=35842,Bt=35843,Vt=36196,Ht=37492,Ut=37496,Wt=37808,Gt=37809,Kt=37810,qt=37811,Jt=37812,Yt=37813,Xt=37814,Zt=37815,Qt=37816,$t=37817,en=37818,tn=37819,nn=37820,rn=37821,an=36492,on=36494,sn=36495,cn=36283,ln=36284,un=36285,dn=36286,fn=2300,pn=2301,mn=2302,hn=2400,gn=2401,_n=2402,vn=3200,yn=3201,bn=`srgb`,xn=`srgb-linear`,Sn=`linear`,Cn=`srgb`,wn=7680,Tn=35044,En=2e3,Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},On=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),kn=Math.PI/180,An=180/Math.PI;function jn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[e&255]+On[e>>8&255]+On[e>>16&255]+On[e>>24&255]+`-`+On[t&255]+On[t>>8&255]+`-`+On[t>>16&15|64]+On[t>>24&255]+`-`+On[n&63|128]+On[n>>8&255]+`-`+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Mn(e,t,n){return Math.max(t,Math.min(n,e))}function Nn(e,t){return(e%t+t)%t}function Pn(e,t,n){return(1-n)*e+n*t}function Fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function In(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var B=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},V=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ln.makeScale(e,t)),this}rotate(e){return this.premultiply(Ln.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ln.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ln=new V;function Rn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function zn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Bn(){let e=zn(`canvas`);return e.style.display=`block`,e}var Vn={};function Hn(e){e in Vn||(Vn[e]=!0,console.warn(e))}function Un(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Wn(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gn(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kn={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=qn(e.r),e.g=qn(e.g),e.b=qn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Jn(e.r),e.g=Jn(e.g),e.b=Jn(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Sn:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function qn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Jn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Yn=[.64,.33,.3,.6,.15,.06],Xn=[.2126,.7152,.0722],Zn=[.3127,.329],Qn=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$n=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kn.define({[xn]:{primaries:Yn,whitePoint:Zn,transfer:Sn,toXYZ:Qn,fromXYZ:$n,luminanceCoefficients:Xn,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Yn,whitePoint:Zn,transfer:Cn,toXYZ:Qn,fromXYZ:$n,luminanceCoefficients:Xn,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});var er,tr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=zn(`canvas`)),er.width=e.width,er.height=e.height;let n=er.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=zn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=qn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(qn(t[e]/255)*255):t[e]=qn(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},nr=0,rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nr++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ir(r[t].image)):e.push(ir(r[t]))}else e=ir(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ir(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?tr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var ar=0,or=class e extends Dn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=tt,i=tt,a=ot,o=ct,s=Ct,c=lt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ar++}),this.uuid=jn(),this.name=``,this.source=new rr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case et:e.x-=Math.floor(e.x);break;case tt:e.x=e.x<0?0:1;break;case nt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case et:e.y-=Math.floor(e.y);break;case tt:e.y=e.y<0?0:1;break;case nt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};or.DEFAULT_IMAGE=null,or.DEFAULT_MAPPING=300,or.DEFAULT_ANISOTROPY=1;var sr=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cr=class extends Dn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sr(0,0,e,t),this.scissorTest=!1,this.viewport=new sr(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new or(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},lr=class extends cr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ur=class extends or{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},dr=class extends or{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pr=new H,mr=new fr,hr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_r):_r.fromBufferAttribute(r,t),_r.applyMatrix4(e.matrixWorld),this.expandByPoint(_r);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Er.subVectors(this.max,Tr),yr.subVectors(e.a,Tr),br.subVectors(e.b,Tr),xr.subVectors(e.c,Tr),Sr.subVectors(br,yr),Cr.subVectors(xr,br),wr.subVectors(yr,xr);let t=[0,-Sr.z,Sr.y,0,-Cr.z,Cr.y,0,-wr.z,wr.y,Sr.z,0,-Sr.x,Cr.z,0,-Cr.x,wr.z,0,-wr.x,-Sr.y,Sr.x,0,-Cr.y,Cr.x,0,-wr.y,wr.x,0];return!kr(t,yr,br,xr,Er)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,yr,br,xr,Er))?!1:(Dr.crossVectors(Sr,Cr),t=[Dr.x,Dr.y,Dr.z],kr(t,yr,br,xr,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gr=[new H,new H,new H,new H,new H,new H,new H,new H],_r=new H,vr=new hr,yr=new H,br=new H,xr=new H,Sr=new H,Cr=new H,wr=new H,Tr=new H,Er=new H,Dr=new H,Or=new H;function kr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Or.fromArray(e,a);let o=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),s=t.dot(Or),c=n.dot(Or),l=r.dot(Or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ar=new hr,jr=new H,Mr=new H,Nr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Mr)),this.expandByPoint(jr.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pr=new H,Fr=new H,Ir=new H,Lr=new H,Rr=new H,zr=new H,Br=new H,Vr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),s=-Lr.dot(Ir),c=Lr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fr).addScaledVector(Ir,d),f}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,i){Rr.subVectors(t,e),zr.subVectors(n,e),Br.crossVectors(Rr,zr);let a=this.direction.dot(Br),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Lr.subVectors(this.origin,e);let s=o*this.direction.dot(zr.crossVectors(Lr,zr));if(s<0)return null;let c=o*this.direction.dot(Rr.cross(Lr));if(c<0||s+c>a)return null;let l=-o*Lr.dot(Br);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),i=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gr,e,Kr)}lookAt(e,t,n){let r=this.elements;return Yr.subVectors(e,t),Yr.lengthSq()===0&&(Yr.z=1),Yr.normalize(),qr.crossVectors(n,Yr),qr.lengthSq()===0&&(Math.abs(n.z)===1?Yr.x+=1e-4:Yr.z+=1e-4,Yr.normalize(),qr.crossVectors(n,Yr)),qr.normalize(),Jr.crossVectors(Yr,qr),r[0]=qr.x,r[4]=Jr.x,r[8]=Yr.x,r[1]=qr.y,r[5]=Jr.y,r[9]=Yr.y,r[2]=qr.z,r[6]=Jr.z,r[10]=Yr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],j=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*A,i[4]=a*S+o*E+s*ee+c*re,i[8]=a*C+o*D+s*te+c*j,i[12]=a*w+o*O+s*ne+c*M,i[1]=l*x+u*T+d*k+f*A,i[5]=l*S+u*E+d*ee+f*re,i[9]=l*C+u*D+d*te+f*j,i[13]=l*w+u*O+d*ne+f*M,i[2]=p*x+m*T+h*k+g*A,i[6]=p*S+m*E+h*ee+g*re,i[10]=p*C+m*D+h*te+g*j,i[14]=p*w+m*O+h*ne+g*M,i[3]=_*x+v*T+y*k+b*A,i[7]=_*S+v*E+y*ee+b*re,i[11]=_*C+v*D+y*te+b*j,i[15]=_*w+v*O+y*ne+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Ur.set(r[0],r[1],r[2]).length(),a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Wr.copy(this);let s=1/i,c=1/a,l=1/o;return Wr.elements[0]*=s,Wr.elements[1]*=s,Wr.elements[2]*=s,Wr.elements[4]*=c,Wr.elements[5]*=c,Wr.elements[6]*=c,Wr.elements[8]*=l,Wr.elements[9]*=l,Wr.elements[10]*=l,t.setFromRotationMatrix(Wr),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=En){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=En){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ur=new H,Wr=new Hr,Gr=new H(0,0,0),Kr=new H(1,1,1),qr=new H,Jr=new H,Yr=new H,Xr=new Hr,Zr=new fr,Qr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Mn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zr.setFromEuler(this),this.setFromQuaternion(Zr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qr.DEFAULT_ORDER=`XYZ`;var $r=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ei=0,ti=new H,ni=new fr,ri=new Hr,ii=new H,ai=new H,oi=new H,si=new fr,ci=new H(1,0,0),li=new H(0,1,0),ui=new H(0,0,1),di={type:`added`},fi={type:`removed`},pi={type:`childadded`,child:null},mi={type:`childremoved`,child:null},hi=class e extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ei++}),this.uuid=jn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Qr,r=new fr,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Hr},normalMatrix:{value:new V}}),this.matrix=new Hr,this.matrixWorld=new Hr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(ci,e)}rotateY(e){return this.rotateOnAxis(li,e)}rotateZ(e){return this.rotateOnAxis(ui,e)}translateOnAxis(e,t){return ti.copy(e).applyQuaternion(this.quaternion),this.position.add(ti.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ci,e)}translateY(e){return this.translateOnAxis(li,e)}translateZ(e){return this.translateOnAxis(ui,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ii.copy(e):ii.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ai,ii,this.up):ri.lookAt(ii,ai,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(ri),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(di),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fi),mi.child=e,this.dispatchEvent(mi),mi.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(di),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,e,oi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,si,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};hi.DEFAULT_UP=new H(0,1,0),hi.DEFAULT_MATRIX_AUTO_UPDATE=!0,hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new H,_i=new H,vi=new H,yi=new H,bi=new H,xi=new H,Si=new H,Ci=new H,wi=new H,Ti=new H,Ei=new sr,Di=new sr,Oi=new sr,ki=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gi.subVectors(e,t),r.cross(gi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){gi.subVectors(r,t),_i.subVectors(n,t),vi.subVectors(e,t);let a=gi.dot(gi),o=gi.dot(_i),s=gi.dot(vi),c=_i.dot(_i),l=_i.dot(vi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)!==null&&yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,yi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,yi.x),s.addScaledVector(a,yi.y),s.addScaledVector(o,yi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ei.setScalar(0),Di.setScalar(0),Oi.setScalar(0),Ei.fromBufferAttribute(e,t),Di.fromBufferAttribute(e,n),Oi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ei,i.x),a.addScaledVector(Di,i.y),a.addScaledVector(Oi,i.z),a}static isFrontFacing(e,t,n,r){return gi.subVectors(n,t),_i.subVectors(e,t),gi.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),gi.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;bi.subVectors(r,n),xi.subVectors(i,n),Ci.subVectors(e,n);let s=bi.dot(Ci),c=xi.dot(Ci);if(s<=0&&c<=0)return t.copy(n);wi.subVectors(e,r);let l=bi.dot(wi),u=xi.dot(wi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(bi,a);Ti.subVectors(e,i);let f=bi.dot(Ti),p=xi.dot(Ti);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(xi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Si.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Si,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(bi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ai={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Mi={h:0,s:0,l:0};function Ni(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Kn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Kn.workingColorSpace){if(e=Nn(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ni(i,r,e+1/3),this.g=Ni(i,r,e),this.b=Ni(i,r,e-1/3)}return Kn.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){let n=Ai[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Kn.fromWorkingColorSpace(Pi.copy(this),e),Math.round(Mn(Pi.r*255,0,255))*65536+Math.round(Mn(Pi.g*255,0,255))*256+Math.round(Mn(Pi.b*255,0,255))}getHexString(e=bn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kn.workingColorSpace){Kn.fromWorkingColorSpace(Pi.copy(this),t);let n=Pi.r,r=Pi.g,i=Pi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Kn.workingColorSpace){return Kn.fromWorkingColorSpace(Pi.copy(this),t),e.r=Pi.r,e.g=Pi.g,e.b=Pi.b,e}getStyle(e=bn){Kn.fromWorkingColorSpace(Pi.copy(this),e);let t=Pi.r,n=Pi.g,r=Pi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Mi);let n=Pn(ji.h,Mi.h,t),r=Pn(ji.s,Mi.s,t),i=Pn(ji.l,Mi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pi=new U;U.NAMES=Ai;var Fi=0,Ii=class extends Dn{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fi++}),this.uuid=jn(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},Li=class extends Ii{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ri=new H,zi=new B,Bi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Tn,this.updateRanges=[],this.gpuType=ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix3(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix4(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.applyNormalMatrix(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.transformDirection(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Vi=class extends Bi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Hi=class extends Bi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ui=class extends Bi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wi=0,Gi=new Hr,Ki=new hi,qi=new H,Ji=new hr,Yi=new hr,Xi=new H,Zi=class e extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wi++}),this.uuid=jn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Rn(e)?Hi:Vi)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,n){return Gi.makeTranslation(e,t,n),this.applyMatrix4(Gi),this}scale(e,t,n){return Gi.makeScale(e,t,n),this.applyMatrix4(Gi),this}lookAt(e){return Ki.lookAt(e),Ki.updateMatrix(),this.applyMatrix4(Ki.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ui(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ji.setFromBufferAttribute(n),this.morphTargetsRelative?(Xi.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(Xi),Xi.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(Xi)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Ji.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Yi.setFromBufferAttribute(n),this.morphTargetsRelative?(Xi.addVectors(Ji.min,Yi.min),Ji.expandByPoint(Xi),Xi.addVectors(Ji.max,Yi.max),Ji.expandByPoint(Xi)):(Ji.expandByPoint(Yi.min),Ji.expandByPoint(Yi.max))}Ji.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Xi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Xi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Xi.fromBufferAttribute(a,t),o&&(qi.fromBufferAttribute(e,t),Xi.add(qi)),r=Math.max(r,n.distanceToSquared(Xi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Bi(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new B,f=new B,p=new B,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Bi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xi.fromBufferAttribute(e,t),Xi.normalize(),e.setXYZ(t,Xi.x,Xi.y,Xi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Bi(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qi=new Hr,$i=new Vr,ea=new Nr,ta=new H,na=new H,ra=new H,ia=new H,aa=new H,oa=new H,sa=new H,ca=new H,W=class extends hi{constructor(e=new Zi,t=new Li){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){oa.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(aa.fromBufferAttribute(s,e),a?oa.addScaledVector(aa,r):oa.addScaledVector(aa.sub(t),r))}t.add(oa)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),$i.copy(e.ray).recast(e.near),ea.containsPoint($i.origin)===!1&&($i.intersectSphere(ea,ta)===null||$i.origin.distanceToSquared(ta)>(e.far-e.near)**2)||(Qi.copy(i).invert(),$i.copy(e.ray).applyMatrix4(Qi),(n.boundingBox===null||$i.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ua(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ua(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ua(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ua(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function la(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ca.copy(s),ca.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ca);return l<n.near||l>n.far?null:{distance:l,point:ca.clone(),object:e}}function ua(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,na),e.getVertexPosition(c,ra),e.getVertexPosition(l,ia);let u=la(e,t,n,r,na,ra,ia,sa);if(u){let e=new H;ki.getBarycoord(sa,na,ra,ia,e),i&&(u.uv=ki.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=ki.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=ki.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};ki.getNormal(na,ra,ia,t.normal),u.face=t,u.barycoord=e}return u}var da=class e extends Zi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ui(c,3)),this.setAttribute(`normal`,new Ui(l,3)),this.setAttribute(`uv`,new Ui(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function pa(e){let t={};for(let n=0;n<e.length;n++){let r=fa(e[n]);for(let e in r)t[e]=r[e]}return t}function ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kn.workingColorSpace}var ga={clone:fa,merge:pa},_a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,va=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ya=class extends Ii{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_a,this.fragmentShader=va,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ba=class extends hi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Hr,this.projectionMatrix=new Hr,this.projectionMatrixInverse=new Hr,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xa=new H,Sa=new B,Ca=new B,wa=class extends ba{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=An*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return An*2*Math.atan(Math.tan(kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xa.x,xa.y).multiplyScalar(-e/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-e/xa.z)}getViewSize(e,t){return this.getViewBounds(e,Sa,Ca),t.subVectors(Ca,Sa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ta=-90,Ea=1,Da=class extends hi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wa(Ta,Ea,e,t);r.layers=this.layers,this.add(r);let i=new wa(Ta,Ea,e,t);i.layers=this.layers,this.add(i);let a=new wa(Ta,Ea,e,t);a.layers=this.layers,this.add(a);let o=new wa(Ta,Ea,e,t);o.layers=this.layers,this.add(o);let s=new wa(Ta,Ea,e,t);s.layers=this.layers,this.add(s);let c=new wa(Ta,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oa=class extends or{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?ot:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),i=new ya({name:`CubemapFromEquirect`,uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ot),new Da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Aa=new H,ja=new H,Ma=new V,Na=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Aa.subVectors(n,t).cross(ja.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ma.getNormalMatrix(e),r=this.coplanarPoint(Aa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pa=new Nr,Fa=new H,Ia=class{constructor(e=new Na,t=new Na,n=new Na,r=new Na,i=new Na,a=new Na){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(e){return Pa.center.set(0,0,0),Pa.radius=.7071067811865476,Pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function La(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ra(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var za=class e extends Zi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ui(p,3)),this.setAttribute(`normal`,new Ui(m,3)),this.setAttribute(`uv`,new Ui(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Ba={basic:{uniforms:pa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:pa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:pa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:pa([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:pa([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:pa([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:pa([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:pa([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:pa([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:pa([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:pa([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distanceRGBA:{uniforms:pa([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distanceRGBA_vert,fragmentShader:G.distanceRGBA_frag},shadow:{uniforms:pa([K.lights,K.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Ba.physical={uniforms:pa([Ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Va={r:0,b:0,g:0},Ha=new Qr,Ua=new Hr;function Wa(e,t,n,r,i,a,o){let s=new U(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new W(new da(1,1,1),new ya({name:`BackgroundCubeMaterial`,uniforms:fa(Ba.backgroundCube.uniforms),vertexShader:Ba.backgroundCube.vertexShader,fragmentShader:Ba.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ha.copy(n.backgroundRotation),Ha.x*=-1,Ha.y*=-1,Ha.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Ha.y*=-1,Ha.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ua.makeRotationFromEuler(Ha)),u.material.toneMapped=Kn.getTransfer(r.colorSpace)!==Cn,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new W(new za(2,2),new ya({name:`BackgroundMaterial`,uniforms:fa(Ba.background.uniforms),vertexShader:Ba.background.vertexShader,fragmentShader:Ba.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Kn.getTransfer(r.colorSpace)!==Cn,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Va,ha(e)),r.buffers.color.setClear(Va.r,Va.g,Va.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Ga(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ka(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function qa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ja(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Na,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ya(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ka(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Xa=class extends ba{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=4,Qa=[.125,.215,.35,.446,.526,.582],$a=20,eo=new Xa,to=new U,no=null,ro=0,io=0,ao=!1,oo=(1+Math.sqrt(5))/2,so=1/oo,co=[new H(-oo,so,0),new H(oo,so,0),new H(-so,0,oo),new H(so,0,oo),new H(0,oo,-so),new H(0,oo,so),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,ro,io),this._renderer.xr.enabled=ao,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:gt,format:Ct,colorSpace:xn,depthBuffer:!1},r=fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uo(r)),this._blurMaterial=mo(r,e,t)}return r}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,r){let i=new wa(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(to),s.toneMapping=0,s.autoClear=!1;let u=new Li({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new W(new da,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(to),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;po(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;po(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=co[(r-t-1)%co.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new W(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):$a;m>$a&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$a}`);let h=[],g=0;for(let e=0;e<$a;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];po(t,3*v*(r>_-Za?r-_+Za:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,eo)}};function uo(e){let t=[],n=[],r=[],i=e,a=e-Za+1+Qa.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Za?s=Qa[o-e+Za-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Zi;h.setAttribute(`position`,new Bi(f,3)),h.setAttribute(`uv`,new Bi(p,2)),h.setAttribute(`faceIndex`,new Bi(m,1)),t.push(h),i>Za&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function fo(e,t,n){let r=new lr(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function po(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function mo(e,t,n){let r=new Float32Array($a),i=new H(0,1,0);return new ya({name:`SphericalGaussianBlur`,defines:{n:$a,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ho(){return new ya({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return new ya({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vo(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new lo(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new lo(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function yo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Hn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function bo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Rn(n)?Hi:Vi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function xo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function So(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Co(e,t,n){let r=new WeakMap,i=new sr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ur(h,p,m,u);g.type=ht,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function wo(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var To=class extends or{constructor(e,t,n,r,i,a,o,s,c,l=Et){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=mt),n===void 0&&l===1027&&(n=yt),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?rt:o,this.minFilter=s===void 0?rt:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Eo=new or,Do=new To(1,1),Oo=new ur,ko=new dr,Ao=new Oa,jo=[],Mo=[],No=new Float32Array(16),Po=new Float32Array(9),Fo=new Float32Array(4);function Io(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=jo[i];if(a===void 0&&(a=new Float32Array(i),jo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Lo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ro(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zo(e,t){let n=Mo[t];n===void 0&&(n=new Int32Array(t),Mo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lo(n,t))return;e.uniform2fv(this.addr,t),Ro(n,t)}}function Ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Lo(n,t))return;e.uniform3fv(this.addr,t),Ro(n,t)}}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lo(n,t))return;e.uniform4fv(this.addr,t),Ro(n,t)}}function Wo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ro(n,t)}else{if(Lo(n,r))return;Fo.set(r),e.uniformMatrix2fv(this.addr,!1,Fo),Ro(n,r)}}function Go(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ro(n,t)}else{if(Lo(n,r))return;Po.set(r),e.uniformMatrix3fv(this.addr,!1,Po),Ro(n,r)}}function Ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ro(n,t)}else{if(Lo(n,r))return;No.set(r),e.uniformMatrix4fv(this.addr,!1,No),Ro(n,r)}}function qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lo(n,t))return;e.uniform2iv(this.addr,t),Ro(n,t)}}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Lo(n,t))return;e.uniform3iv(this.addr,t),Ro(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lo(n,t))return;e.uniform4iv(this.addr,t),Ro(n,t)}}function Zo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lo(n,t))return;e.uniform2uiv(this.addr,t),Ro(n,t)}}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Lo(n,t))return;e.uniform3uiv(this.addr,t),Ro(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lo(n,t))return;e.uniform4uiv(this.addr,t),Ro(n,t)}}function ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Do.compareFunction=515,a=Do):a=Eo,n.setTexture2D(t||a,i)}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ko,i)}function rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ao,i)}function is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Oo,i)}function as(e){switch(e){case 5126:return Bo;case 35664:return Vo;case 35665:return Ho;case 35666:return Uo;case 35674:return Wo;case 35675:return Go;case 35676:return Ko;case 5124:case 35670:return qo;case 35667:case 35671:return Jo;case 35668:case 35672:return Yo;case 35669:case 35673:return Xo;case 5125:return Zo;case 36294:return Qo;case 36295:return $o;case 36296:return es;case 35678:case 36198:case 36298:case 36306:case 35682:return ts;case 35679:case 36299:case 36307:return ns;case 35680:case 36300:case 36308:case 36293:return rs;case 36289:case 36303:case 36311:case 36292:return is}}function os(e,t){e.uniform1fv(this.addr,t)}function ss(e,t){let n=Io(t,this.size,2);e.uniform2fv(this.addr,n)}function cs(e,t){let n=Io(t,this.size,3);e.uniform3fv(this.addr,n)}function ls(e,t){let n=Io(t,this.size,4);e.uniform4fv(this.addr,n)}function us(e,t){let n=Io(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ds(e,t){let n=Io(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fs(e,t){let n=Io(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ps(e,t){e.uniform1iv(this.addr,t)}function ms(e,t){e.uniform2iv(this.addr,t)}function hs(e,t){e.uniform3iv(this.addr,t)}function gs(e,t){e.uniform4iv(this.addr,t)}function _s(e,t){e.uniform1uiv(this.addr,t)}function vs(e,t){e.uniform2uiv(this.addr,t)}function ys(e,t){e.uniform3uiv(this.addr,t)}function bs(e,t){e.uniform4uiv(this.addr,t)}function xs(e,t,n){let r=this.cache,i=t.length,a=zo(n,i);Lo(r,a)||(e.uniform1iv(this.addr,a),Ro(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Eo,a[e])}function Ss(e,t,n){let r=this.cache,i=t.length,a=zo(n,i);Lo(r,a)||(e.uniform1iv(this.addr,a),Ro(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ko,a[e])}function Cs(e,t,n){let r=this.cache,i=t.length,a=zo(n,i);Lo(r,a)||(e.uniform1iv(this.addr,a),Ro(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ao,a[e])}function ws(e,t,n){let r=this.cache,i=t.length,a=zo(n,i);Lo(r,a)||(e.uniform1iv(this.addr,a),Ro(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Oo,a[e])}function Ts(e){switch(e){case 5126:return os;case 35664:return ss;case 35665:return cs;case 35666:return ls;case 35674:return us;case 35675:return ds;case 35676:return fs;case 5124:case 35670:return ps;case 35667:case 35671:return ms;case 35668:case 35672:return hs;case 35669:case 35673:return gs;case 5125:return _s;case 36294:return vs;case 36295:return ys;case 36296:return bs;case 35678:case 36198:case 36298:case 36306:case 35682:return xs;case 35679:case 36299:case 36307:return Ss;case 35680:case 36300:case 36308:case 36293:return Cs;case 36289:case 36303:case 36311:case 36292:return ws}}var Es=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=as(t.type)}},Ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ts(t.type)}},Os=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ks=/(\w+)(\])?(\[|\.)?/g;function As(e,t){e.seq.push(t),e.map[t.id]=t}function js(e,t,n){let r=e.name,i=r.length;for(ks.lastIndex=0;;){let a=ks.exec(r),o=ks.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){As(n,l===void 0?new Es(s,e,t):new Ds(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Os(s),As(n,e)),n=e}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);js(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ns(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ps=37297,Fs=0;function Is(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ls=new V;function Rs(e){Kn._getMatrix(Ls,Kn.workingColorSpace,e);let t=`mat3( ${Ls.elements.map(e=>e.toFixed(4))} )`;switch(Kn.getTransfer(e)){case Sn:return[t,`LinearTransferOETF`];case Cn:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Is(e.getShaderSource(t),r)}return i}function Bs(e,t){let n=Rs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Vs(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hs=new H;function Us(){return Kn.getLuminanceCoefficients(Hs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hs.x.toFixed(4)}, ${Hs.y.toFixed(4)}, ${Hs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ws(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(qs).join(`
`)}function Gs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ks(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qs(e){return e!==``}function Js(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ys(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(e){return e.replace(Xs,$s)}var Qs=new Map;function $s(e,t){let n=G[t];if(n===void 0){let e=Qs.get(t);if(e!==void 0)n=G[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Zs(n)}var ec=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(e){return e.replace(ec,nc)}function nc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function rc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function ic(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function ac(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function oc(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function sc(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function cc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function lc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ic(n),l=ac(n),u=oc(n),d=sc(n),f=cc(n),p=Ws(n),m=Gs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qs).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qs).join(`
`),_.length>0&&(_+=`
`)):(g=[rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qs).join(`
`),_=[rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Vs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Bs(`linearToOutputTexel`,n.outputColorSpace),Us(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qs).join(`
`)),o=Zs(o),o=Js(o,n),o=Ys(o,n),s=Zs(s),s=Js(s,n),s=Ys(s,n),o=tc(o),s=tc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ns(i,i.VERTEX_SHADER,y),S=Ns(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=zs(i,x,`vertex`),r=zs(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ms(i,h),T=Ks(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ps)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var uc=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fc(e),t.set(e,n)),n}},fc=class{constructor(e){this.id=uc++,this.code=e,this.usedTimes=0}};function pc(e,t,n,r,i,a,o){let s=new $r,c=new dc,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=Ba[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),ee=c.getFragmentShaderID(a);let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=_.isInstancedMesh===!0,re=_.isBatchedMesh===!0,j=!!a.map,M=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,N=!!a.bumpMap,P=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,F=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,I=a.iridescence>0,pe=a.sheen>0,L=a.transmission>0,me=ue&&!!a.anisotropyMap,R=de&&!!a.clearcoatMap,he=de&&!!a.clearcoatNormalMap,z=de&&!!a.clearcoatRoughnessMap,ge=I&&!!a.iridescenceMap,_e=I&&!!a.iridescenceThicknessMap,ve=pe&&!!a.sheenColorMap,ye=pe&&!!a.sheenRoughnessMap,be=!!a.specularMap,xe=!!a.specularColorMap,Se=!!a.specularIntensityMap,Ce=L&&!!a.transmissionMap,we=L&&!!a.thicknessMap,Te=!!a.gradientMap,Ee=!!a.alphaMap,De=a.alphaTest>0,Oe=!!a.alphaHash,ke=!!a.extensions,Ae=0;a.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:re,batchingColor:re&&_._colorsTexture!==null,instancing:A,instancingColor:A&&_.instanceColor!==null,instancingMorph:A&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xn,alphaToCoverage:!!a.alphaToCoverage,map:j,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:N,normalMap:P,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:P&&a.normalMapType===1,normalMapTangentSpace:P&&a.normalMapType===0,metalnessMap:le,roughnessMap:F,anisotropy:ue,anisotropyMap:me,clearcoat:de,clearcoatMap:R,clearcoatNormalMap:he,clearcoatRoughnessMap:z,dispersion:fe,iridescence:I,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:L,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:a.combine,mapUv:j&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:N&&h(a.bumpMap.channel),normalMapUv:P&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:F&&h(a.roughnessMap.channel),anisotropyMapUv:me&&h(a.anisotropyMap.channel),clearcoatMapUv:R&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:he&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(a.sheenRoughnessMap.channel),specularMapUv:be&&h(a.specularMap.channel),specularColorMapUv:xe&&h(a.specularColorMap.channel),specularIntensityMapUv:Se&&h(a.specularIntensityMap.channel),transmissionMapUv:Ce&&h(a.transmissionMap.channel),thicknessMapUv:we&&h(a.thicknessMap.channel),alphaMapUv:Ee&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(P||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(j||Ee),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ne,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:j&&a.map.isVideoTexture===!0&&Kn.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&Kn.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:ke&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&a.extensions.multiDraw===!0||re)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ba[t];n=ga.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new lc(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function mc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _c(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||hc),r.length>1&&r.sort(t||gc),i.length>1&&i.sort(t||gc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function vc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _c,e.set(t,[i])):n>=r.length?(i=new _c,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new U};break;case`SpotLight`:n={position:new H,direction:new H,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function bc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xc=0;function Sc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cc(e){let t=new yc,n=bc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Hr,o=new Hr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Sc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=xc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function wc(e){let t=new Cc(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Tc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wc(e),t.set(n,[a])):r>=i.length?(a=new wc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ec=class extends Ii{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends Ii{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Oc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ac(e,t,n){let r=new Ia,i=new B,a=new B,o=new sr,s=new Ec({depthPacking:yn}),c=new Dc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Oc,fragmentShader:kc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Zi;m.setAttribute(`position`,new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:rt,magFilter:rt};d.map!==null&&d.map.dispose(),d.map=new lr(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new lr(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var jc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Mc(e,t){function n(){let t=!1,n=new sr,r=null,i=new sr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=jc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,A=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=A>=1);let j=null,M={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new sr().fromArray(ie),N=new sr().fromArray(ae);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),me(!1),R(1),ce(e.CULL_FACE),pe(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function F(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m!==t&&(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let I={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(le(e.BLEND),h=!1);else if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(I[r],I[i],I[o],I[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function L(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),z(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function R(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function he(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function z(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||ee!==r)&&(e.polygonOffset(n,r),k=n,ee=r)):le(e.POLYGON_OFFSET_FILL)}function ge(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+te-1),j!==t&&(e.activeTexture(t),j=t)}function ve(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+te-1:j);let i=M[r];i===void 0&&(i={type:void 0,texture:void 0},M[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function ye(){let t=M[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function je(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},j=null,M={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:F,drawBuffers:ue,useProgram:de,setBlending:pe,setMaterial:L,setFlipSided:me,setCullFace:R,setLineWidth:he,setPolygonOffset:z,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Ae,viewport:je,reset:Pe}}function Nc(e,t,n,r){let i=Pc(r);switch(n){case xt:return e*t;case wt:return e*t;case Tt:return e*t*2;case Ot:return e*t/i.components*i.byteLength;case kt:return e*t/i.components*i.byteLength;case At:return e*t*2/i.components*i.byteLength;case jt:return e*t*2/i.components*i.byteLength;case St:return e*t*3/i.components*i.byteLength;case Ct:return e*t*4/i.components*i.byteLength;case Mt:return e*t*4/i.components*i.byteLength;case Nt:case Pt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ft:case It:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rt:case Bt:return Math.max(e,16)*Math.max(t,8)/4;case Lt:case zt:return Math.max(e,8)*Math.max(t,8)/2;case Vt:case Ht:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ut:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case qt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Jt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Yt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Xt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Zt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Qt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $t:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case en:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case tn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case nn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case an:case on:case sn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case cn:case ln:return Math.ceil(e/4)*Math.ceil(t/4)*8;case un:case dn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Pc(e){switch(e){case lt:case ut:return{byteLength:1,components:1};case ft:case dt:case gt:return{byteLength:2,components:1};case _t:case vt:return{byteLength:2,components:4};case mt:case pt:case ht:return{byteLength:4,components:1};case bt:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function Fc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):zn(`canvas`)}function h(e,t,n){let r=1,i=ge(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Sn:Kn.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function ee(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&he(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{N(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?N(a,t,i):n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function A(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?N(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?P(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let j={[et]:e.REPEAT,[tt]:e.CLAMP_TO_EDGE,[nt]:e.MIRRORED_REPEAT},M={[rt]:e.NEAREST,[it]:e.NEAREST_MIPMAP_NEAREST,[at]:e.NEAREST_MIPMAP_LINEAR,[ot]:e.LINEAR,[st]:e.LINEAR_MIPMAP_NEAREST,[ct]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,j[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,j[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,j[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,M[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,M[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=ee(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function N(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Kn.getPrimaries(Kn.workingColorSpace),r=o.colorSpace===``?null:Kn.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=z(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);ae(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===Dt,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,v,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=Nc(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=Nc(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=ge(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=ge(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function P(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Kn.getPrimaries(Kn.workingColorSpace),r=o.colorSpace===``?null:Kn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=z(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ge(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=me(n);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace),d=me(n);r&&R(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,a.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),te(i.depthTexture,0);let o=a.__webglTexture,c=me(i);if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function F(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);le(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,i){let a=r.get(t);n!==void 0&&se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&F(t)}function de(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),ae(e.TEXTURE_2D,a),se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&F(t)}function fe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let I=[],pe=[];function L(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(I.length=0,pe.length=0,I.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(I.push(l),pe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function me(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function he(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function z(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Kn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ge(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=A,this.setTextureCube=re,this.rebindTextures=ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=se,this.useMultisampledRTT=R}function Ic(e,t){function n(n,r=``){let i,a=Kn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Lc=class extends wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rc=class extends hi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zc={type:`move`},Bc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new or,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ya({vertexShader:Vc,fragmentShader:Hc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new za(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Dn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new Uc,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new B,x=null,S=new wa;S.viewport=new sr;let C=new wa;C.viewport=new sr;let w=[S,C],T=new Lc,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new Bc,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new Bc,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new Bc,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,ee),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new lr(f.framebufferWidth,f.framebufferHeight,{format:Ct,type:lt,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?Dt:Et,a=h.stencil?yt:mt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new lr(d.textureWidth,d.textureHeight,{format:Ct,type:lt,depthTexture:new To(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let te=new H,ne=new H;function A(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far),S.layers.mask=e.layers.mask|2,C.layers.mask=e.layers.mask|4,T.layers.mask=S.layers.mask|C.layers.mask;let i=e.parent,a=T.cameras;re(T,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?A(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),j(e,T,i)};function j(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=An*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let M=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new wa,o.layers.enable(r),o.viewport=new sr,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new La;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},Gc=new Qr,Kc=new Hr;function qc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Gc.copy(o),Gc.x*=-1,Gc.y*=-1,Gc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Gc.y*=-1,Gc.z*=-1),e.envMapRotation.value.setFromMatrix4(Kc.makeRotationFromEuler(Gc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Jc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Yc=class{constructor(e={}){let{canvas:t=Bn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=0,this.toneMappingExposure=1;let y=this,b=!1,x=0,S=0,C=null,w=-1,T=null,E=new sr,D=new sr,O=null,k=new U(0),ee=0,te=t.width,ne=t.height,A=1,re=null,j=null,M=new sr(0,0,te,ne),ie=new sr(0,0,te,ne),ae=!1,oe=new Ia,N=!1,P=!1,se=new Hr,ce=new Hr,le=new H,F=new sr,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return C===null?A:1}let I=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),I===null){let t=`webgl2`;if(I=pe(t,e),I===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let L,me,R,he,z,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;function Fe(){L=new yo(I),L.init(),Me=new Ic(I,L),me=new qa(I,L,e,Me),R=new Mc(I,L),me.reverseDepthBuffer&&d&&R.buffers.depth.setReversed(!0),he=new So(I),z=new mc,ge=new Fc(I,L,R,z,me,Me,he),_e=new Ya(y),ve=new vo(y),ye=new Ra(I),Ne=new Ga(I,ye),be=new bo(I,ye,he,Ne),xe=new wo(I,be,ye,he),ke=new Co(I,me,ge),Ee=new Ja(z),Se=new pc(y,_e,ve,L,me,Ne,Ee),Ce=new qc(y,z),we=new vc,Te=new Tc(L),Oe=new Wa(y,_e,ve,R,xe,f,s),De=new Ac(y,xe,me),Pe=new Jc(I,he,me,R),Ae=new Ka(I,L,he),je=new xo(I,L,he),he.programs=Se.programs,y.capabilities=me,y.extensions=L,y.properties=z,y.renderLists=we,y.shadowMap=De,y.state=R,y.info=he}Fe();let Ie=new Wc(y,I);this.xr=Ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=L.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=L.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(e){e!==void 0&&(A=e,this.setSize(te,ne,!1))},this.getSize=function(e){return e.set(te,ne)},this.setSize=function(e,n,r=!0){Ie.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(te=e,ne=n,t.width=Math.floor(e*A),t.height=Math.floor(n*A),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(te*A,ne*A).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,ne=n,A=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(M)},this.setViewport=function(e,t,n,r){e.isVector4?M.set(e.x,e.y,e.z,e.w):M.set(e,t,n,r),R.viewport(E.copy(M).multiplyScalar(A).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),R.scissor(D.copy(ie).multiplyScalar(A).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){R.setScissorTest(ae=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){j=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,I.clearBufferuiv(I.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,I.clearBufferiv(I.COLOR,0,m))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),we.dispose(),Te.dispose(),z.dispose(),_e.dispose(),ve.dispose(),xe.dispose(),Ne.dispose(),Pe.dispose(),Se.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=he.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Fe(),he.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),z.remove(e)}function He(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=rt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=ye.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*fe()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(L.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ye.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=Te.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}}),v.pop(),g=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){z.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}L.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new La;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=Te.get(e,v.length),g.init(t),v.push(g),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),oe.setFromProjectionMatrix(ce),P=this.localClippingEnabled,N=Ee.init(this.clippingPlanes,P),h=we.get(e,_.length),h.init(),_.push(h),Ie.enabled===!0&&Ie.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,y.sortObjects)}Ye(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(re,j),de=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,de&&Oe.addToRenderList(h,e),this.info.render.frame++,N===!0&&Ee.beginShadows();let n=g.state.shadowsArray;De.render(n,e,t),N===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Ze(r,i,e,a)}de&&Oe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Xe(h,e,r,r.viewport)}}else i.length>0&&Ze(r,i,e,t),de&&Oe.render(e),Xe(h,e,t);C!==null&&(ge.updateMultisampleRenderTarget(C),ge.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),Ne.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],N===!0&&Ee.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||oe.intersectsSprite(e)){r&&F.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);let t=xe.update(e),i=e.material;i.visible&&h.push(e,t,i,n,F.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||oe.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),F.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),F.copy(e.boundingSphere.center)),F.applyMatrix4(e.matrixWorld).applyMatrix4(ce)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,F.z,o)}}else i.visible&&h.push(e,t,i,n,F.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),N===!0&&Ee.setGlobalState(y.clippingPlanes,n),r&&R.viewport(E.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new lr(1,1,{generateMipmaps:!0,type:L.has(`EXT_color_buffer_half_float`)||L.has(`EXT_color_buffer_float`)?gt:lt,minFilter:ct,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kn.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z,o.w);let s=y.getRenderTarget();y.setRenderTarget(a),y.getClearColor(k),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),de&&Oe.render(n);let c=y.toneMapping;y.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),N===!0&&Ee.setGlobalState(y.clippingPlanes,r),Qe(e,n,r),ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a),L.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,$e(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a))}y.setRenderTarget(s),y.setClearColor(k,ee),l!==void 0&&(r.viewport=l),y.toneMapping=c}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&$e(o,t,n,s,c,l)}}function $e(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=ue);let r=z.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ve:_e).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return nt(e,s),u}else s.uniforms=Se.getUniforms(e),e.onBeforeCompile(s,y),u=Se.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=at(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ms.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t,n,r,i){t.isScene!==!0&&(t=ue),ge.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xn,c=(r.isMeshStandardMaterial?ve:_e).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=z.get(r),b=g.state.lights;if(N===!0&&(P===!0||e!==T)){let t=e===T&&r.id===w;Ee.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ee.numPlanes||v.numIntersection!==Ee.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=et(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),ee=v.uniforms;if(R.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){R.buffers.depth.getReversed()?(se.copy(e.projectionMatrix),Wn(se),Gn(se),k.setValue(I,`projectionMatrix`,se)):k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,le.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(I,i,`bindMatrix`),k.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,ge))}i.isBatchedMesh&&(k.setOptional(I,i,`batchingTexture`),k.setValue(I,`batchingTexture`,i._matricesTexture,ge),k.setOptional(I,i,`batchingIdTexture`),k.setValue(I,`batchingIdTexture`,i._indirectTexture,ge),k.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(I,`batchingColorTexture`,i._colorsTexture,ge));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&ke.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(I,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(ee.envMap.value=c,ee.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(I,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&it(ee,O),a&&r.fog===!0&&Ce.refreshFogUniforms(ee,a),Ce.refreshMaterialUniforms(ee,r,A,ne,g.state.transmissionRenderTarget[e.id]),Ms.upload(I,tt(v),ee,ge)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ms.upload(I,tt(v),ee,ge),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(I,`center`,i.center),k.setValue(I,`modelViewMatrix`,i.modelViewMatrix),k.setValue(I,`normalMatrix`,i.normalMatrix),k.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,S),Pe.bind(n,S)}}return S}function it(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function at(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=n;let r=z.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||L.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=z.get(e);if(s.__useDefaultFramebuffer!==void 0)R.bindFramebuffer(I.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)ge.setupRenderTarget(e);else if(s.__hasExternalTextures)ge.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);ge.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&ge.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(M).multiplyScalar(A).floor(),D.copy(ie).multiplyScalar(A).floor(),O=ae;if(R.bindFramebuffer(I.FRAMEBUFFER,i)&&r&&R.drawBuffers(e,i),R.viewport(E),R.scissor(D),R.setScissorTest(O),a){let r=z.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=z.get(e.texture),i=t||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){R.bindFramebuffer(I.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!me.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!me.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Me.convert(s),Me.convert(c),a)}finally{let e=C===null?null:z.get(C).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!me.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!me.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(I.FRAMEBUFFER,s);let e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,e),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Me.convert(c),Me.convert(l),0);let o=C===null?null:z.get(C).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,o);let u=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Un(I,u,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(e),I.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Hn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ge.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Hn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Me.convert(t.format),g=Me.convert(t.type),_;t.isData3DTexture?(ge.setTexture3D(t,0),_=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ge.setTexture2DArray(t,0),_=I.TEXTURE_2D_ARRAY):(ge.setTexture2D(t,0),_=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let v=I.getParameter(I.UNPACK_ROW_LENGTH),y=I.getParameter(I.UNPACK_IMAGE_HEIGHT),b=I.getParameter(I.UNPACK_SKIP_PIXELS),x=I.getParameter(I.UNPACK_SKIP_ROWS),S=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,m.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,m.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,c),I.pixelStorei(I.UNPACK_SKIP_ROWS,l),I.pixelStorei(I.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=z.get(e),r=z.get(t),m=z.get(n.__renderTarget),h=z.get(r.__renderTarget);R.bindFramebuffer(I.READ_FRAMEBUFFER,m.__webglFramebuffer),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(t).__webglTexture,i,p+n),I.blitFramebuffer(c,l,a,o,d,f,a,o,I.DEPTH_BUFFER_BIT,I.NEAREST)):w?I.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):I.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):I.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):I.texSubImage2D(I.TEXTURE_2D,i,d,f,a,o,h,g,m);I.pixelStorei(I.UNPACK_ROW_LENGTH,v),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,y),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b),I.pixelStorei(I.UNPACK_SKIP_ROWS,x),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&I.generateMipmap(_),R.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(Hn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),Hn(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&ge.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ge.setTextureCube(e,0):e.isData3DTexture?ge.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ge.setTexture2DArray(e,0):ge.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,R.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Kn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Kn._getUnpackColorSpace()}},Xc=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zc=class extends hi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qc=class extends or{constructor(e=null,t=1,n=1,r,i,a,o,s,c=rt,l=rt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$c=class extends Bi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},el=new Hr,tl=new Hr,nl=[],rl=new hr,il=new Hr,al=new W,ol=new Nr,sl=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,il)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,el),rl.copy(e.boundingBox).applyMatrix4(el),this.boundingBox.union(rl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,el),ol.copy(e.boundingSphere).applyMatrix4(el),this.boundingSphere.union(ol)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(al.geometry=this.geometry,al.material=this.material,al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(n),e.ray.intersectsSphere(ol)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,el),tl.multiplyMatrices(n,el),al.matrixWorld=tl,al.raycast(e,nl);for(let e=0,n=nl.length;e<n;e++){let n=nl[e];n.instanceId=i,n.object=this,t.push(n)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qc(new Float32Array(r*this.count),r,this.count,Ot,ht));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},cl=class extends Ii{static get type(){return`LineBasicMaterial`}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ll=new H,ul=new H,dl=new Hr,fl=new Vr,pl=new Nr,ml=new H,hl=new H,gl=class extends hi{constructor(e=new Zi,t=new cl){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ll.fromBufferAttribute(t,e-1),ul.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ll.distanceTo(ul);e.setAttribute(`lineDistance`,new Ui(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),pl.radius+=i,e.ray.intersectsSphere(pl)===!1)return;dl.copy(r).invert(),fl.copy(e.ray).applyMatrix4(dl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=_l(this,e,fl,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=_l(this,e,fl,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=_l(this,e,fl,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=_l(this,e,fl,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _l(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(ll.fromBufferAttribute(o,i),ul.fromBufferAttribute(o,a),n.distanceSqToSegment(ll,ul,ml,hl)>r)return;ml.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(ml);if(!(s<t.near||s>t.far))return{distance:s,point:hl.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var vl=new H,yl=new H,bl=class extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)vl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+vl.distanceTo(yl);e.setAttribute(`lineDistance`,new Ui(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},xl=class extends Ii{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sl=new Hr,Cl=new Vr,wl=new Nr,Tl=new H,El=class extends hi{constructor(e=new Zi,t=new xl){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),wl.radius+=i,e.ray.intersectsSphere(wl)===!1)return;Sl.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(Sl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Tl.fromBufferAttribute(l,n),Dl(Tl,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Tl.fromBufferAttribute(l,a),Dl(Tl,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Dl(e,t,n,r,i,a,o){let s=Cl.distanceSqToPoint(e);if(s<n){let n=new H;Cl.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ol=class extends or{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kl=class e extends Zi{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Mn(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new B,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Ui(a,3)),this.setAttribute(`uv`,new Ui(o,2)),this.setAttribute(`normal`,new Ui(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Al=class e extends Zi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ui(a,3)),this.setAttribute(`normal`,new Ui(o,3)),this.setAttribute(`uv`,new Ui(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jl=class e extends Zi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ui(u,3)),this.setAttribute(`normal`,new Ui(d,3)),this.setAttribute(`uv`,new Ui(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ml=class e extends jl{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nl=class e extends Zi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ui(i,3)),this.setAttribute(`normal`,new Ui(i.slice(),3)),this.setAttribute(`uv`,new Ui(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Pl=class e extends Nl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Fl=class e extends Nl{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Il=class e extends Zi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ui(s,3)),this.setAttribute(`normal`,new Ui(c,3)),this.setAttribute(`uv`,new Ui(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ll=class e extends Zi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ui(p,3)),this.setAttribute(`normal`,new Ui(m,3)),this.setAttribute(`uv`,new Ui(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Rl=class e extends Zi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new H,u=new H,d=new H;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Ui(o,3)),this.setAttribute(`normal`,new Ui(s,3)),this.setAttribute(`uv`,new Ui(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},zl=class extends Ii{static get type(){return`MeshStandardMaterial`}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bl=class extends Ii{static get type(){return`MeshLambertMaterial`}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Vl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Hl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ul=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Wl=class extends Ul{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hn,endingEnd:hn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case gn:i=e,o=2*t-n;break;case _n:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case gn:a=e,s=2*n-t;break;case _n:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Gl=class extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Kl=class extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ql=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Vl(t,this.TimeBufferType),this.values=Vl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vl(e.times,Array),values:Vl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fn:t=this.InterpolantFactoryMethodDiscrete;break;case pn:t=this.InterpolantFactoryMethodLinear;break;case mn:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fn;case this.InterpolantFactoryMethodLinear:return pn;case this.InterpolantFactoryMethodSmooth:return mn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Hl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===mn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ql.prototype.TimeBufferType=Float32Array,ql.prototype.ValueBufferType=Float32Array,ql.prototype.DefaultInterpolation=pn;var Jl=class extends ql{constructor(e,t,n){super(e,t,n)}};Jl.prototype.ValueTypeName=`bool`,Jl.prototype.ValueBufferType=Array,Jl.prototype.DefaultInterpolation=fn,Jl.prototype.InterpolantFactoryMethodLinear=void 0,Jl.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends ql{};Yl.prototype.ValueTypeName=`color`;var Xl=class extends ql{};Xl.prototype.ValueTypeName=`number`;var Zl=class extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)fr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ql=class extends ql{InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};Ql.prototype.ValueTypeName=`quaternion`,Ql.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends ql{constructor(e,t,n){super(e,t,n)}};$l.prototype.ValueTypeName=`string`,$l.prototype.ValueBufferType=Array,$l.prototype.DefaultInterpolation=fn,$l.prototype.InterpolantFactoryMethodLinear=void 0,$l.prototype.InterpolantFactoryMethodSmooth=void 0;var eu=class extends ql{};eu.prototype.ValueTypeName=`vector`;var tu=class extends hi{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},nu=class extends tu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(hi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ru=new Hr,iu=new H,au=new H,ou=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.map=null,this.mapPass=null,this.matrix=new Hr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new sr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},su=class extends ou{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cu=class extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(hi.DEFAULT_UP),this.updateMatrix(),this.target=new hi,this.shadow=new su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lu=`\\[\\]\\.:\\/`,uu=RegExp(`[\\[\\]\\.:\\/]`,`g`),du=`[^\\[\\]\\.:\\/]`,fu=`[^`+lu.replace(`\\.`,``)+`]`,pu=`((?:WC+[\\/:])*)`.replace(`WC`,du),mu=`(WCOD+)?`.replace(`WCOD`,fu),hu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,du),gu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,du),_u=RegExp(`^`+pu+mu+hu+gu+`$`),vu=[`material`,`materials`,`bones`,`map`],yu=class{constructor(e,t,n){let r=n||bu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(uu,``)}static parseTrackName(e){let t=_u.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);vu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bu.Composite=yu,bu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},bu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},bu.prototype.GetterByBindingType=[bu.prototype._getValue_direct,bu.prototype._getValue_array,bu.prototype._getValue_arrayElement,bu.prototype._getValue_toArray],bu.prototype.SetterByBindingTypeAndVersioning=[[bu.prototype._setValue_direct,bu.prototype._setValue_direct_setNeedsUpdate,bu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_array,bu.prototype._setValue_array_setNeedsUpdate,bu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_arrayElement,bu.prototype._setValue_arrayElement_setNeedsUpdate,bu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_fromArray,bu.prototype._setValue_fromArray_setNeedsUpdate,bu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var xu=.5,Su=2.2,Cu=r.earth,wu=Cu.stops.filter(e=>!e.carrier),Tu=Cu.stops.filter(e=>e.carrier),Eu=(e,t)=>Math.abs(e)<=34&&Math.abs(t)<=(e>24?7-(e-24)*.45:7),Du=new Map,Ou=new Map,ku=()=>Cu;function Au(e){Cu.id!==e&&(Cu=r[e],wu=Cu.stops.filter(e=>!e.carrier),Tu=Cu.stops.filter(e=>e.carrier),Du.clear(),Ou.clear())}var ju,Mu,Nu;function Pu(e){let t=wu,r=t.length;if(e<=t[0].x)ju=Mu=n[t[0].biome],Nu=0;else{for(let i=0;i<r-1;i++)if(e<t[i+1].x){ju=n[t[i].biome],Mu=n[t[i+1].biome],Nu=se(.3,.7,(e-t[i].x)/(t[i+1].x-t[i].x));return}ju=Mu=n[t[r-1].biome],Nu=0}}function Fu(e){return Pu(e),{cloud:P(ju.cloud,Mu.cloud,Nu),storm:P(ju.storm,Mu.storm,Nu),deep:Nu<.5?ju.pal.water[0]:Mu.pal.water[0]}}function Iu(e){return Pu(e),(Nu<.5?ju:Mu).id}var Lu,Ru;function zu(e,t,n){Pu(e),Ru=P(ju.hs,Mu.hs,Nu);let r=Cu.seed,i=ae(e/70,t/70,r,5)*.65+ie(e/260+31.7,t/260-12.3,r+99)*.35-P(ju.sea,Mu.sea,Nu);for(let r=0;r<n.length;r++){let a=n[r];if(a.carrier)continue;let o=(e-a.x)*.7,s=t-a.y,c=o*o+s*s;c<8100&&(i+=(1.5/Ru-i)*se(90,40,Math.sqrt(c)))}for(let n=0;n<Tu.length;n++){let r=e-Tu[n].x,a=t-Tu[n].y,o=r*r+a*a;o>1849e4||(i=P(i,Math.min(i,-.09),se(4300,3900,Math.sqrt(o))),!Bu&&Eu(r,a)&&(i=1.5/Ru))}Lu=i}var Bu=!1,Vu=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Hu(e,t,n){Bu=!0,zu(e,t,Cu.stops),Bu=!1;let r=Lu,i=Ru,a=ju.pal,o=Mu.pal,s=Nu,c,l,u;if(n.wood=!1,r>0){let d=Math.min(10.999,1+r*i),f=Math.floor(d),p=Vu(.5,1,d-f),m=Math.min(11,f+1);n.h=(f+p)*Su*Vu(0,.4,r*i),n.lf=d;let h=a.land[f],g=a.land[m],_=o.land[f],v=o.land[m];c=P(P(h[0],g[0],p),P(_[0],v[0],p),s),l=P(P(h[1],g[1],p),P(_[1],v[1],p),s),u=P(P(h[2],g[2],p),P(_[2],v[2],p),s);let y=.9+.2*ie(e/11,t/11,Cu.seed+5);(s<.5?ju:Mu).trees&&d>=3&&d<6&&ie(e/8+3.3,t/8-8.1,Cu.seed+11)>.5&&(n.wood=!0,y*=.72),c*=y,l*=y,u*=y}else{n.lf=0;let d=Math.min(1,-r/.07);if(Cu.water){n.h=Math.max(-7,r*i*1.7);let e=a.water[3],t=a.water[1],f=o.water[3],p=o.water[1];c=P(P(e[0],t[0],d),P(f[0],p[0],d),s),l=P(P(e[1],t[1],d),P(f[1],p[1],d),s),u=P(P(e[2],t[2],d),P(f[2],p[2],d),s)}else{n.h=0;let r=a.water[2],i=a.water[0],f=o.water[2],p=o.water[0],m=.92+.16*ie(e/5,t/5,Cu.seed+3);c=P(P(r[0],i[0],d),P(f[0],p[0],d),s)*m,l=P(P(r[1],i[1],d),P(f[1],p[1],d),s)*m,u=P(P(r[2],i[2],d),P(f[2],p[2],d),s)*m}}return n.r=c/255,n.g=l/255,n.b=u/255,n}var Uu=(e,t)=>e>0?Math.min(11,1+Math.floor(e*t)):0;function q(e,t){return zu(Math.floor(e/xu)*xu,Math.floor(t/xu)*xu,Cu.stops),Uu(Lu,Ru)}function Wu(e,t){let n=Cu.stops;for(let r=0;r<n.length;r++)if(Math.abs(e-n[r].x)<30&&Math.abs(t-n[r].y)<10)return r;return-1}var Gu=96;function Ku(e,t){let n=e+`,`+t,r=Ou.get(n);if(r)return r;if(r=[],Cu.clouds){let n=e*Gu,i=t*Gu,a=Fu(n+Gu/2),o=ie(e/2.5+5.1,t/2.5-3.3,Cu.seed+7)>1-a.storm,s=o?2:+(M(e,t,21)<a.cloud)+ +(M(e,t,22)<a.cloud*.4);for(let a=0;a<s;a++){let s=n+M(e,t,30+a)*Gu,c=i+M(e,t,40+a)*Gu,l=o&&M(e,t,50+a)>.25;for(let e of Cu.stops)Math.abs(s-e.x)<240&&Math.abs(c-e.y)<240&&(l=!1);let u=Math.floor(M(e,t,60+a)*100);r.push(l?{x:s,y:c,storm:l,variant:u,vs:2,alt:12,top:30,rad:26,rot:M(e,t,70+a)*6.28}:{x:s,y:c,storm:l,variant:u,vs:.9+M(e,t,80+a)*.7,alt:13+M(e,t,90+a)*12,top:0,rad:12,rot:M(e,t,70+a)*6.28})}}return Ou.size>600&&Ou.clear(),Ou.set(n,r),r}function qu(e,t,n,r,i){i.length=0;let a=r*.9,o=r*.35,s=e-a,c=t-o,l=Math.floor((s-n)/Gu),u=Math.floor((s+n)/Gu),d=Math.floor((c-n)/Gu),f=Math.floor((c+n)/Gu);for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let n=Ku(t,e);for(let e=0;e<n.length;e++){let t=n[e];t.wx=t.x+a,t.wy=t.y+o,i.push(t)}}return i}var Ju=72,Yu=new Map,Xu=null;function Zu(e,t){let n=new A(t.len+6,t.wid+4,t.leg+t.hgt+5),r=2+t.len-1,i=2+t.wid-1,a=t.leg;n.box(2,2,a,r,i,a+t.hgt-1,t.body);let o=+!!e;for(let[e,s,c]of[[r,2,o],[r,i,1-o],[2,2,1-o],[2,i,o]])n.box(e+ +!!c-(e===2?0:1),s,0,e+ +!!c-(e===2?0:1),s,a-1,t.legCol||t.body);let s=Math.round((2+i)/2),c=a+t.hgt-1+(t.neck||0);return t.neck&&n.box(r+1,s,a+t.hgt-1,r+1,s,c,t.body),n.box(r+1,s,c,r+2,s,c,t.head||t.body),n.put(1,s,a+t.hgt-1,t.tail||t.body),t.extra&&t.extra(n,{x0:2,x1:r,y0:2,y1:i,cy:s,top:a+t.hgt,hx:r+1,hz:c+1}),j(n)}var Qu=e=>[Zu(0,e),Zu(1,e)];function $u(e,t){let n=new A(27,11,8);return n.ellipsoid(13,5,3,10,3.4,2.6,(n,r,i)=>i<2?t:e),n.box(1,5,3,4,5,3,e),n.box(0,2,3,1,8,3,e),n.box(15,1,2,17,9,2,e),n.put(9,5,6,e),n.put(21,4,5,790036),n.put(21,6,5,790036),j(n)}function ed(){let e=new A(17,9,9),t=1842726,n=15922421;return e.ellipsoid(8,4,3,6.6,2.3,2.2,(e,r,i)=>i<2?n:t),e.box(0,2,3,1,6,3,t),e.box(1,4,3,3,4,3,t),e.box(7,4,5,8,4,8,t),e.put(7,4,8,0),e.box(10,1,2,11,7,2,t),e.put(12,3,4,n),e.put(12,5,4,n),e.box(5,3,5,6,5,5,9080732),j(e)}function td(e,t,n){let r=new A(5,9,4);return r.box(1,4,1,3,4,1,t),r.put(4,4,1,15769648),e?(r.box(2,2,2,2,3,2,t),r.box(2,5,2,2,6,2,t),r.put(2,1,3,n),r.put(2,7,3,n)):(r.box(2,1,1,2,7,1,t),r.put(2,0,1,n),r.put(2,8,1,n)),j(r)}function nd(){let e=new A(4,3,5),t=1842726;return e.box(1,0,0,2,2,3,t),e.box(1,1,4,2,1,4,t),e.box(2,1,0,2,1,3,16053751),e.put(3,1,4,15769648),j(e)}function rd(){let e=(e,t)=>{e.put(t.hx,t.cy-1,t.hz,14207144),e.put(t.hx,t.cy+1,t.hz,14207144),e.put(t.hx-1,t.cy-1,t.hz+1,14207144),e.put(t.hx-1,t.cy+1,t.hz+1,14207144)},t=(e,t)=>{e.put(t.hx,t.cy-2,t.hz-1,14209216),e.put(t.hx,t.cy+2,t.hz-1,14209216),e.put(t.hx,t.cy-1,t.hz-1,14209216),e.put(t.hx,t.cy+1,t.hz-1,14209216)},n=(e,t)=>e.box(t.x0+2,t.cy,t.top,t.x0+3,t.cy,t.top+1,12095573),r=(e,t)=>e.box(t.x1,t.cy,t.top,t.x1+1,t.cy,t.top+1,3351578),i=nd();Xu={sheep:{f:Qu({len:4,wid:3,hgt:2,leg:1,body:15921126,legCol:2763310,head:2763310}),vs:.36},deer:{f:Qu({len:5,wid:2,hgt:2,leg:2,neck:2,body:10119744,tail:16052710,extra:e}),vs:.36},horse:{f:Qu({len:6,wid:2,hgt:2,leg:3,neck:2,body:8014380,tail:3351578,extra:r}),vs:.36},buffalo:{f:Qu({len:6,wid:3,hgt:3,leg:2,body:4868690,extra:t}),vs:.36},camel:{f:Qu({len:6,wid:2,hgt:2,leg:3,neck:3,body:13215082,extra:n}),vs:.36},penguin:{f:[i,i],vs:.4},whale:{f:[$u(4678271,12175574)],vs:.7},glow:{f:[$u(3981230,14286838)],vs:.7},orca:{f:[ed()],vs:.55},gull:{f:[td(0,16053751,6975354),td(1,16053751,6975354)],vs:.62},crane:{f:[td(0,16053751,1842726),td(1,16053751,1842726)],vs:.72}}}var id={temperate:[`sheep`,`deer`],tropical:[`deer`],desert:[`camel`],alpine:[`deer`],arctic:[`penguin`],loess:[`horse`,`buffalo`],guanzhong:[`horse`,`buffalo`],plain:[`buffalo`,`horse`],jiangnan:[`buffalo`]},ad={temperate:`gull`,tropical:`gull`,arctic:`gull`,desert:`gull`,alpine:`gull`,volcanic:`gull`,loess:`crane`,guanzhong:`crane`,plain:`crane`,jiangnan:`crane`,alien:`crane`};function od(e,t){let n=ku(),r=n.id+`:`+e+`,`+t,i=Yu.get(r);if(i!==void 0)return i;i=[];let a=(e+.2+M(e,t,111)*.6)*Ju,o=(t+.2+M(e,t,112)*.6)*Ju,s=q(a,o),c=Iu(a),l=M(e,t,101),u=M(e,t,103)*6.283,d=!1;for(let e of n.stops)Math.abs(a-e.x)<34&&Math.abs(o-e.y)<22&&(d=!0);if(s===0&&n.water){if(!q(a+12,o)&&!q(a-12,o)&&!q(a,o+12)&&!q(a,o-12)&&l<.055){let n=c===`alien`?`glow`:l<.025?`whale`:`orca`;i.push({type:`sea`,kind:n,n:n===`orca`?2+Math.floor(M(e,t,104)*2):1,x:a,y:o,ph:u,head:M(e,t,105)*6.283})}}else if(s>=2&&s<=3&&id[c]&&!d&&l<.5){let n=id[c];i.push({type:`herd`,kind:n[Math.floor(M(e,t,106)*n.length)],n:3+Math.floor(M(e,t,107)*4),x:a,y:o,ph:u,scare:0,away:0})}return ad[c]&&M(e,t,102)<.34&&i.push({type:`flock`,kind:ad[c],n:5+Math.floor(M(e,t,110)*5),x:a,y:o,ph:u,alt:s*Su+2.5+M(e,t,108)*3.5,dir:M(e,t,109)<.5?1:-1}),Yu.size>500&&Yu.clear(),Yu.set(r,i),i}var sd=0;function cd(e,t,n,r,i,a){Xu||rd(),a.length=0;let o=Math.min(.1,Math.max(0,r-sd));sd=r;for(let s=Math.floor((t-n)/Ju);s<=Math.floor((t+n)/Ju);s++)for(let t=Math.floor((e-n)/Ju);t<=Math.floor((e+n)/Ju);t++)for(let e of od(t,s)){let t=Xu[e.kind];if(e.type===`herd`){Math.hypot(i.x-e.x,i.y-e.y)<30&&i.alt<q(e.x,e.y)*2.2+14?(e.scare=Math.min(1,e.scare+o*2.5),e.away=Math.atan2(e.y-i.y,e.x-i.x)):e.scare=Math.max(0,e.scare-o*.2);let n=e.x+Math.cos(r*.05+e.ph)*5+Math.cos(e.away)*e.scare*16,s=e.y+Math.sin(r*.05+e.ph)*5+Math.sin(e.away)*e.scare*16,c=e.scare>.05&&e.scare<.98;for(let i=0;i<e.n;i++){let o=e.ph+i*2.4,l=2+i%3*2.2,u=n+Math.cos(o)*l,d=s+Math.sin(o)*l,f=q(u,d);f<1||a.push({m:t.f[c?Math.floor(r*10+i)%2:Math.floor(r*1.5+i*.7)%2&&i%2?1:0],kind:e.kind,run:c,x:u,y:d,z:f*Su,rot:c?e.away+Math.sin(i*7)*.3:e.ph+i*1.3+Math.sin(r*.1+i)*.6,vs:t.vs,alpha:1})}}else if(e.type===`sea`){let n=e.kind===`orca`?2:1;for(let i=0;i<e.n;i++){let o=r*.03*n+e.ph+i*.35,s=Math.sin(o)*28,c=Math.cos(o)<0,l=(i-(e.n-1)/2)*7,u=e.x+Math.cos(e.head)*s-Math.sin(e.head)*l,d=e.y+Math.sin(e.head)*s+Math.cos(e.head)*l,f=Math.sin(r*.45*n+e.ph+i*1.9),p=f*1.5-1.2;a.push({kind:e.kind,sea:!0,m:t.f[0],x:u,y:d,z:p,rot:e.head+(c?Math.PI:0),vs:t.vs,alpha:Math.max(.22,Math.min(1,.3+(p+1.6)*.75)),spout:e.kind!==`orca`&&f>.86})}}else for(let n=0;n<e.n;n++){let i=(r*.22+e.ph)*e.dir-Math.ceil(n/2)*.16*e.dir,o=16+(n%2?1:-1)*Math.ceil(n/2)*1.6;a.push({kind:e.kind,bird:!0,ph:n*.6,m:t.f[Math.floor(r*5+n*.6)%2],x:e.x+Math.cos(i)*o,y:e.y+Math.sin(i)*o,z:e.alt,rot:i+Math.PI/2*e.dir,vs:t.vs,alpha:1})}}return a}var ld=new Map,J=(e,t)=>{let n=e+JSON.stringify(t||0),r=ld.get(n);return r||(r=new zl({color:e,roughness:.55,metalness:.08,...t}),ld.set(n,r)),r},ud=()=>J(1849946,{roughness:.08,metalness:.5}),dd=2763827,fd=9278364;function Y(e,t,n=0,r=0,i=0){return t.position.set(n,r,i),t.castShadow=!0,e.add(t),t}function pd(e,t,n=1,r=1,i=16){let a=new W(new kl(e.map(([e,t])=>new B(Math.max(5e-4,t),e)),i).rotateZ(-Math.PI/2),t);return a.scale.set(1,n,r),a}function md(e,t,n,r,i,a,o,s,c){let l=(e,t,n,r,i)=>[[e,n,i],[e-t*.3,n+r/2,i],[e-t,n,i],[e-t*.3,n-r/2,i]],u=l(e,t,n,r,0),d=l(i,a,o,s,c),f=[],p=(e,t,n,r)=>f.push(...e,...t,...n,...e,...n,...r);for(let e=0;e<4;e++){let t=(e+1)%4;p(u[e],d[e],d[t],u[t])}p(d[0],d[3],d[2],d[1]),p(u[0],u[1],u[2],u[3]);let m=new Zi;return m.setAttribute(`position`,new Ui(f,3)),m.computeVertexNormals(),m}function hd(e,t,n){let r=md(n.x,n.chord,0,n.thick||.02,n.tipX??n.x,n.tipChord??n.chord,(n.tipY??n.y)-n.y,n.tipThick??(n.thick||.02)*.6,n.span),i=Y(e,new W(r,t),0,n.y,n.z0||0),a=Y(e,new W(r,t),0,n.y,-(n.z0||0));return a.scale.z=-1,t.side=2,[i,a]}function gd(e,t,n){let r=Y(e,new W(md(n.x,n.chord,0,n.thick||.015,n.tipX??n.x-n.chord*.4,n.tipChord??n.chord*.5,0,(n.thick||.015)*.6,n.h),t),0,n.y||0,n.z||0);return r.rotation.x=-Math.PI/2+(n.cant||0),t.side=2,r}var _d=(e,t,n,r=10)=>new W(new jl(e,e,t,r).rotateZ(Math.PI/2),n),vd=(e,t,n)=>new W(new jl(e,e,t,6),n),yd=(e,t,n)=>new W(new jl(e,e,t,14).rotateX(Math.PI/2),n),bd=(e,t,n,r)=>{let i=new W(new Ll(1,16,10),r);return i.scale.set(e,t,n),i};function xd(e,t,n,r,i=.006){let a=new H(...n),o=new H(...r),s=vd(i,a.distanceTo(o),t);s.position.copy(a).add(o).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new H(0,1,0),o.clone().sub(a).normalize()),s.castShadow=!0,e.add(s)}function Sd(e,t,n,r,i){[[i,2375802],[i*.66,15921382],[i*.33,13123631]].forEach(([i,a],o)=>{let s=new W(new Al(i,20).rotateX(-Math.PI/2),J(a,{polygonOffset:!0,polygonOffsetFactor:-2-o,polygonOffsetUnits:-2-o}));s.position.set(t,n+.0015*(o+1),r),e.add(s)})}function Cd(e,t,n,r,i,a,o,s){hd(e,t,{x:r,chord:o,tipX:r-o*.25,tipChord:o*.6,span:a,y:i,thick:.012}),gd(e,n||t,{x:r,chord:o*1.1,h:s,y:i+.005,thick:.012})}function wd(e,t,n,r,i=.035){for(let a of[-1,1])Y(e,yd(i,.02,J(1842208,{roughness:.9})),t,n,a*r),xd(e,J(fd),[t-.02,n+.09,a*r*.5],[t,n,a*r],.006)}var Td={sparrow(e,t){let n=J(13123631),r=J(15392694),i=J(8016432);Y(e,pd([[-.5,.008],[-.42,.028],[-.2,.05],[.1,.072],[.36,.074],[.41,.068]],n)),Y(e,_d(.08,.07,J(3816516,{metalness:.4}),14),.43,0,0),Y(e,bd(.03,.03,.03,J(fd,{metalness:.6})),.475,0,0),hd(e,r,{x:.3,chord:.2,span:t,y:-.055,thick:.022,tipThick:.016}),hd(e,r,{x:.34,chord:.21,span:t*1.04,y:.135,thick:.022,tipThick:.016});for(let n of[-1,1])for(let r of[.29,.16])xd(e,i,[r-.04,-.05,n*t*.62],[r,.13,n*t*.62]),xd(e,i,[r-.03,.05,n*.05],[r,.13,n*.09]);return Cd(e,r,n,-.34,.012,t*.36,.13,.14),wd(e,.27,-.165,.12,.04),Y(e,bd(.05,.02,.035,J(dd)),.03,.068,0),Y(e,bd(.022,.022,.022,J(7031342)),.02,.085,0),Sd(e,.24,.147,t*.72,.062),Sd(e,.24,.147,-t*.72,.062),{props:[{x:.49,y:0,z:0,r:.14}],jets:[]}},heron(e,t){let n=J(15922421),r=J(2776234);Y(e,pd([[-.5,.008],[-.3,.04],[.05,.075],[.36,.078],[.46,.05],[.5,.02]],n,1.05,.9)),Y(e,pd([[-.3,.041],[.05,.077],[.36,.08]],r,.35,.92)),hd(e,n,{x:.27,chord:.2,tipX:.24,tipChord:.13,span:t,y:.085,thick:.026}),Y(e,bd(.09,.035,.05,ud()),.26,.055,0),Cd(e,n,r,-.36,.02,t*.36,.13,.15);for(let t of[-1,1])Y(e,pd([[-.3,.004],[-.15,.03],[.2,.034],[.3,.008]],n,.8,1),.08,-.17,t*.15),xd(e,J(fd),[.2,-.05,t*.05],[.2,-.15,t*.15]),xd(e,J(fd),[0,-.05,t*.05],[0,-.15,t*.15]);return{props:[{x:.51,y:0,z:0,r:.12}],jets:[]}},marlin(e,t){let n=J(2375802),r=J(15327944),i=J(12071722);Y(e,pd([[-.5,.012],[-.3,.045],[.1,.08],[.38,.07],[.5,.012]],n,1.15,.85)),Y(e,pd([[-.2,.01],[.1,.05],[.4,.045],[.5,.01]],i,.5,.8),0,-.07,0),hd(e,r,{x:.22,chord:.2,tipX:.18,tipChord:.11,span:t,y:.12,thick:.024}),Y(e,pd([[-.16,.012],[-.05,.04],[.1,.042],[.16,.02]],i),.12,.25,0);for(let t of[-1,1])xd(e,J(fd),[.18,.12,t*.06],[.16,.24,t*.02]),xd(e,J(fd),[.04,.12,t*.06],[.06,.24,t*.02]),xd(e,J(fd),[.14,.03,t*.05],[.14,.12,t*.09]);for(let r of[-1,1])Y(e,pd([[-.07,.004],[0,.02],[.07,.006]],n),.12,.03,r*t*.82),xd(e,J(fd),[.12,.05,r*t*.82],[.12,.115,r*t*.8]);return Y(e,bd(.06,.025,.035,ud()),.16,.085,0),Cd(e,r,n,-.36,.06,t*.36,.12,.15),{props:[{x:.29,y:.25,z:0,r:.11}],jets:[]}},dragonfly(e,t){let n=J(13214282,{metalness:.6,roughness:.35}),r=J(15327940,{transparent:!0,opacity:.82,roughness:.3});Y(e,pd([[-.5,.006],[-.2,.016],[.1,.03],[.3,.05],[.42,.045],[.5,.015]],n)),Y(e,bd(.045,.04,.05,ud()),.43,.02,0);for(let t=0;t<5;t++)Y(e,_d(.022-t*.003,.012,J(8018462,{metalness:.6})),-.05-t*.08,0,0);let i=[];for(let[n,a]of[[.3,1],[.12,.86]]){let o=hd(e,r,{x:n,chord:.13,tipX:n-.05,tipChord:.05,span:t*a,y:.03,thick:.006,tipThick:.004});i.push(o)}for(let t of[-1,1])for(let r of[.3,.15,0])xd(e,n,[r,-.02,t*.02],[r+.03,-.11,t*.09],.004);return{props:[],jets:[],anim(e,t){let n=Math.sin(e)*.45*(.4+t);i[0][0].rotation.x=n,i[0][1].rotation.x=-n,i[1][0].rotation.x=-n*.9,i[1][1].rotation.x=n*.9}}},kestrel(e,t){let n=J(14673128),r=J(3112838),i=J(12173254,{metalness:.3});Y(e,pd([[-.5,.01],[-.32,.045],[-.05,.068],[.3,.07],[.43,.052],[.5,.015]],n)),Y(e,pd([[-.32,.046],[-.05,.069],[.3,.071],[.4,.06]],r,.25,1.005),0,-.02,0),hd(e,n,{x:.2,chord:.2,tipX:.13,tipChord:.08,span:t,y:-.035,tipY:0,thick:.028});for(let n of[-1,1])Y(e,pd([[-.14,.012],[-.04,.036],[.1,.04],[.16,.022]],i),.16,-.015,n*t*.36);return Y(e,bd(.07,.035,.05,ud()),.36,.035,0),gd(e,r,{x:-.3,chord:.17,h:.19,y:.03,tipX:-.4,tipChord:.1}),hd(e,n,{x:-.38,chord:.1,tipX:-.41,tipChord:.06,span:t*.34,y:.22,thick:.012}),wd(e,.12,-.13,.1,.028),Y(e,yd(.024,.016,J(1842208)),.4,-.13,0),xd(e,J(fd),[.4,-.05,0],[.4,-.13,0]),{props:[{x:.33,y:-.015,z:t*.36,r:.1},{x:.33,y:-.015,z:-t*.36,r:.1}],jets:[]}},comet(e,t){let n=J(16119802),r=J(2776234),i=J(13225686,{metalness:.4});Y(e,pd([[-.5,.012],[-.3,.05],[0,.064],[.3,.062],[.44,.035],[.5,.006]],n)),Y(e,pd([[-.3,.051],[0,.065],[.3,.063],[.42,.04]],r,.18,1.006),0,-.012,0),hd(e,n,{x:.14,chord:.24,tipX:-.1,tipChord:.07,span:t,y:-.035,tipY:-.01,thick:.024});for(let t of[-1,1])Y(e,pd([[-.11,.024],[-.05,.036],[.08,.038],[.11,.03]],i),-.24,.035,t*.105),Y(e,_d(.03,.01,J(dd)),-.125,.035,t*.105);return Y(e,bd(.075,.03,.045,ud()),.37,.028,0),gd(e,r,{x:-.3,chord:.2,h:.2,y:.03,tipX:-.42,tipChord:.1}),hd(e,n,{x:-.4,chord:.1,tipX:-.46,tipChord:.05,span:t*.36,y:.23,thick:.01}),wd(e,.02,-.11,.08,.022),Y(e,yd(.02,.014,J(1842208)),.36,-.11,0),xd(e,J(fd),[.36,-.04,0],[.36,-.11,0]),{props:[],jets:[{x:-.36,y:.035,z:.105,r:.03},{x:-.36,y:.035,z:-.105,r:.03}]}},meteor(e,t){let n=J(5199204,{metalness:.35,roughness:.4}),r=J(14711338);Y(e,pd([[-.5,.05],[-.42,.06],[-.1,.058],[.25,.04],[.5,.003]],n)),Y(e,pd([[.3,.036],[.5,.004]],r)),Y(e,pd([[-.56,.05],[-.5,.034]],J(1710622,{metalness:.6}))),hd(e,n,{x:.12,chord:.56,tipX:-.34,tipChord:.08,span:t,y:-.02,thick:.03,tipThick:.008});for(let t of[-1,1])gd(e,r,{x:-.3,chord:.16,h:.13,y:.03,z:t*.05,cant:t*.3,tipX:-.4,tipChord:.07});return Y(e,bd(.07,.022,.03,ud()),.2,.04,0),wd(e,-.1,-.1,.1,.022),Y(e,yd(.018,.014,J(1842208)),.28,-.1,0),xd(e,J(fd),[.28,-.03,0],[.28,-.1,0]),{props:[],jets:[{x:-.56,y:0,z:0,r:.045}]}},ark(e,t){let n=J(8015662),r=J(11884090),i=J(13214282,{metalness:.5}),a=new Ll(1,18,12).toNonIndexed(),o=a.attributes.position.count,s=new Float32Array(o*3),c=[11884090,14262362,9067060,6965898,13214282,8034922,11027759,14205066],l=new U;for(let e=0;e<o;e+=6){l.setHex(c[(e*2654435761>>>8)%c.length]);for(let t=0;t<6;t++)s[(e+t)*3]=l.r,s[(e+t)*3+1]=l.g,s[(e+t)*3+2]=l.b}a.setAttribute(`color`,new Bi(s,3)),a.computeVertexNormals(),Y(e,new W(a,new zl({vertexColors:!0,roughness:.8})),0,.13,0).scale.set(.5,.17,.2),Y(e,pd([[-.3,.01],[-.2,.05],[.15,.06],[.3,.012]],n,.8,1),0,-.1,0),Y(e,new W(new da(.2,.06,.08),J(10119744)),-.02,-.055,0),Y(e,new W(new da(.035,.06,.004),J(9434879,{emissive:4176072,emissiveIntensity:1.2})),.02,-.05,.043);for(let t of[-1,1]){let n=Y(e,yd(.06,.02,r),-.05,-.1,t*.08);for(let e=0;e<6;e++){let t=new W(new da(.012,.13,.024),i);t.rotation.z=e*Math.PI/6,n.add(t)}for(let n of[-.22,0,.22])xd(e,J(3811866),[n*.9,-.07,t*.04],[n,.03,t*.12],.003);gd(e,r,{x:-.36,chord:.14,h:.12,y:.13,z:t*.02,cant:t*1.2,tipX:-.44,tipChord:.07})}return gd(e,r,{x:-.36,chord:.14,h:.14,y:.2,tipX:-.44,tipChord:.07}),{props:[{x:-.31,y:-.1,z:0,r:.045}],jets:[]}},starling(e,t){let n=J(16053751,{roughness:.4}),r=J(1908517,{roughness:.7}),i=J(14263361,{metalness:.6,roughness:.3});Y(e,pd([[-.5,.062],[-.42,.07],[.2,.068],[.38,.05],[.47,.024],[.5,.006]],n,1,1.05)),Y(e,pd([[.4,.045],[.47,.025],[.5,.007]],r,1.01,1.06)),hd(e,n,{x:.2,chord:.66,tipX:-.36,tipChord:.1,span:t,y:-.04,thick:.03,tipThick:.01}),hd(e,r,{x:.21,chord:.68,tipX:-.355,tipChord:.11,span:t*1.01,y:-.052,thick:.014,tipThick:.006}),gd(e,n,{x:-.26,chord:.22,h:.2,y:.05,tipX:-.4,tipChord:.1}),Y(e,bd(.06,.02,.04,ud()),.34,.045,0);for(let[t,n]of[[.03,0],[-.02,.04],[-.02,-.04]])Y(e,new W(new Ml(.032,.07,12,1,!0).rotateZ(-Math.PI/2),J(3158586,{metalness:.6,side:2})),-.52,t,n);return Y(e,_d(.071,.02,i,16),-.3,0,0),wd(e,-.12,-.12,.12,.022),Y(e,yd(.018,.014,J(1842208)),.32,-.12,0),xd(e,J(fd),[.32,-.05,0],[.32,-.12,0]),{props:[],jets:[{x:-.55,y:.03,z:0,r:.03},{x:-.55,y:-.02,z:.04,r:.03},{x:-.55,y:-.02,z:-.04,r:.03}]}}};function Ed(e,t){let n=new Rc,r=(Td[e]||Td.sparrow)(n,t),i=new hr().setFromObject(n);return{group:n,...r,minY:i.min.y}}var Dd=(e,t,n,r)=>new W(new da(e,t,n).translate(0,t/2,0),r),Od=(e,t,n,r,i=16)=>new W(new jl(e,t,n,i).translate(0,n/2,0),r),kd=(e,t,n,r,i=.25)=>{let a=new W(new jl(.02,.7071,1,4,1).rotateY(Math.PI/4).translate(0,.5,0),r);return a.scale.set(e,t,n),a},Ad=(e,t=1.4)=>J(e,{emissive:e,emissiveIntensity:t,roughness:.4}),jd=10132886,Md=8016432,Nd=12076335,Pd=4743258,Fd=15921382,Id=2763827,Ld={hangar(e){Y(e,Dd(1,.42,.9,J(12170924)));let t=new W(new jl(.5,.5,1.02,18,1,!1,0,Math.PI).rotateZ(Math.PI/2),J(12600623));t.scale.set(1,1.1,.94),Y(e,t,0,.42,0);for(let t of[-1,1])Y(e,Dd(.02,.36,.6,J(Id)),t*.5,0,0)},tower(e){Y(e,Od(.2,.26,.66,J(Fd),12)),Y(e,Od(.42,.34,.18,J(9426158,{roughness:.1,metalness:.4}),8),0,.66,0),Y(e,Od(.2,.46,.1,J(13128250),8),0,.84,0),Y(e,vd(.02,.1,J(Id)),0,.97,0)},pagoda(e,t=6){let n=.92/t;for(let r=0;r<t;r++){let i=.62-.36/t*r;Y(e,Dd(i,n*.62,i,J(r%2?14207144:Nd)),0,r*n,0),Y(e,kd(i*1.55,n*.42,i*1.55,J(Pd)),0,r*n+n*.6,0)}Y(e,vd(.012,.1,J(14263361,{metalness:.7})),0,.95,0)},pagodaSmall(e){Ld.pagoda(e,3)},gate(e){Y(e,Dd(1,.5,.7,J(9277322))),Y(e,Dd(.24,.34,.72,J(1842208)));for(let t=-.44;t<.5;t+=.176)Y(e,Dd(.09,.06,.72,J(9277322)),t,.5,0);Y(e,Dd(.62,.2,.4,J(Nd)),0,.56,0),Y(e,kd(.95,.22,.75,J(Pd)),0,.76,0)},clock(e){for(let t=0;t<3;t++){let n=.6-t*.1;Y(e,Dd(n,.2,n,J(t===1?10512954:Md)),0,t*.26,0),Y(e,kd(n*1.45,.08,n*1.45,J(Pd)),0,t*.26+.2,0)}let t=J(12618298,{metalness:.7,roughness:.3});for(let n of[0,1,2]){let r=new W(new Rl(.09,.008,6,24),t);r.rotation.set(n*1.05,n*.7,0),Y(e,r,0,.89,0)}let n=Y(e,yd(.16,.04,J(6044450)),.36,.18,0);n.rotation.y=Math.PI/2},ship(e){Y(e,pd([[-.5,.02],[-.42,.14],[.2,.16],[.44,.08],[.5,.01]],J(9067060)),0,.2,0).scale.set(1,1,2.2),Y(e,Dd(.86,.02,.6,J(11569752)),0,.26,0),Y(e,Dd(.2,.14,.5,J(10119744)),-.34,.28,0);for(let[t,n]of[[-.12,.62],[.08,.7],[.28,.56]]){Y(e,vd(.012,n,J(6044450)),t,.28+n/2,0);let r=new W(new za(.02,1).rotateY(0),J(11875114,{side:2}));r.scale.set(1,n*.72,1),r.geometry=new da(.012,1,.62),Y(e,r,t+.02,.36+n/2,0)}for(let t of[-.3,0,.3])Y(e,Dd(.04,.08,.8,J(6044450)),t,0,0)},dome(e){Y(e,Od(.46,.46,.22,J(15331058),20));let t=new W(new Ll(.46,20,10,0,6.283,0,Math.PI/2),J(16054266,{roughness:.35}));t.scale.y=1.6,Y(e,t,0,.22,0),Y(e,Dd(.02,.16,.14,J(2776234)),.46,0,0)},mast(e){Y(e,Od(.03,.07,.86,J(10133677,{metalness:.5}),6));for(let t of[.2,.45,.7])Y(e,Od(.12,.12,.012,J(8028300),8),0,t,0);let t=new W(new Ll(.2,14,6,0,6.283,0,1.1),J(15659251,{side:2}));t.rotation.z=-1.1,Y(e,t,.06,.74,0),Y(e,bd(.04,.04,.04,Ad(16726832)),0,.97,0)},spire(e){let t=[8213960,3981230,5926832,9069516,3122586];for(let n=0;n<9;n++){let r=n*2.4,i=n?.12+n%3*.1:0,a=.35+n*37%60/100;Y(e,new W(new Ml(.07+n%2*.03,a,5).translate(0,a/2,0),J(t[n%t.length],{roughness:.2,metalness:.3,emissive:t[n%t.length],emissiveIntensity:.25})),Math.cos(r)*i,0,Math.sin(r)*i)}},lantern(e){Y(e,Od(.06,.1,.6,J(6044450),6)),Y(e,Dd(.5,.24,.5,Ad(16767370,1.8)),0,.6,0),Y(e,kd(.8,.16,.8,J(Nd)),0,.84,0)},door(e){for(let t of[-1,1])Y(e,Dd(1,1,.1,J(9067060)),0,0,t*.45).scale.set(.5,1,1);Y(e,Dd(.5,.08,1,J(9067060)),0,.92,0),Y(e,Dd(.12,.92,.8,Ad(9434879,1.6)))},bridge(e){Y(e,Dd(1,.34,1,J(9278364))),Y(e,Dd(.62,.12,1.02,J(9426158,{roughness:.1,metalness:.4})),-.14,.34,0),Y(e,Dd(.62,.08,1,J(9278364)),-.14,.46,0),Y(e,Od(.1,.12,.26,J(Id),10),.32,.34,0),Y(e,vd(.02,.4,J(6975610)),-.14,.72,0),Y(e,Dd(.4,.03,.2,J(13225686)),-.14,.82,0),Y(e,bd(.03,.03,.06,Ad(16726832)),-.14,.94,0)},lighthouse(e){for(let t=0;t<4;t++)Y(e,Od(.17-t*.02,.19-t*.02,.18,J(t%2?13123631:Fd),14),0,t*.18,0);Y(e,Od(.22,.22,.03,J(Id),14),0,.72,0),Y(e,Od(.1,.1,.12,Ad(16769658,2),10),0,.75,0),Y(e,Od(.01,.15,.1,J(13123631),10),0,.87,0),Y(e,Od(.42,.46,.04,J(jd),12))},boat(e,t=2776234){Y(e,pd([[-.5,.03],[-.4,.1],[.2,.11],[.45,.05],[.5,.01]],J(t)),0,.14,0).scale.set(1,1.3,2.4),Y(e,Dd(.8,.02,.42,J(14207136)),-.02,.2,0),Y(e,Dd(.24,.24,.3,J(Fd)),-.16,.22,0),Y(e,Dd(.26,.03,.34,J(13123631)),-.16,.46,0),Y(e,vd(.012,.5,J(Md)),.14,.47,0)},icebreaker(e){Ld.boat(e,13123631),Y(e,Dd(.2,.18,.26,J(Fd)),-.16,.48,0),Y(e,Od(.05,.06,.24,J(16765514),10),.1,.22,0)},buoy(e){Y(e,bd(.4,.22,.4,J(13123631)),0,.18,0),Y(e,vd(.03,.6,J(16765514)),0,.5,0),Y(e,bd(.07,.07,.07,Ad(16769658,2)),0,.84,0)},tents(e){for(let[t,n]of[[-.25,15260072],[.25,14262362]])Y(e,new W(new Ml(.24,.8,8).translate(0,.4,0),J(n)),t,0,0).scale.set(1,1,1.9);Y(e,bd(.03,.12,.06,Ad(16751164,2)),0,.06,0)},hut(e){Y(e,Dd(.8,.45,.8,J(13350026))),Y(e,kd(1.15,.5,1.15,J(9071162)),0,.45,0),Y(e,Dd(.12,.3,.02,J(4862496)),0,0,.4),Y(e,Dd(.1,.3,.1,J(6974058)),.25,.6,.2)},kite(e){let t=new W(new Fl(.3),J(13123631,{side:2}));t.scale.set(1,1.4,.06),Y(e,t,0,.72,0),t.rotation.y=.5,xd(e,J(16052710),[0,0,0],[0,.6,0],.004);for(let t=1;t<4;t++)Y(e,bd(.03,.03,.03,J(16765514)),.02*t,.6-t*.12,0)},rafts(e){for(let t of[-.26,.26])for(let n=0;n<5;n++)Y(e,_d(.045,.9,J(n%2?9067060:8015662),8),0,.06,t+(n-2)*.09);Y(e,Dd(.16,.1,.16,J(14262362)),-.2,.1,-.26)},vent(e){Y(e,Od(.2,.5,.7,J(4012602,{roughness:.95}),10)),Y(e,Od(.19,.19,.03,Ad(16742954,2.4),10),0,.69,0)}};function Rd(e){if(!Ld[e])return null;let t=new Rc;return Ld[e](t),t}function zd(e){let t=new Rc,n=J(e.body,{roughness:.9}),r=J(e.legs??e.body,{roughness:.9}),i=J(e.head??e.body,{roughness:.9}),a=e.leg,o=a+e.fat*.9;Y(t,bd(.36,e.fat,e.wide,n),0,o,0);for(let[n,i]of[[.24,1],[.24,-1],[-.24,1],[-.24,-1]])Y(t,vd(.035,a+.05,r),n,(a+.05)/2,i*e.wide*.6);let s=.3+(e.neck||0)*.35,c=o+(e.neck||0)*.5;return e.neck&&xd(t,n,[.26,o+.02,0],[s,c,0],.07),Y(t,bd(.14,.09,.08,i),s+.1,c+.02,0),e.tail&&Y(t,bd(.05,.05,.05,J(e.tail)),-.38,o+.04,0),e.extra&&e.extra(t,s+.1,c+.02,o),t}function Bd(e,t,n,r){let i=new Rc;Y(i,pd([[-.5,.01],[-.3,.07],[.1,.14],[.36,.13],[.5,.03]],J(e,{roughness:.4}))),Y(i,pd([[-.2,.05],[.1,.12],[.4,.09],[.5,.02]],J(t,{roughness:.5})),0,-.035,0).scale.set(1,.8,.9);let a=new W(md(0,.12,0,.02,-.06,.05,0,.01,.2),J(e,{side:2})),o=a.clone();if(o.scale.z=-1,Y(i,a,-.44,0,0),Y(i,o,-.44,0,0),r){let t=new W(md(0,.12,0,.02,-.1,.03,0,.01,.18),J(e,{side:2}));t.rotation.x=-Math.PI/2,Y(i,t,.06,.12,0)}return i}function Vd(e,t){let n=new Rc;Y(n,bd(.16,.05,.05,J(e))),Y(n,bd(.04,.02,.02,J(16756800)),.18,0,0);for(let e of[1,-1]){let r=new W(md(.08,.14,0,.012,0,.05,0,.006,.5),J(t,{side:2}));r.scale.z=e,r.name=e>0?`wingR`:`wingL`,Y(n,r)}return n}var Hd={sheep:()=>zd({body:15921126,legs:2763310,head:2763310,leg:.16,fat:.26,wide:.24}),deer:()=>zd({body:10119744,leg:.3,fat:.15,wide:.13,neck:.5,tail:16052710,extra:(e,t,n)=>{for(let r of[-1,1])xd(e,J(14207144),[t-.02,n+.05,r*.03],[t-.06,n+.22,r*.1],.012),xd(e,J(14207144),[t-.04,n+.14,r*.07],[t+.03,n+.2,r*.12],.01)}}),horse:()=>zd({body:8014380,leg:.34,fat:.16,wide:.13,neck:.55,tail:3351578,extra:(e,t,n,r)=>xd(e,J(3351578),[.26,r+.1,0],[t-.04,n+.08,0],.03)}),buffalo:()=>zd({body:4868690,leg:.22,fat:.24,wide:.2,extra:(e,t,n)=>{for(let r of[-1,1])xd(e,J(14209216),[t-.02,n+.06,r*.05],[t+.03,n+.12,r*.2],.018)}}),camel:()=>zd({body:13215082,leg:.36,fat:.15,wide:.13,neck:.75,extra:(e,t,n,r)=>Y(e,bd(.12,.12,.09,J(12095573)),-.02,r+.15,0)}),penguin:()=>{let e=new Rc;return Y(e,bd(.3,.5,.28,J(1842726)),0,.5,0),Y(e,bd(.2,.36,.22,J(16053751)),.1,.44,0),Y(e,bd(.17,.16,.17,J(1842726)),.02,.96,0),Y(e,bd(.1,.03,.04,J(16752688)),.2,.94,0),e},whale:()=>Bd(4678271,12175574,1,!1),glow:()=>{let e=Bd(3981230,14286838,1,!1);return e.traverse(e=>{e.material&&(e.material=e.material.clone(),e.material.emissive=new U(3122586),e.material.emissiveIntensity=.5)}),e},orca:()=>Bd(1447966,16053751,1,!0),gull:()=>Vd(16053751,9080730),crane:()=>Vd(16053751,1842726)},Ud={sheep:1.9,deer:2.2,horse:2.8,buffalo:2.9,camel:3,penguin:1.1,whale:12,glow:12,orca:7,gull:2.6,crane:3.4},Wd={};function Gd(e){return Hd[e]?(Wd[e]||(Wd[e]=Hd[e]())).clone():null}function Kd(){let e=new Rc,t=J(8015662,{roughness:.8}),n=J(4014674,{roughness:.9}),r=J(15251600,{roughness:.7}),i=(t,n,r,i,a,o,s)=>{let c=new Rc;c.name=t,c.position.set(r,i,a);let l=vd(s,o,n);return l.position.y=-o/2,l.castShadow=!0,c.add(l),e.add(c),c};return i(`legL`,n,0,.46,-.07,.46,.055),i(`legR`,n,0,.46,.07,.46,.055),Y(e,bd(.11,.2,.15,t),0,.63,0),i(`armL`,t,0,.78,-.17,.32,.04),i(`armR`,t,0,.78,.17,.32,.04),Y(e,bd(.085,.095,.085,r),0,.9,0),Y(e,new W(new Ll(.095,14,8,0,6.283,0,1.75),J(4863268,{roughness:.85})),-.005,.905,0),Y(e,bd(.03,.022,.07,J(1842208,{roughness:.2})),.075,.915,0),Y(e,new W(new Rl(.075,.025,6,14).rotateX(Math.PI/2),J(13123631)),0,.8,0),e}function qd(e,t,n){let r=t=>e.getObjectByName(t),i=t===2?0:t===0?.45:-.45;if(r(`legL`).rotation.z=i,r(`legR`).rotation.z=-i,t===2){let e=Math.sin(n*9)*.25;r(`armL`).rotation.z=1.2+e,r(`armR`).rotation.z=1.2-e}else r(`armL`).rotation.z=-i*.8,r(`armR`).rotation.z=i*.8}var X={W:320,H:480,q:1,tilt:.62,elev:.75,camx:0,camy:0,rot:0,zoom:2.6,c:1,s:0},Jd=document.getElementById(`gl`),Yd=Math.min(window.innerWidth,window.innerHeight)<600,Xd=new Yc({canvas:Jd,antialias:!Yd,powerPreference:`high-performance`});Xd.shadowMap.enabled=!0,Xd.shadowMap.type=2;var Zd=new Zc,Qd=new wa(45,1,1,2600);Zd.fog=new Xc(12573166,260,640);var $d=0,ef=1;function tf(e){let t=window.innerWidth,n=window.innerHeight,r=window.devicePixelRatio||1,i=t<n?290:400,a=Math.max(1,Math.round(Math.min(t,n)*r/(i*2.2)));X.W=e.width=Math.ceil(t*r/a),X.H=e.height=Math.ceil(n*r/a),X.q=Math.min(X.W,X.H)/i,ef=Math.max(1,Math.round(X.q)),Xd.setPixelRatio(Math.min(r,2)*.75**$d),Xd.setSize(t,n,!1),Qd.aspect=t/n,Qd.updateProjectionMatrix()}var nf=0;function rf(e){return e>.2||document.hidden?!1:(nf=e>.034?nf+e:Math.max(0,nf-e*2),nf>2.5&&$d<3&&($d++,nf=0,!0))}var af=e=>e<60?e:60+(e-60)*3.2,of={h:0,r:0,g:0,b:0,wood:!1,lf:0},sf=new H,cf=new H;function lf(e,t,n,r,i,a,o){n=af(n),X.camx=e,X.camy=t,X.rot=r,X.zoom=i,X.c=Math.cos(r),X.s=Math.sin(r);let s=Math.asin(Math.min(.97,Math.max(-.95,X.tilt*1.15))),c=Qd.aspect<1?58:45,l=X.H/i/(2*Math.tan(c*Math.PI/360)),u=-Math.sin(r),d=-Math.cos(r);sf.set(e,n,t),Qd.position.set(e-u*Math.cos(s)*l,n+Math.sin(s)*l,t-d*Math.cos(s)*l);let f=Hu(Qd.position.x,Qd.position.z,of).h+1.5;Qd.position.y<f&&(Qd.position.y=f),Qd.up.set(0,1,0),Qd.fov=c,Qd.lookAt(sf);let p=window.innerWidth,m=window.innerHeight;Qd.setViewOffset(p,m,(.5-a)*p,(.5-o)*m,p,m),Qd.updateMatrixWorld()}var uf=[0,0];function df(e,t,n){cf.set(e,af(n),t).applyMatrix4(Qd.matrixWorldInverse);let r=cf.z>0;cf.applyMatrix4(Qd.projectionMatrix);let i=(cf.x*.5+.5)*X.W,a=(1-(cf.y*.5+.5))*X.H;return r&&(i=X.W/2-(i-X.W/2)*50,a=X.H*3),uf[0]=i,uf[1]=a,uf}function ff(e,t,n,r){let i=n-e,a=r-t;return Math.atan2(X.c*i-X.s*a,-(X.s*i+X.c*a))}var pf=new H(-.5,.78,-.38).normalize(),mf=new nu(14478591,7305813,1.5),hf=new cu(16773334,2.4);hf.castShadow=!0,hf.shadow.mapSize.set(Yd?1024:2048,Yd?1024:2048);var gf=hf.shadow.camera;gf.left=-130,gf.right=130,gf.top=130,gf.bottom=-130,gf.near=10,gf.far=700,hf.shadow.bias=-6e-4,hf.shadow.normalBias=.6,Zd.add(mf,hf,hf.target);var _f={zenith:{value:new U},horizon:{value:new U},sunDir:{value:pf},sunK:{value:1}},vf=new W(new Ll(2200,24,12),new ya({uniforms:_f,side:1,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 zenith, horizon, sunDir; uniform float sunK; varying vec3 vD;
    void main(){ vec3 d = normalize(vD); float t = pow(clamp(d.y, 0.0, 1.0), 0.45);
      vec3 c = mix(horizon, zenith, t); float s = max(dot(d, sunDir), 0.0);
      c += sunK * vec3(1.0, 0.86, 0.62) * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.28);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`}));vf.renderOrder=-10,vf.frustumCulled=!1,Zd.add(vf);var yf=new Zi;{let e=new Float32Array(1500);for(let t=0;t<500;t++){let n=M(t,1,77)*6.283,r=Math.acos(M(t,2,77));e[t*3]=Math.cos(n)*Math.sin(r)*2e3,e[t*3+1]=Math.cos(r)*2e3,e[t*3+2]=Math.sin(n)*Math.sin(r)*2e3}yf.setAttribute(`position`,new Bi(e,3))}var bf=new El(yf,new xl({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));bf.renderOrder=-9,bf.frustumCulled=!1,Zd.add(bf);var xf={time:{value:0},sunDir:{value:pf},deep:{value:new U},skyCol:{value:new U},fogCol:{value:Zd.fog.color},fogNear:{value:260},fogFar:{value:640}},Sf=new W(new za(1800,1800,150,150).rotateX(-Math.PI/2),new ya({uniforms:xf,transparent:!0,depthWrite:!1,vertexShader:`uniform float time; varying vec3 vW;
    float wave(vec2 p){ return sin(p.x * 0.11 + time * 0.9) * 0.16 + sin(p.y * 0.17 - time * 1.2) * 0.12 + sin((p.x + p.y) * 0.05 + time * 0.5) * 0.2; }
    void main(){ vec4 w = modelMatrix * vec4(position, 1.0); w.y += wave(w.xz); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float time, fogNear, fogFar; uniform vec3 sunDir, deep, skyCol, fogCol; varying vec3 vW;
    vec2 slope(vec2 p){
      vec2 g = vec2(cos(p.x * 0.11 + time * 0.9) * 0.0176 + cos((p.x + p.y) * 0.05 + time * 0.5) * 0.01,
                    cos(p.y * 0.17 - time * 1.2) * 0.0204 + cos((p.x + p.y) * 0.05 + time * 0.5) * 0.01);
      g += vec2(cos(p.x * 0.9 + p.y * 0.4 + time * 2.1), cos(p.y * 1.1 - p.x * 0.3 + time * 1.7)) * 0.05; // ripples
      g += vec2(cos(p.x * 2.3 - time * 3.0), cos(p.y * 2.7 + time * 2.6)) * 0.03;
      return g; }
    void main(){
      vec2 g = slope(vW.xz); vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
      vec3 v = normalize(cameraPosition - vW);
      float fr = pow(1.0 - max(dot(n, v), 0.0), 3.0);
      vec3 c = mix(deep, skyCol, 0.06 + fr * 0.55);
      c += deep * 0.35 * (n.x * 2.0 + n.z * 2.0); // the swell catches the light
      float sp = pow(max(dot(reflect(-sunDir, n), v), 0.0), 90.0);
      c += vec3(1.0, 0.93, 0.8) * sp * 1.6;
      float dist = length(cameraPosition - vW);
      c = mix(c, fogCol, smoothstep(fogNear, fogFar, dist));
      gl_FragColor = vec4(c, mix(0.8, 0.97, fr));
      #include <colorspace_fragment>
    }`}));Sf.renderOrder=2,Zd.add(Sf);var Cf=new WeakMap,wf=new Map,Tf=new U,Ef=[[[1,0,0],[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,0,0],[0,0,1],[0,1,0]],[[0,0,1],[0,1,0],[0,0,1],[1,0,0]],[[0,0,-1],[0,0,0],[1,0,0],[0,0,1]],[[0,1,0],[0,0,1],[1,0,0],[0,1,0]],[[0,-1,0],[0,0,0],[0,1,0],[1,0,0]]];function Df(e){let t=Cf.get(e);if(t)return t;let{nx:n,ny:r,nz:i}=e,a=[],o=[],s=[],c=[],l=n/2,u=i/2,d=r/2;for(let t=0;t<i;t++)for(let i=0;i<r;i++)for(let f=0;f<n;f++){let p=e.d[f+n*(i+r*t)];if(!p)continue;let m=wf.get(p);m||(Tf.setHex(p&16777215),m=[Tf.r,Tf.g,Tf.b],wf.set(p,m));for(let[n,r,p,h]of Ef){if(e.get(f+n[0],i+n[1],t+n[2]))continue;let g=a.length/3,_=f-l,v=t-u,y=i-d,b=[n[0],n[2],n[1]];for(let[e,t]of[[0,0],[1,0],[1,1],[0,1]])a.push(_+r[0]+p[0]*e+h[0]*t,v+r[1]+p[1]*e+h[1]*t,y+r[2]+p[2]*e+h[2]*t),o.push(m[0],m[1],m[2]),s.push(b[0],b[1],b[2]);c.push(g,g+1,g+2,g,g+2,g+3)}}return t=new Zi,t.setAttribute(`position`,new Ui(a,3)),t.setAttribute(`color`,new Ui(o,3)),t.setAttribute(`normal`,new Ui(s,3)),t.setIndex(c),Cf.set(e,t),t}var Of=new Bl({vertexColors:!0});new Bl({vertexColors:!0,transparent:!0,opacity:.55});function kf(e,t){let n=new W(Df(e.vox),Of);return n.scale.setScalar(t),n.castShadow=!0,n}function Af(e,t){let n=Rd(e);if(!n){let e=kf(t.m,t.vs),n=new Rc;return e.position.y=t.m.nz/2*t.vs,n.add(e),n}return n.scale.set(t.m.nx*t.vs,t.m.nz*t.vs,t.m.ny*t.vs),n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}var jf={};function Mf(e,t,n){let r=jf[e]||(jf[e]={list:[],used:0});if(t>=r.list.length){let e=n();Zd.add(e),r.list.push(e)}r.used=Math.max(r.used,t+1);let i=r.list[t];return i.visible=!0,i}var Nf=new Map,Pf=(e,t)=>{let n=Nf.get(e)||0;return Nf.set(e,n+1),Mf(e,n,t)};function Ff(){Nf.clear();for(let e in jf){let t=jf[e];for(let e=t.used;e<t.list.length;e++)t.list[e].visible=!1;t.used=0}}var If=96,Lf=40,Rf=If/Lf,zf=new Map,Bf=new Bl({vertexColors:!0}),Vf=new Ml(.9,2.4,5).translate(0,1.2,0),Hf=new Bl({color:16777215}),Uf=new Hr,Wf=new fr,Gf=new H,Kf=new H;function qf(e,t){let n=new Float32Array(1849),r=new Float32Array(5547),i=[],a=e*If-Rf,o=t*If-Rf;for(let s=0;s<43;s++)for(let c=0;c<43;c++){let l=a+c*Rf,u=o+s*Rf;Hu(l,u,of);let d=c+s*43;if(n[d]=of.h,Tf.setRGB(of.r,of.g,of.b,bn),r[d*3]=Tf.r,r[d*3+1]=Tf.g,r[d*3+2]=Tf.b,of.wood&&c>0&&s>0&&c<=Lf&&s<=Lf){let n=M(e*64+c,t*64+s,31);n>.25&&i.push(l+(n-.5)*2,of.h,u+(M(e*64+c,t*64+s,32)-.5)*2,n)}}let s=new Float32Array(5043),c=new Float32Array(5043),l=new Float32Array(5043),u=[];for(let i=0;i<41;i++)for(let a=0;a<41;a++){let o=a+1+(i+1)*43,d=(a+i*41)*3;s[d]=e*If+a*Rf,s[d+1]=n[o],s[d+2]=t*If+i*Rf;let f=n[o-1]-n[o+1],p=n[o-43]-n[o+43],m=2*Rf,h=Math.hypot(f,m,p);c[d]=f/h,c[d+1]=m/h,c[d+2]=p/h;let g=1-Math.min(.35,Math.abs(f)+Math.abs(p)>2.6?.22:0);if(l[d]=r[o*3]*g,l[d+1]=r[o*3+1]*g,l[d+2]=r[o*3+2]*g,a<Lf&&i<Lf){let e=a+i*41,t=e+1,n=e+41,r=n+1;u.push(e,n,t,t,n,r)}}let d=new Zi;d.setAttribute(`position`,new Bi(s,3)),d.setAttribute(`normal`,new Bi(c,3)),d.setAttribute(`color`,new Bi(l,3)),d.setIndex(u);let f=new W(d,Bf);f.receiveShadow=!0,Zd.add(f);let p=null;if(i.length){let e=Math.min(500,i.length/4);p=new sl(Vf,Hf,e);for(let t=0;t<e;t++){let e=i[t*4+3],n=.75+e*.7;Uf.compose(Kf.set(i[t*4],i[t*4+1]-.2,i[t*4+2]),Wf.identity(),Gf.set(n,n*(.9+e*.5),n)),p.setMatrixAt(t,Uf),p.setColorAt(t,Tf.setRGB(.1+e*.07,.3+e*.16,.12+e*.05))}p.castShadow=!Yd,p.receiveShadow=!0,Zd.add(p)}return{mesh:f,trees:p}}function Jf(e){Zd.remove(e.mesh),e.mesh.geometry.dispose(),e.trees&&(Zd.remove(e.trees),e.trees.dispose())}function Yf(e,t,n){let r=Yd?520:640,i=Math.floor((e-r)/If),a=Math.floor((e+r)/If),o=Math.floor((t-r)/If),s=Math.floor((t+r)/If),c=null,l=0xde0b6b3a7640000;for(let n=o;n<=s;n++)for(let o=i;o<=a;o++){let i=Math.hypot((o+.5)*If-e,(n+.5)*If-t);if(i>r+If*.7)continue;let a=o+`,`+n;!zf.has(a)&&i<l&&(l=i,c=[o,n,a])}for(;c&&n-->0;){zf.set(c[2],qf(c[0],c[1])),c=null,l=0xde0b6b3a7640000;for(let n=o;n<=s;n++)for(let o=i;o<=a;o++){let i=Math.hypot((o+.5)*If-e,(n+.5)*If-t),a=o+`,`+n;i<=r+If*.7&&!zf.has(a)&&i<l&&(l=i,c=[o,n,a])}}for(let[n,i]of zf){let[a,o]=n.split(`,`);Math.hypot((+a+.5)*If-e,(+o+.5)*If-t)>r+If*2.2&&(Jf(i),zf.delete(n))}}var Xf=[[6,-18],[-10,-14]],Zf=new Rc,Qf=``;Zd.add(Zf);function $f(e){let t=document.createElement(`canvas`);t.width=352,t.height=e===`runway`?32:64;let n=t.getContext(`2d`),r=t.width,i=t.height;if(e===`runway`){n.fillStyle=`#55585e`,n.fillRect(0,0,r,i),n.fillStyle=`#e6e6e0`,n.fillRect(0,0,6,i),n.fillRect(r-6,0,6,i);for(let e=20;e<r-20;e+=32)n.fillRect(e,i/2-2,16,4);for(let e=0;e<4;e++)n.fillRect(12,4+e*7,14,3),n.fillRect(r-26,4+e*7,14,3)}else if(e===`plaza`){n.fillStyle=`#c4bca8`,n.fillRect(0,0,r,i),n.strokeStyle=`#a39a84`,n.lineWidth=1;for(let e=0;e<=r;e+=16)n.beginPath(),n.moveTo(e,0),n.lineTo(e,i),n.stroke();for(let e=0;e<=i;e+=16)n.beginPath(),n.moveTo(0,e),n.lineTo(r,e),n.stroke();n.strokeStyle=`#7a735f`,n.lineWidth=6,n.strokeRect(0,0,r,i)}else n.fillStyle=`#3c3e44`,n.fillRect(0,0,r,i),n.strokeStyle=`#e8be3c`,n.lineWidth=5,n.strokeRect(3,3,r-6,i-6),n.beginPath(),n.arc(r/2,i/2,i*.36,0,6.283),n.stroke();let a=new Ol(t);return a.colorSpace=bn,a.anisotropy=4,a}var ep={};function tp(e,t,n,r,i,a){let o=new W(new za(e,t).rotateX(-Math.PI/2),n);return o.position.set(r,i,a),o.receiveShadow=!0,o}function np(e,t){Zd.remove(Zf),Zf=new Rc,Zd.add(Zf);for(let[,e]of zf)Jf(e);zf.clear();let n=e.pad,r=new Bl({map:ep[n]||(ep[n]=$f(n)),polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),i=new Bl({color:n===`runway`?10264218:10126952,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Bl({color:6054508});for(let o of e.stops){let e=2*Su;if(o.carrier){let t=new W(new da(60,e+4,14),a);t.position.set(o.x-4,e-(e+4)/2,o.y),t.castShadow=!0,t.receiveShadow=!0;let n=new W(new jl(7,7,e+4,3),a);n.rotation.y=Math.PI/2,n.scale.set(1,1,1.25),n.position.set(o.x+30.3,e-(e+4)/2,o.y),n.castShadow=!0,Zf.add(t,n,tp(56,3,r,o.x-3,e+.06,o.y))}else Zf.add(tp(44,n===`runway`?4:8,r,o.x,e+.1,o.y)),Zf.add(tp(22,10,i,o.x-1,e+.06,o.y-8));(o.marks||[]).forEach((n,r)=>{let i=t.marks[n],a=o.slots?o.slots[r]:Xf[r],s=Af(n,i);s.position.set(o.x+a[0],e,o.y+a[1]),Zf.add(s)})}let o=e.sky;_f.horizon.value.setRGB(Math.min(1,o[0]/255*.75+.25),Math.min(1,o[1]/255*.75+.25),Math.min(1,o[2]/255*.75+.25),bn),_f.zenith.value.setRGB(o[0]/255*.42,o[1]/255*.6,o[2]/255*.88,bn),Sf.visible=e.water}function rp(e,t,n){let r=Hu(e,t,of).h;return n-r>1.3?n:r}var ip=new Rc;ip.rotation.order=`YZX`,Zd.add(ip);var ap=null,op=[],sp=[],cp=null,lp=new Li({color:2763312,transparent:!0,opacity:.28,side:2,depthWrite:!1}),up=new Bl({color:2763312,side:2}),dp=new Li({color:16756800,transparent:!0,opacity:.9,blending:2,depthWrite:!1}),fp=null,pp=1;function mp(e,t){ip.clear(),op=[],sp=[];let n=e.nx*e.vs,r=e.nz*e.vs/2,i=Ed(t,e.tips/e.nx);fp=i.anim||null,pp=n;let a=new Rc;a.scale.setScalar(n),i.group.position.y=-r/n-i.minY,a.add(i.group),ip.add(a);for(let e of i.props){let t=new Rc;t.position.set(e.x,e.y+i.group.position.y,e.z);let n=new W(new Al(e.r,24).rotateY(Math.PI/2),lp),r=new W(new za(e.r*.16,e.r*2).rotateY(Math.PI/2),up);t.add(n,r),a.add(t),op.push({g:t,disc:n,blade:r})}for(let e of i.jets){let t=new W(new Ml(e.r,1,10).rotateZ(Math.PI/2).translate(-.5,0,0),dp);t.position.set(e.x,e.y+i.group.position.y,e.z),a.add(t),sp.push(t)}cp=new W(new Ll(n*.6,16,10),new Li({color:9236735,transparent:!0,opacity:.25,depthWrite:!1})),ip.add(cp),ap=e}function hp(e,t,n,r){if(ap!==t&&mp(t,n.craft),ip.visible=n.showPlane&&!n.wrecked,!ip.visible)return;let i=t.nz*t.vs/2,a=q(e.x,e.y)*Su+i,o=af(e.alt);e.alt-a<.35&&(o=rp(e.x,e.y,a-i)+i+(e.alt-a)),ip.position.set(e.x,o,e.y),ip.rotation.set(e.roll*t.rollK,-e.heading,e.pitchV===void 0?Math.max(-1.2,Math.min(1.2,(e.lean||0)*.42)):e.pitchV),fp&&fp(e.propSpin>.05?r*(9+9*e.throttle):0,e.throttle);let s=e.throttle>.45&&e.propSpin>.5;for(let t of op)t.g.visible=!0,t.g.rotation.x=e.spin||0,t.disc.visible=s&&e.propSpin>.02,t.blade.visible=!s;for(let n of sp){let i=e.propSpin>.1?((1+e.throttle*e.throttle*13)*(e.boosting?2:1)*t.vs+Math.sin(r*60)*.3)/pp:0;n.visible=i>.02,n.scale.set(i,1,1)}cp.visible=!!e.shield}var gp={white:16777215,storm:6975366,dustLight:15123358,dust:11565646,mist:14874610,violet:8017597},_p=2600,vp=new sl(new Pl(1,2),new Bl({color:16777215}),_p);vp.castShadow=!0,vp.frustumCulled=!1,Zd.add(vp);var yp=[];function bp(){return yp}function xp(e,t){qu(X.camx,X.camy,Yd?480:600,e,yp);let n=0;if(t.clouds)for(let e of yp){Tf.setHex(gp[t.clouds[+!!e.storm]]||16777215);let r=e.storm?13:7,i=e.variant*7+(e.storm?500:0),a=Math.hypot(e.wx-Qd.position.x,e.wy-Qd.position.z,(e.storm?20:e.alt+4)-Qd.position.y),o=Math.max(e.storm?.45:.12,Math.min(1,(a-(e.storm?18:12))/30));for(let t=0;t<r&&n<_p;t++){let r=M(i,t,61)*6.283,a=M(i,t,62),s=M(i,t,63),c,l,u,d,f;if(e.storm){let n=6+a*15;c=Math.cos(r)*n,u=Math.sin(r)*n,l=e.alt+4+s*(e.top-e.alt-6),d=9+M(i,t,64)*7,f=d*.8}else{let n=a*e.rad*.55*e.vs;c=Math.cos(r)*n,u=Math.sin(r)*n*.7,d=(3.2+M(i,t,64)*3.4)*e.vs*(1-a*.45),f=d*.62,l=e.alt+3+f*.5+s*1.5}Uf.compose(Kf.set(e.wx+c,l,e.wy+u),Wf.identity(),Gf.set(d*o,f*o,d*o)),vp.setMatrixAt(n,Uf),vp.setColorAt(n,Tf),n++}}vp.count=n,vp.instanceMatrix.needsUpdate=!0,vp.instanceColor&&(vp.instanceColor.needsUpdate=!0)}var Sp=1400,Cp=new Zi,wp=new Float32Array(Sp*3),Tp=new Float32Array(Sp*4),Ep=new Float32Array(Sp);Cp.setAttribute(`position`,new Bi(wp,3)),Cp.setAttribute(`color`,new Bi(Tp,4)),Cp.setAttribute(`size`,new Bi(Ep,1));var Dp=new El(Cp,new ya({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vC; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.2, length(d)); gl_FragColor = vec4(vC.rgb, vC.a * a);
    #include <colorspace_fragment>
  }`}));Dp.frustumCulled=!1,Dp.renderOrder=5,Zd.add(Dp);var Op=900,kp=new Zi,Ap=new Float32Array(Op*6),jp=new Float32Array(Op*8);kp.setAttribute(`position`,new Bi(Ap,3)),kp.setAttribute(`color`,new Bi(jp,4));var Mp=new bl(kp,new cl({vertexColors:!0,transparent:!0,depthWrite:!1}));Mp.frustumCulled=!1,Mp.renderOrder=4,Zd.add(Mp);var Np=new Il(.92,1,40).rotateX(-Math.PI/2);function Pp(e,t,n){let r=0,i=0,a=(e,t,n,i,a,o,s,c)=>{r>=Sp||(wp[r*3]=e,wp[r*3+1]=af(n),wp[r*3+2]=t,Tp[r*4]=i,Tp[r*4+1]=a,Tp[r*4+2]=o,Tp[r*4+3]=s,Ep[r]=c,r++)};for(let t of e.fx||[]){let e=Math.max(0,1-t.age/t.life);if(t.kind===`ring`){let n=Mf(`ripple`,i++,()=>new W(Np,new Li({color:16777215,transparent:!0,depthWrite:!1}))),r=t.size*(.25+t.age/t.life);n.position.set(t.x,.25,t.y),n.scale.set(r,1,r),n.material.opacity=e*.6,n.renderOrder=3}else{if(!t._c){let e=t.col.split(`,`);Tf.setRGB(e[0]/255,e[1]/255,e[2]/255,bn),t._c=[Tf.r,Tf.g,Tf.b]}a(t.x,t.y,t.z,t._c[0],t._c[1],t._c[2],e*(t.alpha||1),t.size*.42*(1+t.age*(t.grow||0)))}}for(let t of e.puffs||[]){let e=Math.max(0,.6-t.age*.5);t.dark?a(t.x,t.y,t.z,.02,.02,.03,e,.8+t.age*2.8):a(t.x,t.y,t.z,1,.45,.08,e,.8+t.age*2.8)}Cp.setDrawRange(0,r),Cp.attributes.position.needsUpdate=Cp.attributes.color.needsUpdate=Cp.attributes.size.needsUpdate=!0;let o=0;if(e.showPlane)for(let e of t.trails)for(let t=1;t<e.length&&o<Op;t++){let r=e[t-1],i=e[t],a=n-i.t;if(a>2.2||r.cut||i.cut)continue;let s=i.a*(1-a/2.2);Ap.set([r.x,af(r.z),r.y,i.x,af(i.z),i.y],o*6),jp.set([1,1,1,s,1,1,1,s],o*8),o++}kp.setDrawRange(0,o*2),kp.attributes.position.needsUpdate=kp.attributes.color.needsUpdate=!0}var Fp=new Rl(1,.012,6,48).rotateX(Math.PI/2),Ip=new jl(.35,.35,40,6,1,!0).translate(0,20,0),Lp=new Fl(1);function Rp(e,t,n){let r=0,i=0,a=0;for(let o of e||[])if(o.kind===`portal`){let e=Mf(`portal`,0,()=>{let e=new Rc;return e.add(new W(new Al(1,32),new Li({color:12581119,transparent:!0,opacity:.8,side:2,depthWrite:!1}))),e.add(new W(new Rl(1,.05,8,40),new Bl({color:14263361,emissive:6965776}))),e});e.position.set(o.x,o.z,o.y),e.scale.set(4.5,8,4.5),e.rotation.y=t*.6}else if(o.kind===`drop`){let e=Mf(`drop`,a++,()=>{let e=new Rc;e.add(new W(new da(1,1,1),new Bl({color:9067060})));let t=new W(new Ll(1.6,10,6,0,6.283,0,1.4),new Bl({color:16052710,side:2}));return t.position.y=2,e.add(t),e.userData.chute=t,e});e.position.set(o.x,o.z+.5,o.y),e.userData.chute.visible=o.z>o.gz+.2}else if(o.kind===`task`){if(o.prop){let e=n.marks[o.prop],r=Pf(`prop:`+o.prop,()=>Af(o.prop,e)),i=o.prop===`boat`||o.prop===`buoy`||o.prop===`icebreaker`||o.prop===`rafts`;r.position.set(o.x,i?-.25+Math.sin(t*2)*.15:rp(o.x,o.y,o.gz),o.y),r.rotation.y=-.5}if(o.done)continue;Tf.setRGB(...(o.col||`255,214,74`).split(`,`).map(e=>e/255),bn);let e=Mf(`tring`,r,()=>new W(Fp,new Li({transparent:!0,opacity:.9})));e.position.set(o.x,o.gz+.5,o.y),e.scale.set(o.r,o.r*30,o.r),e.rotation.y=t*.3,e.material.color.copy(Tf);let i=Mf(`tbeam`,r++,()=>new W(Ip,new Li({transparent:!0,opacity:.3,depthWrite:!1,side:2})));i.position.set(o.x,o.gz,o.y),i.material.color.copy(Tf)}else{let e=Mf(`spark`,i++,()=>new W(Lp,new Bl({color:16771466,emissive:12093968})));e.position.set(o.x,o.z+Math.sin(t*3+o.x)*.6,o.y),e.rotation.y=t*2+o.x,e.scale.set(1.1,1.6,1.1)}return 0}var zp=[];function Bp(e,t,n){cd(X.camx,X.camy,Yd?260:340,t,n,zp);for(let e of zp){let n=Pf(`beast:`+e.kind,()=>{let t=Gd(e.kind)||new Rc;return t.scale.setScalar(Ud[e.kind]||1),t});if(n.rotation.y=-e.rot,e.sea)n.position.set(e.x,e.z+.6,e.y);else if(e.bird){n.position.set(e.x,e.z,e.y);let r=Math.sin(t*8+e.ph*5)*.6,i=n.getObjectByName(`wingR`),a=n.getObjectByName(`wingL`);i&&(i.rotation.x=r,a.rotation.x=-r)}else n.position.set(e.x,rp(e.x,e.y,e.z)+(e.run?Math.abs(Math.sin(t*14+e.x))*.25:0),e.y)}let r=e.pilot;if(r&&e.showPlane){let e=Pf(`pilot`,()=>{let e=Kd();return e.scale.setScalar(2.7),e});qd(e,r.pose,t),e.position.set(r.x,r.onTop?r.z:rp(r.x,r.y,r.z),r.y),e.rotation.y=-r.rot}}var Vp=new U,Hp=new U(131850),Up=new Qr(0,0,0,`YXZ`);function Wp(e,t){let{time:n,plane:r,model:i,scenery:a}=t,o=ku();if(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,X.W,X.H),Qf!==o.id&&(np(o,a),Qf=o.id),Yf(X.camx,X.camy,t.budget>10?14:3),hp(r,i,t,n),xp(n,o),Pp(t,r,n),Rp(t.marks,n,a),Bp(t,n,r),Ff(),t.cockpit)Qd.clearViewOffset(),Qd.fov=68,Qd.position.set(r.x,af(r.alt)+.9,r.y),Up.set(r.pitchV===void 0?Math.max(-.5,Math.min(.5,(r.lean||0)*.35))-.1:r.pitchV,-r.heading-Math.PI/2,-r.roll*.8),Qd.quaternion.setFromEuler(Up),Qd.updateProjectionMatrix(),Qd.updateMatrixWorld();else if(t.eye){let e=t.eye;Qd.clearViewOffset(),Qd.fov=62,Qd.position.set(e.x,rp(e.x,e.y,e.z)+2.5,e.y),Up.set(-.05,-e.rot-Math.PI/2,0),Qd.quaternion.setFromEuler(Up),Qd.updateProjectionMatrix(),Qd.updateMatrixWorld()}else Qd.updateProjectionMatrix();let s=t.dark||0;Yp(s),Vp.copy(_f.horizon.value),Zd.fog.color.copy(Vp);let c=(Yd?520:640)*(1+s*.6);if(Zd.fog.near=c*.42,Zd.fog.far=c,xf.fogNear.value=Zd.fog.near,xf.fogFar.value=c,Xd.setClearColor(Vp),_f.sunK.value=1-s*.5,vf.position.copy(Qd.position),bf.position.copy(Qd.position),bf.material.opacity=s,mf.intensity=1.5*(1-s*.5),hf.target.position.set(X.camx,0,X.camy),hf.position.copy(hf.target.position).addScaledVector(pf,320),Sf.position.set(Math.round(Qd.position.x/12)*12,0,Math.round(Qd.position.z/12)*12),xf.time.value=n,xf.skyCol.value.copy(Vp),Xd.render(Zd,Qd),t.inStorm){let n=o.id===`mars`;e.lineWidth=ef,e.strokeStyle=n?`rgba(240,200,150,0.4)`:`rgba(200,215,255,0.35)`,e.beginPath();for(let r=0;r<60;r++){let i=(M(r,t.frame>>1,9)*1.3-.15)*X.W|0,a=M(r,t.frame>>1,10)*X.H|0;e.moveTo(i,a),e.lineTo(i-(n?12:4)*ef,a+(n?2:10)*ef)}e.stroke(),e.fillStyle=n?`rgba(120,60,30,0.25)`:`rgba(20,24,44,0.22)`,e.fillRect(0,0,X.W,X.H)}}var Gp=new U,Kp=new U,qp=new U,Jp=``;function Yp(e){let t=ku();Jp!==t.id&&(Jp=t.id,Gp.copy(_f.zenith.value),Kp.copy(_f.horizon.value),qp.setRGB(.02,.13,.34)),_f.zenith.value.copy(Gp).lerp(Hp,e),_f.horizon.value.copy(Kp).lerp(Hp,e*.85),xf.deep.value.copy(qp).lerp(Hp,e*.7)}var Xp={turn:0,pitch:0,fwd:0,throttle:.7,action:!1},Zp={realStick:!0};try{Zp.realStick=localStorage.getItem(`skywright.stick`)!==`push`}catch{}function Qp(){Zp.realStick=!Zp.realStick;try{localStorage.setItem(`skywright.stick`,Zp.realStick?`pull`:`push`)}catch{}return Zp.realStick}var $p=new Set,em={id:null,ox:0,oy:0,x:0,y:0},tm=()=>{},nm=()=>{};function rm(e,t,n){tm=n.action,nm=n.key,window.addEventListener(`keydown`,e=>{e.repeat||($p.add(e.code),(e.code===`Space`||e.code===`Enter`)&&(e.preventDefault(),tm()),nm(e.code))}),window.addEventListener(`keyup`,e=>$p.delete(e.code)),window.addEventListener(`blur`,()=>$p.clear()),e.addEventListener(`pointerdown`,t=>{em.id===null&&(em.id=t.pointerId,em.ox=t.clientX,em.oy=t.clientY,em.x=em.y=0,e.setPointerCapture(t.pointerId))}),e.addEventListener(`pointermove`,e=>{e.pointerId===em.id&&(em.x=N((e.clientX-em.ox)/55,-1,1),em.y=N((e.clientY-em.oy)/55,-1,1))});let r=e=>{e.pointerId===em.id&&(em.id=null,em.x=em.y=0)};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r);let i=e=>{let n=t.getBoundingClientRect();Xp.throttle=N(1-(e.clientY-n.top)/n.height,0,1)};t.addEventListener(`pointerdown`,e=>{t.setPointerCapture(e.pointerId),i(e)}),t.addEventListener(`pointermove`,e=>{(e.buttons||e.pointerType===`touch`)&&i(e)})}function im(e){let t=e=>$p.has(e),n=(t(`ArrowRight`)||t(`KeyD`)?1:0)-(t(`ArrowLeft`)||t(`KeyA`)?1:0),r=(t(`ArrowUp`)||t(`KeyW`)?1:0)-(t(`ArrowDown`)||t(`KeyS`)?1:0);Xp.turn=N(n+em.x,-1,1),Xp.fwd=N(r-em.y,-1,1),Xp.pitch=N((r-em.y)*(Zp.realStick?-1:1),-1,1);let i=(t(`KeyE`)||t(`ShiftLeft`)?1:0)-!!t(`KeyQ`);i&&(Xp.throttle=N(Xp.throttle+i*e*.7,0,1))}var am=e=>e[Math.floor(Math.random()*e.length)],om=(e,t)=>e+Math.floor(Math.random()*(t-e+1)),sm=[[`Newton’s second law: F = ?`,`mass × acceleration`,[`mass × velocity`,`mass ÷ acceleration`,`weight × speed`],`Force is mass times acceleration.`],[`Ohm’s law: voltage V = ?`,`current × resistance`,[`current ÷ resistance`,`power × current`,`resistance ÷ current`],`V = I × R.`],[`Electrical power P = ?`,`voltage × current`,[`voltage ÷ current`,`current × resistance`,`voltage + current`],`P = V × I, in watts.`],[`Speed = ?`,`distance ÷ time`,[`distance × time`,`time ÷ distance`,`distance + time`],`How far, divided by how long.`],[`Density = ?`,`mass ÷ volume`,[`mass × volume`,`volume ÷ mass`,`weight × height`],`How much stuff in how much space.`],[`Pressure = ?`,`force ÷ area`,[`force × area`,`area ÷ force`,`mass × height`],`The same push on a smaller area presses harder.`],[`Work done = ?`,`force × distance`,[`force ÷ distance`,`mass × time`,`power × force`],`Push something a distance and you have done work.`],[`Kinetic energy = ?`,`½ × mass × speed²`,[`mass × speed`,`mass × height`,`2 × mass × speed`],`Double the speed and the energy goes up four times.`],[`The area of a circle is?`,`π × radius²`,[`2 × π × radius`,`π × diameter`,`radius² ÷ π`],`Pi r squared.`],[`The distance round a circle is?`,`2 × π × radius`,[`π × radius²`,`π ÷ radius`,`4 × radius`],`Two pi r, or pi times the diameter.`],[`In a right-angled triangle with short sides a and b, the long side c obeys?`,`a² + b² = c²`,[`a + b = c`,`a × b = c²`,`a² − b² = c`],`Pythagoras.`],[`The angles inside any triangle add up to?`,`180°`,[`90°`,`270°`,`360°`],`Always 180 degrees.`],[`In flight, which force works against lift?`,`weight`,[`thrust`,`drag`,`torque`],`Lift against weight, thrust against drag.`],[`In flight, which force works against thrust?`,`drag`,[`lift`,`weight`,`pressure`],`Thrust against drag, lift against weight.`],[`Pure water boils at sea level at?`,`100 °C`,[`90 °C`,`120 °C`,`212 °C`],`100 degrees Celsius, which is 212 Fahrenheit.`],[`A small gear drives a large gear. The large gear turns?`,`slower, with more turning force`,[`faster, with less force`,`at the same speed`,`the same way round, faster`],`Gearing down trades speed for force.`],[`To undo an ordinary bolt you turn it?`,`anticlockwise`,[`clockwise`,`either way`,`whichever is tighter`],`Righty tighty, lefty loosey.`],[`A longer spanner makes a stiff nut?`,`easier to turn`,[`harder to turn`,`no different`,`turn the other way`],`A longer lever needs less force.`],[`As you climb higher, the air gets?`,`thinner and colder`,[`thicker and warmer`,`thicker and colder`,`no different`],`Which is why engines and wings struggle up high.`],[`Which of these does a wing need to make lift?`,`air moving over it`,[`a heavy engine`,`warm weather`,`a tailwind`],`No airflow, no lift.`],[`One kilometre is how many metres?`,`1,000`,[`100`,`10,000`,`1,609`],`Kilo means a thousand.`],[`How many degrees in a full turn?`,`360`,[`180`,`100`,`400`],`A full circle is 360 degrees.`]],cm=[[`What has hands but cannot clap?`,`a clock`,[`a glove`,`a statue`,`a scarecrow`]],[`What has keys but opens no locks?`,`a piano`,[`a jailer`,`a map`,`a chest`]],[`What gets wetter the more it dries?`,`a towel`,[`a sponge cake`,`the sea`,`a river`]],[`What has a neck but no head?`,`a bottle`,[`a giraffe`,`a shirt`,`a river`]],[`What goes up and never comes down?`,`your age`,[`a balloon`,`smoke`,`the tide`]],[`The more you take, the more you leave behind. What are they?`,`footsteps`,[`coins`,`breaths`,`photographs`]],[`What has teeth but cannot bite?`,`a comb`,[`a shark`,`a baby`,`a wolf`]],[`What travels round the world while staying in one corner?`,`a postage stamp`,[`a compass`,`the moon`,`a spider`]],[`What has cities but no houses, and rivers but no water?`,`a map`,[`a desert`,`a dream`,`a painting of fog`]],[`I fly without wings and cry without eyes. What am I?`,`a cloud`,[`a kite`,`the wind`,`a ghost`]],[`What has one eye but cannot see?`,`a needle`,[`a pirate`,`a storm cloud`,`a potato`]],[`What can you catch but never throw?`,`a cold`,[`a ball`,`a fish`,`a train`]]];function lm(e,t,n,r){let i=new Set,a=0;for(;i.size<3&&a++<60;){let e=t+am(r)*(Math.random()<.5?-1:1);e!==t&&e>0&&i.add(e)}return[e,String(t),[...i].map(String),n]}function um(){let e=om(0,5);if(e===0){let e=om(6,15),t=om(6,15);return lm(`${e} × ${t} = ?`,e*t,`${e} × ${t} = ${e*t}.`,[e,t,10,2,e+t])}if(e===1){let e=om(120,480),t=om(60,290);return lm(`${e} + ${t} = ?`,e+t,`${e} + ${t} = ${e+t}.`,[10,20,100,1,11])}if(e===2){let e=om(4,12),t=om(6,14);return lm(`${e*t} ÷ ${e} = ?`,t,`${e} × ${t} = ${e*t}.`,[1,2,3,4])}if(e===3){let e=am([10,20,25,50,75]),t=am([40,60,80,120,160,200]);return lm(`What is ${e}% of ${t}?`,e*t/100,`${e}% of ${t} is ${e*t/100}.`,[5,10,20,4])}if(e===4){let e=am([120,150,180,240,300]),t=om(2,5);return lm(`An aeroplane flies at ${e} km/h for ${t} hours. How many km does it cover?`,e*t,`Distance is speed × time: ${e} × ${t} = ${e*t}.`,[e,50,100,e/2])}let t=am([240,360,480,600]),n=am([2,3,4]);return lm(`A flight of ${t} km takes ${n} hours. What was the average speed, in km/h?`,t/n,`Speed is distance ÷ time: ${t} ÷ ${n} = ${t/n}.`,[10,20,30,40])}var dm=``;function fm(){let e;do{let t=Math.random();e=t<.4?um():am(t<.8?sm:cm)}while(e[0]===dm);dm=e[0];let[t,n,r,i]=e,a=[n,...r];for(let e=a.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return{q:t,options:a,answer:a.indexOf(n),right:n,why:i||`The answer is ${n}.`}}var pm=e=>document.getElementById(e),Z={};for(let e of[`hud`,`nav`,`navArrow`,`navText`,`alert`,`hint`,`gSpd`,`gAlt`,`gFuel`,`pips`,`throttle`,`thrFill`,`objective`,`viewBtn`,`abilBtn`,`stopBtn`,`fixBtn`,`fixPanel`,`fixTitle`,`fixZone`,`fixMark`,`fixDots`,`fixHit`,`panel`,`flash`])Z[e]=pm(e);var mm=e=>e>60?`ok`:e>35?`warn`:`bad`,hm=(e,t=``)=>`<div class="bar ${t}"><i style="width:${Math.max(0,Math.min(100,e))}%"></i></div>`,gm=null;function _m(e,t=!1){let n=e+t;n!==gm&&(gm=n,Z.alert.classList.toggle(`hidden`,!e),Z.alert.classList.toggle(`soft`,t),Z.alert.textContent=e||``)}function vm(e){Z.hint.classList.toggle(`hidden`,!e),e&&(Z.hint.innerHTML=e)}function ym(){Z.flash.classList.add(`on`),requestAnimationFrame(()=>requestAnimationFrame(()=>Z.flash.classList.remove(`on`)))}function bm(e,t,n,r){let o=e.plane,s=e.stats,c=e.ac;Z.gSpd.textContent=Math.round(o.speed*10),Z.gAlt.textContent=ee(Math.max(0,o.alt-e.belly));let l=c.fuel/s.tank*100;Z.gFuel.style.width=l+`%`,Z.gFuel.parentElement.className=`bar `+(l>30?``:l>15?`warn`:`bad`),Z.thrFill.style.height=r*100+`%`,e.fail.avionics?(Z.navArrow.style.visibility=`hidden`,Z.navText.textContent=`NAV OFFLINE`):(Z.navArrow.style.visibility=t===null?`hidden`:`visible`,t!==null&&(Z.navArrow.style.transform=`rotate(${t}rad)`),Z.navText.textContent=n);let u=``;for(let t of a)u+=`<div class="pip ${mm(c.cond[t])}${e.fail[t]?` failed`:``}">${i[t].name.slice(0,3).toUpperCase()}</div>`;u!==Z.pips._h&&(Z.pips.innerHTML=u,Z.pips._h=u);let d=a.some(t=>e.fail[t]);Z.fixBtn.classList.toggle(`hidden`,!d||xm.open),Z.fixBtn.textContent=e.save.kits>0?`FIX`:`BODGE`}var xm={open:!1,part:null,pos:0,dir:1,speed:1,z0:0,z1:0,hits:0,need:3};function Sm(e){let t=(.13+e/100*.12)*(xm.jury?.8:1);xm.z0=.08+Math.random()*(.84-t),xm.z1=xm.z0+t,Z.fixZone.style.left=xm.z0*100+`%`,Z.fixZone.style.width=t*100+`%`}function Cm(){Z.fixDots.textContent=`●`.repeat(xm.hits)+`○`.repeat(xm.need-xm.hits)}function wm(e,t,n=!1){Object.assign(xm,{open:!0,part:e,pos:0,dir:1,speed:1.05,hits:0,cond:t,jury:n,need:n?5:3}),Z.fixTitle.textContent=n?`${i[e].fail}: no kit. Five hits`:`${i[e].fail}: stop in the green`,Sm(t),Cm(),Z.fixPanel.classList.remove(`hidden`)}function Tm(){xm.open=!1,Z.fixPanel.classList.add(`hidden`)}function Em(e){xm.open&&(xm.pos+=xm.dir*xm.speed*e,xm.pos>1?(xm.pos=1,xm.dir=-1):xm.pos<0&&(xm.pos=0,xm.dir=1),Z.fixMark.style.left=xm.pos*100+`%`)}function Dm(){return xm.pos<xm.z0||xm.pos>xm.z1?`miss`:(xm.hits++,xm.speed*=1.15,Cm(),xm.hits>=xm.need?`done`:(Sm(xm.cond),`hit`))}function Om(e,t=!1){Z.panel.innerHTML=e,Z.panel.classList.toggle(`sheet`,t),Z.panel.classList.remove(`hidden`)}function km(){Z.panel.classList.add(`hidden`),Z.panel.innerHTML=``}function Am(e){return`<div class="card title">
    <h1>SKYWRIGHT</h1>
    <p>Fly it. Fix it. Follow the logbook.</p>
    ${e?`<button class="btn primary" data-act="continue">Continue</button>`:``}
    <button class="btn ${e?`ghost`:`primary`}" data-act="new">New story</button>
    <p><small>Prototype build</small></p>
  </div>`}function jm(e){return`<div class="card">
    ${e.ch?`<small class="chapter">${e.ch}</small>`:``}
    <h2>${e.title}</h2>
    ${e.nan?`<p class="nan">${e.nan}<br><small>Nan's logbook</small></p>`:``}
    ${(e.body||[]).map(e=>`<p>${e}</p>`).join(``)}
    ${e.note?`<p class="note">${e.note}</p>`:``}
    <button class="btn primary" data-act="card">${e.btn||`Continue`}</button>
  </div>`}function Mm(e,t){return`<div class="card">
    <small class="chapter">${t}</small>
    <p class="qq">${e.q}</p>
    ${e.options.map((e,t)=>`<button class="btn opt" data-act="answer" data-arg="${t}">${`ABCD`[t]}. ${e}</button>`).join(``)}
  </div>`}function Nm(e,t,n,r){return`<div class="card">
    <h2 class="${t?`right`:`wrong`}">${t?`Right`:`Not quite`}</h2>
    <p>${e.why}</p>
    <p>${n}</p>
    <button class="btn primary" data-act="quizdone">${r}</button>
  </div>`}function Pm(e){let t=e.save,n=e.ac,r=e.stats,o=e.craft,s=r.tank-n.fuel,c=E(s),l=Math.min(s,Math.floor(t.money/.6)),u=`<div class="row">
    <div class="name">Fuel</div>
    <div class="acts"><button class="mini gold" data-act="refuel" ${s<1||l<1?`disabled`:``}>${s<1?`Full`:t.money>=c?`Fill $${c}`:`Add $${E(l)}`}</button></div>
    <div class="meter">${hm(n.fuel/r.tank*100,n.fuel/r.tank>.3?``:`warn`)}<span>${Math.round(n.fuel)}/${Math.round(r.tank)}</span></div>
  </div>`;for(let e of a){let r=n.cond[e],a=100-r,s=Math.min(20,a);u+=`<div class="row">
      <div class="name">${i[e].name}</div>
      <div class="acts">
        <button class="mini" data-act="repair" data-arg="${e}:${s}" ${a<1||t.money<T(o,s)?`disabled`:``}>+${Math.round(s)} $${T(o,s)}</button>
        <button class="mini gold" data-act="repair" data-arg="${e}:${a}" ${a<1||t.money<T(o,a)?`disabled`:``}>Full $${T(o,a)}</button>
      </div>
      <div class="meter">${hm(r,mm(r))}<span>${Math.round(r)}%</span></div>
    </div>`}return u+=`<div class="row">
    <div class="name">Repair kits ${t.kits}/${t.kitCap} <small>fix breakdowns in flight</small></div>
    <div class="acts">
      <button class="mini" data-act="kit" ${t.kits>=t.kitCap||t.money<40?`disabled`:``}>Kit $40</button>
      <button class="mini" data-act="kitcap" ${t.kitCap>=5||t.money<120?`disabled`:``}>${t.kitCap>=5?`Max`:`Carry +1 $120`}</button>
    </div>
  </div>
  <div class="row">
    <div class="name">Odd job <small>answer a question</small></div>
    <div class="acts"><button class="mini" data-act="shift">Earn $${O(t,r)}</button></div>
  </div>`,u}function Fm(e){let t=e.save,n=``;for(let e of Object.keys(l)){let r=t.up[e];n+=`<div class="row">
      <div class="name">${l[e].name} <span class="lv">${`■`.repeat(r)}${`□`.repeat(3-r)}</span></div>
      <div class="acts"><button class="mini gold" data-act="upgrade" data-arg="${e}" ${r>=3||t.money<D(r)?`disabled`:``}>${r>=3?`Max`:`$${D(r)}`}</button></div>
      <p>${l[e].desc}</p>
    </div>`}return n}function Im(e){let t=e.save,n=``;for(let r of Object.keys(o)){let i=o[r],s=t.fleet[r];if(!s){n+=`<div class="row"><div class="name">? ? ?</div></div>`;continue}let l=y(r,t.up),u=Math.min(...a.map(e=>s.cond[e]));n+=`<div class="row">
      <div class="name">${i.name} <small>${i.kind}</small></div>
      <div class="acts">${r===e.craft?`<button class="mini" disabled>Flying</button>`:x(t,e.mission,r)?`<button class="mini gold" data-act="fly" data-arg="${r}">Fly</button>`:`<button class="mini" disabled>No</button>`}</div>
      <div>
        <p>${r===e.mission.craft?`<b>★ Suggested.</b> `:``}${i.blurb} ${c(i)}</p>
        <p class="abil"><b>${i.ability.name}:</b> ${i.ability.desc}</p>
        <div class="stats"><span>${Math.round(l.speed*(1+l.space)*10)} kt</span><span>${ee(l.ceil)}</span><span>${k(w(l,l.tank))} km</span><span>Health ${Math.round(u)}%</span></div>
      </div>
    </div>`}return n}function Lm(e){let t=`<div class="row"><div><div class="name">${f.title}</div><p class="nan">${f.nan}</p>${f.body.map(e=>`<p>${e}</p>`).join(``)}</div></div>`;for(let n=0;n<Math.min(e.save.mission,p.length);n++){let e=p[n];t+=`<div class="row"><div>${e.ch?`<small class="chapter">${e.ch}</small>`:``}<div class="name">${e.title}</div>
      ${e.arrive.map(e=>`<p>${e}</p>`).join(``)}${e.real?`<p class="note">${e.real}</p>`:``}</div></div>`}return e.save.mission>=p.length&&(t+=`<div class="row"><div><p>${m}</p></div></div>`),t}function Rm(e){let t=e.save,r=e.ac,s=e.stats,c=e.mission,l=[];if(c.free)return l;e.craft!==c.craft&&l.push([`warn`,`The logbook suggests the ${o[c.craft].name}.`]);let u=C(c),d=n[S(c).stop.biome],f=w(s,r.fuel);c.transit?r.fuel<s.tank*.6&&l.push([`warn`,`Fill the tank for space.`]):f<u?l.push([`bad`,`Not enough fuel: ${k(f)} of ${k(u)} km.`]):f<u*1.2&&l.push([`warn`,`Fuel is tight: ${k(f)} of ${k(u)} km.`]);for(let e of a)r.cond[e]<50&&l.push([`warn`,`${i[e].name} worn: ${Math.round(r.cond[e])}%.`]);return t.kits===0&&l.push([`warn`,`No repair kits.`]),c.radio&&l.push([`warn`,`No nav arrow. A radio fix every ${c.radio} s: match YOU to STEER.`]),!c.transit&&!s.orbit&&(d.hs>60&&s.ceil<28&&l.push([`warn`,`Peaks too high to climb. Use the valleys.`]),d.storm>.1&&s.ceil<31&&l.push([`warn`,`Storms. Go round or stay low.`]),!s.floats&&d.sea>.56&&l.push([`warn`,`Open water. Nowhere to land.`])),l}function zm(e){let t=e.mission,n=o[e.craft];if(t.free)return`<div class="row"><div><div class="name">${t.title}</div><p>${t.excursion?t.brief:m}</p></div></div>`;let i=S(t),a=C(t),s=Rm(e);return`<div class="row"><div>
      <small class="chapter">${e.chapter}</small>
      <div class="name">${t.title}</div>
      <p>${t.brief}</p>
      <p><b>${n.name}</b> → ${i.stop.name}${i.world===t.world?``:`, ${r[i.world].name}`}${a?` · ${k(a)} km`:``}${t.pay?` · <b>$${t.pay}</b>`:``}</p>
      <p class="abil"><b>${n.ability.name}:</b> ${n.ability.desc}</p>
    </div></div>
    ${s.length?s.map(([e,t])=>`<p class="warnline ${e}">▲ ${t}</p>`).join(``):`<p class="okline">Ready.</p>`}`}function Bm(e){let t=e.save,n=t.found||{},i=e=>`${_[e].filter(e=>n[e.id]).length}/${_[e].length} found`;if(e.mission.excursion)return`<div class="row"><div><div class="name">${r[t.visit].name}</div><p>${i(t.visit)}. Fly through the glowing door to go home.</p></div>
      <div class="acts"><button class="mini gold" data-act="doorhome">Go home</button></div></div>
      ${_[t.visit].map(e=>`<div class="row"><div><div class="name">${n[e.id]?e.title:`? ? ?`}</div><p>${n[e.id]?e.text:`Look for a blue beam.`}</p></div></div>`).join(``)}`;let a=``;for(let[e,n]of g){let o=t.mission>n;a+=`<div class="row"><div><div class="name">${o?r[e].name:`? ? ?`}</div><p>${o?i(e):`Locked.`}</p></div>
      <div class="acts"><button class="mini gold" data-act="door" data-arg="${e}" ${o?``:`disabled`}>Visit</button></div></div>`}return a}var Vm=[[`workshop`,`Workshop`],[`skills`,`Skills`],[`fleet`,`Fleet`],[`logbook`,`Logbook`],[`door`,`Door`],[`mission`,`Mission`]],Hm={workshop:Pm,skills:Fm,fleet:Im,logbook:Lm,door:Bm,mission:zm};function Um(e){let t=e.save,n=e.mission,i=r[n.world],a=i.stops[n.from];return`<div class="hangar">
    <header><div><h2>${a.name}</h2><small>${i.id===`earth`?a.tag:i.name} · ${o[e.craft].name}</small></div><div class="money">$${t.money}</div></header>
    <div class="tabs">${Vm.filter(([e])=>e!==`door`||t.fleet.ark).map(([t,n])=>`<button data-act="tab" data-arg="${t}" class="${e.tab===t?`on`:``}">${n}</button>`).join(``)}</div>
    <section>${Hm[e.tab](e)}</section>
    <footer>${e.tab===`mission`?`<button class="btn primary" data-act="takeoff">Take off</button>`:`<button class="btn primary" data-act="tab" data-arg="mission">Mission</button>`}
      <button class="btn ghost" data-act="walk">Walk round</button></footer>
  </div>`}function Wm(e,t){let n=e.save,r=e.ac,o=`<div class="hangar">
    <header><div><h2>${t?`Afloat`:`Camp`}</h2><small>No workshop here.</small></div><div class="money">Kits ${n.kits}</div></header>
    <section>${e.campNote?`<p class="${e.campNote.startsWith(`Down safely`)?`okline`:`warnline`}">${e.campNote}</p>`:``}`;for(let t of a){let a=r.cond[t];o+=`<div class="row">
      <div class="name">${i[t].name}${e.fail[t]?` · BROKEN`:``}</div>
      <div class="acts">${n.kits<1&&e.fail[t]?`<button class="mini" data-act="fieldbodge" data-arg="${t}">Bodge it</button>`:`<button class="mini gold" data-act="fieldfix" data-arg="${t}" ${n.kits<1||a>95&&!e.fail[t]?`disabled`:``}>Kit +30</button>`}</div>
      <div class="meter">${hm(a,mm(a))}<span>${Math.round(a)}%</span></div>
    </div>`}return o+=`<div class="row"><div class="name">Fuel</div><div class="meter">${hm(r.fuel/e.stats.tank*100)}<span>${Math.round(r.fuel)}</span></div></div>
    <div class="row"><div class="name">Make fuel</div>
      <div class="acts"><button class="mini gold" data-act="brew" ${r.fuel>=e.stats.tank-1?`disabled`:``}>Quiz: +20%</button></div></div>
    <div class="row"><div class="name">Make a repair kit</div>
      <div class="acts"><button class="mini" data-act="scav" ${n.kits>=n.kitCap?`disabled`:``}>Quiz: +1</button></div></div>
    ${r.fuel<1?`<p class="warnline bad">▲ Tank dry. Make fuel or call for help.</p>`:``}
    </section>
    <footer>${r.fuel<1?`<button class="btn" data-act="tow">Call for help</button>`:`<button class="btn primary" data-act="takeoff">Take off</button>`}
      ${e.surfLabel&&r.fuel>=1?`<button class="btn ghost" data-act="surface">${e.surfLabel}</button>`:``}
      <button class="btn ghost" data-act="walk">${t?`Out on the wing`:`Walk round`}</button></footer>
  </div>`,o}var Q=null,Gm,Km,qm,Jm,Ym,Xm=!1;function Zm(){if(Q){Q.state===`suspended`&&Q.resume();return}let e=window.AudioContext||window.webkitAudioContext;e&&(Q=new e,Gm=Q.createGain(),Gm.gain.value=Xm?0:.5,Gm.connect(Q.destination),Ym=Q.createBiquadFilter(),Ym.type=`lowpass`,Ym.frequency.value=420,Km=Q.createGain(),Km.gain.value=0,qm=Q.createOscillator(),qm.type=`sawtooth`,Jm=Q.createOscillator(),Jm.type=`square`,qm.connect(Ym),Jm.connect(Ym),Ym.connect(Km),Km.connect(Gm),qm.start(),Jm.start(),yh())}function Qm(e,t,n,r){if(!Q)return;let i=Q.currentTime,a=48+t*62;qm.frequency.setTargetAtTime(a,i,.1),Jm.frequency.setTargetAtTime(a*1.51,i,.1),Ym.frequency.setTargetAtTime(300+t*500,i,.1);let o=e?.03+t*.04:0;n&&Math.sin(r*23)+Math.sin(r*37)>.6&&(o*=.15),Km.gain.setTargetAtTime(o,i,.04)}function $m(e=660,t=.08,n=`square`,r=.12){if(!Q)return;let i=Q.createOscillator(),a=Q.createGain();i.type=n,i.frequency.value=e,a.gain.setValueAtTime(r,Q.currentTime),a.gain.exponentialRampToValueAtTime(.001,Q.currentTime+t),i.connect(a),a.connect(Gm),i.start(),i.stop(Q.currentTime+t)}var eh=null;function th(){if(!eh){let e=Q.sampleRate;eh=Q.createBuffer(1,e,e);let t=eh.getChannelData(0);for(let n=0;n<e;n++)t[n]=Math.random()*2-1}let e=Q.createBufferSource();return e.buffer=eh,e}function nh(e=.5,t=.5){if(!Q)return;let n=th(),r=Q.createGain(),i=Q.createBiquadFilter(),a=Q.currentTime;i.type=`lowpass`,i.frequency.value=300,r.gain.setValueAtTime(e,a),r.gain.exponentialRampToValueAtTime(.001,a+t),n.connect(i),i.connect(r),r.connect(Gm),n.start(a,Math.random()*.5,t)}function rh(){return Xm=!Xm,Gm&&(Gm.gain.value=Xm?0:.5),Xm}var ih=[0,4,7],ah=[0,3,7],oh=[0,5,7],sh=[0,7,12],ch={calm:{bpm:74,root:48,scale:[0,2,4,7,9],prog:[0,5,0,7],chords:[ih,ih,ih,ih],tune:.3,arp:4,bass:[0],pad:.05,wave:`triangle`,echo:.35},flight:{bpm:104,root:50,scale:[0,2,4,7,9],prog:[0,-3,5,7],chords:[ih,ah,ih,ih],tune:.55,arp:2,bass:[0,6,8,14],pad:.035,wave:`triangle`,echo:.25,hat:!0},era:{bpm:80,root:50,scale:[0,2,5,7,9],prog:[0,0,7,5],chords:[sh,oh,sh,oh],tune:.6,arp:0,bass:[0,8],pad:.03,wave:`pluck`,echo:.3,block:!0,bend:!0},space:{bpm:60,root:45,scale:[0,2,4,6,7,9,11],prog:[0,2,0,-3],chords:[ih,ih,ih,ah],tune:.22,arp:8,bass:[0],pad:.07,wave:`sine`,echo:.6},moon:{bpm:54,root:43,scale:[0,2,3,7,10],prog:[0,0,-2,0],chords:[sh,ah,sh,oh],tune:.18,arp:8,bass:[0],pad:.07,wave:`sine`,echo:.65},mars:{bpm:88,root:45,scale:[0,2,3,5,7,9,10],prog:[0,5,-2,0],chords:[ah,ih,ih,ah],tune:.4,arp:2,bass:[0,3,8,11],pad:.05,wave:`sawtooth`,echo:.35,hat:!0},deep:{bpm:66,root:47,scale:[0,2,4,6,8,10],prog:[0,4,2,6],chords:[[0,4,8],[0,4,8],[0,4,8],[0,4,8]],tune:.35,arp:4,bass:[0],pad:.07,wave:`sine`,echo:.6}},lh,uh,dh=!0,fh=`calm`,ph=!1,mh=0,hh=0,gh=[],_h=99;try{dh=localStorage.getItem(`skywright.music`)!==`off`}catch{}var vh=e=>440*2**((e-69)/12);function yh(){lh=Q.createGain(),lh.gain.value=dh?.9:0,lh.connect(Gm),uh=Q.createDelay(1.5),uh.delayTime.value=.42;let e=Q.createGain(),t=Q.createBiquadFilter();e.gain.value=.42,t.type=`lowpass`,t.frequency.value=1800,uh.connect(t),t.connect(e),e.connect(uh),t.connect(lh),hh=Q.currentTime+.1,setInterval(kh,60)}function bh(e,t=!1){ph=t,e!==fh&&ch[e]&&(fh=e,_h=99)}function xh(){dh=!dh,lh&&lh.gain.setTargetAtTime(dh?.9:0,Q.currentTime,.2);try{localStorage.setItem(`skywright.music`,dh?`on`:`off`)}catch{}return dh}var Sh=()=>dh;function Ch(e,t,n,r,i,a,o){let s=Q.createOscillator(),c=Q.createGain(),l=Q.createBiquadFilter(),u=i===`pluck`;if(s.type=u?`sawtooth`:i,s.frequency.setValueAtTime(vh(e)*(o?.972:1),t),o&&s.frequency.exponentialRampToValueAtTime(vh(e),t+.09),l.type=`lowpass`,l.frequency.setValueAtTime(u?4200:i===`sawtooth`?1400:3e3,t),u&&l.frequency.exponentialRampToValueAtTime(500,t+n*.6),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+(u?.005:.02)),c.gain.exponentialRampToValueAtTime(1e-4,t+n),s.connect(l),l.connect(c),c.connect(lh),a){let e=Q.createGain();e.gain.value=a,c.connect(e),e.connect(uh)}s.start(t),s.stop(t+n+.05)}function wh(e,t,n,r){let i=Q.createGain(),a=Q.createBiquadFilter();a.type=`lowpass`,a.frequency.value=650,i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(r,t+n*.35),i.gain.linearRampToValueAtTime(1e-4,t+n*1.05),a.connect(i),i.connect(lh);for(let r of e)for(let e of[-5,6]){let i=Q.createOscillator();i.type=`sawtooth`,i.frequency.value=vh(r),i.detune.value=e,i.connect(a),i.start(t),i.stop(t+n*1.1)}}function Th(e,t,n,r){let i=th(),a=Q.createGain(),o=Q.createBiquadFilter();o.type=`bandpass`,o.frequency.value=n,o.Q.value=3,a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(1e-4,e+r),i.connect(o),o.connect(a),a.connect(lh),i.start(e,Math.random()*.5,r+.02)}function Eh(e){let t=t=>{let n=[],r=t;for(let t=0;t<16;t++){let i=t%4==0,a=t%2==0,o=e.tune*(i?1.5:a?.8:.3);Math.random()<o?(r=Math.max(0,Math.min(e.scale.length*2-1,r+Math.round((Math.random()-.5)*4))),n.push(r)):n.push(null)}return n},n=e.scale.length,r=t(n),i=t(n+1),a=t(n-1);a[12]=0+n,a[14]=null,a[15]=null,gh=[...r,...i,...r,...a]}var Dh=(e,t)=>e.scale[t%e.scale.length]+12*Math.floor(t/e.scale.length);function Oh(e,t,n,r){let i=Math.floor(t/16)%4,a=t%16,o=e.root+e.prog[i],s=e.chords[i];if(a===0&&wh([o,o+s[1],o+s[2]],n,r*16,e.pad),e.bass.includes(a)&&Ch(o-12,n,r*3,.11,`triangle`,0),e.arp&&a%e.arp===0){let t=a/e.arp%4;Ch(o+12+[s[0],s[1],s[2],s[1]+12][t],n,r*e.arp*1.6,.035,e.wave===`pluck`?`pluck`:`triangle`,e.echo)}let c=gh[t%64];c!=null&&Ch(e.root+12+Dh(e,c),n,r*(e.wave===`sine`?7:3.2),e.wave===`sawtooth`?.04:.075,e.wave,e.echo,e.bend&&a%4==0),e.hat&&a%2==1&&Th(n,.012,7e3,.03),e.hat&&a%8==0&&Ch(e.root-24,n,.12,.09,`sine`,0),e.block&&(a===0||a===6||a===8)&&Th(n,.03,1500,.05),ph&&a%2==0&&Ch(e.root-12+(a%4==0?0:6),n,r*1.2,.05,`sawtooth`,0)}function kh(){if(!Q||Q.state!==`running`)return;hh<Q.currentTime-.3&&(hh=Q.currentTime+.05);let e=ch[fh],t=60/e.bpm/4;for(;hh<Q.currentTime+.25;)mh%64==0&&(_h++,_h>=2&&(Eh(e),_h=0)),dh&&Oh(e,mh,hh,t),hh+=t,mh++}var Ah=()=>({state:Q?Q.state:`none`,step:mh,mood:fh,musicOn:dh,tense:ph});function jh(e,t,n,r,i,a){e.fillStyle=`#0c0f1a`,e.beginPath(),e.arc(t,n,r,0,6.283),e.fill(),e.strokeStyle=`#8a90a6`,e.lineWidth=1,e.stroke(),e.fillStyle=`#8a90a6`;for(let i=0;i<=6;i++){let a=2.36+i/6*4.71;e.fillRect(t+Math.cos(a)*(r-2)|0,n+Math.sin(a)*(r-2)|0,1,1)}let o=2.36+Math.max(0,Math.min(1,i))*4.71;e.strokeStyle=a,e.beginPath(),e.moveTo(t,n),e.lineTo(t+Math.cos(o)*(r-3),n+Math.sin(o)*(r-3)),e.stroke()}function Mh(e,t,n,r){let i=Math.max(1,Math.round(Math.min(t,n)/400)),a=Math.round(n*(t>n?.34:.26)),o=n-a;if(e.setTransform(1,0,0,1,0,0),e.fillStyle=r.nose,e.beginPath(),e.ellipse(t/2,o+6,t*.15,n*.06,0,0,6.283),e.fill(),e.fillStyle=`rgba(0,0,0,0.25)`,e.beginPath(),e.ellipse(t/2,o+9,t*.15,n*.05,0,0,6.283),e.fill(),r.prop){e.strokeStyle=`rgba(30,30,38,0.35)`,e.lineWidth=2*i;for(let i=0;i<3;i++){let a=r.time*33+i*1.05,s=t*.2*Math.cos(a),c=n*.09*Math.sin(a);e.beginPath(),e.moveTo(t/2-s,o-n*.04-c),e.lineTo(t/2+s,o-n*.04+c),e.stroke()}}e.strokeStyle=`#232735`,e.lineWidth=4*i,e.beginPath(),e.moveTo(-2,n*.1),e.lineTo(t*.16,o+6),e.moveTo(t+2,n*.1),e.lineTo(t*.84,o+6),e.stroke(),e.fillStyle=`#1b1f2e`,e.beginPath(),e.moveTo(0,n),e.lineTo(0,o+10),e.quadraticCurveTo(t/2,o-8,t,o+10),e.lineTo(t,n),e.fill(),e.strokeStyle=`#4b5168`,e.lineWidth=2*i,e.beginPath(),e.moveTo(0,o+10),e.quadraticCurveTo(t/2,o-8,t,o+10),e.stroke();let s=Math.max(8,Math.min(a*.3,t*.1)),c=o+a*.42;jh(e,t*.27,c,s,r.speed,`#ffd24a`),jh(e,t*.73,c,s,r.alt,`#8fd4ee`);let l=t/2,u=s*1.15;e.save(),e.beginPath(),e.arc(l,c,u,0,6.283),e.clip(),e.translate(l,c),e.rotate(-r.roll),e.fillStyle=`#4c9fe0`,e.fillRect(-u*2,-u*2,u*4,u*2+r.vz*u*.6),e.fillStyle=`#8a5a34`,e.fillRect(-u*2,r.vz*u*.6,u*4,u*2),e.fillStyle=`#fff`,e.fillRect(-u*2,r.vz*u*.6-.5,u*4,1),e.restore(),e.strokeStyle=`#8a90a6`,e.lineWidth=1,e.beginPath(),e.arc(l,c,u,0,6.283),e.stroke(),e.fillStyle=`#ffd24a`,e.fillRect(l-u*.5,c,u*.35,1),e.fillRect(l+u*.15,c,u*.35,1),e.fillRect(l,c,1,1);let d=t*.3,f=(t-d)/2,p=c+u+5;e.fillStyle=`#0c0f1a`,e.fillRect(f,p,d,4),e.fillStyle=r.fuel>.3?`#6fd05a`:r.fuel>.15?`#ffc23a`:`#e2503c`,e.fillRect(f,p,d*Math.max(0,Math.min(1,r.fuel)),4)}var Nh=document.getElementById(`game`),Ph=Nh.getContext(`2d`),Fh=`skywright.save.v2`,Ih=window.matchMedia(`(pointer: coarse)`).matches,Lh=1.9,Rh=[{name:`TOP`,tilt:.7,elev:.7,ay:.6,zm:.82,sky:0,skyH:.45},{name:`TAIL`,tilt:.36,elev:.93,ay:.74,zm:1.3,sky:1,skyH:.36},{name:`COCKPIT`,tilt:.3,elev:.95,ay:.98,zm:1.6,sky:1,skyH:.42}],zh=[{name:`THIRD PERSON`,tilt:.3,elev:.9,ay:.62,zoom:42,sky:1,skyH:.3,eye:0},{name:`FIRST PERSON`,tilt:.33,elev:.94,ay:.9,zoom:15,sky:1,skyH:.4,eye:2.3}],Bh=e=>e,Vh=document.createElement(`canvas`);Vh.getContext(`2d`,{alpha:!1});var $={mode:`title`,time:0,frame:0,boost:0,save:null,ac:null,stats:null,model:null,belly:2,mission:null,target:null,chapter:``,newCraft:null,plane:{x:-40,y:60,alt:16,heading:0,speed:12,throttle:.6,roll:.25,rollShown:0,vz:0,propSpin:1,spin:0,lean:0,stick:0,trails:[[],[]]},fail:{engine:!1,frame:!1,fuel:!1,avionics:!1},puffs:[],inCell:!1,underCell:!1,tab:`workshop`,legTime:0,timer:0,landing:null,onWater:!1,transited:!1,burnT:0,abil:{t:0,cd:0},surfLabel:``,pilot:{t:0,work:0},foot:{x:0,y:0,rot:0,view:0,from:`hangar`,step:0,moving:!1},fx:[],fxT:0,shakeT:0,bounce:0,quiz:null,task:null,sparks:[],drops:[],finds:[],portal:null,chain:0,bonus:{sparks:0,cash:0,task:0},cards:[],afterCards:null,view:0,sky:0,heat:0,camRot:-Math.PI/2,zoom:3*Lh,ax:.5,ay:.7,trailT:0,puffT:0,hudT:0,hintT:0,scenery:$e()};function Hh(){try{let e=JSON.parse(localStorage.getItem(Fh));return e&&e.v===2&&(e.mission>5&&e.mission++,e.v=3),e&&e.v===3?e:null}catch{return null}}function Uh(){try{localStorage.setItem(Fh,JSON.stringify($.save))}catch{}}function Wh(){let e=$.save,t=$.mission=b(e);for(let t=Math.min(e.mission,p.length-1);t>=0;t--)if(p[t].ch){$.chapter=p[t].ch;break}let n=t.craft,r=o[n];e.fleet[n]||(e.fleet[n]={cond:{engine:r.start.engine,frame:r.start.frame,fuel:r.start.fuel,avionics:r.start.avionics},fuel:r.tank*r.start.tank},$.newCraft=n,e.pick=null);for(let t=0;t<=Math.min(e.mission,p.length-1);t++)for(let n of p[t].also||[]){let t=o[n];e.fleet[n]||(e.fleet[n]={cond:{engine:t.start.engine,frame:t.start.frame,fuel:t.start.fuel,avionics:t.start.avionics},fuel:t.tank*t.start.tank})}let i=$.craft=e.pick&&x(e,t,e.pick)?e.pick:n;$.ac=e.fleet[i],$.stats=y(i,e.up),$.model=Ce(i),$.belly=$.model.nz*$.model.vs/2,$.ac.fuel=Math.min($.ac.fuel,$.stats.tank),$.target=S(t),Au(t.world),$.transited=!1,$.burnT=0,$.boost=$.frame+12}function Gh(){$.plane.trails[0].length=0,$.plane.trails[1].length=0}function Kh(){let e=ku().stops[$.mission.from];Object.assign($.plane,{x:e.x-2,y:e.y,heading:0,speed:0,vz:0,roll:0,lean:0,throttle:0,propSpin:0,alt:2*Su+$.belly}),Gh(),$.wrecked=!1,$.wreck=null,$.skid=0,$.vto=0,$.plane.pitchV=void 0}var qh=()=>!$.mission.transit||$.transited?$.target.stop:null;function Jh(){let e=Z.panel.querySelector(`section`),t=e?e.scrollTop:0;$.mode===`hangar`?Om(Um($),!0):$.mode===`field`&&Om(Wm($,$.onWater),!0);let n=Z.panel.querySelector(`section`);n&&(n.scrollTop=t)}function Yh(e,t){$.cards=e.slice(),$.afterCards=t,$.mode=`cards`,Z.hud.classList.add(`hidden`),Tm(),_m(null),vm(null),Xh()}function Xh(){let e=$.cards.shift();if(e){Om(jm(e));return}let t=$.afterCards;$.afterCards=null,km(),t&&t()}function Zh(){$.mode=`hangar`,$.tab=$.newCraft?`workshop`:$.tab,$.newCraft=null,Uh(),Jh()}function Qh(){Wh(),Kh();for(let e of a)$.fail[e]=!1;if($.abil.t=$.abil.cd=0,$.plane.boosting=$.plane.shield=!1,$.puffs.length=0,$.inCell=$.underCell=!1,$.heat=0,Tm(),_m(null),vm(null),Z.hud.classList.add(`hidden`),$.tab=`workshop`,$.newCraft&&$.save.mission>0){let e=o[$.newCraft],t=a.reduce((e,t)=>$.ac.cond[t]<$.ac.cond[e]?t:e,`engine`);Yh([{title:`The ${e.name}`,body:[`${e.blurb} Fix the ${i[t].name.toLowerCase()} first.`],btn:`Workshop`}],Zh)}else Zh()}function $h(e){let t=$.save,n=Math.min(t.money,60+Math.round(t.money*.25)),i=e===`crash`?100:e===`ditch`?22:0;if(t.money-=n,e===`crash`)for(let e of a)$.ac.cond[e]=Math.min($.ac.cond[e],20);else if(i)for(let e of a)$.ac.cond[e]=Math.max(5,$.ac.cond[e]-i);let o=r[$.mission.world].stops[$.mission.from].name;Yh([{title:e===`crash`?`Wrecked`:e===`ditch`?`Ditched`:`Stranded`,body:[`Towed back to ${o}: <b>-$${n}</b>.${e===`crash`?` The aircraft is a wreck.`:i?` Every part damaged.`:``}`],btn:`Workshop`}],Qh)}var eg={new(){Zm(),$.save=d(),Wh(),Kh(),$.newCraft=null,Yh([{title:f.title,nan:f.nan,body:f.body}],Qh)},continue(){Zm(),Qh()},card(){$m(520,.05),Xh()},tab(e){$.tab=e,Jh()},refuel(){let e=$.save,t=$.stats.tank-$.ac.fuel,n=Math.min(t,Math.floor(e.money/.6));n<=0||(e.money-=Math.min(e.money,E(n)),$.ac.fuel+=n)},repair(e){let[t,n]=e.split(`:`),r=+n,i=T($.craft,r);$.save.money<i||($.save.money-=i,$.ac.cond[t]=Math.min(100,$.ac.cond[t]+r),$.pilot.work=3)},kit(){let e=$.save;e.kits<e.kitCap&&e.money>=40&&(e.money-=40,e.kits++)},kitcap(){let e=$.save;e.kitCap<5&&e.money>=120&&(e.money-=120,e.kitCap++)},shift(){$.quiz=fm(),$.quizFor=`job`,Om(Mm($.quiz,`Odd job \u00b7 $${O($.save,$.stats)}`))},brew(){$.quiz=fm(),$.quizFor=`fuel`,Om(Mm($.quiz,`Make fuel · +20%`))},scav(){$.quiz=fm(),$.quizFor=`kit`,Om(Mm($.quiz,`Make a kit · +1`))},answer(e){let t=$.quiz,n=$.save,r=+e===t.answer,i=O(n,$.stats),a,o=``;$.quizFor===`fuel`?(r&&($.ac.fuel=Math.min($.stats.tank,$.ac.fuel+$.stats.tank*.2)),a=`<b>+20% fuel.</b>`,o=`No fuel. Try again.`):$.quizFor===`kit`?(r&&(n.kits=Math.min(n.kitCap,n.kits+1)),a=`<b>+1 repair kit.</b>`,o=`No kit. Try again.`):(r&&(n.money+=i,n.shift=(+n.shift||0)+1),a=`<b>+$${i}</b>`,o=`No pay. Try another.`),r?($m(880,.1),setTimeout(()=>$m(1180,.14),90)):$m(150,.25,`sawtooth`),Om(Nm(t,r,r?a:o,`Back`))},quizdone(){$.quiz=null,$.pilot.work=2.5},upgrade(e){let t=$.save,n=t.up[e];n>=3||t.money<D(n)||(t.money-=D(n),t.up[e]++,$.stats=y($.craft,t.up))},fieldfix(e){let t=$.save;t.kits<1||(t.kits--,$.ac.cond[e]=Math.min(100,$.ac.cond[e]+30),$.fail[e]=!1,$.pilot.work=3)},fieldbodge(e){$.pilot.work=3,$.fail[e]=!1,$.ac.cond[e]=Math.max($.ac.cond[e],8)},tow(){$h(`tow`)},walk(){let e=Pg(0)||{x:$.plane.x+3,y:$.plane.y+3,rot:$.plane.heading};Object.assign($.foot,{x:e.x,y:e.y,rot:e.rot,from:$.mode,step:0,moving:!1}),$.mode=`foot`,km(),Hg.classList.remove(`hidden`),Ug()},door(e){let t=$.save;t.visit=e,t.pick=null,$m(520,.1),setTimeout(()=>$m(780,.1),110),setTimeout(()=>$m(1040,.25),220),ym(),Yh([{ch:`The door`,title:r[e].name,body:[`Woodsmoke, wet earth, and not one engine under the sky. Look round.`],btn:`Step out`}],Qh)},doorhome(){$.save.visit=null,ym(),Yh([{ch:`The door`,title:`Back to your own year`,body:[`The door clicks shut behind you.`],btn:`Carry on`}],Qh)},fly(e){let t=$.save;x(t,$.mission,e)&&(t.pick=e===$.mission.craft?null:e,Wh(),Kh(),$.newCraft=null,$m(600,.05))},surface(){$.mode=`surface`,km(),Z.hud.classList.remove(`hidden`)},takeoff(){if($.ac.fuel<1){$m(160,.25),$.tab=`mission`;return}Zm();let e=$.plane,t=$.save;if($.mode===`hangar`){let t=ku().stops[$.mission.from];e.x=t.x-20,e.y=t.y,e.heading=0,$.legTime=0,$.transited=!1,$.burnT=0,$.fixT=0,$.fix=null,dg()}e.speed=0,e.vz=0,e.roll=0,$.mode!==`hangar`&&(e.heading=_g(e)),$.takeoffFrom={x:e.x,y:e.y},$.blockN=0,$.vto=0,e.pitchV=void 0,Xp.throttle=$.stats.orbit?0:.85,$.mode=`takeoff`,Uh(),km(),Z.hud.classList.remove(`hidden`),t.seen.controls||(t.seen.controls=!0,$.hintT=8,vm(Ih?`Drag to steer. ${Zp.realStick?`Drag down to climb.`:`Drag up to climb.`}<br>Right slider: throttle.<br>Follow the arrow. Land on the runway.`:`A/D steer \u00b7 ${Zp.realStick?`S climb · W descend`:`W climb · S descend`}<br>Q/E throttle \u00b7 Space fix \u00b7 X special \u00b7 V view<br>Follow the arrow. Land on the runway.`))}};Z.panel.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);if(!t||t.disabled)return;let n=$.mode;eg[t.dataset.act]?.(t.dataset.arg),$.mode===n&&($.mode===`hangar`||$.mode===`field`)&&(Uh(),$.quiz||Jh())});var tg=(e,t)=>e+Math.random()*(t-e);function ng(e,t,n,r,i){for(let a=0;a<e;a++){let e=Math.random()*6.283,o=tg(i.v0,i.v1);$.fx.push({kind:`dot`,x:t,y:n,z:r,vx:Math.cos(e)*o,vy:Math.sin(e)*o,vz:tg(i.up0||0,i.up1||0),g:i.g||0,age:0,life:tg(i.life*.7,i.life*1.2),size:i.size||2,col:Array.isArray(i.col)?i.col[a%i.col.length]:i.col,grow:i.grow,alpha:i.alpha,under:i.under,floor:i.floor||0})}}var rg=(e,t,n,r=1.4)=>$.fx.push({kind:`ring`,x:e,y:t,z:.05,vx:0,vy:0,vz:0,age:0,life:r,size:n,under:!0});function ig(e,t,n){ng(n?40:22,e,t,.3,{v0:1.5,v1:n?8:5,up0:4,up1:n?13:9,g:16,life:.9,col:`255,255,255`,size:2}),rg(e,t,n?14:8),rg(e,t,n?9:5,1)}var ag=(e,t,n,r=18)=>ng(r,e,t,n,{v0:1.5,v1:5,up0:.5,up1:2,life:.9,col:`205,185,145`,size:2,grow:2,alpha:.6});function og(e,t,n,r=0){ng(36,e,t,n,{v0:3,v1:12,up0:3,up1:12,g:13,life:.9,col:[`255,236,150`,`255,160,60`,`255,96,40`],size:2,floor:r}),ng(16,e,t,n,{v0:.5,v1:3,up0:2,up1:5,life:1.9,col:`40,40,46`,size:3,grow:2.5,alpha:.7}),ng(10,e,t,n,{v0:3,v1:8,up0:5,up1:11,g:15,life:1.2,col:`60,50,46`,size:2,floor:r})}function sg(e,t,n,r){$.wrecked=!0,ng(70,e,t,n,{v0:2,v1:17,up0:2,up1:17,g:12,life:1.1,col:[`255,250,210`,`255,226,120`,`255,160,60`,`255,96,40`],size:6,grow:1.2,floor:r}),ng(26,e,t,n+1,{v0:.5,v1:5,up0:3,up1:9,life:2.6,col:[`30,30,34`,`58,54,54`],size:8,grow:2.2,alpha:.75}),ng(30,e,t,n,{v0:4,v1:15,up0:6,up1:17,g:17,life:2.6,col:[`70,72,80`,`150,64,44`,`208,196,166`,`36,36,40`],size:4,floor:r}),$.wreck=[];for(let n=0;n<4;n++)$.wreck.push({x:e+tg(-7,7),y:t+tg(-7,7),z:r});$.shakeT=1,ym(),nh(1,1.5)}function cg(e){let t=$.plane,n=[{x:t.x,y:t.y,z:t.alt-$.belly,big:!0}].concat($.wreck||[]);for(let t of n)Math.random()<e*(t.big?30:9)&&ng(1,t.x+tg(-1.5,1.5),t.y+tg(-1.5,1.5),t.z+.3,{v0:0,v1:.8,up0:3,up1:t.big?8:5,life:.55,col:Math.random()<.5?`255,214,110`:`255,130,50`,size:t.big?6:3,grow:.8}),Math.random()<e*(t.big?12:3)&&ng(1,t.x+tg(-1,1),t.y+tg(-1,1),t.z+2,{v0:.2,v1:1.2,up0:4,up1:7,life:2.4,col:`34,34,38`,size:t.big?7:4,grow:2,alpha:.6})}function lg(e){for(let t=$.fx.length-1;t>=0;t--){let n=$.fx[t];if(n.age+=e,n.age>=n.life)$.fx.splice(t,1);else if(n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.g){n.vz-=n.g*e;let t=n.floor||0;n.z<t&&(n.z=t,n.vz=0,n.vx*=.5,n.vy*=.5)}}if($.shakeT=Math.max(0,$.shakeT-e),!$.model||$.mode===`title`||$.fx.length>400)return;let t=$.plane;if(q(t.x,t.y)!==0||!ku().water)return;let n=t.alt-$.belly,r=n<.6,i=n<3.2&&$.mode===`flying`;if(!r&&!i||($.fxT-=e,$.fxT>0))return;let a=Math.cos(t.heading),o=Math.sin(t.heading),s=$.model.nx*$.model.vs/2;if(t.speed>.8){$.fxT=.045;for(let e of[-1,1])$.fx.push({kind:`dot`,x:t.x-a*s*.5-o*e*1.2,y:t.y-o*s*.5+a*e*1.2,z:.05,vx:-o*e*1.6-a*.6,vy:a*e*1.6-o*.6,vz:0,age:0,life:r?1.7:.8,size:r?2:1.5,col:`255,255,255`,alpha:r?.75:.4,grow:.6,under:!0});r&&Math.random()<.3&&ng(1,t.x+a*s*.7,t.y+o*s*.7,.2,{v0:.5,v1:2,up0:2,up1:4,g:12,life:.5,col:`255,255,255`,size:1.5})}else r&&($.fxT=.9,rg(t.x,t.y,6+Math.random()*3))}function ug(e,t,n){for(let r=0;r<=340;r+=13)for(let i=0;i<6.283;i+=.4){let a=e+Math.cos(i)*r,o=t+Math.sin(i)*r;if(n(a,o))return{x:a,y:o};if(r===0)break}return null}function dg(){let e=$.mission,t=$.stats;if($.task=null,$.sparks=[],$.drops=[],$.chain=0,$.bonus={sparks:0,cash:0,task:0},$.finds=[],$.portal=null,e.excursion){let t=ku().stops[0],n=$.save.found=$.save.found||{},r=(e,t)=>{let n=q(e,t);return n>=1&&n<=3};_[e.world].forEach((e,i)=>{let a=.6+i*2.1,o=230+i*90,s=ug(t.x+Math.cos(a)*o,t.y+Math.sin(a)*o,r);s&&$.finds.push({...e,kind:`task`,col:`120,230,255`,x:s.x,y:s.y,r:20,gz:q(s.x,s.y)*Su,done:!!n[e.id]})});for(let e=0;e<16;e++){let n=e/16*6.283,r=t.x+Math.cos(n)*150,i=t.y+Math.sin(n)*120,a=q(r,i)*Su;$.sparks.push({kind:`spark`,x:r,y:i,gz:a,z:a+7+e%3*4,got:!1})}$.portal={kind:`portal`,x:t.x+60,y:t.y-45,gz:q(t.x+60,t.y-45)*Su,z:2*Su+15};return}if(e.free||e.transit){let t=h[$.save.mission];t&&t.type===`high`&&!e.free&&($.task={...t,done:!1});return}let n=ku().stops,r=n[e.from],i=n[e.to],a=i.x-r.x,o=i.y-r.y,s=Math.hypot(a,o),c=a/s,l=o/s,u=h[$.save.mission];if(u){if(u.type===`high`)$.task={...u,done:!1};else if(u.type===`land`&&u.water&&!t.floats)$.task=null;else{let e=u.water?(e,t)=>!q(e,t)&&!q(e+9,t)&&!q(e-9,t)&&!q(e,t+9)&&!q(e,t-9):u.type===`land`?(e,t)=>{let n=q(e,t);return n>=2&&n<=3&&q(e+6,t)===n&&q(e-6,t)===n}:(e,t)=>{let n=q(e,t);return n>=1&&n<=3&&Math.max(q(e+22,t),q(e-22,t),q(e,t+22),q(e,t-22))<=n+2},t=null;for(let n of[u.t,.35,.65,.25,.75]){for(let i of[u.off,-u.off])if(t=ug(r.x+a*n-l*i,r.y+o*n+c*i,e),t)break;if(t)break}t&&($.task={...u,x:t.x,y:t.y,r:u.type===`land`?26:24,gz:q(t.x,t.y)*Su,kind:`task`,done:!1})}}let d=e.radio?0:Math.floor(s/110);for(let e=1;e<=d;e++){let n=e/(d+1);if(n<.07||n>.93)continue;let i=Math.sin(n*Math.PI*3)*65,s=r.x+a*n-l*i,u=r.y+o*n+c*i,f=q(s,u)*Su;$.sparks.push({kind:`spark`,x:s,y:u,gz:f,z:Math.min(t.ceil-2,f+9+e*7%3*5),got:!1})}}function fg(){let e=$.task;e.done=!0,$.save.money+=e.pay,$.bonus.task+=e.pay,$m(660,.1),setTimeout(()=>$m(880,.1),100),setTimeout(()=>$m(1320,.2),200)}var pg=12;function mg(e,t){for(let n of $.finds)if(!(n.done||Math.hypot(n.x-e.x,n.y-e.y)>n.r||e.alt-t>14)){n.done=!0,$.save.found[n.id]=!0,$.save.money+=150,Uh(),$m(660,.1),setTimeout(()=>$m(990,.1),100),setTimeout(()=>$m(1320,.25),200),Yh([{ch:`Curiosity`,title:n.title,body:[`${n.text} <b>+$150</b>`],note:n.note,btn:`Fly on`}],()=>{$.mode=`flying`,Z.hud.classList.remove(`hidden`)});return}let n=$.portal;if(n&&$.legTime>6&&Math.hypot(n.x-e.x,n.y-e.y)<9&&Math.abs(n.z-e.alt)<9){$m(1040,.1),setTimeout(()=>$m(780,.1),110),setTimeout(()=>$m(520,.25),220),eg.doorhome();return}for(let t of $.sparks){if(t.got||Math.abs(t.x-e.x)>7||Math.abs(t.y-e.y)>7||Math.abs(t.z-e.alt)>5)continue;t.got=!0;let n=10+Math.min(10,$.chain)*2;$.save.money+=n,$.bonus.sparks++,$.bonus.cash+=n,$.chain++,$m(700+Math.min(10,$.chain)*70,.09,`triangle`,.14)}let r=$.task;if(!r||r.done||r.type===`land`)return;let i=r.type===`high`||Math.hypot(r.x-e.x,r.y-e.y)<r.r;(r.type===`high`?e.alt>r.alt:r.type===`low`?i&&e.alt-t<pg:i)&&(r.type===`low`&&$.drops.push({kind:`drop`,x:e.x,y:e.y,z:e.alt,gz:r.gz,age:0}),fg(),vm(`<b>Done +$${r.pay}</b><br>${r.after}`),$.hintT=4)}function hg(){if($.mode!==`flying`)return;if(xm.open){let e=Dm(),t=xm.part;e===`miss`?($.ac.cond[t]=Math.max(0,$.ac.cond[t]-1.5),$m(150,.12,`sawtooth`)):e===`hit`?$m(700,.06):($.fail[t]=!1,xm.jury?$.ac.cond[t]=Math.max($.ac.cond[t],8):($.ac.cond[t]=Math.min(100,$.ac.cond[t]+12),$.save.kits--),Tm(),$m(880,.1),setTimeout(()=>$m(1180,.14),90));return}let e=a.find(e=>$.fail[e]);e&&wm(e,$.ac.cond[e],$.save.kits<1)}Z.fixBtn.addEventListener(`click`,hg),Z.fixHit.addEventListener(`pointerdown`,e=>{e.preventDefault(),hg()});function gg(e){$.fail[e]=!0,$m(220,.3,`sawtooth`,.2),setTimeout(()=>$m(180,.4,`sawtooth`,.2),200)}function _g(e){let t=e.heading,n=1e9;for(let r=0;r<16;r++){let i=e.heading+r*Math.PI/8,a=0;for(let t=6;t<=90;t+=6){let n=q(e.x+Math.cos(i)*t,e.y+Math.sin(i)*t);a=Math.max(a,n-t/45),n===0&&t<=36&&ku().water&&!$.stats.floats&&(a=Math.max(a,5))}let o=a+Math.abs(Mg(i,e.heading))*.15;o<n&&(n=o,t=i)}return t}function vg(e){let t=$.plane,n=$.stats,r=$.model;t.throttle=Xp.throttle,t.propSpin=1,t.roll=0;let i=q(t.x,t.y),a=i*Su+$.belly,o=r.nx*r.vs/2-$.belly,s=i*Su,c=(e,n)=>{let i=r.nx*r.vs/2,a=Math.cos(t.pitchV||0),o=Math.sin(t.pitchV||0),c=t.x-Math.cos(t.heading)*a*i,l=t.y-Math.sin(t.heading)*a*i,u=Math.max(s,t.alt-o*i),d=u-s<12;ng(e,c+tg(-1,1),l+tg(-1,1),u,{v0:d?3:.5,v1:d?11:3,up0:d?0:-3,up1:d?2.5:0,life:d?1.5:2.6,col:`232,232,236`,size:7,grow:2,alpha:.6,floor:s}),n&&ng(2,c,l,u-.5,{v0:0,v1:2,up0:-9*o-1,up1:-4*o,life:.35,col:Math.random()<.5?`255,236,150`:`255,150,60`,size:5})};if(t.pitchV===void 0&&(t.pitchV=0),!$.vto)t.pitchV=Math.min(Math.PI/2,t.pitchV+e*1.3),t.alt=a+o*Math.sin(t.pitchV),t.vz=0,t.speed=0,t.pitchV<1.55?_m(`Raising her for launch`,!0):t.throttle<.3?_m(`Open the throttle to launch`,!0):($.vto=1,$.vtoT=3);else if($.vto===1){if($.vtoT-=e,t.throttle<.3){$.vto=0;return}_m(`Launch in ${Math.max(1,Math.ceil($.vtoT))}`,!0),Math.random()<e*30&&c(1,$.vtoT<1.2),$.shakeT=Math.max($.shakeT,$.vtoT<1.2?.12:0),$.vtoT<=0&&($.vto=2,$.shakeT=.7,nh(.9,1.4),ym())}else{let r=t.alt-a-o;t.vz=Math.max(r>.1?-6:0,Math.min(13+r*.1,t.vz+(t.throttle>.3?8*t.throttle:-9)*e)),t.alt=Math.max(a+o,t.alt+t.vz*e),Math.random()<e*40&&c(r<14?2:1,!0),$.shakeT=Math.max($.shakeT,r<20?.1:0);let s=N((r-26)/(yg-a-o-26),0,1);t.pitchV=Math.PI/2*(1-s**2.6),t.speed+=(n.speed*2.2*Math.cos(t.pitchV)-t.speed)*Math.min(1,e*1.5),t.heading+=Xp.turn*.25*e,t.x+=Math.cos(t.heading)*t.speed*e,t.y+=Math.sin(t.heading)*t.speed*e,$.ac.fuel=Math.max(0,$.ac.fuel-n.burn*.8*t.throttle*e),_m(r<26?`Lift-off`:`Climbing to orbit`,!0);let l=()=>{$.mode=`flying`,$.lastLvl=i,$.vto=0,t.lean=N(t.pitchV,0,1)*.8,t.pitchV=void 0,_m(null)};t.alt>=yg?(t.vz=0,l()):r>30&&(t.throttle<.3||$.ac.fuel<=0)&&(t.vz=Math.min(t.vz,n.climb),l())}}var yg=174;function bg(e){if($.stats.orbit){vg(e);return}let t=$.plane,n=$.stats;t.throttle=Xp.throttle,t.propSpin=1;let r=q(t.x,t.y),i=r*Su+$.belly,a=t.alt<=i+.01;t.speed=Math.min(n.speed*.6,t.speed+n.speed*.32*t.throttle*e),t.alt<=q(t.x,t.y)*2.2+$.belly+.01&&(t.heading+=Xp.turn*.9*e);let s=t.x+Math.cos(t.heading)*t.speed*e,c=t.y+Math.sin(t.heading)*t.speed*e,l=q(s,c),u=l===0&&ku().water;if(a&&l!==r&&(l>r+1||u&&!n.floats||r===0&&ku().water&&!o[$.craft].surf.land)){t.heading+=Math.PI,t.speed=0,$.blockN=($.blockN||0)+1,$m(160,.2,`sawtooth`);return}t.x=s,t.y=c;let d=n.hover||t.speed>n.speed*.4||$.blockN>0&&t.speed>n.speed*.08;t.vz=d&&Xp.pitch>.15?P(t.vz,3.5*Math.max(.5,Xp.pitch),Math.min(1,e*3)):a?0:P(t.vz,-1.5,Math.min(1,e*2)),t.alt=Math.max(i,t.alt+t.vz*e),t.lean=P(t.lean,t.alt>i?.5:0,Math.min(1,e*3));let f=Zp.realStick?Ih?`drag down`:`S`:Ih?`drag up`:`W`;t.throttle<.3&&!n.hover?_m(`Open the throttle`,!0):d?a?_m(`${$.blockN>0?`No room. `:``}Pull up: ${f}`,!0):_m(null):_m(Wu(t.x,t.y)>=0?`Gathering speed`:`Gathering speed. ${Ih?`Drag`:`A / D`} to steer`,!0),t.alt>i+4&&($.mode=`flying`,$.lastLvl=r,_m(null))}function xg(){let e=$.plane;$.inCell=$.underCell=!1;for(let t of bp())t.storm&&(Math.hypot(t.wx-e.x,t.wy-e.y)>t.rad*.85||(e.alt>t.alt-1&&e.alt<t.top?$.inCell=!0:e.alt<=t.alt-1&&($.underCell=!0)))}function Sg(){let e=$.mission,t=$.target,n=$.plane;$.transited=!0,Yh([{title:`To ${r[t.world].name}`,body:e.transitText,btn:`Begin the descent`}],()=>{Au(t.world),Object.assign(n,{x:t.stop.x-2600,y:t.stop.y,heading:0,alt:210,vz:0,roll:0,speed:$.stats.speed*4}),Gh(),$.camRot=-Math.PI/2,$.boost=$.frame+12,$.mode=`flying`,Z.hud.classList.remove(`hidden`)})}function Cg(e){let t=$.plane,n=$.stats,r=$.ac,s=$.fail,c=r.cond,l=$.mission,u=ku().gravity;$.legTime+=e,$.abil.t=Math.max(0,$.abil.t-e),$.abil.cd=Math.max(0,$.abil.cd-e);let d=o[$.craft].ability,f=$.abil.t>0?d.id:null;t.boosting=f===`burner`||f===`zoom`,t.shield=f===`shield`,xg(),t.throttle=Xp.throttle;let p=r.fuel<=0||c.engine<=0,m=p?0:t.throttle*(s.engine?.5:1)*(.8+.2*c.engine/100),h=te(n,t.alt),g=1+h*n.space,_=n.orbit&&t.alt>170,v=n.hover?p?.1:m:p?.42:.25+.75*m;_&&(v=Math.max(v,.9));let y=f===`hover`||f===`mend`;y&&(v=0);let b=f===`burner`?1.7:f===`race`?1.5:f===`zoom`?1.3:1;t.speed+=(n.speed*v*g*b-t.speed)*Math.min(1,e*(y?2.5:.7)),t.propSpin=p?Math.max(0,t.propSpin-e*.5):1,t.stick+=(Xp.turn-t.stick)*Math.min(1,e*6);let x=t.stick;s.frame&&(x=N(x*.45+.22,-1,1)),$.inCell&&(x+=Math.sin($.time*7.3)*.35),t.heading+=x*n.turn*e/(1+h*n.space*.5);let S=Math.sin($.time*1.9)*.025+Math.sin($.time*3.1)*.015;t.roll+=(x*.7+S-t.roll)*Math.min(1,e*5);let C;C=p?(n.hover?-.6:-1.1)+Math.min(0,Xp.pitch)*n.climb+Math.max(0,Xp.pitch)*.7:Xp.pitch>0?Xp.pitch*n.climb*(.3+.7*m):Xp.pitch*n.climb*.9,f===`highclimb`&&C>0&&(C*=2.5),f===`zoom`&&(C=30);let w=f===`loop`?1-$.abil.t/d.dur:-1;w>=0&&(C=16*Math.cos(Math.PI*w),t.vz=C),C<0&&(C*=.45+.55*u);let T=n.ceil+(f===`highclimb`?15:0);C>0&&t.alt>T-3&&w<0&&(C*=N((T-t.alt)/3,0,1)),$.inCell&&(C+=Math.sin($.time*5.1)*3);let E=t.alt-(q(t.x,t.y)*Su+$.belly);if(E<3&&C<-(.8+E)&&(C=-(.8+E)),t.vz+=(C-t.vz)*Math.min(1,e*3),t.alt+=t.vz*e,t.lean=w>=0?Math.sin(2*Math.PI*w)*2.4:P(t.lean,N(t.vz/n.climb,-1,1)*.8,Math.min(1,e*4)),t.x+=Math.cos(t.heading)*t.speed*e,t.y+=Math.sin(t.heading)*t.speed*e,l.wind&&(t.x+=l.wind[0]*e,t.y+=l.wind[1]*e),l.radio&&($.fixT=($.fixT||0)-e,$.fixT<=0)){let e=$.target.stop;$.fixT=l.radio,$.fix={brg:Math.atan2(e.y-t.y,e.x-t.x),dist:Math.hypot(e.x-t.x,e.y-t.y)},$m(980,.05)}p||(r.fuel=Math.max(0,r.fuel-n.burn*(.25+.75*t.throttle*t.throttle)*(s.fuel?4:1)*(_?.1:1)*(f===`lean`?.33:f===`burner`?3:f===`zoom`||f===`race`?2:1)*e)),_&&r.fuel<n.tank*.12&&(r.fuel+=n.tank*.006*e),mg(t,q(t.x,t.y)*Su+$.belly);let D=n.wear*e;if(c.engine-=.1*(.4+1.6*t.throttle*t.throttle)*D,c.frame-=.035*D,c.fuel-=.06*D,c.avionics-=.045*D,$.heat=0,n.space&&h>.15&&t.vz<0&&($.heat=N(h*(-t.vz/(n.climb*.9*(.45+.55*u))-.45)*2.2,0,1),f===`shield`&&($.heat=0),c.frame-=7*$.heat*e),f===`mend`)for(let t of a)c[t]<45&&(c[t]=Math.min(45,c[t]+2.5*e));$.inCell&&f!==`shield`&&f!==`loop`&&(c.frame-=3.2*e,c.avionics-=1.6*e,Math.random()<.18*e&&(c.avionics-=10,ym(),nh(.6,.9)));for(let t of a){if(c[t]<0&&(c[t]=0),s[t]||$.legTime<12)continue;let r=c[t]<55?((55-c[t])/55)**2*.05*n.failMul*e:0;(c[t]<=0||Math.random()<r)&&gg(t)}let O=q(t.x,t.y),k=O*Su+$.belly;if(t.alt<=k){t.alt=k,wg(O,$.lastLvl);return}if($.lastLvl=O,l.transit&&!$.transited){if(t.alt>170){if($.burnT+=e,$.burnT>6){Sg();return}}else $.burnT=Math.max(0,$.burnT-e)}let ee=a.find(e=>s[e]),ne=qh(),A=ne?Math.hypot(ne.x-t.x,ne.y-t.y):1e9,re=q(t.x+Math.cos(t.heading)*t.speed*1.6,t.y+Math.sin(t.heading)*t.speed*1.6)*Su+$.belly,j=Wu(t.x,t.y)>=0||A<60,M=ku().water;ee?_m(`${i[ee].fail} · ${i[ee].effect}${$.save.kits>0?` · FIX`:` · BODGE`}`):p?_m(`${r.fuel<=0?`OUT OF FUEL`:`ENGINE DEAD`} · GLIDE TO ${n.floats?`WATER OR FLAT GROUND`:`FLAT GROUND`}`):$.heat>.15?_m(`HEAT · DESCEND SLOWER`):re>t.alt-.5&&re>k+1?_m(`TERRAIN · CLIMB OR TURN`):t.alt-k<2.5&&t.vz<0&&!j?_m(O===0&&M&&!n.floats?`TOO LOW · PULL UP`:`LOW`):$.inCell?_m(`INSIDE A STORM`):r.fuel/n.tank<.15?_m(`LOW FUEL`):$.task&&!$.task.done&&$.task.type===`low`&&Math.hypot($.task.x-t.x,$.task.y-t.y)<$.task.r*3?_m(t.alt-k>=pg?`Too high. Come down`:`Fly through the ring`,!0):$.task&&!$.task.done&&$.task.type===`land`&&Math.hypot($.task.x-t.x,$.task.y-t.y)<$.task.r*3?_m(t.speed>n.speed*.8?`Slow down, land in the ring`:`Land in the ring`,!0):ne?h>0&&A<400+t.alt*25?_m(`${ne.name} ahead. Descend gently`,!0):_?_m(`In orbit`,!0):A<220?_m(A<60?t.speed>n.speed*.8?`Slow down and land`:`Descend to land`:`${ne.name} ahead. Descend`,!0):_m(null):_m(t.alt>170?`Hold this height: ${Math.ceil(6-$.burnT)}`:`Climb to the black sky, then hold`,!0)}function wg(e,t){let n=$.plane,r=$.stats,i=$.ac.cond,a=o[$.craft],s=Wu(n.x,n.y),c=n.speed>r.speed*.8,l=c||n.vz<-3,u=e===0&&ku().water,d=q(n.x+Math.cos(n.heading)*5,n.y+Math.sin(n.heading)*5)>=e+2,f=t!==void 0&&n.vz>-1.2&&(e>=t+2||e>t&&d),p=t!==void 0&&e===t+1&&n.vz>-1.2;if(!u)for(let[t,r]of[[4,0],[-4,0],[0,4],[0,-4]])Math.abs(q(n.x+t,n.y+r)-e)>=2&&(p=!0);let m;if(m=s>=0&&e===2?`airfield`:u?r.floats?`water`:`ditch`:f?`crash`:`field`,c&&n.vz<-2.4&&!r.hover&&(m=m===`water`?`ditch`:m===`ditch`?m:`crash`),$.landing={res:m,af:s,hard:l},$.timer=0,$.wrecked=!1,$.wreck=null,$.boomed=0,$.skid=0,$.campNote=``,Tm(),_m(null),vm(null),m===`ditch`||m===`crash`)$.mode=`down`,nh(.9,1.1),ym(),$.shakeT=.7,m===`ditch`?ig(n.x,n.y,!0):og(n.x,n.y,n.alt,e*Su);else{let e=l?18:0;if(l&&(i.engine=Math.max(0,i.engine-8)),m===`field`&&!r.hover){let t=!a.surf.land;e+=3+(p?10:0)+(t?14:0)+(c?6:0),$.campNote=t?`Floats on dry land: airframe damaged.`:p?`Rough ground: airframe knocked.`:c?`Too fast: airframe knocked.`:`Down safely.`}i.frame=Math.max(0,i.frame-e),$.mode=`rollout`,nh(l||p?.5:.2,.3),m===`water`?ig(n.x,n.y,l):ag(n.x,n.y,n.alt-$.belly,l||p?26:7),(l||p)&&($.shakeT=.35,$.bounce=1),(l||p)&&m!==`water`&&($.skid=Math.random()<.5?-1:1)}}function Tg(e){let t=$.plane,n=$.stats;if(t.speed=Math.max(0,t.speed-n.speed*.45*e),t.throttle=0,t.vz=0,$.skid){let r=Math.min(1,t.speed/(n.speed*.3)),i=Math.cos(t.heading),a=Math.sin(t.heading),o=$.model.tips*$.model.vs*.8*$.skid;t.roll=P(t.roll,.42*$.skid,Math.min(1,e*7)),t.heading+=$.skid*.9*r*e;let s=q(t.x,t.y)*Su,c=t.x-a*o,l=t.y+i*o;t.speed>1&&Math.random()<e*60&&ng(2,c,l,s+.3,{v0:1,v1:6,up0:1,up1:5,g:16,life:.4,col:[`255,244,190`,`255,190,80`],size:1.5,floor:s}),Math.random()<e*10&&ng(1,t.x,t.y,s+1,{v0:0,v1:1,up0:2,up1:4,life:1.4,col:`52,50,52`,size:3,grow:2,alpha:.55})}else t.roll*=1-Math.min(1,e*6);t.lean*=1-Math.min(1,e*6),t.propSpin=Math.max(.05,t.speed/n.speed);let r=t.x+Math.cos(t.heading)*t.speed*e,i=t.y+Math.sin(t.heading)*t.speed*e,a=q(t.x,t.y);q(r,i)===a?(t.x=r,t.y=i):t.speed=0,$.bounce=Math.max(0,$.bounce-e*1.4);let o=$.bounce>0?Math.abs(Math.sin($.bounce*9))*1.6*$.bounce:0;o<.05&&$.bounce>.1&&$.bounce<.95&&Math.random()<e*8&&(a===0&&ku().water?ig(t.x,t.y,!1):ag(t.x,t.y,a*Su,6)),t.alt=a*Su+$.belly+o,t.speed<=.3&&$.bounce<=0&&kg()}function Eg(){let e=$.save,t=$.mission,n=$.landing&&$.landing.hard;e.money+=t.pay,e.mission++,e.shift=!1,e.pick=null;let r=t.arrive.slice(),i=[];t.pay&&i.push(`<b>+$${t.pay}</b>`),$.bonus.task&&i.push(`job +$${$.bonus.task}`),$.bonus.sparks&&i.push(`sparks ${$.bonus.sparks}/${$.sparks.length} +$${$.bonus.cash}`),(i.length||n)&&r.push(`${i.join(` · `)}${n?` Hard landing: slow down next time.`:``}`);let a=[{title:t.title,body:r,note:t.real}],o=p[e.mission];o?o.ch&&a.push({ch:`Next`,title:o.ch,body:[o.brief],btn:`Turn the page`}):a.push({title:`The logbook is full`,body:[`Seventeen flights, four dynasties, three worlds. Thanks for playing.`],btn:`Keep flying`}),Yh(a,Qh)}function Dg(e){let t=o[$.craft],n=q($.plane.x,$.plane.y),r=$.task;if(r&&!r.done&&r.type===`land`&&Math.hypot(r.x-$.plane.x,r.y-$.plane.y)<r.r+10){fg(),Yh([{title:`Job done`,body:[`${r.after} <b>+$${r.pay}</b>`],btn:`Carry on`}],()=>Dg(e));return}let i=n===0&&ku().water;$.mode=`field`,$.onWater=e||i,$.plane.propSpin=0,$.plane.speed=0,$.surfLabel=i?t.surf.water?`Sail on`:``:t.surf.land===`climb`?`Walk on`:t.surf.land?`Taxi on`:``,Z.hud.classList.add(`hidden`),_m(null),Jh()}function Og(e){let t=$.plane,n=$.stats,r=o[$.craft],i=ku();t.throttle=Xp.throttle,t.propSpin=t.throttle>.05?1:.15;let a=q(t.x,t.y),s=a===0&&i.water;t.speed+=(n.speed*(s?.36:.24)*t.throttle-t.speed)*Math.min(1,e*1.5),t.stick+=(Xp.turn-t.stick)*Math.min(1,e*6),t.heading+=t.stick*1.5*e,t.roll=P(t.roll,0,Math.min(1,e*5)),t.lean=P(t.lean,0,Math.min(1,e*5)),t.vz=0;let c=t.x+Math.cos(t.heading)*t.speed*e,l=t.y+Math.sin(t.heading)*t.speed*e,u=q(c,l),d=u===0&&i.water,f;f=d?!!r.surf.water:r.surf.land?r.surf.land===`climb`?Math.abs(u-a)<=1&&u<=7:u===a||s&&u===1||a===1&&u===2||a===2&&u===1:!1;let p=!1;f?(t.x=c,t.y=l):(p=t.speed>.5,t.speed=0),t.alt=P(t.alt,q(t.x,t.y)*Su+$.belly+(s?Math.sin($.time*2)*.15:0),Math.min(1,e*6)),$.ac.fuel=Math.max(0,$.ac.fuel-n.burn*.12*t.throttle*e);let m=Wu(t.x,t.y),h=$.target,g=m>=0&&!$.mission.free&&i.id===h.world&&m===h.index&&(!$.mission.transit||$.transited);g&&t.speed<.6&&t.throttle<.12?($.landing={res:`airfield`,af:m,hard:!1},kg()):$.ac.fuel<=0?Dg(s):Xp.pitch>.3?($.takeoffFrom={x:t.x,y:t.y},$.blockN=0,$.vto=0,$.mode=`takeoff`):_m(p?`Blocked`:g?`Arrived. Close the throttle`:`${s?`Sailing`:r.surf.land===`climb`?`Walking`:`Taxiing`}. Pull up to fly, STOP to camp`,!0)}function kg(){let{res:e,af:t}=$.landing,n=$.mission,r=$.target,i=ku().id,a=()=>Dg(e===`water`);e===`airfield`?!n.free&&i===r.world&&t===r.index&&(!n.transit||$.transited)?Eg():i===n.world&&t===n.from?Qh():a():e===`field`||e===`water`?a():$h(e)}function Ag(e){let t=$.plane;t.heading+=.22*e,t.roll=.3,t.speed=12,t.throttle=.6,t.propSpin=1,t.alt=16+Math.sin($.time*.4)*2,t.lean=Math.cos($.time*.4)*.3,t.x+=Math.cos(t.heading)*t.speed*e,t.y+=Math.sin(t.heading)*t.speed*e}function jg(e,t){let n=$.plane,r=$.model;if(lg(e),n.spin+=e*(5+38*n.throttle)*n.propSpin,$.trailT-=e,$.trailT<=0){$.trailT=.045;let e=Math.cos(n.heading),i=Math.sin(n.heading);[-1,1].forEach((a,o)=>{let s=a*r.tips*r.vs,c=s*Math.cos(n.roll),l=n.trails[o];l.push({x:n.x-i*c,y:n.y+e*c,z:Bh(n.alt)-s*Math.sin(n.roll),t:$.time,cut:!t||n.throttle<.35,a:.1+.55*n.throttle*n.throttle}),l.length>50&&l.shift()})}$.puffT-=e;let i=$.mode===`flying`&&$.heat>.15;(i||$.mode===`down`||$.mode===`flying`&&($.fail.engine||$.ac.cond.engine<=0))&&$.puffT<=0&&($.puffT=i?.03:.07,$.puffs.push({x:n.x,y:n.y,z:Bh(n.alt),age:0,dark:!i&&($.mode!==`down`||Math.random()<.6)}));for(let t=$.drops.length-1;t>=0;t--){let n=$.drops[t];n.z=Math.max(n.gz,n.z-7*e),n.z<=n.gz&&(n.age+=e,n.age>4&&$.drops.splice(t,1))}for(let t=$.puffs.length-1;t>=0;t--){let n=$.puffs[t];n.age+=e,n.z+=e*1.5,n.age>1.2&&$.puffs.splice(t,1)}}function Mg(e,t){let n=(e-t)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}function Ng(e){let t=$.foot,n=$.plane,r=$.model;t.rot+=Xp.turn*2.3*e;let i=Xp.fwd>0?3.4*Xp.fwd:1.6*Xp.fwd;t.moving=Math.abs(i)>.2,t.moving&&(t.step+=e*5);let a=t.x+Math.cos(t.rot)*i*e,o=t.y+Math.sin(t.rot)*i*e;if(q(n.x,n.y)===0&&ku().water){let e=Math.cos(n.heading),t=Math.sin(n.heading),i=r.tips*r.vs*.85,s=a-n.x,c=o-n.y,l=N(s*e+c*t,-.6,1.4),u=N(-s*t+c*e,-i,i);a=n.x+e*l-t*u,o=n.y+t*l+e*u}else{let e=q(t.x,t.y),n=q(a,o);(n===0&&ku().water||Math.abs(n-e)>1)&&(a=t.x,o=t.y,t.moving=!1)}t.x=a,t.y=o}function Pg(e){let t=$.plane,n=$.model,r=$.pilot;if($.mode===`foot`){let e=$.foot,n=q(t.x,t.y)===0&&ku().water;return{x:e.x,y:e.y,z:n?t.alt+$.belly*.3:q(e.x,e.y)*Su,rot:e.rot,pose:e.moving?Math.floor(e.step)%2:0,onTop:n,hidden:e.view===1}}if(!$.save||$.mode!==`hangar`&&$.mode!==`field`&&$.mode!==`cards`)return null;let i=q(t.x,t.y);if(t.alt-(i*2.2+$.belly)>.8)return null;r.t+=e,r.work=Math.max(0,r.work-e);let a=Math.cos(t.heading),o=Math.sin(t.heading),s=n.nx*n.vs/2,c=n.tips*n.vs,l=r.work>0||r.t%11<2.6;if(l&&Math.random()<e*6&&$.puffs.push({x:t.x+a*s*.8,y:t.y+o*s*.8,z:t.alt,age:.5,dark:!1}),i===0&&ku().water){let e=Math.sin(r.t*.4),n=Math.cos(r.t*.4),i=l?.25*c:e*c*.6;return{x:t.x-o*i+a*.5,y:t.y+a*i+o*.5,z:t.alt+$.belly*.3,rot:l?t.heading:t.heading+(n>0?Math.PI/2:-Math.PI/2),pose:l?2:Math.floor(r.t*4)%2,onTop:!0}}let u=r.t-2.6*Math.floor(r.t/11)-Math.min(r.t%11,2.6),d=r.work>0?.25:u*.45+.25,f=s+2.2,p=c*.55+2.4,m=Math.cos(d)*f,h=Math.sin(d)*p,g=t.x+a*m-o*h,_=t.y+o*m+a*h,v=l?Math.atan2(t.y-_,t.x-g):t.heading+Math.atan2(Math.cos(d)*p,-Math.sin(d)*f);return{x:g,y:_,z:q(g,_)*Su,rot:v,pose:l?2:Math.floor(r.t*4)%2,onTop:!1}}var Fg=[];function Ig(e){Fg.length=0;let t=$.task;t&&t.kind&&Math.hypot(t.x-e.x,t.y-e.y)<420&&Fg.push(t);for(let e of $.drops)Fg.push(e);for(let t of $.finds)Math.hypot(t.x-e.x,t.y-e.y)<480&&Fg.push(t);$.portal&&Fg.push($.portal);for(let t of $.sparks)!t.got&&Math.abs(t.x-e.x)<300&&Math.abs(t.y-e.y)<420&&Fg.push(t);return Fg}var Lg=[`↑`,`↗`,`→`,`↘`,`↓`,`↙`,`←`,`↖`];function Rg(e){$.time+=e,im(e);let t=$.plane;if($.mode===`title`)Ag(e);else if($.mode===`takeoff`)bg(e);else if($.mode===`flying`)Cg(e);else if($.mode===`surface`)Og(e);else if($.mode===`foot`)Ng(e);else if($.mode===`rollout`)Tg(e);else if($.mode===`down`){$.timer+=e,t.propSpin=0;let n=$.landing&&$.landing.res===`ditch`;if(n)t.speed*=1-Math.min(1,e*3),t.alt-=e*1.1,t.roll=P(t.roll,.5,Math.min(1,e*2)),Math.random()<e*5&&rg(t.x+tg(-3,3),t.y+tg(-3,3),tg(3,6),1);else{let n=Math.max(0,1-$.timer/1.5);t.heading+=e*9*n,t.roll=Math.sin($.timer*14)*.7*n,t.speed*=1-Math.min(1,e*4),t.x+=Math.cos(t.heading)*t.speed*e*.3,t.y+=Math.sin(t.heading)*t.speed*e*.3;let r=t.alt-$.belly;!$.boomed&&$.timer>.4&&($.boomed=1,sg(t.x,t.y,t.alt,r)),$.boomed===1&&$.timer>1.5&&($.boomed=2,og(t.x+tg(-3,3),t.y+tg(-3,3),t.alt,r),nh(.7,.8),$.shakeT=.4),$.boomed?cg(e):Math.random()<e*14&&ng(1,t.x+tg(-2,2),t.y+tg(-2,2),t.alt,{v0:0,v1:1,up0:2,up1:5,life:1.3,col:Math.random()<.4?`255,150,50`:`40,40,46`,size:3,grow:2,alpha:.7})}$.timer>(n?2.3:3.6)&&kg()}Em(e)}var zg=performance.now();function Bg(e,t){let n=(e-zg)/1e3,r=Math.min(.05,n);zg=e,$.frame++,$.frame>120&&!t&&rf(n)&&Yg(),Rg(r);let i=$.plane,s=$.mode===`takeoff`||$.mode===`flying`||$.mode===`rollout`||$.mode===`down`||$.mode===`surface`,c=$.mode===`title`||$.mode===`flying`;jg(r,c);let l=s&&$.stats?N(i.speed/$.stats.speed,0,1.6):$.mode===`title`?.6:0,u=X.W>X.H,d=$.mode===`foot`,f=Pg(r),p=d?zh[$.foot.view]:s?Rh[$.view]:Rh[0],m=Math.max(ku().dark,N((i.alt-50)/120,0,1)),h,g,_,v=$.mode===`takeoff`&&$.stats&&$.stats.orbit&&$.view!==2,y=p===Rh[0]&&(s||$.mode===`title`)&&!v;if(s||$.mode===`title`){if(v&&$.vto<2)$.camRot+=r*.3;else{let e=v?1.25*(1-N((i.alt-yg*.72)/(yg*.28),0,1)):0;$.camRot+=Mg(y?0:-i.heading-Math.PI/2+e,$.camRot)*Math.min(1,r*(v?1.2:3))}if(h=(i.alt<60?P(3.5,1.9,Math.min(1,i.alt/45)):P(2,1.25,N((i.alt-60)/160,0,1)))*p.zm*Lh,h*=1.06-.14*Math.min(1,l),($.mode===`down`||$.mode===`rollout`&&$.skid)&&(h*=1.5),g=.5,_=$.mode===`title`?.78:p.ay+($.view===2?0:.07*Math.min(1,l)),y&&$.mode!==`title`){let e=.2+.08*Math.min(1,l);g=.5-Math.cos(i.heading)*e,_=.52-Math.sin(i.heading)*e}}else d?($.camRot+=Mg(-$.foot.rot-Math.PI/2,$.camRot)*Math.min(1,r*5),h=p.zoom,g=.5,_=p.ay):($.camRot+=r*.12,h=3.8*Lh,g=u&&$.mode!==`cards`?.24:.5,_=u?.5:.17,$.mode===`cards`&&(_=u?.86:.14));let b=Math.min(1,r*2.5);$.zoom=P($.zoom,h*X.q,b),$.ax=P($.ax,g,b),$.ay=P($.ay,_,b);let x=p.tilt,S=p.elev,C=p.sky,w=p.skyH;if(p===Rh[1]&&s){let e=N((i.alt-7)/27,0,1),t=e*e*(3-2*e);x=P(.3,.5,t),S=P(.95,.85,t),w=P(.4,.3,t),x+=.3*N((i.alt-60)/110,0,1);let n=$.mode===`flying`?N(i.lean/.8,-1,1):0;x=N(x-.14*n,.24,.82),w=N(w+.16*n,.1,.62),n>0&&(C=Math.min(1,C+n*1.6))}if(v){let e=N((i.alt-14)/160,0,1);x=$.vto<2?.2:e<.7?P(.2,-.28,Math.min(1,e/.22)):P(-.28,.7,(e-.7)/.3),$.ay=P($.ay,.5,b),$.zoom=P($.zoom,h*X.q*.6,b)}X.tilt=P(X.tilt,x,b),X.elev=P(X.elev,S,b),$.sky=P($.sky,Math.max(C,m),b);let T=$.view===2&&($.mode===`takeoff`||$.mode===`flying`||$.mode===`rollout`),E=i.alt;i.alt=Bh(E);let D=($.mode===`flying`&&i.throttle>.85?(i.throttle-.85)*5:0)+$.shakeT*22*X.q;if(lf(d&&f?f.x:i.x,d&&f?f.y:i.y,d&&f?f.z+p.eye:i.alt,$.camRot,$.zoom,$.ax+(Math.random()-.5)*D/X.W,$.ay+(Math.random()-.5)*D/X.H),Wp(Ph,{craft:$.craft||`sparrow`,cockpit:T,eye:d&&$.foot.view===1&&f?{x:f.x,y:f.y,z:f.z,rot:f.rot}:null,time:$.time,frame:$.frame,plane:i,model:$.model,scenery:$.scenery,puffs:$.puffs,inStorm:$.mode===`flying`&&($.inCell||$.underCell),showPlane:!T,wrecked:$.wrecked,budget:$.frame<$.boost?40:3,sky:$.sky,skyH:w,dark:m,speedFrac:c?l:0,marks:s?Ig(i):null,pilot:f&&!f.hidden?f:null,fx:$.fx}),T&&(Ph.setTransform(1,0,0,1,0,0),Ph.imageSmoothingEnabled=!1,Mh(Ph,X.W,X.H,{speed:i.speed/($.stats.speed*(1+$.stats.space)),alt:E/$.stats.ceil,fuel:$.ac.fuel/$.stats.tank,roll:i.roll,vz:N(i.vz/$.stats.climb,-1,1),time:$.time,prop:$.model.props.length>0&&i.propSpin>.05,nose:o[$.craft].nose})),i.alt=E,s){if($.stats.radar&&!$.fail.avionics){Ph.fillStyle=`#d08bff`;for(let e of bp()){if(!e.storm)continue;let t=df(e.wx,e.wy,e.alt);t[0]>0&&t[0]<X.W&&t[1]>0&&t[1]<X.H||Ph.fillRect(N(t[0],3,X.W-12)|0,N(t[1],3,X.H-12)|0,4*X.q,4*X.q)}}if($.hudT-=r,$.hudT<=0){$.hudT=.1;let e=qh(),t=e=>String(Math.round(((e*180/Math.PI+90)%360+360)%360)%360).padStart(3,`0`);e&&$.mission.radio&&Math.hypot(e.x-i.x,e.y-i.y)>350?bm($,null,$.fix?`STEER ${t($.fix.brg)}° · YOU ${t(i.heading)}° · ${k($.fix.dist)} km`:`Waiting for a fix`,Xp.throttle):e?bm($,ff(i.x,i.y,e.x,e.y),`${e.name}  ${k(Math.hypot(e.x-i.x,e.y-i.y))} km`,Xp.throttle):bm($,null,`Climb to the black sky`,Xp.throttle);let n=$.task&&!$.task.done&&$.mode!==`rollout`&&$.mode!==`down`?$.task:null,r=Z.objective,a=$.mission.excursion&&$.mode!==`rollout`&&$.mode!==`down`;if(r.classList.toggle(`hidden`,!n&&!a),a){let e=`\u25c6 Finds ${$.finds.filter(e=>e.done).length}/${$.finds.length} \u00b7 fly low over blue beams`;r.textContent!==e&&(r.textContent=e)}if(n){let e=n.kind?` ${Lg[(Math.round(ff(i.x,i.y,n.x,n.y)/(Math.PI/4))%8+8)%8]} ${k(Math.hypot(n.x-i.x,n.y-i.y))} km`:``,t=`\u25c6 ${n.label}${e}`;r.textContent!==t&&(r.textContent=t)}let s=o[$.craft].ability,c=Z.abilBtn;c.classList.toggle(`hidden`,$.mode!==`flying`),c.classList.toggle(`on`,$.abil.t>0),c.classList.toggle(`cool`,$.abil.t<=0&&$.abil.cd>0),c.textContent=$.abil.t>0?s.name:$.abil.cd>0?`${s.name} ${Math.ceil($.abil.cd)}`:s.name,Z.stopBtn.classList.toggle(`hidden`,$.mode!==`surface`)}$.hintT>0&&($.hintT-=r,$.hintT<=0&&vm(null))}let O=$.ac&&($.ac.fuel<=0||$.ac.cond.engine<=0);Qm($.mode===`takeoff`||$.mode===`flying`&&!O,i.throttle,$.fail.engine,$.time);let ee=ku().id;bh($.mode===`title`?`calm`:ee===`earth`?s?E>100?`space`:`flight`:`calm`:ee===`moon`?`moon`:ee===`mars`?`mars`:ee===`deep`?`deep`:`era`,$.mode===`flying`&&(a.some(e=>$.fail[e])||$.inCell||$.heat>.15)),t||requestAnimationFrame(Bg)}function Vg(){if($.mode!==`flying`||$.abil.t>0||$.abil.cd>0)return;let e=o[$.craft].ability;$.abil.t=e.dur,$.abil.cd=e.dur+e.cd,e.id===`loop`&&($.fail.frame=!1),$m(500,.08),setTimeout(()=>$m(760,.12),80)}Z.abilBtn.addEventListener(`click`,Vg),Z.stopBtn.addEventListener(`click`,()=>{$.mode===`surface`&&Dg(!1)});var Hg=document.getElementById(`footBar`);function Ug(){document.getElementById(`footView`).textContent=zh[$.foot.view].name,document.getElementById(`footHint`).textContent=Ih?`Drag to walk and turn`:`W walk · A/D turn · V view · B back`}function Wg(){$.mode===`foot`&&(Hg.classList.add(`hidden`),$.mode=$.foot.from,Jh())}document.getElementById(`footView`).addEventListener(`click`,()=>{$.foot.view=1-$.foot.view,Ug(),$m(600,.04)}),document.getElementById(`footBack`).addEventListener(`click`,Wg);function Gg(){if($.mode===`foot`)$.foot.view=1-$.foot.view,Ug(),$m(600,.04);else{$.view=($.view+1)%Rh.length,Z.viewBtn.textContent=Rh[$.view].name;try{localStorage.setItem(`skywright.view`,$.view)}catch{}$m(600,.04)}}Z.viewBtn.addEventListener(`click`,Gg);var Kg=document.getElementById(`musicBtn`);Kg.classList.toggle(`off`,!Sh()),Kg.addEventListener(`click`,()=>{Zm(),Kg.classList.toggle(`off`,!xh())});var qg=document.getElementById(`stickBtn`),Jg=()=>{qg.textContent=Zp.realStick?`PULL = CLIMB`:`PUSH = CLIMB`};Jg(),qg.addEventListener(`click`,()=>{Qp(),Jg(),$m(600,.04)}),$.view=(+localStorage.getItem(`skywright.view`)||0)%Rh.length,Z.viewBtn.textContent=Rh[$.view].name;function Yg(){tf(Nh),Vh.width=X.W,Vh.height=X.H}window.addEventListener(`resize`,Yg),Yg(),rm(Nh,Z.throttle,{action:hg,key:e=>{e===`KeyM`&&rh(),e===`KeyN`&&Kg.click(),e===`KeyX`&&Vg(),e===`KeyB`&&Wg(),e===`KeyI`&&qg.click(),e===`KeyF`&&hg(),e===`KeyV`&&Gg()}}),$.model=Ce(`sparrow`),$.belly=$.model.nz*$.model.vs/2,$.boost=12,$.save=Hh(),Om(Am(!!$.save)),window.__sky={G:$,V:X,actions:eg,audioDebug:Ah,sim:e=>{for(let t=0;t<e;t+=1/60)Rg(1/60)},bench:(e=20)=>{let t=performance.now();for(let t=0;t<e;t++)Bg(performance.now(),!0);return(performance.now()-t)/e},skip:()=>{$.landing={hard:!1},Eg()}},requestAnimationFrame(Bg);