import exercises from './exercise';
import { State, greeting, preparation, preview, start } from './state.js';
import { selector, prep, counter, timeOut } from './index';

//instantiate state
const state = new State();

let previewIndex;
let index = 0;

class LegExercise {
  //start exercise
  startExercise() {
    //set output container innerHtml to preparation
    selector('#output-container-leg').innerHTML = preparation;

    //call preparation from index js
    prep(exercises[4].legworkout[index].image);

    //call start state after 30s
    setTimeout(() => {
      selector('#output-container-leg').innerHTML = start;

      //disable previous button
      selector('#previous').disabled = true;

      //set image
      selector('#start-img').setAttribute(
        'src',
        exercises[4].legworkout[index].image
      );

      //set title
      selector('#title').textContent = exercises[4].legworkout[index].title;

      //set time or number of times for exercise
      selector('#times').textContent = exercises[4].legworkout[index].times;

      //set counter if exercise include time
      if (exercises[4].legworkout[index].times.includes('s')) {
        //remove s from time
        exercises[4].legworkout[index].times.slice(
          exercises[4].legworkout[index].times.length - 1
        );
        //call counter function from index.js
        counter(
          selector('#times'),
          parseInt(exercises[4].legworkout[index].times)
        );
      } else {
        selector('#times').textContent = exercises[4].legworkout[index].times;
      }
    }, 20000);
  }

  //next exercise
  nextExercise() {
    //cleartimeout
    clearInterval(timeOut);

    //increase index
    index++;

    //enable previous button
    selector('#previous').disabled = false;

    //show greeting and reload page if theres no more exercise
    if (index === exercises[4].legworkout.length) {
      selector('#output-container-leg').innerHTML = greeting;
      setTimeout(() => {
        location.reload();
      }, 3000);
    }

    //set all legworkout index to index
    selector('#start-img').setAttribute(
      'src',
      exercises[4].legworkout[index].image
    );

    selector('#title').textContent = exercises[4].legworkout[index].title;

    selector('#times').textContent = exercises[4].legworkout[index].times;

    //set counter if exercise include time
    if (exercises[4].legworkout[index].times.includes('s')) {
      //remove s from time
      exercises[4].legworkout[index].times.slice(
        exercises[4].legworkout[index].times.length - 1
      );
      //call counter function from index.js
      counter(
        selector('#times'),
        parseInt(exercises[4].legworkout[index].times)
      );
    } else {
      selector('#times').textContent = exercises[4].legworkout[index].times;
    }
  }

  //go back to previous exercise
  previousExercise() {
    //clear timeout
    clearInterval(timeOut);

    //decrease index
    index--;

    //disable previous button
    if (index === 0) {
      clearInterval(timeOut);
      selector('#previous').disabled = true;
    }

    //set all legworkout index to index
    selector('#start-img').setAttribute(
      'src',
      exercises[4].legworkout[index].image
    );

    selector('#title').textContent = exercises[4].legworkout[index].title;

    selector('#times').textContent = exercises[4].legworkout[index].times;

    //set counter if exercise include time
    if (exercises[4].legworkout[index].times.includes('s')) {
      //remove s from time
      exercises[4].legworkout[index].times.slice(
        exercises[4].legworkout[index].times.length - 1
      );
      //call counter function from index.js
      counter(
        selector('#times'),
        parseInt(exercises[4].legworkout[index].times)
      );
    } else {
      selector('#times').textContent = exercises[4].legworkout[index].times;
    }
  }

  //quit exercise
  quitExercise() {
    state.legState();
    index = 0;
  }

  //preview exercise
  //show preview
  //preview index parameter is clicked item id
  showPreview(id) {
    //set preview index to id
    previewIndex = id;
    //set previewcontainer innerhtml to preview
    selector('#preview').innerHTML = preview;

    //set preview image
    selector('#img-preview').setAttribute(
      'src',
      exercises[4].legworkout[previewIndex].image
    );

    //set preview title
    selector('#preview-title').textContent =
      exercises[4].legworkout[previewIndex].title;

    //set preview info
    selector('#preview-info').textContent =
      exercises[4].legworkout[previewIndex].info;

    //preview index
    selector('#exerciseIndex').textContent = parseInt(previewIndex) + 1;

    //display preview
    selector('#preview').classList.remove('d-none');
  }

  //close preview
  closePreview() {
    //hide preview
    selector('#preview').classList.add('d-none');
  }

  //next preview
  nextPreview() {
    //increment preview index
    previewIndex++;

    //if preview index greater than number of exercises start from begin
    if (previewIndex >= exercises[4].legworkout.length) {
      previewIndex = 0;
    }

    //reset all index to preview index
    selector('#img-preview').setAttribute(
      'src',
      exercises[4].legworkout[previewIndex].image
    );

    selector('#preview-title').textContent =
      exercises[4].legworkout[previewIndex].title;

    selector('#preview-info').textContent =
      exercises[4].legworkout[previewIndex].info;

    selector('#exerciseIndex').textContent = parseInt(previewIndex) + 1;
  }

  //take preview backward
  previousPreview() {
    //decrease preview index
    previewIndex--;

    //if preview index lesser than number of exercises start from end
    if (previewIndex < 0) {
      previewIndex = exercises[4].legworkout.length - 1;
    }

    //reset all index to preview index
    selector('#img-preview').setAttribute(
      'src',
      exercises[4].legworkout[previewIndex].image
    );

    selector('#preview-title').textContent =
      exercises[4].legworkout[previewIndex].title;

    selector('#preview-info').textContent =
      exercises[4].legworkout[previewIndex].info;

    selector('#exerciseIndex').textContent = parseInt(previewIndex) + 1;
  }

  //back to home
  home() {
    location.reload();
  }
}

export default LegExercise;
