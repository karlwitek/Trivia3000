
function insertText(text) {
  const pElem = document.getElementById('msg-para');
  pElem.textContent = text;
};

function animContentChange() {
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('form');
  const msgDiv = document.getElementById('message-div');
  const triviaContainer = document.getElementById('trivia-container');
  const numberContainer = document.getElementById('number-container');

  submitBtn.style.position = "relative";
  numberContainer.style.transformOrigin = "bottom right";

  const submitBtnFallKF = new KeyframeEffect(
    submitBtn,
    [
      { left: "0vw", transform: "rotate(0deg)" },
      { left: "2.5vw", transform: "rotate(-12deg)" },
    ],
    { duration: 150, delay: 600, fill: "forwards", easing: "ease-in" },
  );

  const submitBtnAnim = new Animation(
    submitBtnFallKF,
    document.timeline,
  );
  //=================

  const formFallKF = new KeyframeEffect(
    form,
    [
      { left: "38vw", top: "26vw", transform: "rotate(0deg)" },
      { left: "100vw", top: "72vw", transform: "rotate(-120deg)" },
    ],
    { duration: 550, delay: 700, fill: "forwards", easing: "ease-in" },
  );

  const formFallAnim = new Animation(
    formFallKF,
    document.timeline,
  );
  // ============================

  const msgDivFallKF = new KeyframeEffect(
    msgDiv,
    [
      { transform: "rotate(0deg)", left: "39.6vw", top: "26vw" },
      { transform: "rotate(190deg)", left: "100vw", top: "20vw" },
    ],
    { duration: 650, delay: 700, fill: "forwards", easing: "ease-in" },
  );

  const msgDivFallAnim = new Animation(
    msgDivFallKF,
    document.timeline,
  );
  // ======================

  const triviaContFallKF1 = new KeyframeEffect(
    triviaContainer,
    [
      { transform: "rotate(-18deg)", top: "15.5vw", left: "30vw" },
      { transform: "rotate(-95deg)", top: "13vw", left: "32vw" },
    ],
    { duration: 400, delay: 800, fill: "forwards", easing: "ease-in" },
  );

  const triviaContFallAnim1 = new Animation(
    triviaContFallKF1,
    document.timeline,
  );

  const triviaContFallKF2 = new KeyframeEffect(
    triviaContainer,
    [
      { transform: "rotate(-95deg)", top: "13vw", left: "32vw" },
      { transform: "rotate(-89deg)", top: "13vw", left: "32vw" },
    ],
    { duration: 300, delay: 1200, fill: "forwards", easing: "ease-in" },
  );

  const triviaContFallAnim2 = new Animation(
    triviaContFallKF2,
    document.timeline,
  );

  const triviaContFallKF3 = new KeyframeEffect(
    triviaContainer,
    [
      { transform: "rotate(-89deg)", top: "13vw", left: "32vw" },
      { transform: "rotate(-280deg)", top: "23vw", left: "100vw" },
    ],
    { duration: 500, delay: 1550, fill: "forwards", easing: "ease-in" },
  );

  const triviaContFallAnim3 = new Animation(
    triviaContFallKF3,
    document.timeline,
  );

  // ==========================

  const numberContFallKF1 = new KeyframeEffect(
    numberContainer,
    [
      { transformOrigin: "center", transform: "rotate(0deg)" },
      { transformOrigin: "bottom right", transform: "rotate(20deg)" },
      { transformOrigin: "bottom right", transform: "rotate(0deg)"}
    ],
    { duration: 350, delay: 1550, easing: "ease-in", iterations: "2", fill: "forwards" },
  );

  const numberContFallAnim1 = new Animation(
    numberContFallKF1,
    document.timeline,
  );

  const numberContFallKF2 = new KeyframeEffect(
    numberContainer,
    [
      { transformOrigin: "bottom right", transform: "rotate(20deg)", right: "37.5vw", top: "15.5vw" },
      { transformOrigin: "bottom right", transform: "rotate(200deg)", right: "-10vw", top: "10vw" },
    ],
    { duration: 500, delay: 1950, easing: "ease-in", fill: "forwards" },
  );

  const numberContFallAnim2 = new Animation(
    numberContFallKF2,
    document.timeline,
  );

  submitBtnAnim.play();
  formFallAnim.play();
  msgDivFallAnim.play();
  triviaContFallAnim1.play();
  triviaContFallAnim2.play();
  triviaContFallAnim3.play();
  numberContFallAnim1.play();
  numberContFallAnim2.play();

  // call fn here to bring in question div...
  // put in setTimeout...

  setTimeout(animCoverDiv, 300);
  setTimeout(slideAllAnswers, 3500);


};

