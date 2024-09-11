

//loadScript("https://cdn.statically.io/gh/ymaltsman/Hydra-FCS/3449358/HydraFCS.js");


iFermatSpiral().out(o1);


iCircle(3).out(o2);


iDevil(3).pixelate(100,100).out();



iDevil(0.2).modulateScale(iSpiral()).out();


iCircle().mask(iSpiral(3,4).pixelate(100,100)).modulateScale(noise(3,0.1)).colorama([0.1, 0.4, 0.8]).out();


iSpiral(0.3).brightness(-0.4).modulateScrollY(o0).out(o0);

shape(4).pCircle(osc()).out(o0);


iCircle(1).pSpiral(osc()).out(o0);



iCircle(0.2).pLissajous(noise(4,0.2)).out(o0);

loadScript("https://cdn.statically.io/gh/ymaltsman/Hydra-FCS/35549eb/HydraFCS.js");

iCissoid().out();

osc().eCircle().out();

s0.initCam();

s2.initImage("https://upload.wikimedia.org/wikipedia/commons/9/93/Two_people_riding_in_an_electriquette_%281915%29.jpg")
src(s2).modulate(osc(10)).eCircle(1).out();


a.setSmooth(0.5);

osc(2,0.2,1).mult(iCardioid(0.2).scale(()=>a.fft[0]).modulateScrollY(o0).eStrophoid(0.2)).out(o0);



