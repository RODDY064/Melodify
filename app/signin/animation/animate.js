const sign_animate = {
   open:{
      x:'-100%',
      opacity:0,
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
    opacity:0,
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
      when:'afterChildren'
  }
   },
   closed:{
    x:0,
    opacity:1,
    transition:{
      type:'Spring',
      damping:10,
      stiffness:70,
      restDelta:0.001,
      when:'beforeChildren'
    }
   }


}

export {
    sign_animate
}