function animCoverDiv() {// animation for start of questions
  const coverDiv = document.getElementById('question-cover');

  const coverDivSlideKF = new KeyframeEffect(
    coverDiv,
    [
      { left: "-45vw" },
      { left: "-31vw" },
    ],
    { duration: 500, delay: 100, fill: "forwards" },
  );

  const coverDivSlideAnim = new Animation(
    coverDivSlideKF,
    document.timeline,
  );

  const coverDivSpinKF = new KeyframeEffect(
    coverDiv,
    [
      { transform: "rotate(0deg)" },
      { transform: "rotate(360deg)" },
    ],
    { duration: 500, delay: 100, easing: "linear", iterations: 5 },
  );

  const coverDivSpinAnim = new Animation(
    coverDivSpinKF,
    document.timeline,
  );

  const coverDivKF = new KeyframeEffect(
    coverDiv,
    [
      { transform: "rotate(0deg)", left: "-31vw", top: "10vw" },
      { transform: "rotate(360deg)", left: "32vw", top: "10vw" },
    ],
    { duration: 600, delay: 2600, fill: "forwards", easing: "ease-in" },
  );

  const coverDivAnim = new Animation(
    coverDivKF,
    document.timeline,
  );

  coverDivSpinAnim.play();
  coverDivSlideAnim.play();

  coverDivAnim.play();

};

// 

// function testAddClass() {
//   const firstLi = document.querySelector('#question-div li:nth-child(1)');
//   // firstLi.classList.add("slide-li");
//   slideAllAnswers();
// };

// fn to add class to each li with setTimeout() . call in showFirstQuestion

function slideAllAnswers() {
  const coverDiv = document.getElementById('question-cover');
  const questionDiv = document.getElementById('question-div');

  // use css transition for opacity
  coverDiv.classList.add('fade');// duration set in css .fade
  questionDiv.classList.remove('fade');
  const arrLiElems = document.querySelectorAll('#question-div li');

  let delay = 300;
  arrLiElems.forEach((liElem) => {
    setTimeout(() => {
      liElem.classList.add('slide-li');
    }, delay);

    delay += 600;
  });
};



async function verifyOrCreateUser(event) {
  event.preventDefault();

  const data = {
    username: this.username.value,
    password: this.password.value,
    btnSelected: Game.btnSelectedText,
  };

  const respObj = await fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const resObj = await respObj.json();

  if (Object.hasOwn(resObj, 'username')) {
    insertText('Success - Login created');
    // fns to render questions and anim prior
    animContentChange();
  } else if (resObj.msg == 'uv-si') {
    insertText('Success - You are Signed In');
    // fns to render questions and anim prior
    animContentChange();
  } else {
    const resString = resObj.msg;
    switch (resString) {
      case 'pe-su':
        insertText('Password taken. Please enter another password');
        break;
      case 'ue-su':
        insertText('Username taken. Please enter another username');
        break;
      case 'be-su':
        insertText('Password and username taken. Please enter another password and username');
        break;
      case 'np-si':
        insertText('Password not found. Please re-enter your password');
        break;
      case 'nu-si':
        insertText('Username not found. Please re-enter your username');
        break;
      case 'np-nu-si':
        insertText('Could not find your username or password. Please re-enter');
        break;
      default:
        insertText('Something went wrong');
    }
  }
  
  // Game.btnSelectedText = "";// reset after success sign (in, up)

};

