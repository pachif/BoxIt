

    var zidx = 0;

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function SVGDraggable(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this.init();
    }

    SVGDraggable.prototype.options = {
        speed: { reset: 100, active: 100 },
        easing: { reset: mina.easeinout, active: mina.easeinout }
    };

    SVGDraggable.prototype.init = function () {
        this.draggie = new Draggabilly(this.el);

        this.shapeEl = this.el.querySelector('span.morph-shape');

        var s = Snap(this.shapeEl.querySelector('svg'));
        this.pathEl = s.select('path');
        this.paths = {
            reset: this.pathEl.attr('d'),
            active: this.shapeEl.getAttribute('data-morph-active')
        };

        this.initEvents();
    };

    SVGDraggable.prototype.initEvents = function () {
        var self = this;

        this.draggie.on('dragStart', function (i, e, p) {
            i.element.style.zIndex = 9999;
            self.pathEl.stop().animate({ 'path': self.paths.active }, self.options.speed.active, self.options.easing.active);
        });

        this.draggie.on('dragEnd', function (i, e, p) {
            // z-index workaround (this shouldn't be done like this!! just for demo purposes...)
            ++zidx;
            i.element.style.zIndex = zidx;
            self.pathEl.stop().animate({ 'path': self.paths.reset }, self.options.speed.reset, self.options.easing.reset);
        });
    };


    //new SVGDraggable(document.getElementById('drag-element-1'));

    //new SVGDraggable(document.getElementById('drag-element-2'), {
    //    speed: { reset: 800, active: 100 },
    //    easing: { reset: mina.elastic, active: mina.easeinout }
    //});

    //new SVGDraggable(document.getElementById('drag-element-3'), {
    //    speed: { reset: 600, active: 50 },
    //    easing: { reset: mina.bounce, active: mina.easeout }
    //});
    //$(".drag-element").each(function () {
    //    new SVGDraggable($(this), {
    //        speed: { reset: 800, active: 100 },
    //        easing: { reset: mina.elastic, active: mina.easeinout }
    //    });
    //});
