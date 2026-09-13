gdjs.Game_32Over_32ScreenCode = {};
gdjs.Game_32Over_32ScreenCode.localVariables = [];
gdjs.Game_32Over_32ScreenCode.idToCallbackMap = new Map();
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects3= [];
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1= [];
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2= [];
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3= [];


gdjs.Game_32Over_32ScreenCode.asyncCallback18422716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs.Game_32Over_32ScreenCode.localVariables.length = 0;
}
gdjs.Game_32Over_32ScreenCode.idToCallbackMap.set(18422716, gdjs.Game_32Over_32ScreenCode.asyncCallback18422716);
gdjs.Game_32Over_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32Over_32ScreenCode.asyncCallback18422716(runtimeScene, asyncObjectsList)), 18422716, asyncObjectsList);
}
}

}


};gdjs.Game_32Over_32ScreenCode.asyncCallback18423972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Game_Over_Text"), gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3);
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3[i].getBehavior("Opacity").setOpacity(gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3[i].getBehavior("Opacity").getOpacity() + (2));
}
}
gdjs.Game_32Over_32ScreenCode.localVariables.length = 0;
}
gdjs.Game_32Over_32ScreenCode.idToCallbackMap.set(18423972, gdjs.Game_32Over_32ScreenCode.asyncCallback18423972);
gdjs.Game_32Over_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32Over_32ScreenCode.asyncCallback18423972(runtimeScene, asyncObjectsList)), 18423972, asyncObjectsList);
}
}

}


};gdjs.Game_32Over_32ScreenCode.asyncCallback18428268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs.Game_32Over_32ScreenCode.localVariables.length = 0;
}
gdjs.Game_32Over_32ScreenCode.idToCallbackMap.set(18428268, gdjs.Game_32Over_32ScreenCode.asyncCallback18428268);
gdjs.Game_32Over_32ScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32Over_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32Over_32ScreenCode.asyncCallback18428268(runtimeScene, asyncObjectsList)), 18428268, asyncObjectsList);
}
}

}


};gdjs.Game_32Over_32ScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18428108);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32Over_32ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32Over_32ScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18422572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Game_Over_Text"), gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2);
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.Game_32Over_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2[i].getBehavior("Opacity").getOpacity() + (2));
}
}

{ //Subevents
gdjs.Game_32Over_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Game_Over_Text"), gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2[k] = gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2[i];
        ++k;
    }
}
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18425396);
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
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_Over_Text"), gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1);
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1[i].getBehavior("Opacity").getOpacity() - (3));
}
}
{for(var i = 0, len = gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1.length ;i < len;++i) {
    gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1[i].getBehavior("Opacity").getOpacity() - (3));
}
}

{ //Subevents
gdjs.Game_32Over_32ScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32Over_32ScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.Game_32Over_32ScreenCode.eventsList4(runtimeScene);
}


};

gdjs.Game_32Over_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3.length = 0;

gdjs.Game_32Over_32ScreenCode.eventsList5(runtimeScene);
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32Over_32ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects1.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects2.length = 0;
gdjs.Game_32Over_32ScreenCode.GDGame_9595Over_9595TextObjects3.length = 0;


return;

}

gdjs['Game_32Over_32ScreenCode'] = gdjs.Game_32Over_32ScreenCode;
