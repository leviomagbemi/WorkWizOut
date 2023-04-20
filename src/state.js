import { selector } from '.';

class State {
  fullBodyState() {
    selector(
      '#output-container'
    ).innerHTML = ` <div class="container my-5 py-5" id="fullbody-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Full Body Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">7 mins. 11 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--jumping jacks-->
        <div class="d-flex col-lg-6 border-bottom" id="jumping-jacks">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://cdn.dribbble.com/users/2931468/screenshots/5720362/media/e87bb48393c8202ff31e48a506d53595.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>JUMPING JACKS</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--incline push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="incline-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_13/1328589/annavictoria_inclinepushup-180330.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>INCLINE PUSH-UPS</h4>
            <p>X6</p>
          </div>
        </div>

        <!--knee push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="knee-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://www.lifetime60day.com/wp-content/uploads/2018/05/Kneeling-Pushup.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>KNEE PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="push-ups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Diamond-Push-Up.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--wide arms push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="widearms-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/menshealth-uk/main/assets/wide-grip-press-up-.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>WIDE ARM PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--incline push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="incline-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="5"></i>
          </div>
          <div class="gif">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_13/1328589/annavictoria_inclinepushup-180330.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>INCLINE PUSH-UPS</h4>
            <p>X6</p>
          </div>
        </div>

        <!--knee push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="knee-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="6"></i>
          </div>
          <div class="gif">
            <img
              src="https://www.lifetime60day.com/wp-content/uploads/2018/05/Kneeling-Pushup.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>KNEE PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="push-ups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="7"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Diamond-Push-Up.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--wide arms push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="widearms-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="8"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/menshealth-uk/main/assets/wide-grip-press-up-.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>WIDE ARM PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--cobra stretch-->
        <div class="d-flex col-lg-6 border-bottom" id="cobra-stretch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="9"></i>
          </div>
          <div class="gif">
            <img
              src="https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000179/157909262-man-doing-cobra-abdominal-stretch-old-horse-stretch-abdominals-exercise-flat-vector-illustration.jpg?ver=6"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>COBRA STRETCH</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--chest stretch-->
        <div class="d-flex col-lg-6 border-bottom" id="chest-stretch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="10"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/2c/86/00/2c860041238d3575dcf5341f0ffcdb5d.jpg"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>CHEST STRETCH</h4>
            <p>00:20</p>
          </div>
        </div>
      </div>

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }

  //abs state
  absState() {
    selector(
      '#output-container-abs'
    ).innerHTML = ` <div class="container my-5 py-5" id="abs-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Abs Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">18 mins. 14 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--jumping jacks-->
        <div class="d-flex col-lg-6 border-bottom" id="jumping-jacks">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://cdn.dribbble.com/users/2931468/screenshots/5720362/media/e87bb48393c8202ff31e48a506d53595.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>JUMPING JACKS</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--Abdominal crunches-->
        <div class="d-flex col-lg-6 border-bottom" id="abdominal-crunches">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/9b/6e/8a/9b6e8a390c44730869427660a45f3a02.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>ABDOMINAL CRUNCHES</h4>
            <p>X16</p>
          </div>
        </div>

        <!--russian twist-->
        <div class="d-flex col-lg-6 border-bottom" id="russian-twist">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://media4.giphy.com/media/cpKD9u3S25xYL8tcbr/giphy.gif?cid=6c09b95281ddcf6b98d615605edda0a51ed80d6869fd4faf&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>RUSSIAN-TWIST</h4>
            <p>X20</p>
          </div>
        </div>

        <!--mountain-climber-->
        <div class="d-flex col-lg-6 border-bottom" id="mountain-climber">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>MOUNTAIN CLIMBER</h4>
            <p>X16</p>
          </div>
        </div>

        <!--heel touch-->
        <div class="d-flex col-lg-6 border-bottom" id="heel-touch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://the-optimal-you.com/wp-content/uploads/2018/03/Heel-Touch-GIF.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>HEEL TOUCH</h4>
            <p>X20</p>
          </div>
        </div>

        <!--leg raises-->
        <div class="d-flex col-lg-6 border-bottom" id="leg-raises">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="5"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/97/9b/43/979b43963857f50ad9792da0d9ee2b9b.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>LEG RAISES</h4>
            <p>X16</p>
          </div>
        </div>

        <!--plank-->
        <div class="d-flex col-lg-6 border-bottom" id="plank">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="6"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Plank.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PLANK</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--Abdominal crunches-->
        <div class="d-flex col-lg-6 border-bottom" id="abdominal-crunches">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="7"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/9b/6e/8a/9b6e8a390c44730869427660a45f3a02.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>ABDOMINAL CRUNCHES</h4>
            <p>X12</p>
          </div>
        </div>

        <!--russian twist-->
        <div class="d-flex col-lg-6 border-bottom" id="russian-twist">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="8"></i>
          </div>
          <div class="gif">
            <img
              src="https://media4.giphy.com/media/cpKD9u3S25xYL8tcbr/giphy.gif?cid=6c09b95281ddcf6b98d615605edda0a51ed80d6869fd4faf&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>RUSSIAN-TWIST</h4>
            <p>X32</p>
          </div>
        </div>

        <!--mountain-climber-->
        <div class="d-flex col-lg-6 border-bottom" id="mountain-climber">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="9"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>MOUNTAIN CLIMBER</h4>
            <p>X12</p>
          </div>
        </div>

        <!--heel touch-->
        <div class="d-flex col-lg-6 border-bottom" id="heel-touch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="10"></i>
          </div>
          <div class="gif">
            <img
              src="https://the-optimal-you.com/wp-content/uploads/2018/03/Heel-Touch-GIF.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>HEEL TOUCH</h4>
            <p>X20</p>
          </div>
        </div>

        <!--leg raises-->
        <div class="d-flex col-lg-6 border-bottom" id="leg-raises">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="11"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/97/9b/43/979b43963857f50ad9792da0d9ee2b9b.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>LEG RAISES</h4>
            <p>X14</p>
          </div>
        </div>

        <!--plank-->
        <div class="d-flex col-lg-6 border-bottom" id="plank">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="12"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Plank.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PLANK</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--cobra stretch-->
        <div class="d-flex col-lg-6 border-bottom" id="cobra-stretch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="13"></i>
          </div>
          <div class="gif">
            <img
              src="https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000179/157909262-man-doing-cobra-abdominal-stretch-old-horse-stretch-abdominals-exercise-flat-vector-illustration.jpg?ver=6"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>COBRA STRETCH</h4>
            <p>00:30</p>
          </div>
        </div>

         

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }

