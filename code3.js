gdjs.NewspaperCode = {};
gdjs.NewspaperCode.localVariables = [];
gdjs.NewspaperCode.idToCallbackMap = new Map();
gdjs.NewspaperCode.GDNewspaperObjects1= [];
gdjs.NewspaperCode.GDNewspaperObjects2= [];
gdjs.NewspaperCode.GDNewspaperObjects3= [];
gdjs.NewspaperCode.GDNewspaperObjects4= [];
gdjs.NewspaperCode.GDNewspaperObjects5= [];


gdjs.NewspaperCode.asyncCallback17429692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
gdjs.NewspaperCode.localVariables.length = 0;
}
gdjs.NewspaperCode.idToCallbackMap.set(17429692, gdjs.NewspaperCode.asyncCallback17429692);
gdjs.NewspaperCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.NewspaperCode.asyncCallback17429692(runtimeScene, asyncObjectsList)), 17429692, asyncObjectsList);
}
}

}


};gdjs.NewspaperCode.asyncCallback17429468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}

{ //Subevents
gdjs.NewspaperCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.NewspaperCode.localVariables.length = 0;
}
gdjs.NewspaperCode.idToCallbackMap.set(17429468, gdjs.NewspaperCode.asyncCallback17429468);
gdjs.NewspaperCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.NewspaperCode.asyncCallback17429468(runtimeScene, asyncObjectsList)), 17429468, asyncObjectsList);
}
}

}


};gdjs.NewspaperCode.asyncCallback17429076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}

{ //Subevents
gdjs.NewspaperCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.NewspaperCode.localVariables.length = 0;
}
gdjs.NewspaperCode.idToCallbackMap.set(17429076, gdjs.NewspaperCode.asyncCallback17429076);
gdjs.NewspaperCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NewspaperCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NewspaperCode.asyncCallback17429076(runtimeScene, asyncObjectsList)), 17429076, asyncObjectsList);
}
}

}


};gdjs.NewspaperCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17428908);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Newspaper"), gdjs.NewspaperCode.GDNewspaperObjects2);
{for(var i = 0, len = gdjs.NewspaperCode.GDNewspaperObjects2.length ;i < len;++i) {
    gdjs.NewspaperCode.GDNewspaperObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.NewspaperCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Newspaper"), gdjs.NewspaperCode.GDNewspaperObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(0.00025);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}
{for(var i = 0, len = gdjs.NewspaperCode.GDNewspaperObjects2.length ;i < len;++i) {
    gdjs.NewspaperCode.GDNewspaperObjects2[i].rotate(0.25, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Newspaper"), gdjs.NewspaperCode.GDNewspaperObjects2);
{for(var i = 0, len = gdjs.NewspaperCode.GDNewspaperObjects2.length ;i < len;++i) {
    gdjs.NewspaperCode.GDNewspaperObjects2[i].getBehavior("Opacity").setOpacity(gdjs.NewspaperCode.GDNewspaperObjects2[i].getBehavior("Opacity").getOpacity() + (2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Newspaper"), gdjs.NewspaperCode.GDNewspaperObjects2);
{for(var i = 0, len = gdjs.NewspaperCode.GDNewspaperObjects2.length ;i < len;++i) {
    gdjs.NewspaperCode.GDNewspaperObjects2[i].getBehavior("Opacity").setOpacity(gdjs.NewspaperCode.GDNewspaperObjects2[i].getBehavior("Opacity").getOpacity() - (2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17433548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Intro");
}
}

}


};gdjs.NewspaperCode.eventsList4 = function(runtimeScene) {

{


gdjs.NewspaperCode.eventsList3(runtimeScene);
}


};

gdjs.NewspaperCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewspaperCode.GDNewspaperObjects1.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects2.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects3.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects4.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects5.length = 0;

gdjs.NewspaperCode.eventsList4(runtimeScene);
gdjs.NewspaperCode.GDNewspaperObjects1.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects2.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects3.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects4.length = 0;
gdjs.NewspaperCode.GDNewspaperObjects5.length = 0;


return;

}

gdjs['NewspaperCode'] = gdjs.NewspaperCode;
