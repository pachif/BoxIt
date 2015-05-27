
BoxIt =
{
    
    addNote: function (divToAppend) {
        // Add the Frame
        var strHTML = " <div class='col-sm-4'> <div class='panel panel-primary'><div class='panel-heading'>Note X</div>"
            + "<div class='panel-body boxIt-common'></div></div></div>";
        divToAppend.append(strHTML);
        $(strHTML).fadeIn();
        // Set it in editmode
    },
    addBox : function() {
        
    },
    Box: {
        BoxId: 0,
        Owner: "Owner Name"
    },
    Note: {
        Data: {
            NoteId: 0,
            BoxBelongs: 0,
            EditMode: false
        },
        beginEditMode: function (button) {
            var readOnlyPanel = $(button.parentElement.parentElement);
            var editPanel = readOnlyPanel.next();
            editPanel.removeClass("hide");
            editPanel.fadeIn(3000);
            readOnlyPanel.addClass("hide");
            this.EditMode = true;
        },
        endEditMode: function (button) {
            var editPanel = $(button.parentElement.parentElement);
            var iconHtml = "<span class='glyphicon glyphicon-floppy-disk' />";
            var readOnlyPanel = editPanel.prev();
            readOnlyPanel.removeClass("hide");
            readOnlyPanel.fadeIn(3000);
            editPanel.addClass("hide");
            this.EditMode = false;
        }
    }
}