  //chest state
  chestState() {
    selector(
      '#output-container-chest'
    ).innerHTML = ` <div class="container my-5 py-5" id="fullbody-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Chest Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">7 mins. 11 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--jumping jacks-->
        <div class="d-flex col-lg-6 border-bottom" id="jumping-jacks">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://cdn.dribbble.com/users/2931468/screenshots/5720362/media/e87bb48393c8202ff31e48a506d53595.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>JUMPING JACKS</h4>
            <p>00:30</p>
          </div>
        </div>

        <!--incline push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="incline-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_13/1328589/annavictoria_inclinepushup-180330.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>INCLINE PUSH-UPS</h4>
            <p>X6</p>
          </div>
        </div>

      
        <!--push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="push-ups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Diamond-Push-Up.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--wide arms push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="widearms-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/menshealth-uk/main/assets/wide-grip-press-up-.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>WIDE ARM PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--tricep dips-->
        <div class="d-flex col-lg-6 border-bottom" id="tricep-dips">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://dailymoves.files.wordpress.com/2018/01/kat-chair-tricep-dips.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>TRICEP DIPS</h4>
            <p>X6</p>
          </div>
        </div>

        <!--wide arms push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="widearms-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="5"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/menshealth-uk/main/assets/wide-grip-press-up-.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>WIDE ARM PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--incline push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="incline-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="6"></i>
          </div>
          <div class="gif">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_13/1328589/annavictoria_inclinepushup-180330.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>INCLINE PUSH-UPS</h4>
            <p>X6</p>
          </div>
        </div>

          <!--tricep dips-->
        <div class="d-flex col-lg-6 border-bottom" id="tricep-dips">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="7"></i>
          </div>
          <div class="gif">
            <img
              src="https://dailymoves.files.wordpress.com/2018/01/kat-chair-tricep-dips.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>TRICEP DIPS</h4>
            <p>X6</p>
          </div>
        </div>

        <!--knee push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="knee-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="8"></i>
          </div>
          <div class="gif">
            <img
              src="https://www.lifetime60day.com/wp-content/uploads/2018/05/Kneeling-Pushup.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>KNEE PUSH-UPS</h4>
            <p>X4</p>
          </div>
        </div>

        <!--cobra stretch-->
        <div class="d-flex col-lg-6 border-bottom" id="cobra-stretch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="9"></i>
          </div>
          <div class="gif">
            <img
              src="https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000179/157909262-man-doing-cobra-abdominal-stretch-old-horse-stretch-abdominals-exercise-flat-vector-illustration.jpg?ver=6"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>COBRA STRETCH</h4>
            <p>00:20</p>
          </div>
        </div>

        <!--chest stretch-->
        <div class="d-flex col-lg-6 border-bottom" id="chest-stretch">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="10"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/2c/86/00/2c860041238d3575dcf5341f0ffcdb5d.jpg"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>CHEST STRETCH</h4>
            <p>00:20</p>
          </div>
        </div>
      </div>

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }

  //arm state
  armState() {
    selector(
      '#output-container-arm'
    ).innerHTML = ` <div class="container my-5 py-5" id="fullbody-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Arm Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">5 mins. 5 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--jumping jacks-->
        <div class="d-flex col-lg-6 border-bottom" id="jumping-jacks">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://cdn.dribbble.com/users/2931468/screenshots/5720362/media/e87bb48393c8202ff31e48a506d53595.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>JUMPING JACKS</h4>
            <p>00:30</p>
          </div>
        </div>

        <!--arm raises-->
        <div class="d-flex col-lg-6 border-bottom" id="arm-raises">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lateralraise-1456955524.gif?crop=1xw:0.75xh;center,top&resize=1200:*"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>ARM RAISES</h4>
            <p>00:30</p>
          </div>
        </div>

        <!--tricep dips-->
        <div class="d-flex col-lg-6 border-bottom" id="tricep-dips">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://dailymoves.files.wordpress.com/2018/01/kat-chair-tricep-dips.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>TRICEP DIPS</h4>
            <p>X10</p>
          </div>
        </div>

        <!--diamond push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="widearms-pushups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://thumbs.gfycat.com/AffectionateImmenseIrishdraughthorse-size_restricted.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>DIAMOND PUSH-UPS</h4>
            <p>X6</p>
          </div>
        </div>

          <!--tricep dips-->
        <div class="d-flex col-lg-6 border-bottom" id="tricep-dips">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://dailymoves.files.wordpress.com/2018/01/kat-chair-tricep-dips.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>TRICEP DIPS</h4>
            <p>X10</p>
          </div>
        </div>

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }

