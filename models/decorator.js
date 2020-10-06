const Decorator = function () {
    this.paintStock = [];
};

Decorator.prototype.addCanOfPaint = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculateAmountOfPaint = function(){
    let total_paint = 0
    for (let paintCan of this.paintStock){
        if(paintCan.isEmpty == false){
            total_paint += paintCan.litresOfPaint;
        }  
    };
    return total_paint
};

Decorator.prototype.hasEnoughPaint = function(room){
    if (this.calculateAmountOfPaint() >= room.areaInSquareMeters){
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(room){
    if (this.hasEnoughPaint(room)){
        room.paint();
        return true
    } else {
        return false
    }
};

Decorator.prototype.decreasePaintStock = function(room){
    if (this.paintRoom(room)){
        let paintNeeded = room.areaInSquareMeters;
        for (let paintCan of this.paintStock){
            if (paintCan.litresOfPaint <= paintNeeded){
                paintNeeded -= paintCan.litresOfPaint;
                paintCan.empty(paintCan.litresOfPaint);
            } else {
                paintCan.empty(paintNeeded);
                paintNeeded = 0
            }
        }
        room.paint()
    }
}

Decorator.prototype.removeEmptyCans = function(){
    newStock = [];
    for (let paintCan of this.paintStock){
        if (paintCan.isEmpty===false){
            newStock.push(paintCan);
        }
    }
    this.paintStock = newStock;
}


module.exports = Decorator;
