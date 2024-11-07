type Circle={
    shape: 'circle',
    radius: number,
}

type Rectangle = {
    shape: 'rectangle',
    width: number,
    height: number,
}

type Shapes = Circle | Rectangle;

function calculateShapeArea(shape:Shapes):number {
    if (shape.shape === 'circle') return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    return parseFloat((shape.width * shape.height).toFixed(2));
};



// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
// console.log(circleArea);
// console.log(rectangleArea);