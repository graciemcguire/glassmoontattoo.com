const clapClap = () => {
  const mouseUp= new MouseEvent("mouseup",{bubbles:!0}),
  mouseDown=new MouseEvent("mousedown",{bubbles:!0}),
  multiVote=document.querySelector(`.js-postActionsFooter button[data-action="multivote"]`);
  let count= 0;
  const buttonAction= window.setInterval(()=>{
    const button= document.querySelector(".js-floatingMultirecommendCount"),
    parse= parseInt(button&&button.textContent||-1,10);
    (50===parse||100<count)&&(multiVote.dispatchEvent(mouseUp), window.clearInterval(buttonAction)),count++},500);
    multiVote.dispatchEvent(mouseDown);
  }();


function clapClap(){
    const up = new MouseEvent("mouseup", { bubbles: true });
    const down = new MouseEvent("mousedown", { bubbles: true });
    const button = document.getElementByClassName('bw lg lh li lj lk ll lm ln o hr dg n p lo u hi eq t ak gr lp gu lq');

    let parseNum = parseInt(button&&button.textContent||-1,10)
    (50===parseNum || 100 < count)&&button.textContent||-1,10);
}

var m = p.useCallback(function(e) {
  "touchstart" === e.type && (xe = !0),
  ("mousedown" !== e.type || !xe && function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : navigator.userAgent;
      return 0 === e.button && !(Object(ee.a)(t) && e.ctrlKey)
  }(e)) && (a && t(),
  l(!0))
})
, d = p.useCallback(function() {
  l(!1)
});
return Object(te.a)(function() {
  if (i)
      return document.addEventListener("mouseup", d),
      function() {
          return document.removeEventListener("mouseup", d)
      }
}, [i]),
{
  onMouseDown: m,
  onTouchStart: m,
  onTouchEnd: d
}
}
