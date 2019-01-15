var is_TM_in = false;
var is_RUN_in = false;
var is_TM_editable = false;

//AI module
Blockly.Blocks.faceRecognition = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("face recognition");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.faceRecognition = function(a) {
  var code = "";  
  return code;
};

Blockly.Blocks.playMusic = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('https://www.clipartmax.com/png/middle/100-1005136_music-icon-ios-7-music-icon.png',15,15))
        .appendField("play music");
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.playMusic = function(a) {
  var code = "";  
  return code;
};

Blockly.Blocks['stopAllSounds']={
    init:function(){
        this.appendField('stop all sounds').appendDummyInput();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setToolTip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['stopAllSounds']=function(e){
    var code="";
    return code;
};



Blockly.Blocks.imageRecognition = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("image recognition");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Python.imageRecognition = function(block) {
   var code = "  "; 
   return code;
};



Blockly.Blocks.featureExtractor = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("feature extractor");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.featureExtractor = function(block) {
  var code = "  ";
  return code;
  };




Blockly.Blocks.lstmGenerator = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("LSTM generator");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.lstmGenerator = function(block) {
  var code = "  ";
  return code;
};


Blockly.Blocks.word2vec = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("word2vec");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.word2vec = function(block) {
  var code = "  ";
  return code;
};

Blockly.Blocks.cnn = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("CNN");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.cnn = function(block) {
  var code = "  ";
  return code;
};

Blockly.Blocks.gan = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("GAN");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.gan = function(block) {
  var code = "  ";
  return code;
};


Blockly.Blocks.autoencoders = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("autoencoders");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.autoencoders = function(block) {
  var code = "  ";
  return code;
};
  

Blockly.Blocks.rnn = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("RNN");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.rnn = function(block) {
  var code = "  ";
  return code;
};
  

Blockly.Blocks.svm = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("SVM");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python.svm = function(block) {
  var code = "  ";
  return code;
};
  

Blockly.Blocks.dataWebcam = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('https://www.androidpolice.com/wp-content/uploads/2014/07/nexusae0_cc.png',15,15,'*'))
        .appendField("take photo from webcam continuously");
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true,null);
  }
};

Blockly.Python.dataWebcam = function(a) {
  var code = "  ";  
  return code;
};


