   window.addEventListener('resize', function () {
      if (window.innerWidth >= 768)
         document.getElementById('sidebar').style.display = 'block'
      else
         document.getElementById('sidebar').style.display = 'none'

   })

   document.addEventListener('click', function (e) {
      if (e.target.id == 'bars') {
         let element = document.getElementById('sidebar');
         console.log(window.getComputedStyle(element).getPropertyValue('display'))
         if (window.getComputedStyle(element).getPropertyValue('display') == 'none')
            document.getElementById('sidebar').style.display = 'block'
      }
      console.log("EVENT ", e.target.id)
      if ((e.target.id == 'content' || e.target.id == '') && window.innerWidth < 768) {
         let element = document.getElementById('bars');
         let elementStyle = window.getComputedStyle(element);
         let elementColor = elementStyle.getPropertyValue('display');
         if (window.getComputedStyle(element).getPropertyValue('display') == 'inline-block')
            document.getElementById('sidebar').style.display = 'none'
      }

      if (e.target.id.substring(0, e.target.id.length - 1) == "sublevel-" ||
         e.target.id.substring(6, e.target.id.length - 1) == "sublevel-") {
         subnivel = e.target.id.substr(e.target.id.length - 1, 1);
         element = document.getElementById('caret-sublevel-' + subnivel);
         if (element.classList.contains('sidebar__caret'))
            element.classList.remove('sidebar__caret')
         else
            element.classList.add('sidebar__caret')
      }
   })
