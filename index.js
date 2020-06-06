let nn = "1039470686"

var xs =[
    {
        dato:`<div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Cédula</label>
        </div>
        <div class="center">
          <button class="btn waves-effect waves-light" type="submit" name="action" onclick="verificarCedula()">Validar cédula
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>`
    },
    {
        dato:`<div>
        <div class="center">
          <img src="./image/IMG_20200603_205625.jpg" style="border-radius:50%; object-fit:contain;" width="300px" height="300px" alt="">
        </div>
        <div class="container">
          Me he preguntado una y mil veces porque que tienes que logras hacer mi vida tan especial, única feliz e inolvidable… Lo charro es que para ese cuestionamiento encuentro mil y una respuestas diferentes porque sin lugar a dudas eres una mujer tan especial que logras cautivar mi vida con todo lo que representa y eres en una y mil veces 😍😍😍😘😘😘❤❤
        </div>
        <br>
        <div class="center">
          <button class="btn waves-effect waves-light" onclick="agregarFormulario()" type="submit" name="action">Continuar
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>`
    },
    {
        dato:`<div>
        <div class="center">
          <h4 style="color:#ba68c8">Cuestionario de evaluación</h4>
        </div>
        <form action="#">
            <p>Qué tanto te gusto de 1 a 10</p>
            <label>
              <input class="with-gap" name="group2" type="radio" value="0.25"/>
              <span>Entre 1 - 3</span>
            </label><br>
            <label>
              <input class="with-gap" name="group2" type="radio" value="0.5" />
              <span>Entre 4 - 6</span>
            </label><br>
            <label>
              <input class="with-gap" name="group2" type="radio" value="0.75"  />
              <span>Entre 7 - 9</span>
            </label><br>
            <label>
              <input class="with-gap" name="group2" type="radio" value="1"  />
              <span>Entre 10 😁😁</span>
            </label>

            <p>Valgo la pena para tí</p>
            <label>
              <input class="with-gap" name="group1" type="radio"  value="1"/>
              <span>Si</span>
            </label><br>
            <label>
              <input class="with-gap" name="group1" type="radio" value="0" />
              <span>No</span>
            </label><br>
            <label>
              <input class="with-gap" class="with-gap" name="group1" type="radio" value="0.5"/>
              <span>Tal vez</span>
            </label><br>

            <p>Estarias dispuesta a entregarme el corazón, soñar y vivir una historia a la antigua</p>
            <label>
              <input class="with-gap" name="group3" type="radio" value="1"/>
              <span>Si</span>
            </label><br>
            <label>
              <input class="with-gap" name="group3" type="radio" value="0" />
              <span>No</span>
            </label><br>
            <label>
              <input class="with-gap" name="group3" type="radio"  value="0.5"/>
              <span>Tal vez</span>
            </label>

            <p>He cambiado en algo tú diario vivir</p>
            <label>
              <input class="with-gap" name="group4" type="radio"  value="1"/>
              <span>Si</span>
            </label><br>
            <label>
              <input class="with-gap" name="group4" type="radio"  value="0"/>
              <span>No</span>
            </label><br>

            <p>Cambiarias algo de mí</p>
            <label>
              <input class="with-gap" name="group5" type="radio"  value="1"/>
              <span>Si</span>
            </label><br>
            <label>
              <input class="with-gap" name="group5" type="radio"  value="0"/>
              <span>No</span>
            </label>
            <div class="center">
              <button class="btn waves-effect waves-light"  onclick="probarFormulario()" name="action">Continuar
                <i class="material-icons right">send</i>
              </button>
            </div>
            <br><br>
        </form>
      </div>`
    },
    {
        dato:`<div>
        <div class="center">
          <img src="./image/png-emoji-air-kiss-sticker-emoticon-emoji-love-face-smiley-sticker-clipart.png" style="object-fit:contain;" width="300px" height="300px" alt="">
        </div>
        <div class="container" style="text-align: center; font-size: 30px; font-weight: bold;">
          Mi amor voy a seguir luchando hasta que todas esas respuestas sean positivas
        </div>
        <br>
      </div>`
    },
    {
        dato:`<div>
        <p>Estas preparada para iniciar una relación de tipo amorosa</p>
            <label>
              <input class="with-gap" id="si" name="group6" type="radio"/>
              <span>Si</span>
            </label>
            <label>
              <input class="with-gap" name="group6" type="radio" />
              <span>No</span>
            </label>
            <div class="center">
              <button class="btn waves-effect waves-light" type="submit" onclick="verVideo()" name="action">Continuar
                <i class="material-icons right">send</i>
              </button>
            </div>
      </div>`
    },
    {
        dato:`<div>
        <video autoplay controls width="100%">
          <source src="./image/Laura.mp4" type="video/mp4">
        </video>
      </div>
      <div class="center">
        <button class="btn waves-effect waves-light" type="submit"  onclick="propuesta()" name="action">Continuar
          <i class="material-icons right">send</i>
        </button>
      </div>`
    },
    {
        dato:`<div>
        <div class="center">
          <img src="https://i.pinimg.com/originals/29/57/f7/2957f7c7d2ef62de281dac2765bb7acb.gif" style="object-fit:contain;" width="300px" height="300px" alt="">
        </div>
        <div class="container" style="text-align: center; font-size: 30px; font-weight: bold;">
          Teniendo en cuenta lo anterior, ¿Quieres ser mi novia?
        </div>
        <br>
      </div>`
    }
],
f = document.getElementById('todo')

function $(param){
    return document.querySelector(param)
}
window.onload = function(){
    this.f.innerHTML=xs[0].dato
}
function verificarCedula(){
    if($('#last_name').value === nn){
        mensajeInicial()
    }else{
        alert('El mensaje de este documento no es para tí')
    }
}
function mensajeInicial(){
    f.innerHTML =xs[1].dato
}
function agregarFormulario(){
    f.innerHTML =xs[2].dato
}
function probarFormulario(){
  let suma=0;
    document.getElementsByName('group2').forEach((elemen)=>{
      if(elemen.checked == true){
        suma += elemen.value
      }
    })
    document.getElementsByName('group1').forEach((elemen)=>{
      if(elemen.checked == true){
        suma += elemen.value
      }
    })
    document.getElementsByName('group3').forEach((elemen)=>{
      if(elemen.checked == true){
        suma += elemen.value
      }
    })
    document.getElementsByName('group4').forEach((elemen)=>{
      if(elemen.checked == true){
        suma += elemen.value
      }
    })
    document.getElementsByName('group5').forEach((elemen)=>{
      if(elemen.checked == true){
        suma += elemen.value
      }
    })
    if(suma >= 4){
      relacion()
    }else{
      sigueIntentando("Mi amor voy a seguir luchando hasta que todas esas respuestas sean positivas")
    }
}
function relacion(){
  f.innerHTML =xs[4].dato
}
function sigueIntentando(dato){
  f.innerHTML =`<div>
  <div class="center">
    <img src="./image/png-emoji-air-kiss-sticker-emoticon-emoji-love-face-smiley-sticker-clipart.png" style="object-fit:contain;" width="300px" height="300px" alt="">
  </div>
  <div class="container" style="text-align: center; font-size: 30px; font-weight: bold;">
    ${dato}
  </div>
  <br>
</div>`
}
function verVideo(){
  if($('#si').checked == true){
    f.innerHTML =xs[5].dato
  }else{
    sigueIntentando('Amor voy a ser paciente y estare presente para cuando consideres estar preparada')
  }
}
function propuesta(){
  f.innerHTML =xs[6].dato
}