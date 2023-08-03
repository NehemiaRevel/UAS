        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const sidebar = document.querySelector(".sidebar");
        const menu = document.querySelector(".menu-list");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = ()=>{
          menu.classList.add("active");
          menuBtn.classList.add("hide");
          cancelBtn.classList.add("show");
          body.classList.add("disabledScroll");
        }
        cancelBtn.onclick = ()=>{
          menu.classList.remove("active");
          menuBtn.classList.remove("hide");
          cancelBtn.classList.remove("show");
          body.classList.remove("disabledScroll");
        }
    
        window.onscroll = ()=>{
          this.scrollY > 40 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

          this.scrollY > 40 ? sidebar.classList.add("sticky") : sidebar.classList.remove("sticky");
        }

        window.addEventListener('scroll', reveal)
        function reveal(){
            let reveals = document.querySelectorAll(".reveal");

            for(let i = 0; i < reveals.length; i++){
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 15;

                if(revealTop < windowHeight - revealPoint){
                    reveals[i].classList.add('desc-trans')
                }
                else{
                    reveals[i].classList.remove('desc-trans')
                }
            }
        }
        window.addEventListener('scroll', revealTitle)
        function revealTitle(){
            let reveals = document.querySelectorAll(".revealTitle");

            for(let i = 0; i < reveals.length; i++){
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 10;

                if(revealTop < windowHeight - revealPoint){
                    reveals[i].classList.add('title-trans')
                }
                else{
                    reveals[i].classList.remove('title-trans')
                }
            }
        }

