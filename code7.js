gdjs.Win_32ScreenCode = {};
gdjs.Win_32ScreenCode.localVariables = [];
gdjs.Win_32ScreenCode.idToCallbackMap = new Map();
gdjs.Win_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Win_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Win_32ScreenCode.GDBackgroundObjects3= [];
gdjs.Win_32ScreenCode.GDBackgroundObjects4= [];
gdjs.Win_32ScreenCode.GDBackgroundObjects5= [];
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1= [];
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2= [];
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3= [];
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4= [];
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5= [];
gdjs.Win_32ScreenCode.GDPaycheckObjects1= [];
gdjs.Win_32ScreenCode.GDPaycheckObjects2= [];
gdjs.Win_32ScreenCode.GDPaycheckObjects3= [];
gdjs.Win_32ScreenCode.GDPaycheckObjects4= [];
gdjs.Win_32ScreenCode.GDPaycheckObjects5= [];
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1= [];
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2= [];
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3= [];
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4= [];
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5= [];
gdjs.Win_32ScreenCode.GDFadeOutObjects1= [];
gdjs.Win_32ScreenCode.GDFadeOutObjects2= [];
gdjs.Win_32ScreenCode.GDFadeOutObjects3= [];
gdjs.Win_32ScreenCode.GDFadeOutObjects4= [];
gdjs.Win_32ScreenCode.GDFadeOutObjects5= [];


gdjs.Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18333148);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("BoydSave", "Star1", 1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("BoydSave", "Progress", 5);
}
}

}


};gdjs.Win_32ScreenCode.asyncCallback18335572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs.Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Win_32ScreenCode.idToCallbackMap.set(18335572, gdjs.Win_32ScreenCode.asyncCallback18335572);
gdjs.Win_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Win_32ScreenCode.asyncCallback18335572(runtimeScene, asyncObjectsList)), 18335572, asyncObjectsList);
}
}

}


};gdjs.Win_32ScreenCode.asyncCallback18336980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5[i].getBehavior("Opacity").setOpacity(gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5[i].getBehavior("Opacity").getOpacity() + (2));
}
}
gdjs.Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Win_32ScreenCode.idToCallbackMap.set(18336980, gdjs.Win_32ScreenCode.asyncCallback18336980);
gdjs.Win_32ScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Win_32ScreenCode.asyncCallback18336980(runtimeScene, asyncObjectsList)), 18336980, asyncObjectsList);
}
}

}


};gdjs.Win_32ScreenCode.asyncCallback18336908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Good_job___The_End"), gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4[i].getBehavior("Opacity").setOpacity(gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Win_32ScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Win_32ScreenCode.idToCallbackMap.set(18336908, gdjs.Win_32ScreenCode.asyncCallback18336908);
gdjs.Win_32ScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Win_32ScreenCode.asyncCallback18336908(runtimeScene, asyncObjectsList)), 18336908, asyncObjectsList);
}
}

}


};gdjs.Win_32ScreenCode.asyncCallback18336356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs.Win_32ScreenCode.GDPaycheckObjects3);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDPaycheckObjects3.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").setOpacity(gdjs.Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Win_32ScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Win_32ScreenCode.idToCallbackMap.set(18336356, gdjs.Win_32ScreenCode.asyncCallback18336356);
gdjs.Win_32ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Win_32ScreenCode.asyncCallback18336356(runtimeScene, asyncObjectsList)), 18336356, asyncObjectsList);
}
}

}


};gdjs.Win_32ScreenCode.asyncCallback18340868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs.Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Win_32ScreenCode.idToCallbackMap.set(18340868, gdjs.Win_32ScreenCode.asyncCallback18340868);
gdjs.Win_32ScreenCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Win_32ScreenCode.asyncCallback18340868(runtimeScene, asyncObjectsList)), 18340868, asyncObjectsList);
}
}

}


};gdjs.Win_32ScreenCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18340796);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Win_32ScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Win_32ScreenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18334340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Win_32ScreenCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs.Win_32ScreenCode.GDFadeOutObjects2);
gdjs.copyArray(runtimeScene.getObjects("Good_job___The_End"), gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs.Win_32ScreenCode.GDPaycheckObjects2);
gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDFadeOutObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDFadeOutObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDPaycheckObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDPaycheckObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.Win_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Win_32ScreenCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Win_32ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length;i<l;++i) {
    if ( gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[k] = gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i];
        ++k;
    }
}
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18338284);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs.Win_32ScreenCode.GDFadeOutObjects1);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDFadeOutObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Win_32ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Win_32ScreenCode.eventsList8 = function(runtimeScene) {

{


gdjs.Win_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs.Win_32ScreenCode.eventsList7(runtimeScene);
}


};

gdjs.Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects5.length = 0;

gdjs.Win_32ScreenCode.eventsList8(runtimeScene);
gdjs.Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length = 0;
gdjs.Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs.Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4.length = 0;
gdjs.Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs.Win_32ScreenCode.GDFadeOutObjects5.length = 0;


return;

}

gdjs['Win_32ScreenCode'] = gdjs.Win_32ScreenCode;
