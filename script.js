var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
   // markers:true,
 }})
 
 tl.to("#fanta",{
    top:"120%",
    left:"3%",
 },'orange1')
 tl.to("#orange1",{
    top:"160%",
    left:"23%",
 },'orange1','orange')
 tl.to("#orange",{
    width:"24%",
    top:"173%",
    right:"10%",
 },'orange1','orange','leaf1')
 tl.to("#leaf1",{
    rotate:"20deg",
    top:"110%",
    left:"80%",
 },'orange1','orange','leaf1','leaf2')
 tl.to("#leaf2",{
    rotate:"120deg",
    top:"110%",
    left:"0%",
 },'orange1','orange','leaf1')

 var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
   //  markers:true,
 }})
 
 tl2.from("#apple1",{
    rotate: "-90deg",
    left:"-100%",
    top:"110%",
 },'cocacola','apple1')
 tl2.from("#cocacola",{
   rotate: "-90deg",
   left:"-100%",
   top:"110%",
},'cocacola','apple1','purpleapple')

tl2.from("#purpleapple",{
   rotate: "90deg",
   left:"100%",
   top:"110%",
},'cocacola','apple1','purpleaple','pepsi')
tl2.from("#pepsi",{
  rotate: "90deg",
  left:"100%",
  top:"110%",
},'cocacola','apple1','purpleaple','pepsi','orange1')
tl2.to("#orange1",{
   width:"22%",
   left:"39%",
   top:"210%",
},'cocacola','apple1','purpleaple','pepsi','orange1','fanta')
tl2.to("#fanta",{
  width:"33%",
  left:"34%",
  top:"215%",
},'cocacola','apple1','purpleaple','pepsi','orange1','fanta')
 





