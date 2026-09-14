gdjs.Custom_32Night_32Win_32ScreenCode = {};
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables = [];
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap = new Map();
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects3= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects4= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects5= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects1= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects4= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects5= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects3= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects4= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects5= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects1= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects3= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4= [];
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects5= [];


gdjs.Custom_32Night_32Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18479324);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 20);
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("BoydSave", "Star3", 1);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18481284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap.set(18481284, gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18481284);
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18481284(runtimeScene, asyncObjectsList)), 18481284, asyncObjectsList);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap.set(18482564, gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482564);
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482564(runtimeScene, asyncObjectsList)), 18482564, asyncObjectsList);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18483332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("The_End"), gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4);
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4[i].getBehavior("Opacity").setOpacity(gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap.set(18483332, gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18483332);
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18483332(runtimeScene, asyncObjectsList)), 18483332, asyncObjectsList);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3);
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").setOpacity(gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap.set(18482732, gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482732);
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18482732(runtimeScene, asyncObjectsList)), 18482732, asyncObjectsList);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18486956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs.Custom_32Night_32Win_32ScreenCode.localVariables.length = 0;
}
gdjs.Custom_32Night_32Win_32ScreenCode.idToCallbackMap.set(18486956, gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18486956);
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Custom_32Night_32Win_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Custom_32Night_32Win_32ScreenCode.asyncCallback18486956(runtimeScene, asyncObjectsList)), 18486956, asyncObjectsList);
}
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18486884);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18481068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paycheck"), gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2);
gdjs.copyArray(runtimeScene.getObjects("The_End"), gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2);
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("The_End"), gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2.length;i<l;++i) {
    if ( gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2[k] = gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2[i];
        ++k;
    }
}
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18484300);
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
gdjs.copyArray(runtimeScene.getObjects("FadeOut"), gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1);
{for(var i = 0, len = gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length ;i < len;++i) {
    gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Custom_32Night_32Win_32ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Custom_32Night_32Win_32ScreenCode.eventsList8 = function(runtimeScene) {

{


gdjs.Custom_32Night_32Win_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs.Custom_32Night_32Win_32ScreenCode.eventsList7(runtimeScene);
}


};

gdjs.Custom_32Night_32Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects5.length = 0;

gdjs.Custom_32Night_32Win_32ScreenCode.eventsList8(runtimeScene);
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDBackgroundObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDPaycheckObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDFadeOutObjects5.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects1.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects2.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects3.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects4.length = 0;
gdjs.Custom_32Night_32Win_32ScreenCode.GDThe_9595EndObjects5.length = 0;


return;

}

gdjs['Custom_32Night_32Win_32ScreenCode'] = gdjs.Custom_32Night_32Win_32ScreenCode;