const Game = {
  init: async function() {
    try {
      this.questionIndex = 0;
      this.btnSelectedText = "";
      this.questions = await this.requestQuestions();
      this.bindEvents();
      this.createTemplateFn();
      this.renderQuestion();

      // animCoverDiv();
      // slideAllAnswers();
      // testAddClass();
    }
    catch (err) {
      console.error(err);
    }
  },

  createTemplateFn() {
    const mainScript = document.getElementById('main-template');
    this.templateFn = Handlebars.compile(mainScript.innerHTML);
  },

  renderQuestion() {
    // this.clearMessages();
    const questDiv = document.getElementById('question-div');
    let currentObj = this.questions[this.questionIndex];

    let incorrectArr = currentObj.incorrectAnswers;
    
    let newIndex = Math.floor(Math.random() * 4);
    incorrectArr.splice(newIndex, 0, currentObj.correctAnswer);
    currentObj.fourGuesses = incorrectArr;
    questDiv.innerHTML = this.templateFn(currentObj);
    
    this.currentCorrect = currentObj.correctAnswer;
    this.questionIndex += 1;

    // this.highlightGuesses();
  },
  // =====================================================

  async requestQuestions() {
    const url ="https://the-trivia-api.com/api/questions?limit=50&region=US&difficulty=medium";
    try {
      const response = await fetch(url);
      const questionsArray = await response.json();
      return questionsArray;
    } catch (err) {
      console.log(err);
    }
  },

  bindEvents() {
    const signUpButton = document.getElementById('sign-up');
    signUpButton.addEventListener('click', this.showForm.bind(this), { once: true });// animations

    const signInButton = document.getElementById('sign-in');
    signInButton.addEventListener('click', this.showForm.bind(this), { once: true });

    // in showForm(), 'this' is the sign-in btn. (EL attached to btn, changes context of this)
    // Want to assign this.btnSelectedText 
    // as a property of the Game {}, is why .bind() is invoked on the showForm method.

    const form = document.getElementById('form');
    form.addEventListener('submit', verifyOrCreateUser);
    form.addEventListener('submit', this.flipForm);

    const msgDiv = document.getElementById('message-div');
    msgDiv.addEventListener('click', this.hideMsgDiv);


  },

  clearInputText() {
    this.value = "";
  },

  flipForm(event) {// <div> 'flips'
    event.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;

    const msgDiv = document.getElementById('message-div');

    const flipDiv = document.getElementById('flip-div');

    const formFlipKF = new KeyframeEffect(
      flipDiv,
      [
       { transform: "rotateY(0)" },
       { transform: "rotateY(90deg)" },

      ],
      { duration: 300, easing: "linear", fill: "forwards" },
    );

    const formFlipAnim = new Animation(
      formFlipKF,
      document.timeline,
    );

    const revealMsgDiv = new KeyframeEffect(
      msgDiv,
      [
        { transform: "rotateY(270deg)" },
        { transform: "rotateY(360deg)" },
      ],
      { duration: 300, delay: 300, easing: "linear", fill: "forwards" },
    );

    const revealMsgDivAnim = new Animation(
      revealMsgDiv,
      document.timeline,
    );

    formFlipAnim.play();
    revealMsgDivAnim.play();
    setTimeout(() => {
      flipDiv.style.zIndex = "10";
    }, 302);
    setTimeout(() => {
      msgDiv.style.zIndex = "50";
    }, 302);
    // change z index div (form flipped)
  },

  hideMsgDiv() {
    //const form = document.getElementById('form');
    const flipDiv = document.getElementById('flip-div');

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = false;

    const msgDiv = this;

    const hideMsgDivKF = new KeyframeEffect(
      this,
      [
        { transform: "rotateY(0deg)" },// (360deg)
        { transform: "rotateY(-90deg)" }, 
      ],
      {duration: 300, easing: "linear", fill: "forwards" },
    );

    const hideMsgDivAnim = new Animation(
      hideMsgDivKF,
      document.timeline,
    );

    const revealFormKF = new KeyframeEffect(
      flipDiv,
      [
        { transform: "rotateY(90deg)" },
        { transform: "rotateY(0deg)" },
      ],
      {duration: 300, delay: 300, easing: "linear", fill: "forwards" },
    );

    const revealFormAnim = new Animation(
      revealFormKF,
      document.timeline,
    );

    hideMsgDivAnim.play();
    revealFormAnim.play();
    setTimeout(() => {
      msgDiv.style.zIndex = "10";
    }, 302);

    setTimeout(() => {
      flipDiv.style.zIndex = "50";
    }, 302);
  },

  // animations based on user-based events

  showForm(event) {
    this.btnSelectedText = event.target.id;// context 'this' is still Game {}
    // because of .bind() call (arg of .addEventListener)

    const signInButton = document.getElementById('sign-in');
    const signUpButton = document.getElementById('sign-up');
    const form = document.getElementById('form');
    const nameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    // const submitBtn = document.getElementById('submitBtn');

    nameInput.addEventListener('focusin', this.clearInputText);
    passwordInput.addEventListener('focusin', this.clearInputText);

    // ============= ANIMATION ====================
    const signUpSpinUpKF = new KeyframeEffect(
      signUpButton,
      [
       { top: "39.4vw", left: "37.25vw", transform: "rotate(0)" },
       { top: "28vw", left: "44.6vw", transform: "rotate(360deg)" },

      ],
      { duration: 600, delay: 20, easing: "ease-in-out", fill: "forwards" },
    );

    const signUpSpinUpAnim = new Animation(
      signUpSpinUpKF,
      document.timeline,
    );

    const signUpFallAwayKF = new KeyframeEffect(
      signUpButton,
      [
       { top: "39.4vw", left: "37.25vw", transform: "rotate(0)" },
       { top: "55vw", left: "20.6vw", transform: "rotate(-90deg)" },

      ],
      { duration: 600, easing: "ease-in-out", fill: "forwards" },
    );

    const signUpFallAwayAnim = new Animation(
      signUpFallAwayKF,
      document.timeline,
    );

    // ===============================================================

    const signInSpinUpKF = new KeyframeEffect(
      signInButton,
      [
        { top: "39.4vw", left: "56vw", transform: "rotate(0)" },
        { top: "28vw", left: "44.6vw", transform: "rotate(-360deg)" },
      ],
      { duration: 600, delay: 20, easing: "ease-in", fill: "forwards" }
    );

    const signInSpinUpAnim = new Animation(
      signInSpinUpKF,
      document.timeline,
    );


    const signInFallAwayKF = new KeyframeEffect(
      signInButton,
      [
        { top: "39.4vw", left: "56vw", transform: "rotate(0)" },
        { top: "60vw", left: "75vw", transform: "rotate(90deg)" },
      ],
      { duration: 500, easing: "ease-in", fill: "forwards", delay: 300 }
    );

    const signInFallAwayAnim = new Animation(
      signInFallAwayKF,
      document.timeline,
    );

    // ================================================================

    const signUpSqueeze = new KeyframeEffect(
      signUpButton,
      [ 
        { transform: "scale(1,1)", boxShadow: "0 0 0 0" },
        { transform: "scale(5, 2)", boxShadow: "0 0 1.5vw 1.5vw red" },
    ],
    { duration: 300, delay: 630, }
    );

    const signUpSqueezeAnim = new Animation(
      signUpSqueeze,
      document.timeline,
    );

    const signInSqueezeKF = new KeyframeEffect(
      signInButton,
      [ 
        { transform: "scale(1,1)", boxShadow: "0 0 0 0" },
        { transform: "scale(5, 2)", boxShadow: "0 0 1.5vw 1.5vw red" },
    ],
    { duration: 300, delay: 630, }
    );

    const signInSqueezeAnim = new Animation(
      signInSqueezeKF,
      document.timeline,
    );
// ===============================================
    const signUpExitKF = new KeyframeEffect(
      signUpButton,
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      { duration: 100, delay: 930, fill: "forwards", }
    );

    const signUpExitAnim = new Animation(
      signUpExitKF,
      document.timeline,
    );

    const signInExitKF = new KeyframeEffect(
      signInButton,
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      { duration: 100, delay: 930, fill: "forwards", }
    );

    const signInExitAnim = new Animation(
      signInExitKF,
      document.timeline,
    );

    // ===========================================

    const formKeyFrames = new KeyframeEffect(
      form,
      [
        { opacity: 0 },
        { opacity: 1 },
      ],
      { duration: 100, delay: 930, fill: "forwards"},
    );

    const formAnimation = new Animation(
      formKeyFrames,
      document.timeline,
    );

    const nameInputKeyFrames = new KeyframeEffect(
      nameInput,
      [
        { color: "rgba(118, 181, 206, 0.7)" },
        { color: "rgba(118, 181, 206, 0.1)" },
      ],
      {duration: 600, delay: 1020, iterations: Infinity },
    );

    const nameAnimation = new Animation(
      nameInputKeyFrames,
      document.timeline,
    );

    if (this.btnSelectedText == 'sign-up') {
      signUpSpinUpAnim.play();
      signInFallAwayAnim.play();
      signUpSqueezeAnim.play();
      signUpExitAnim.play();
      formAnimation.play();
    } else if (this.btnSelectedText == 'sign-in') {
      signInSpinUpAnim.play();
      signUpFallAwayAnim.play();
      signInSqueezeAnim.play();
      signInExitAnim.play();
      formAnimation.play();
    }
    // nameAnimation.play();
    // formAnimation.play();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('runnin .js file !');
  Game.init();
});