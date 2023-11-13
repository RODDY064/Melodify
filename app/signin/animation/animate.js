const sign_animate = {
   open:{
      x:'-100%',
      transition:{
        type:'Spring',
        damping:10,
        stiffness:70,
        restDelta:0.001,
        when:'afterChildren'
    }
   },
   visible:{
    x:'100%',
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
  }
   },
   closed:{
    x:0,
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
    }
   }


}

const child_animate = {
  open:{
    opacity:0,
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
  }
   },
   closed:{
    opacity:1,
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
    }
   }

}


export {
    sign_animate,
    child_animate
}