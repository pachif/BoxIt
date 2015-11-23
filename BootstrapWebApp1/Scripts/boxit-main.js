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
    this.removeNodeByPosition = function (data, event) {
        if (!event) { return false; }

        var position = event.dataTransfer.getData("text");
        this.notes.remove(function (item) { return item.position == position; });
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
}

function mainViewModel(userName) {
    ///<sumary>creates a new instance of main view model</sumary>
    /// <param name="userName" type="Number">the name of the user</param>

    var self = this;

    this.name = ko.observable(userName);
    this.boxes = ko.observableArray();
    this.addBox = function (nameParam) {
        // calculate new id
        var arrayIds = [];
        for (var i = 0; i < this.boxes.length; i++) {
            var boxVM = this.boxes[i];
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
       
        // initialization code
        var box = new boxViewModel(candidateId, this.name, nameParam);
        box.addNote();

        this.boxes.push(box);
    };
    this.removeBox = function (boxId) {
        this.boxes.remove(function (box) { return box.id == boxId; });
    };
    this.restoreBoxes = function () {
        // use the user name to restore from local storage and do a full refresh if neccessary

    };
}