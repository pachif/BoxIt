/// <reference path="knockout-3.3.0.js" />
/// <reference path="boxit-note.js" />


// Reservated To Append Knockout VMs
function boxViewModel(id, user, name) {
    ///<sumary>creates a new instance of box view model</sumary>
    /// <param name="id" type="Number">id of the box</param>
    /// <param name="user" type="Text">the owner of the box</param>
    /// <param name="name" type="Text">the box internal name</param>

    var self = this;

    this.boxId = ko.observable(id);
    this.boxName = ko.observable(name);
    this.owner = ko.observable(user);
    this.notes = ko.observableArray();

    this.addNote = function () {
        var pos = self.notes().length + 1;
        this.notes.push(new boxitNoteViewModel("Title " + pos, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", pos, self));
    };
    
    this.orderNotes = function () {
        var tempNotes = self.notes();
        tempNotes.sort(function (l, r) {
            var rightPos = r.position();
            var leftPos = l.position();
            //return rightPos == leftPos ? 0 : (leftPos > rightPos ? -1 : 1);
            return leftPos - rightPos;
        });
        this.notes(tempNotes);
    };
    this.afterDropCallBack = function (arg) {

        //alert('Moved from item: ' + arg.sourceIndex + ' to target index: ' + arg.targetIndex);
        // change note position info
        var sourcePos = arg.item.position();
        // find the target note in the box
        var targetNote = ko.utils.arrayFirst(self.notes(), function (item) {
            // TODO: improve this to obtain the target item
            return item.position() == arg.targetIndex + 1;
        });

        alert('Moving from: ' + sourcePos + ' to position: ' + targetNote.position());
        arg.item.position(targetNote.position());
        targetNote.position(sourcePos);
    };
}

function mainViewModel(userName) {
    ///<sumary>creates a new instance of main view model</sumary>
    /// <param name="userName" type="Number">the name of the user</param>

    var self = this;

    this.name = ko.observable(userName);
    this.boxes = ko.observableArray();
    this.currentBox = ko.observable();
    this.addBox = function (nameParam) {
        // calculate new id
        var arrayIds = [];
        for (var i = 0; i < self.boxes.length; i++) {
            var boxVM = self.boxes[i];
            arrayIds.push(boxVM.boxId);
        }
        var matched = true;
        var candidateId = 0;
        while (matched) {
            candidateId = Math.floor((Math.random() * 100) + 1);
            if (arrayIds.indexOf(candidateId) < 0) {
                // it did not found any match
                matched = false;
            }
        }
       
        // initialization code for the added box
        var box = new boxViewModel(candidateId, self.name, nameParam);
        box.addNote();

        self.boxes.push(box);
        self.currentBox(box);
    };
    this.setCurrentBox = function(boxVM) {
        self.currentBox(boxVM);
    };
    this.removeBox = function (boxId) {
        this.boxes.remove(function (box) { return box.id == boxId; });
    };
    this.restoreBoxes = function () {
        // use the user name to restore from local storage and do a full refresh if neccessary

    };

    this.addBox('This is Box Title');
}