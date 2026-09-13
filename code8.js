gdjs._54th_32Night_32Win_32ScreenCode = {};
gdjs._54th_32Night_32Win_32ScreenCode.localVariables = [];
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap = new Map();
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects1= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects3= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects4= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects5= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects1= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects4= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects5= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects3= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects4= [];
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects5= [];


gdjs._54th_32Night_32Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18362844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("BoydSave", "Star2", 1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("BoydSave", "Progress", 6);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18365268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs._54th_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap.set(18365268, gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18365268);
gdjs._54th_32Night_32Win_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18365268(runtimeScene, asyncObjectsList)), 18365268, asyncObjectsList);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5[i].getBehavior("Opacity").setOpacity(gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5[i].getBehavior("Opacity").getOpacity() + (2));
}
}
gdjs._54th_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap.set(18366676, gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366676);
gdjs._54th_32Night_32Win_32ScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366676(runtimeScene, asyncObjectsList)), 18366676, asyncObjectsList);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Good_job___The_End"), gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4[i].getBehavior("Opacity").setOpacity(gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._54th_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap.set(18366604, gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366604);
gdjs._54th_32Night_32Win_32ScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366604(runtimeScene, asyncObjectsList)), 18366604, asyncObjectsList);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").setOpacity(gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._54th_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap.set(18366052, gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366052);
gdjs._54th_32Night_32Win_32ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18366052(runtimeScene, asyncObjectsList)), 18366052, asyncObjectsList);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18370564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs._54th_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs._54th_32Night_32Win_32ScreenCode.idToCallbackMap.set(18370564, gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18370564);
gdjs._54th_32Night_32Win_32ScreenCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._54th_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._54th_32Night_32Win_32ScreenCode.asyncCallback18370564(runtimeScene, asyncObjectsList)), 18370564, asyncObjectsList);
}
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18370492);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18364036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2);
gdjs.copyArray(runtimeScene.getObjects("Good_job___The_End"), gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2);
gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("See_you_next_week"), gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length;i<l;++i) {
    if ( gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[k] = gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2[i];
        ++k;
    }
}
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18367980);
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
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1);
{for(var i = 0, len = gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length ;i < len;++i) {
    gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").setOpacity(gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs._54th_32Night_32Win_32ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs._54th_32Night_32Win_32ScreenCode.eventsList8 = function(runtimeScene) {

{


gdjs._54th_32Night_32Win_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs._54th_32Night_32Win_32ScreenCode.eventsList7(runtimeScene);
}


};

gdjs._54th_32Night_32Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects5.length = 0;

gdjs._54th_32Night_32Win_32ScreenCode.eventsList8(runtimeScene);
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDGood_9595job_9595_9595_9595The_9595EndObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDSee_9595you_9595next_9595weekObjects5.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs._54th_32Night_32Win_32ScreenCode.GDFadeOutObjects5.length = 0;


return;

}

gdjs['_54th_32Night_32Win_32ScreenCode'] = gdjs._54th_32Night_32Win_32ScreenCode;