Blockly.Blocks['handwrittenDigit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("handwritten digit recognition")
    this.setNextStatement(true, null);
    this.setColour('#B72E2A');
    this.setPreviousStatement(true,null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['handwrittenDigit'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.Blocks['humanFace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("face recognition");
    this.setNextStatement(true, null);
    this.setColour('#B72E2A');
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
  }
};

Blockly.Python['humanFace'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['trainType'] = {
    init: function(){
        this.appendDummyInput()
            .appendField("train type:")
            .appendField(new Blockly.FieldDropdown([
                ['train green', 'ITEM1'],
                ['train purple', 'ITEM2'],
                ['train pink', 'ITEM3']
            ]),'train_type');
        this.setColour(280);
    }
};

Blockly.Python['trainType'] = function(block){
    var code='...';
    return code;
};

////*********Events block *********

Blockly.Blocks['eventBtnClick'] ={
    init:function(){
        this.appendDummyInput()
            .appendField("click button")
            .appendField(new Blockly.FieldDropdown([
                ['train green', 'ITEM1'],
                ['train purple', 'ITEM2'],
                ['train pink', 'ITEM3']
            ]),'train_type');
        this.setColour(330);
        this.setOutput(true, null);
        // this.setNextStatement(true, 'build classifier');
}
};

Blockly.Blocks.getClass = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["get classification green","0"],
                ["get classification purple","1"],
                ["get classification pink","2"]]), "classification");
        this.setOutput(true, null);
        this.setColour('#B72E2A');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python.getClass = function(a) {
    var dropdown_class = block.getFieldValue('class');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.buildImageClassifier = {
    init: function() {
        this.setPreviousStatement(true, null);
        var colour = new Blockly.FieldColour('#65A457');
        Blockly.FieldColour.COLOURS=['#65A457','#AC73D5','#EB66B0'];
        Blockly.FieldColour.COLUMNS=1;
        this.appendDummyInput()
            .appendField("build image classifier")
            .appendField(colour, 'colour');
        // this.setNextStatement(false, null);
        this.setColour('#B72E2A');
        // this.setOutput(true, 'classifier');
        // this.setTooltip("");
        // this.setHelpUrl("");

        // this.appendField(colour, 'Colour picker');
    }
};

Blockly.Python.buildImageClassifier = function(block) {
    var code = "  ";
    return code;
};

Blockly.Blocks.resetCorrespondingClassifier = {
    init:function(){
        this.setPreviousStatement(true, null);
        this.appendDummyInput()
            .appendField('reset corresponding classifier');
        this.setColour('#B72E2A');
        this.setNextStatement(true,null);
    }
};

Blockly.Blocks.controlRobot = {
    init: function() {
        this.appendDummyInput()
            .appendField("control robot")
            .appendField(new Blockly.FieldDropdown([
                // [{"src":"media/output0.jpg","width":30,"height":30,"alt":"0"},"0"],
                // [{"src":"media/output1.jpg","width":30,"height":30,"alt":"1"},"1"],
                [{"src":"media/output2.jpg","width":30,"height":30,"alt":"2"},"2"]]), "class");
        this.setPreviousStatement(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setNextStatement(true,null);
    }
};

Blockly.Python.controlRobot = function(block) {
    var dropdown_class = block.getFieldValue('class');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks.disconnectControlRobot = {
    init:function(){
        this.appendDummyInput()
            .appendField("disconnect the control of the robot");
        this.setColour(100);
        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);
    }
};

Blockly.Blocks.whenRunBtnClick = {
    init:function(){
        this.appendDummyInput()
            .appendField('when')
            .appendField(new Blockly.FieldLabel('RUN','#00ff00'))
            .appendField(new Blockly.FieldImage('https://vignette.wikia.nocookie.net/joke-battles/images/0/0e/Green.jpg/revision/latest?cb=20170111231844',15,15))
            .appendField(" clicked");
        this.setColour(330);
        this.setNextStatement(true,null);
        this.setOnChange(function(event){
            if(this.workspace.isDragging())
            {
                is_RUN_in=true;
            }
        })
    }
};

Blockly.Blocks.whenControlRobotBtnClick = {
    init:function(){
        this.appendDummyInput()
            .appendField('when CONTROL ROBOT clicked')
        this.setColour(330);
        this.setNextStatement(true,null);
        this.setPreviousStatement(true,null);
    }
};

Blockly.Blocks.whenDisconnectTheControlBtnClick = {
    init:function(){
        this.appendDummyInput()
            .appendField("when DISCONNECT THE CONTROL clicked");
        this.setColour(330);
        this.setNextStatement(true,null);
        this.setPreviousStatement(true,null);
    }
};

Blockly.Blocks.whenBtnClicked = {
    init:function(){
        this.appendDummyInput()
            .appendField('when ')
            .appendField(new Blockly.FieldDropdown([
                ['CONTROL THE ROBOT','btn2'],
                ['DISCONNECT THE CONTROL', 'btn3'],
                ['RESET','btn4']
            ]))
            .appendField(' clicked');
        this.setColour(330);
        this.setNextStatement(true,null);
        this.setPreviousStatement(true, null);
    }
};

Blockly.Blocks.teachableMachine = {
    init:function(){
        var myFieldImage = new Blockly.FieldImage('https://cdn4.iconfinder.com/data/icons/computers-it/48/computer-12-512.png',15,15,'*',true);
        // Blockly.Tooltip.bindMouseEvents(myFieldImage.imageElement_);
        // // myFieldImage.addEventListener('click',()=>{
        // //     console.log('a');
        // // });
        // myFieldImage.imageElement_.addEventListener('click',()=>{console.log('click');});
        this.appendDummyInput()
            // .appendField(myFieldImage)
            .appendField('Teachable Machine');
        this.setColour('#B72E2A');
        this.setPreviousStatement(true,null);
        this.setNextStatement(true,null);
        this.setOnChange(function(event){

            // var dragabbleBlocks = document.querySelectorAll('svg.blocklySvg g.blocklyWorkspace g.blocklyBlockCanvas g.blocklyDraggable');
            //
            // if(dragabbleBlocks.length>0)
            // {
            //         var TM;
            //         dragabbleBlocks.forEach((element,index)=>{
            //             var text=element.querySelector('text');
            //             if(text.innerHTML === 'Teachable&nbsp;Machine')
            //             {
            //                 Blockly.Tooltip.bindMouseEvents(text);
            //                 text.addEventListener('click',function(){
            //                     console.log('text click');
            //                 });
            //                 TM=element;
            //                 console.log('222222');
            //             }
            //         });
            // }
            // if(this.workspace.isDragging())
            // {
            //     is_TM_in=true;
            // }

        })
    }
};

// Blockly.JavaScript.teachableMachine = function(block){
//     is_TM_in = true;
//     console.log(is_TM_in);
//     return is_TM_in;
// };



