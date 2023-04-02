// get project
var proj = app.project;

// get comp item
var comp = proj.item(4);

// get folder
// allows for the actual song file to be selected without needing the explicit name
var folder = Folder("./Song").getFiles();

// import file
var item = proj.importFile(new ImportOptions(folder[0]));

//get all layers in comp
var layers = comp.layers;
layers.add(item);
// layer index is 1, once added

// get music layer as AVItem object

var musicLayer = comp.layer(1);

// make sure music layer start time is 0.0 and inPoint is 0.0
musicLayer.startTime = 0.0;
musicLayer.inPoint = 0.0;


var visualizerLayer = comp.layer(3);

//alert(musicLayer.name);
var outerEffect = visualizerLayer.Effects.property(1);
var innerEffect = outerEffect.property("Audio Layer");
innerEffect.setValue(1);
//alert(visualizerLayer.effect.property(1).property(1).setAlternateSource());// = musicLayer;


//get outPoint of Music layer and set all other layers to the outPoint
for (var i=1; i <= comp.numLayers; i++){
    comp.layer(i).outPoint = musicLayer.outPoint;
}
// At this point all layers are the same duration

//alert("Music layer: " + musicLayer.name);
