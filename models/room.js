const Room = function (area) {
    this.areaInSquareMeters = area;
    this.isPainted = false;
};

Room.prototype.paint = function(){
    this.isPainted = true;
}


module.exports = Room;
