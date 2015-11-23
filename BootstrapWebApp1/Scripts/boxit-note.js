/// <reference path="knockout-3.3.0.js" />

function boxitNoteViewModel(title, note, position, parentVM) {
    this.title = ko.observable(title);
    this.note = ko.observable(note);
    this.position = ko.observable(position);
    this.parent = ko.observable(parentVM);
    this.isEditMode = ko.observable(false);
    this.isReadMode = ko.computed(function () { return !this.isEditMode(); }, this);
    //this.isReadMode = ko.observable(true);
    this.onEdit = function () {
        this.isEditMode(true);
        //this.isReadMode(false);
    };
    this.onSave = function () {
        this.isEditMode(false);
        //this.isReadMode(true);
    };
    this.advanceNode = function () {
        var pos = this.position();
        var parentNotes = this.parent().notes();
        if (pos < parentNotes.length) {
            this.position(pos + 1);
            var newpos = parentNotes[pos].position();
            parentNotes[pos].position(newpos - 1);
            // Refresh ordered list
            this.parent().orderNotes();
        }
    };
    this.retrocedeNode = function () {
        var pos = this.position();
        var parentNotes = this.parent().notes();
        if (pos > 1) {
            this.position(pos - 1);
            var newpos = parentNotes[pos - 2].position();
            parentNotes[pos - 2].position(newpos + 1);
            // Refresh ordered list
            this.parent().orderNotes();
        }
    };
}