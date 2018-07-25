var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var canvas = void 0,ctx = void 0;
var render = void 0,init = void 0;
var blob = void 0;var

Blob = function () {
  function Blob() {_classCallCheck(this, Blob);
    this.points = [];
  }_createClass(Blob, [{ key: 'init', value: function init()

    {
      for (var i = 0; i < this.numPoints; i++) {
        var point = new Point(this.divisional * (i + 1), this);
        // point.acceleration = -1 + Math.random() * 2;
        this.push(point);
      }
    } }, { key: 'render', value: function render()

    {
      var canvas = this.canvas;
      var ctx = this.ctx;
      var position = this.position;
      var pointsArray = this.points;
      var radius = this.radius;
      var points = this.numPoints;
      var divisional = this.divisional;
      var center = this.center;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

      var p0 = pointsArray[points - 1].position;
      var p1 = pointsArray[0].position;
      var _p2 = p1;

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

      for (var i = 1; i < points; i++) {

        pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

        var p2 = pointsArray[i].position;
        var xc = (p1.x + p2.x) / 2;
        var yc = (p1.y + p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
        // ctx.lineTo(p2.x, p2.y);

        // ctx.fillStyle = '#000000';
        // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

        p1 = p2;
      }

      var xc = (p1.x + _p2.x) / 2;
      var yc = (p1.y + _p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(_p2.x, _p2.y);

      // ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      //ctx.strokeStyle = '#000000';
      // ctx.stroke();

      /*
          ctx.fillStyle = '#000000';
          if(this.mousePos) {
            let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
            ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
          }
      */
      requestAnimationFrame(this.render.bind(this));
    } }, { key: 'push', value: function push(

    item) {
      if (item instanceof Point) {
        this.points.push(item);
      }
    } }, { key: 'color', set: function set(

    value) {
      this._color = value;
    }, get: function get()
    {
      return this._color;
    } }, { key: 'canvas', set: function set(

    value) {
      if (value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext('2d');
      }
    }, get: function get()
    {
      return this._canvas;
    } }, { key: 'numPoints', set: function set(

    value) {
      if (value > 2) {
        this._points = value;
      }
    }, get: function get()
    {
      return this._points || 32;
    } }, { key: 'radius', set: function set(

    value) {
      if (value > 0) {
        this._radius = value;
      }
    }, get: function get()
    {
      return this._radius || 150;
    } }, { key: 'position', set: function set(

    value) {
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value.x && value.y) {
        this._position = value;
      }
    }, get: function get()
    {
      return this._position || { x: 0.5, y: 0.5 };
    } }, { key: 'divisional', get: function get()

    {
      return Math.PI * 2 / this.numPoints;
    } }, { key: 'center', get: function get()

    {
      return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
    } }, { key: 'running', set: function set(

    value) {
      this._running = value === true;
    }, get: function get()
    {
      return this.running !== false;
    } }]);return Blob;}();var


Point = function () {
  function Point(azimuth, parent) {_classCallCheck(this, Point);
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth) };


    this.acceleration = -0.3 + Math.random() * 0.6;
  }_createClass(Point, [{ key: 'solveWith', value: function solveWith(

    leftPoint, rightPoint) {
      this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
    } }, { key: 'acceleration', set: function set(

    value) {
      if (typeof value == 'number') {
        this._acceleration = value;
        this.speed += this._acceleration * 2;
      }
    }, get: function get()
    {
      return this._acceleration || 0;
    } }, { key: 'speed', set: function set(

    value) {
      if (typeof value == 'number') {
        this._speed = value;
        this.radialEffect += this._speed * 5;
      }
    }, get: function get()
    {
      return this._speed || 0;
    } }, { key: 'radialEffect', set: function set(

    value) {
      if (typeof value == 'number') {
        this._radialEffect = value;
      }
    }, get: function get()
    {
      return this._radialEffect || 0;
    } }, { key: 'position', get: function get()

    {
      return {
        x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
        y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect) };

    } }, { key: 'components', get: function get()

    {
      return this._components;
    } }, { key: 'elasticity', set: function set(

    value) {
      if (typeof value === 'number') {
        this._elasticity = value;
      }
    }, get: function get()
    {
      return this._elasticity || 0.001;
    } }, { key: 'friction', set: function set(
    value) {
      if (typeof value === 'number') {
        this._friction = value;
      }
    }, get: function get()
    {
      return this._friction || 0.0185;
    } }]);return Point;}();


blob = new Blob();
second_blob = new Blob();

