/*! Pranule.JS v1.0 - By Naiel */
let Pranule = function(Config) {
	console.log("welcome to http://cesi.huat.xyz",
		"color:#fff;background:rgb(54, 110, 187);padding:5px 0;", "background:rgba(197, 197, 197, 0.89); padding:5px 0;",
		"color: rgb(157, 208, 251); background: rgb(37, 36, 35); padding:5px 0;");
	return new Promise(function() {
		if (typeof(Config) == 'undefined') defaultOption = ['bg_effect', '100', '0.0.0', '0,0,0', '0', '6000', '20000',
			'0', '2', '2', '', '0'
		];
		else defaultOption = Config;
		let D = defaultOption[0],
			T = defaultOption[1],
			R = defaultOption[2],
			C = defaultOption[3],
			E = defaultOption[4],
			N = defaultOption[5],
			S = defaultOption[6],
			F = defaultOption[7],
			X = defaultOption[8],
			Y = defaultOption[9],
			H = defaultOption[10],
			J = defaultOption[11];
		! function BGE() {
			function o(w, v, i) {
				return w.getAttribute(v) || i
			}

			function j(i) {
				return document.getElementsByTagName(i)
			}

			function l() {
				var i = j("script"),
					w = i.length,
					v = i[w - 1];
				return {
					l: w,
					z: o(v, "zIndex", -1),
					o: o(v, "opacity", 1),
					c: o(v, "color", C),
					n: o(v, "count", T)
				}
			}

			function k() {
				r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height =
					window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			}

			function G(H) {
				if (E === 0) {
					E = A / 2;
					return H
				}
			}

			function b() {
				e.clearRect(0, 0, r, n);
				var w = [f].concat(t);
				var x, v, A, B, z, y;
				t.forEach(function(i) {
					i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(
						i.x - 0.5, i.y - 0.5, 1, 1);
					for (v = 0; v < w.length; v++) {
						x = w[v];
						if (i !== x && null !== x.x && null !== x.y && (E === 0 || E === null)) {
							B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
							y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(),
								e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.fillStyle = "rgba(" + R +
								")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke(), e.shadowColor = H, e.shadowBlur = J)
						} else if (i !== x && null !== x.x && null !== x.y && E !== 0) {
							B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
							y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(),
								e.lineWidth = E, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.fillStyle = "rgba(" + R + ")",
								e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke(), e.shadowColor = "rgba(" + H + ")", e.shadowBlur = J)
						}
					}
					w.splice(w.indexOf(i), F)
				}), m(b)
			}
			var u = document.createElement("canvas"),
				s = l(),
				c = D,
				e = u.getContext("2d"),
				r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
					window.setTimeout(i, 1000 / 45)
				},
				a = Math.random,
				f = {
					x: null,
					y: null,
					max: S
				};
			u.id = c;
			u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
			j("body")[0].appendChild(u);
			k(), window.onresize = k;
			window.onmousemove = function(i) {
				i = i || window.event, f.x = i.clientX, f.y = i.clientY
			}, window.onmouseout = function() {
				f.x = null, f.y = null
			};
			for (var t = [], p = 0; s.n > p; p++) {
				var h = a() * r,
					g = a() * n,
					q = X * a() - 1,
					d = Y * a() - 1;
				t.push({
					x: h,
					y: g,
					xa: q,
					ya: d,
					max: N,
				})
			}
			setTimeout(function() {
				b()
			}, 100)
		}();
	});
};
