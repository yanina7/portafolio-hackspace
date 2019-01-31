var a = {
    fn: {
        
        changeZoom: function(b, c, d, e, f) {
            debugger;
            var g = b.find("\x69\x6d\x67");
            var h = b.data("\x7a\x6f\x6f\x6d");
            h = h == "\x61\x75\x74\x6f" ? g.width() / b.width() : parseFloat(h);
            var i = b.data("\x7a\x6f\x6f\x6d\x73\x74\x65\x70");
            i = i ? parseFloat(i) : 0.5;
            var j = b.data("\x7a\x6f\x6f\x6d\x72\x61\x6e\x67\x65");
            j = j ? j.split("\x2c") : "\x31\x2c\x34";
            var k = parseFloat(j[0x0]),
                l = parseFloat(j[0x1]) > h ? parseFloat(j[0x1]) : h;
            var m = f > 0x0 ? 0x1 : -0x1;
            var n = Math.round((h + i * m) * 0xa) / 10.0;
            if (n >= k && n <= l) {
                b.data("\x7a\x6f\x6f\x6d", n);
                a.fn.showZoomState(b, n);
                a.fn.moveZoom(b, c)
            }
        },
        showZoomState: function(b, c) {
            debugger;
            var d = b.find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d\x73\x74\x61\x74\x65");
            if (d.length == 0x0) {
                d = $('\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x65\x2d\x7a\x6f\x6f\x6d\x73\x74\x61\x74\x65\x22\x3e' + c + '\x58\x3c\x2f\x73\x70\x61\x6e\x3e').appendTo(b)
            };
            d.text(c + "\x58").stop(true, true).fadeIn(0x12c).delay(0xc8).fadeOut(0x12c)
        }
       
    }
};

$(function() {
    $('.he-wrap').on({
        mouseenter: function() {           
         //  console.log($(this));
            var b = $(this).find('.he-view').addClass('he-view-show');

           //console.log(b);
            $("\x5b\x64\x61\x74\x61\x2d\x61\x6e\x69\x6d\x61\x74\x65\x5d", b).each(function() {
              console.log($("\x5b\x64\x61\x74\x61\x2d\x61\x6e\x69\x6d\x61\x74\x65\x5d"));  
                var c = $(this).data("\x61\x6e\x69\x6d\x61\x74\x65");
             //   console.log($(this));
             //   console.log(c);
                $(this).addClass(c);
            });
            $(this).find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d").addClass("\x68\x65\x2d\x76\x69\x65\x77\x2d\x73\x68\x6f\x77")
           //console.log( $(this).find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d").addClass("\x68\x65\x2d\x76\x69\x65\x77\x2d\x73\x68\x6f\x77")); 
        },
        mouseleave: function() {
            
            var b = $(this).find("\x2e\x68\x65\x2d\x76\x69\x65\x77").removeClass("\x68\x65\x2d\x76\x69\x65\x77\x2d\x73\x68\x6f\x77");
            $("\x5b\x64\x61\x74\x61\x2d\x61\x6e\x69\x6d\x61\x74\x65\x5d", b).each(function() {
                var c = $(this).data("\x61\x6e\x69\x6d\x61\x74\x65");
                $(this).removeClass(c)
            });
            $(this).find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d").removeClass("\x68\x65\x2d\x76\x69\x65\x77\x2d\x73\x68\x6f\x77")
        },
        mousewheel: function(b, c, d, e) {
            debugger;
            if ($(this).find("\x2e\x68\x65\x2d\x73\x6c\x69\x64\x65\x72\x73").length == 0x1) {
                var f = $(this).find("\x2e\x68\x65\x2d\x73\x6c\x69\x64\x65\x72\x73");
                var g = e > 0x0 ? 0x1 : -0x1;
                a.fn.switchImg(f, g);
                b.preventDefault()
            } else if ($(this).find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d").length == 0x1) {
                var f = $(this).find("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d");
                a.fn.changeZoom(f, b, c, d, e);
                b.preventDefault()
            }
        }
    });
    $("\x2e\x68\x65\x2d\x7a\x6f\x6f\x6d").live({
        mousemove: function(b) {
            a.fn.moveZoom($(this), b)
        }
    });
    $("\x2e\x68\x65\x2d\x70\x72\x65").live("\x63\x6c\x69\x63\x6b", function() {
        var b = $(this).parents("\x2e\x68\x65\x2d\x77\x72\x61\x70").find("\x2e\x68\x65\x2d\x73\x6c\x69\x64\x65\x72\x73");
        a.fn.switchImg(b, -0x1)
    });
    $("\x2e\x68\x65\x2d\x6e\x65\x78\x74").live("\x63\x6c\x69\x63\x6b", function() {
        var b = $(this).parents("\x2e\x68\x65\x2d\x77\x72\x61\x70").find("\x2e\x68\x65\x2d\x73\x6c\x69\x64\x65\x72\x73");
        a.fn.switchImg(b, 0x1)
    })
});
(function(b) {
    var c = ['\x44\x4f\x4d\x4d\x6f\x75\x73\x65\x53\x63\x72\x6f\x6c\x6c', '\x6d\x6f\x75\x73\x65\x77\x68\x65\x65\x6c'];
    if (b.event.fixHooks) {
        for (var e = c.length; e;) {
            b.event.fixHooks[c[--e]] = b.event.mouseHooks
        }
    };
    b.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var e = c.length; e;) {
                    this.addEventListener(c[--e], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = c.length; e;) {
                    this.removeEventListener(c[--e], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    b.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("\x6d\x6f\x75\x73\x65\x77\x68\x65\x65\x6c", e) : this.trigger("\x6d\x6f\x75\x73\x65\x77\x68\x65\x65\x6c")
        },
        unmousewheel: function(e) {
            return this.unbind("\x6d\x6f\x75\x73\x65\x77\x68\x65\x65\x6c", e)
        }
    });

    function d(e) {
        var f = e || window.event,
            g = [].slice.call(arguments, 0x1),
            h = 0x0,
            i = true,
            j = 0x0,
            k = 0x0;
        e = b.event.fix(f);
        e.type = "\x6d\x6f\x75\x73\x65\x77\x68\x65\x65\x6c";
        if (f.wheelDelta) {
            h = f.wheelDelta / 0x78
        };
        if (f.detail) {
            h = -f.detail / 0x3
        };
        k = h;
        if (f.axis !== undefined && f.axis === f.HORIZONTAL_AXIS) {
            k = 0x0;
            j = -0x1 * h
        };
        if (f.wheelDeltaY !== undefined) {
            k = f.wheelDeltaY / 0x78
        };
        if (f.wheelDeltaX !== undefined) {
            j = -0x1 * f.wheelDeltaX / 0x78
        };
        g.unshift(e, h, j, k);
        return (b.event.dispatch || b.event.handle).apply(this, g)
    }
})(jQuery);