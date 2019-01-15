let knn;
let video;
let isPredicting = false;
let prevIsPredicting = false;
let exampleCounts = new Array(3).fill(0);
let timers = new Array(3);

let predictimer;
let outputSrc;
let updateGifIndex;
let uploadBtn;
let controlRobotBtn;

const msgArray = ['A', 'B', 'C'];
let gifSrcs = ['media/output0.jpg', 'media/output1.jpg', 'media/output2.jpg'];
let outputGif = true;
let outputSound = false;
let is_control_robot = false;
let is_run=false;
// let is_begin = false;
// let resultIndex = 0;

var is_TM_selected = false;
var is_TM_being_edited = false;
var ws = null;

var close_btn = null;
var edit_btn = null;
var run_btn = null;
var stop_btn = null;


//通信部分
// var ws = new WebSocket('ws://192.168.2.230:9001/');
// var ws = new WebSocket('ws://192.168.3.102:9001/');
// var sendMessage = function(msg)
// {
//   ws.send(msg);
// };
// ws.onopen = function()
// {
//   //为onmessage绑定事件，接收消息
//     ws.onmessage = function (event) {
//         console.log(event.data);
//     }
// };
// ws.onclose = function()
// {
//   console.log('websocket已经关闭');
// };
//
// ws.onerror = function()
// {
//   console.log('web socket connect error.');
// };

function modelLoaded() {
  console.log('Model Loaded!')
}
//加载knn分类器，加载声音素材
function preload() {
  // Initialize the KNN method.
  knn = new ml5.KNNImageClassifier(modelLoaded, 3, 1);
}


function setup()
{
  var game_div = document.getElementById('game');
  // game_div.style.visibility = "hidden";
  run_btn=document.getElementById('btnRun');
  run_btn.addEventListener('click',function(e){
      ws = new WebSocket('wss://neo-edu.io/websocket');
      ws.onopen = function()
      {
          //为onmessage绑定事件，接收消息
          ws.onmessage = function (event) {
              console.log(event.data);
          }

      };
      ws.onclose = function()
      {
          console.log('websocket已经关闭');
      };

      ws.onerror = function()
      {
          console.log('web socket connect error.');
      };
      is_run=true;
  });

  edit_btn = document.getElementById('editBtn');
  // edit_btn.classList.add('none');
      edit_btn.addEventListener('click',function(e){
          // modelSelectedControl();
          // console.log('is_TM_selected:'+is_TM_selected);
          if(is_TM_selected)
          {
              game_div.style.display = "block";
              initGame();
              game_div.style.visibility = "visible";
              is_TM_being_edited = true;
          }
      },false);


  // close_btn = document.getElementById('closeBtn');
  //     close_btn.addEventListener('click',function(e){
  //         if(is_TM_being_edited && is_TM_selected)
  //         {
  //             game_div.style.visibility='hidden';
  //             game_div.style.display="block";
  //             // video.close();
  //             is_TM_being_edited=false;
  //             MediaStream.getTracks()[1].stop();
  //         }
  //     },false);

      stop_btn = document.getElementById('stopBtn');
      stop_btn.addEventListener('click', function(e){
          is_run=false;
      },false);

  // console.log(is_run);
  //   createCanvas(280, 300).parent('canvasContainer');
  //   background(0);
  //   video = createCapture(VIDEO);
  //   video.size(227, 227);
  //   video.hide();
  //
  //   uploadBtn = createFileInput(imageUpload);
  //   uploadBtn.id('uploadbtn');
  //   uploadBtn.hide();
};

function draw() {
    modelSelectedControl();
    controlRobotTest();
    if(is_TM_being_edited) {
      background(0);
      push(); // flip video direction so it works like a mirror
      translate(width, 0);
      scale(-1, 1);
      image(video, 0, 0, width, height);
      pop();
  }
  if(is_TM_selected)
  {
      if(!edit_btn.classList.contains('editable'))
      {
          edit_btn.classList.remove('none');
          edit_btn.classList.add('editable');
      }
      // if(!close_btn.classList.contains('valid'))
      // {
      //     close_btn.classList.remove('none');
      //     close_btn.classList.add('valid');
      // }

  }
  else
  {
      if(!edit_btn.classList.contains('none'))
      {
          edit_btn.classList.remove('editable');
          edit_btn.classList.add('none');
      }
      // if(!close_btn.classList.contains('none'))
      // {
      //     close_btn.classList.remove('valid');
      //     close_btn.classList.add('none');
      // }
  }
}

