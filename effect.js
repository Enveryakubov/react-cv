$(document).ready(function() {

    const effectTarget = $(".effect");
  
    effectTarget.css({"opacity":"0", "transition":"0.8s ease", "transform": "scale(0)", "transition-duration": "1s"})
  
    const options = {
      threshhold: 0.1,
      rootMargin: "-30px"
    }
  
    const observer = new IntersectionObserver((entries, observer)=> {
        entries.forEach(entry =>{
          if (!entry.isIntersecting) {
            return
          }
          // $(entry.target).removeClass("out")
          $(entry.target).css({"opacity":"1", "transform": "scale(1)"})
          observer.unobserve(entry.target)
        })
    }, options)
  
    $.each(effectTarget, (i) => {
  
        observer.observe(effectTarget[i])
    })

    // test
    const effectTarget1 = $(".t1");
  
    effectTarget1.css({"width":"0%", "transition-duration": "1s"})

    const observer1 = new IntersectionObserver((entries, observer)=> {
      entries.forEach(entry =>{
        if (!entry.isIntersecting) {
          return
        }
        // $(entry.target).removeClass("out")
        
        let t = $(entry.target).data("w")
        $(entry.target).css({"width":t})
        observer.unobserve(entry.target)
      })
  }, options)
    
//   $.each(effectTarget1, (i) => {
  
//     observer1.observe(effectTarget1[i])
// })
  })