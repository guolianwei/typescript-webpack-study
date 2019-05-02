"use strict";
///<reference path="IShape.ts"/>
///<reference path="Triangle.ts"/>
///<reference path="Circle.ts"/>
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