function controlRobotTest()
{
    let g_blocklyBlockCanvas = document.querySelector('svg.blocklySvg g.blocklyWorkspace g.blocklyBlockCanvas');
    let g_blocklyDraggables = g_blocklyBlockCanvas.querySelectorAll('g.blocklyDraggable');
    // console.log(g_blocklyDraggables.length);
    if(g_blocklyDraggables.length > 0)
    {
        // console.log('draggables');
        for(var i=0;i<g_blocklyDraggables.length;i++)
        {
            let block = g_blocklyDraggables[i];  // when RUN
            let block_texts = block.querySelectorAll('text');
            if(block_texts.length>1 && (block_texts[0].innerHTML === 'when' && block_texts[1].innerHTML === 'RUN'))
            {
                let block_1 = block.querySelectorAll('g.blocklyDraggable'); // detect if include take photo
                if(block_1.length>0)
                {
                    let block_1_text = block_1[0].querySelector('text');
                    if(block_1_text.innerHTML === 'take&nbsp;photo&nbsp;from&nbsp;webcam&nbsp;continuously')
                    {
                        // console.log('take photo connect');
                        let block_2 = block_1[0].querySelectorAll('g.blocklyDraggable');
                        if(block_2.length>0)
                        {
                            let block_2_text = block_2[0].querySelector('text');
                            if(block_2_text.innerHTML === 'Teachable&nbsp;Machine')
                            {
                                let block_3 = block_2[0].querySelectorAll('g.blocklyDraggable');
                                if(block_3.length>0)
                                {
                                    let block_3_text = block_3[0].querySelector('text');
                                    if(block_3_text.innerHTML === 'control&nbsp;robot')
                                    {
                                        is_control_robot = true;
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    is_control_robot=false;
}

function modelSelectedControl()
{
    let blockSelected = document.querySelector('svg.blocklySvg g.blocklyWorkspace g.blocklyBlockCanvas g.blocklySelected');
    // console.log(blockSelected);
    if(blockSelected !== null)
    {
        var block_text = blockSelected.querySelector('text');
        if(block_text.innerHTML === 'Teachable&nbsp;Machine')
        {
            // console.log('model selected control');
            is_TM_selected = true;
        }
        else
        {
            is_TM_selected = false;
        }
    }
    else
    {
        is_TM_selected = false;
    }
}

function initGame()
{
    createCanvas(280, 300).parent('canvasContainer');
    background(0);
    video = createCapture(VIDEO);
    video.size(227, 227);
    video.hide();

    uploadBtn = createFileInput(imageUpload);
    uploadBtn.id('uploadbtn');
    uploadBtn.hide();

    // Train buttons
    msgArray.forEach((id, index) => {
        let button = select('#button' + id);
        button.mousePressed(() => {
                if (timers[index]) clearInterval(timers[index]);
                timers[index] = setInterval(() => { train(index); }, 100);
        });

        button.mouseReleased(() => {
                if (timers[index]) {
                    clearInterval(timers[index]);
                    updateExampleCounts();
                }
        });
    });

    // Reset buttons
    msgArray.forEach((id, index) => {
        let button = select('#reset' + id);
        button.mousePressed(() => {
                clearClass(index);
                updateExampleCounts();
        });
    });

    // Initiate the behavior of GIF/Sound output toggle controls
    let labels = selectAll("label");
    labels.forEach( (e) => {

        e.mouseClicked(toggleOutput);
        // Same behavior also for each radio input tied with the label; otherwise behavior tends to break after first toggle
        e.elt.control.onclick=toggleOutput; } );

}
//训练分类器
// Train the Classifier on a frame from the video.
function train(category) {
  // console.log(video.elt);
  knn.addImage(video.elt, category);
}

//视频的预测
// Predict the current frame.
function predict() {
  knn.predict(video.elt, gotResults);
}

//获得预测结果,获得返回值
// Show the results
function gotResults(results) {
  if (results.classIndex < 0) return;
  updateConfidence(results.confidences);
  updateGif(results);
 // updateSound(results);
    predictimer = setTimeout(() => predict(), 50);
    if (is_run && is_control_robot)
  {
      if(ws!=null)
      {
          ws.send('' + (results.classIndex + 1));
      }
  }
  return results.classIndex;
}


//更新置信度
function updateConfidence(confidences) {
  for (let j = 0; j < msgArray.length; j++) {
    select('#progress-text' + msgArray[j]).html( confidences[j] * 100 + ' %');
    select('#progress-bar' + msgArray[j]).style('width', confidences[j] * 100 + '%');
  }
}

//清除一类中的内容
// Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}

//更新gif图片
function updateGif(results) {
  // Display different gifs
  if (results.classIndex < 0) return;
  if (outputSrc !== gifSrcs[results.classIndex]) {
    outputSrc = gifSrcs[results.classIndex];
    select('#output').elt.src = outputSrc;
  }
}

//更新计数
function updateExampleCounts() {
  let counts = knn.getClassExampleCount();
  exampleCounts = counts.slice(0, 3);
  exampleCounts.forEach((count, index) => {
    select('#example' + msgArray[index]).html(count + ' CASES');
  });

  updateIsPredicting();
}

//更新是否预测
function updateIsPredicting() {
  prevIsPredicting = isPredicting;
  isPredicting = exampleCounts.some(e => e > 0);
  if (prevIsPredicting !== isPredicting) {
    if (isPredicting) {
      predict();
    } else {
      clearTimeout(predictimer);
      resetResult();
    }
  }
}

function resetResult() {
  select('#output').elt.src = 'default.png';
  soundfiles.forEach( (s) => s.setVolume(0, 0.2) );
  msgArray.forEach((id, index) => {
    select('#sound' + id).removeClass("playing");
  });
  updateConfidence(exampleCounts);
}

function uploadGif(index) {
  updateGifIndex = index;
  uploadBtn.elt.click();
}

function imageUpload(file) {
  gifSrcs[updateGifIndex] = file.data;
  select('#img' + msgArray[updateGifIndex]).elt.src = file.data;
  select('#output').elt.src = file.data;
}


function toggleOutput() {
  let radio, gifDisplay, soundDisplay;
  if (this.tagName == "LABEL") radio = this.control; else radio = this;
  if (radio.id === "option-gif") {
    gifDisplay = "block";
    soundDisplay = "none";
    outputGif = true;
    outputSound = false;
  } else {
    gifDisplay = "none";
    soundDisplay = "block";        
    outputGif = false;
    outputSound = true;
  }
  select("#gif-output").style("display", gifDisplay);
  select("#sound-output").style("display", soundDisplay);
}

// tag:
// 0: control the robot
// 1: disconnect the control
// function updateControlRobotBtnState(tag)
// {
//   if(is_control_robot) //0代表让按钮回到初始化状态
//   {
//       controlRobotBtn.innerHTML = 'DISCONNECT THE CONTROL';
//       if(controlRobotBtn.classList.contains('control_robot_btn'))
//       {
//           controlRobotBtn.classList.remove('control_robot_btn');
//       }
//       if(!controlRobotBtn.classList.contains('cancel_control_robot_btn'))
//       {
//           controlRobotBtn.classList.add('cancel_control_robot_btn');
//       }
//   }
//   else
//   {
//       controlRobotBtn.innerHTML = 'CONTROL THE ROBOT';
//       if(controlRobotBtn.classList.contains('cancel_control_robot_btn'))
//       {
//           controlRobotBtn.classList.remove('cancel_control_robot_btn');
//       }
//       if(!controlRobotBtn.classList.contains('control_robot_btn'))
//       {
//           controlRobotBtn.classList.add('control_robot_btn');
//       }
//   }
// }