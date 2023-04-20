import './asset/style.css';
import { State, greeting, preparation, preview, start } from './state.js';
import FullBodyExercise from './fullbody';
import AbsExercise from './abs';
import ChestExercise from './chest';
import ArmExercise from './arm';
import LegExercise from './leg';
import SbExercise from './sb';

//instantiate classes
const state = new State();
const fullbody = new FullBodyExercise();
const abs = new AbsExercise();
const chest = new ChestExercise();
const arm = new ArmExercise();
const leg = new LegExercise();
const sb = new SbExercise();

//counter timeout
let timeOut;

//selector
function selector(select) {
  return document.querySelector(select);
}

//select multiple items
function selectorAll(select) {
  return document.querySelectorAll(select);
}

//use click event to change state
selectorAll('.workout').forEach((workout) => {
  workout.addEventListener('click', () => {
    switch (true) {
      case workout.id === 'fullbody-workout':
        selector('#output-container-abs').remove();
        selector('#output-container-chest').remove();
        selector('#output-container-arm').remove();
        selector('#output-container-leg').remove();
        selector('#output-container-sb').remove();
        state.fullBodyState();
        break;
      case workout.id === 'abs-workout':
        selector('#output-container').remove();
        selector('#output-container-chest').remove();
        selector('#output-container-arm').remove();
        selector('#output-container-leg').remove();
        selector('#output-container-sb').remove();
        state.absState();
        break;
      case workout.id === 'chest-workout':
        selector('#output-container').remove();
        selector('#output-container-abs').remove();
        selector('#output-container-arm').remove();
        selector('#output-container-leg').remove();
        selector('#output-container-sb').remove();
        state.chestState();
        break;
      case workout.id === 'arm-workout':
        selector('#output-container').remove();
        selector('#output-container-abs').remove();
        selector('#output-container-chest').remove();
        selector('#output-container-leg').remove();
        selector('#output-container-sb').remove();
        state.armState();
        break;
      case workout.id === 'leg-workout':
        selector('#output-container').remove();
        selector('#output-container-abs').remove();
        selector('#output-container-chest').remove();
        selector('#output-container-arm').remove();
        selector('#output-container-sb').remove();
        state.legState();
        break;
      case workout.id === 'shoulderback-workout':
        selector('#output-container').remove();
        selector('#output-container-abs').remove();
        selector('#output-container-chest').remove();
        selector('#output-container-arm').remove();
        selector('#output-container-leg').remove();
        state.sbState();
        break;
    }
  });
});

function loadAllEventListener() {
  //fullbody eventlistener
  selector('#output-container').addEventListener('click', switchFullbodyStates);

  //abs eventlistener
  selector('#output-container-abs').addEventListener('click', switchAbsStates);

  //chest eventlistener
  selector('#output-container-chest').addEventListener(
    'click',
    switchChestStates
  );

  //arm eventlistener
  selector('#output-container-arm').addEventListener('click', switchArmStates);

  //leg eventlistener
  selector('#output-container-leg').addEventListener('click', switchLegStates);

  //shoulder and back eventlistener
  selector('#output-container-sb').addEventListener('click', switchSbStates);
}

//switch fullbody through
function switchFullbodyStates(e) {
  //Fullbody workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      fullbody.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      fullbody.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      fullbody.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      fullbody.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      fullbody.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      fullbody.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      fullbody.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      fullbody.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      fullbody.home();
      break;
  }
}

function switchAbsStates(e) {
  //abs workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      abs.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      abs.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      abs.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      abs.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      abs.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      abs.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      abs.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      abs.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      abs.home();
      break;
  }
}

//switch through chest
function switchChestStates(e) {
  //chest workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      chest.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      chest.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      chest.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      chest.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      chest.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      chest.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      chest.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      chest.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      chest.home();
      break;
  }
}

//switch through arm
function switchArmStates(e) {
  //arm workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      arm.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      arm.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      arm.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      arm.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      arm.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      arm.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      arm.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      arm.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      arm.home();
      break;
  }
}

//switch through leg
function switchLegStates(e) {
  //leg workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      leg.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      leg.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      leg.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      leg.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      leg.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      leg.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      leg.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      leg.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      leg.home();
      break;
  }
}

//switch through shoulder and back
function switchSbStates(e) {
  //shoulder and back workout
  switch (true) {
    //start exercise
    case e.target.id === 'start':
      sb.startExercise();
      break;
    //next exercise
    case e.target.id === 'next' || e.target.classList.contains('forward'):
      sb.nextExercise();
      break;
    //go back to previous exercise
    case e.target.id === 'previous' || e.target.classList.contains('backward'):
      sb.previousExercise();
      break;
    //show preview
    case e.target.classList.contains('fa-bars'):
      sb.showPreview(e.target.id);
      break;

    //close preview
    case e.target.id === 'close-preview':
      sb.closePreview();
      break;

    //next preview
    case e.target.classList.contains('fa-forward'):
      sb.nextPreview();
      break;

    //take preview backward
    case e.target.classList.contains('fa-backward'):
      sb.previousPreview();
      break;

    //quit exercise
    case e.target.id === 'quit':
      sb.quitExercise();
      break;

    //back to home
    case e.target.id === 'back':
      sb.home();
      break;
  }
}

//preparation(ready to go)
function prep(image) {
  selector('#prep-img').setAttribute('src', image);
  const prepTimeInterval = setInterval(() => {
    selector('#prep-times').textContent--;

    if (parseInt(selector('#prep-times').textContent) < 1) {
      clearInterval(prepTimeInterval);
    }
  }, 1000);
}

//counter
function counter(content, number) {
  timeOut = setInterval(() => {
    content.textContent = `${number--}s`;
    if (number < 0) {
      clearInterval(timeOut);
      content.textContent = 0;
    }
  }, 1000);
}

loadAllEventListener();

export { selector, prep, counter, timeOut };
