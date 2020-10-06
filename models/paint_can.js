const PaintCan = function (amountPaint) {
    this.litresOfPaint = amountPaint;
    this.isEmpty = false;
};

PaintCan.prototype.empty = function(amount){
    this.litresOfPaint -= amount
    if (this.litresOfPaint === 0){
        this.isEmpty = true;
    }
};


module.exports = PaintCan;