init = function init() {
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  var resize = function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  var oldMousePoint = { x: 0, y: 0 };
  var hover = false;
  var mouseMove = function mouseMove(e) {

    var pos = blob.center;
    var diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    var dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    var angle = null;

    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

    if (dist < blob.radius && hover === false) {
      var vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
      blob.color = '#ff1900';
    } else if (dist > blob.radius && hover === true) {
      var _vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(_vector.y, _vector.x);
      hover = false;
      blob.color = null;
    }

    if (typeof angle == 'number') {

      var nearestPoint = null;
      var distanceFromPoint = 100;

      blob.points.forEach(function (point) {
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }

      });

      if (nearestPoint) {
        var strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (strength > 100) strength = 100;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }

    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener('pointermove', mouseMove);

  blob.canvas = canvas;
  blob.init();
  blob.render();
};

init_second = function init_second() {
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  var resize = function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  var oldMousePoint = { x: 0, y: 0 };
  var hover = false;
  var mouseMove = function mouseMove(e) {

    var pos = second_blob.center;
    var diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    var dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    var angle = null;

    second_blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

    if (dist < second_blob.radius && hover === false) {
      var vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
      second_blob.color = '#77FF00';
    } else if (dist > second_blob.radius && hover === true) {
      var _vector2 = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(_vector2.y, _vector2.x);
      hover = false;
      second_blob.color = null;
    }

    if (typeof angle == 'number') {

      var nearestPoint = null;
      var distanceFromPoint = 100;

      second_blob.points.forEach(function (point) {
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }

      });

      if (nearestPoint) {
        var strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (strength > 100) strength = 100;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }

    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener('pointermove', mouseMove);

  second_blob.canvas = canvas;
  second_blob.init();
  second_blob.render();
};

init();
init_second();


//babel
/* 
let canvas, ctx;
let render, init;
let blob;

class Blob {
  constructor() {
    this.points = [];
  }
  
  init() {
    for(let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * ( i + 1 ), this);

      this.push(point);
    }
  }
  
  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let position = this.position;
    let pointsArray = this.points;
    let radius = this.radius;
    let points = this.numPoints;
    let divisional = this.divisional;
    let center = this.center;
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    pointsArray[0].solveWith(pointsArray[points-1], pointsArray[1]);

    let p0 = pointsArray[points-1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo( (p0.x + p1.x) / 2, (p0.y + p1.y) / 2 );

    for(let i = 1; i < points; i++) {
      
      pointsArray[i].solveWith(pointsArray[i-1], pointsArray[i+1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.fillStyle = this.color;
    ctx.fill();


    requestAnimationFrame(this.render.bind(this));
  }
  
  push(item) {
    if(item instanceof Point) {
      this.points.push(item);
    }
  }
  
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  
  set canvas(value) {
    if(value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = canvas;
      this.ctx = this._canvas.getContext('2d');
    }
  }
  get canvas() {
    return this._canvas;
  }
  
  set numPoints(value) {
    if(value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }
  
  set radius(value) {
    if(value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }
  
  set position(value) {
    if(typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }
  
  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }
  
  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }
  
  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = { 
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };
    
    this.acceleration = -0.3 + Math.random() * 0.6;
  }
  
  solveWith(leftPoint, rightPoint) {
    this.acceleration = (-0.3 * this.radialEffect + ( leftPoint.radialEffect - this.radialEffect ) + ( rightPoint.radialEffect - this.radialEffect )) * this.elasticity - this.speed * this.friction;
  }
  
  set acceleration(value) {
    if(typeof value == 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }
  
  set speed(value) {
    if(typeof value == 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }
  
  set radialEffect(value) {
    if(typeof value == 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }
  
  get position() {
    return { 
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect), 
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect) 
    }
  }
  
  get components() {
    return this._components;
  }

  set elasticity(value) {
    if(typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if(typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0185;
  }
}

blob = new Blob;
second_blob = new Blob;

init = function() {
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  let resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  let oldMousePoint = { x: 0, y: 0};
  let hover = false;
  let mouseMove = function(e) {
    
    let pos = blob.center;
    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt((diff.x * diff.x) + (diff.y * diff.y));
    let angle = null;
    
    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };
    
    if(dist < blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
       blob.color = '#ff1900';
    } else if(dist > blob.radius && hover === true){ 
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
      blob.color = null;
    }
    
    if(typeof angle == 'number') {
      
      let nearestPoint = null;
      let distanceFromPoint = 100;
      
      blob.points.forEach((point)=> {
        if(Math.abs(angle - point.azimuth) < distanceFromPoint) {
          
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
        
      });
      
      if(nearestPoint) {
        let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt((strength.x * strength.x) + (strength.y * strength.y)) * 10;
        if(strength > 100) strength = 100;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }
    
    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  }

  window.addEventListener('pointermove', mouseMove);
  
  blob.canvas = canvas;
  blob.init();
  blob.render();
}

init_second = function() {
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  let resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  let oldMousePoint = { x: 0, y: 0};
  let hover = false;
  let mouseMove = function(e) {
    
    let pos = second_blob.center;
    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt((diff.x * diff.x) + (diff.y * diff.y));
    let angle = null;
    
    second_blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };
    
    if(dist < second_blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
      second_blob.color = '#77FF00';
    } else if(dist > second_blob.radius && hover === true){ 
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
      second_blob.color = null;
    }
    
    if(typeof angle == 'number') {
      
      let nearestPoint = null;
      let distanceFromPoint = 100;
      
      second_blob.points.forEach((point)=> {
        if(Math.abs(angle - point.azimuth) < distanceFromPoint) {

          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
        
      });
      
      if(nearestPoint) {
        let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt((strength.x * strength.x) + (strength.y * strength.y)) * 10;
        if(strength > 100) strength = 100;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }
    
    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  }

  window.addEventListener('pointermove', mouseMove);
  
  second_blob.canvas = canvas;
  second_blob.init();
  second_blob.render();
}

init();
init_second();

*/