gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDNewTextObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < 6);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}
}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(999);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(false);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(false);
}
{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17375684);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17380804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Office");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Cameras");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Win Screen");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game Over Screen");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "6th Night Win Screen");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Custom Night Win Screen");
}
}

}


};gdjs.IntroCode.asyncCallback17387340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(17387340, gdjs.IntroCode.asyncCallback17387340);
gdjs.IntroCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.IntroCode.asyncCallback17387340(runtimeScene, asyncObjectsList)), 17387340, asyncObjectsList);
}
}

}


};gdjs.IntroCode.asyncCallback17386964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}

{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(17386964, gdjs.IntroCode.asyncCallback17386964);
gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback17386964(runtimeScene, asyncObjectsList)), 17386964, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDNewTextObjects1, gdjs.IntroCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").getText() + ("st"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDNewTextObjects1, gdjs.IntroCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").getText() + ("nd"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDNewTextObjects1, gdjs.IntroCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").getText() + ("rd"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDNewTextObjects1, gdjs.IntroCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").getText() + ("th"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.IntroCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Text").getText() + (" Night"));
}
}

{ //Subevents
gdjs.IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17382804);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IntroCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Text").setText("12:00 AM" + "\n" + runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}

{ //Subevents
gdjs.IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.asyncCallback17389676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Office", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(17389676, gdjs.IntroCode.asyncCallback17389676);
gdjs.IntroCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.IntroCode.asyncCallback17389676(runtimeScene, asyncObjectsList)), 17389676, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.IntroCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IntroCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Opacity").getOpacity() + (2));
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
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IntroCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Opacity").getOpacity() - (2));
}
}

{ //Subevents
gdjs.IntroCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17390692);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 6);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IntroCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects2[i].getBehavior("Text").setText("12:00 AM" + "\n" + "Saturday School");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17391796);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 7);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.IntroCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewTextObjects1[i].getBehavior("Text").setText("12:00 AM" + "\n" + "Flextime");
}
}
}

}


};gdjs.IntroCode.eventsList11 = function(runtimeScene) {

{


gdjs.IntroCode.eventsList2(runtimeScene);
}


{


gdjs.IntroCode.eventsList6(runtimeScene);
}


{


gdjs.IntroCode.eventsList9(runtimeScene);
}


{


gdjs.IntroCode.eventsList10(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects3.length = 0;

gdjs.IntroCode.eventsList11(runtimeScene);
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