  //leg workout
  legState() {
    selector(
      '#output-container-leg'
    ).innerHTML = ` <div class="container my-5 py-5" id="fullbody-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Leg Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">6 mins. 5 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--squats-->
        <div class="d-flex col-lg-6 border-bottom" id="squat">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/P4Z_PX1xUVnDyeecUkC62pEtZmw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/06/11/751/n/40863086/a3976b46f9acc6e1_2a4b0a04f46626f9_squat/i/Bodyweight-Squat.jpg"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>SQUAT</h4>
            <p>00:30</p>
          </div>
        </div>

        <!--push ups-->
        <div class="d-flex col-lg-6 border-bottom" id="push-ups">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Diamond-Push-Up.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PUSH-UPS</h4>
            <p>X12</p>
          </div>
        </div>

        <!--deadlifts-->
        <div class="d-flex col-lg-6 border-bottom" id="deadlifts">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://i.pinimg.com/originals/81/f1/23/81f1230ab56427e0bb86e2b3c2c6cb6f.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>DEADLIFTS</h4>
            <p>X8</p>
          </div>
        </div>

        <!--biceps curls-->
        <div class="d-flex col-lg-6 border-bottom" id="bicep-curls">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellcurl-1457043876.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>BICEP-CURLS</h4>
            <p>X6</p>
          </div>
        </div>

          <!--plank-->
        <div class="d-flex col-lg-6 border-bottom" id="plank">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://seven.app/media/images/Plank.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PLANK</h4>
            <p>00:30</p>
          </div>
        </div>

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }

  //shoulder and back
  sbState() {
    selector(
      '#output-container-sb'
    ).innerHTML = ` <div class="container my-5 py-5" id="fullbody-container">
      <!--preview-->
      <div class=" mx-auto bg-light pt-3 d-none" id="preview">
      </div>

    <!--Header-->

      <div class="container bg-primary py-3 text-white fixed-top" id="header">
        <div><i class="fas fa-arrow-left fa-lg" id="back"> </i></div>
        <div>
          <h1 class="text-center">Shouder & Back Workout</h1>
        </div>
      </div>

      <div class="d-flex border-bottom">
        <span class="bg-primary mt-4 mr-3"> </span>
        <p class="pt-5 font-weight-bold">6 mins. 5 workouts</p>
      </div>

      <div class="container row" id="exercises">
        <!--pull ups-->
        <div class="d-flex col-lg-6 border-bottom" id="squat">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="0"></i>
          </div>
          <div class="gif">
            <img
              src="https://thumbs.gfycat.com/DifficultHotBoto-max-1mb.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>PULL-UPS</h4>
            <p>X10</p>
          </div>
        </div>

        <!--rows-->
        <div class="d-flex col-lg-6 border-bottom" id="rows">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="1"></i>
          </div>
          <div class="gif">
            <img
              src="https://media.tenor.com/XehF1R8EzM4AAAAC/dumbbell-row.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>ROWS</h4>
            <p>X10</p>
          </div>
        </div>

        <!--lat pulldown-->
        <div class="d-flex col-lg-6 border-bottom" id="lat-pulldown">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="2"></i>
          </div>
          <div class="gif">
            <img
              src="https://program.rapidloss.com.au/wp-content/uploads/female-lat-pulldown.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>LAT PULLDOWN</h4>
            <p>X10</p>
          </div>
        </div>

        <!--shoulder press-->
        <div class="d-flex col-lg-6 border-bottom" id="shoulder-press">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="3"></i>
          </div>
          <div class="gif">
            <img
              src="https://thumbs.gfycat.com/ExcitableOblongFluke-max-1mb.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>SHOULDER PRESS</h4>
            <p>X6</p>
          </div>
        </div>

          <!--lateral-raises-->
        <div class="d-flex col-lg-6 border-bottom" id="lateral-raises">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="4"></i>
          </div>
          <div class="gif">
            <img
              src="https://bodybuilding-wizard.com/wp-content/uploads/2015/03/animation-seated-dumbbell-lateral-raise-1.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>LATERAL RAISES</h4>
            <p>X10</p>
          </div>
        </div>

             <!--reverse-flys-->
        <div class="d-flex col-lg-6 border-bottom" id="reverse-flys">
          <div class="preview-icon align-self-center">
            <i class="fas fa-bars fa-lg" id="5"></i>
          </div>
          <div class="gif">
            <img
              src="https://thumbs.gfycat.com/ChubbyEvilJellyfish-size_restricted.gif"
              alt=""
            />
          </div>
          <div class="name align-self-center">
            <h4>REVERSE FLYS</h4>
            <p>X10</p>
          </div>
        </div>

      <!--start btn-->
      <div class="container bg-light text-center py-3 text-white fixed-bottom" id="footer">
        <div>
          <button class="btn btn-primary px-5 py-2 rounded-pill" id="start">Start</button>
        </div>

        <!--exercise-->
      </div>
    </div>`;
  }
}
//start
const start = `
    <div class="container pt-3" id="startExe">
      <div class="bg-white p-5 text-center mx-auto rounded">
        <div class="startimg-container mb-3">
          <img
            src="https://www.shutterstock.com/image-vector/woman-doing-wide-arm-chest-260nw-1994007878.jpg"
            alt=""
            id="start-img"
          />
        </div>
        <div class="title-container mb-3">
          <h1 id="title"></h1>
        </div>
        <div class="times-container">
          <h1 id="times"></h1>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary px-5 mb-3" id="quit">Quit</button>
        </div>
        <div>
          <button class="btn btn-light" id="previous"
            ><i class="fas fa-backward fa-lg backward"></i> Previous</button
          >
          <button class="btn btn-light" id="next"
            >Next <i class="fas fa-forward fa-lg forward"></i
          ></button>
        </div>
      </div>
    </div>
`;

//greeting
const greeting = `<div class="container pt-3" id="greeting">
      <div class="bg-white p-5 text-center mx-auto rounded">
        <div class="greetingimg-container mb-3">
          <img
            src="https://media.tenor.com/s1vd6y67C8UAAAAj/bddomingorealty-bddrc.gif"
            alt=""
            id="greeting-img"
          />
        </div>
      </div>
    </div>`;

const preparation = `
    <div class="container pt-3" id="prep">
      <div class="bg-white p-5 text-center mx-auto rounded">
        <div class="startimg-container mb-3">
          <img
            src=""
            alt=""
            id="prep-img"
          />
        </div>
        <div class="title-container mb-3">
          <h1 class="text-primary">Ready To Go</h1>
        </div>
        <div class="times-container">
          <h1 class="d-inline" id="prep-times">20</h1><span class="d-inline">s</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
           <span class="sr-only">Loading...</span>
        </div>
        </div>
      
      </div>
    </div>`;

const preview = `  <div class="img-container">
          <img
            src=""
            alt=""
           id="img-preview"/>
        </div>

        <h3 class="mx-3" id="preview-title"></h3>

        <div class="px-3">
          <p id="preview-info">
            
          </p>
        </div>
        <button class="btn btn-primary mb-3 mx-3" id= "close-preview">close</button>

        <div class="d-flex justify-content-center bg-dark text-light py-3">
          <span class="mx-3"><i class="fas fa-backward fa-lg"></i></span>
          <span class="mx-3" id="exerciseIndex"></span>
          <span class="mx-3"><i class="fas fa-forward fa-lg"></i></span>
        </div>`;

export { State, greeting, preparation, preview, start };
