
var arr = [];
var positions = [];
for (var i=1; i < app.project.items.length; i++){
    arr.push(app.project.item(i).name);
    positions.push(app.project.activeItem.layer(i).position.value)
}

    alert(arr);
    alert(positions);
