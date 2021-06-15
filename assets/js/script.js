function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var Fyear = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (Fyear.value.length === 0 || Fyear.value > year) {
        alert('Verifique os dados e tente novamente!')
    } else {
           var fsex = document.getElementsByName('radsex')
           var age = year - Number(Fyear.value) 
           var gender = " "
           var img = document.createElement('img')
           img.setAttribute('id', 'photo')
           img.style.borderRadius = "125px"
           if (fsex[0].checked) {
               gender = 'Homem'
               if (age >= 0 && age < 10) {
                img.setAttribute('src', 'assets/img/crianca-masc.jpg')
                } else if (age < 21) {
                img.setAttribute('src', 'assets/img/jovem-masc.jpg')
                } else if (age < 50) {
                img.setAttribute('src', 'assets/img/adulto-masc.jpg')
                } else {
                img.setAttribute('src', 'assets/img/idoso-masc.jpg')
                }
           } else if (fsex[1].checked) {               
               gender = 'Mulher'
               if (age >= 0 && age < 10) {
                img.setAttribute('src', 'assets/img/crianca-fem.jpg')
               } else if (age < 21) {
                img.setAttribute('src', 'assets/img/jovem-fem.jpg')
               } else if (age < 50) {
                img.setAttribute('src', 'assets/img/adulto-fem.jpg')
               } else {
                img.setAttribute('src', 'assets/img/idoso-fem.jpg')
               }
           }
           res.style.textAlign = "center"
           res.innerHTML = `Detectamos ${gender} com ${age} anos.`
           res.appendChild(img)
        }
    }



