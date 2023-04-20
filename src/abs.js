import exercises from './exercise';
import { State, greeting, preparation, preview, start } from './state.js';
import { selector, prep, counter, timeOut } from './index';

//instantiate state
const state = new State();

let previewIndex;
let index = 0;

class AbsExercise {
  //start exercise
  startExercise() {
    //set output container innerHtml to preparation
    selector('#output-container-abs').innerHTML = preparation;

    //call preparation from index js
    prep(exercises[1].absworkout[index].image);

    //call start state after 20s
    setTimeout(() => {
      selector('#output-container-abs').innerHTML = start;

      //disable previous button
      selector('#previous').disabled = true;

      //set image
      selector('#start-img').setAttribute(
        'src',
        exercises[1].absworkout[index].image
      );

      //set title
      selector('#title').textContent = exercises[1].absworkout[index].title;

      //set time or number of times for exercise
      selector('#times').textContent = exercises[1].absworkout[index].times;

      if (exercises[1].absworkout[index].times.includes('s')) {
        //remove s from time
        exercises[1].absworkout[index].times.slice(
          exercises[1].absworkout[index].times.length - 1
        );
        //call counter function from index.js
        counter(
          selector('#times'),
          parseInt(exercises[1].absworkout[index].times)
        );
      } else {
        selector('#times').textContent = exercises[1].absworkout[index].times;
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
    if (index === exercises[1].absworkout.length) {
      selector('#output-container-abs').innerHTML = greeting;
      setTimeout(() => {
        location.reload();
      }, 3000);
    }

    //set all absworkout index to index
    selector('#start-img').setAttribute(
      'src',
      exercises[1].absworkout[index].image
    );

    selector('#title').textContent = exercises[1].absworkout[index].title;

    selector('#times').textContent = exercises[1].absworkout[index].times;

    //set counter if exercise include time
    if (exercises[1].absworkout[index].times.includes('s')) {
      //remove s from time
      exercises[1].absworkout[index].times.slice(
        exercises[1].absworkout[index].times.length - 1
      );
      //call counter function from index.js
      counter(
        selector('#times'),
        parseInt(exercises[1].absworkout[index].times)
      );
    } else {
      selector('#times').textContent = exercises[1].absworkout[index].times;
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

    //set all absworkout index to index
    selector('#start-img').setAttribute(
      'src',
      exercises[1].absworkout[index].image
    );

    selector('#title').textContent = exercises[1].absworkout[index].title;

    selector('#times').textContent = exercises[1].absworkout[index].times;

    //set counter if exercise include time
    if (exercises[1].absworkout[index].times.includes('s')) {
      //remove s from time
      exercises[1].absworkout[index].times.slice(
        exercises[1].absworkout[index].times.length - 1
      );
      //call counter function from index.js
      counter(
        selector('#times'),
        parseInt(exercises[1].absworkout[index].times)
      );
    } else {
      selector('#times').textContent = exercises[1].absworkout[index].times;
    }
  }

  //quit exercise
  quitExercise() {
    state.absState();
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
      exercises[1].absworkout[previewIndex].image
    );

    //set preview title
    selector('#preview-title').textContent =
      exercises[1].absworkout[previewIndex].title;

    //set preview info
    selector('#preview-info').textContent =
      exercises[1].absworkout[previewIndex].info;

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
    if (previewIndex >= exercises[1].absworkout.length) {
      previewIndex = 0;
    }

    //reset all index to preview index
    selector('#img-preview').setAttribute(
      'src',
      exercises[1].absworkout[previewIndex].image
    );

    selector('#preview-title').textContent =
      exercises[1].absworkout[previewIndex].title;

    selector('#preview-info').textContent =
      exercises[1].absworkout[previewIndex].info;

    selector('#exerciseIndex').textContent = parseInt(previewIndex) + 1;
  }

  //take preview backward
  previousPreview() {
    //decrease preview index
    previewIndex--;

    //if preview index lesser than number of exercises start from end
    if (previewIndex < 0) {
      previewIndex = exercises[1].absworkout.length - 1;
    }

    //reset all index to preview index
    selector('#img-preview').setAttribute(
      'src',
      exercises[1].absworkout[previewIndex].image
    );

    selector('#preview-title').textContent =
      exercises[1].absworkout[previewIndex].title;

    selector('#preview-info').textContent =
      exercises[1].absworkout[previewIndex].info;

    selector('#exerciseIndex').textContent = parseInt(previewIndex) + 1;
  }

  //back to home
  home() {
    location.reload();
  }
}

export default AbsExercise;
