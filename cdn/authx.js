function SHA512(e) {
  function r(e, r) {
    (this.highOrder = e), (this.lowOrder = r);
  }
  var n,
    w,
    h,
    d,
    O,
    o,
    i,
    l,
    g,
    t,
    a = [
      new r(1779033703, 4089235720),
      new r(3144134277, 2227873595),
      new r(1013904242, 4271175723),
      new r(2773480762, 1595750129),
      new r(1359893119, 2917565137),
      new r(2600822924, 725511199),
      new r(528734635, 4215389547),
      new r(1541459225, 327033209),
    ],
    u = [
      new r(1116352408, 3609767458),
      new r(1899447441, 602891725),
      new r(3049323471, 3964484399),
      new r(3921009573, 2173295548),
      new r(961987163, 4081628472),
      new r(1508970993, 3053834265),
      new r(2453635748, 2937671579),
      new r(2870763221, 3664609560),
      new r(3624381080, 2734883394),
      new r(310598401, 1164996542),
      new r(607225278, 1323610764),
      new r(1426881987, 3590304994),
      new r(1925078388, 4068182383),
      new r(2162078206, 991336113),
      new r(2614888103, 633803317),
      new r(3248222580, 3479774868),
      new r(3835390401, 2666613458),
      new r(4022224774, 944711139),
      new r(264347078, 2341262773),
      new r(604807628, 2007800933),
      new r(770255983, 1495990901),
      new r(1249150122, 1856431235),
      new r(1555081692, 3175218132),
      new r(1996064986, 2198950837),
      new r(2554220882, 3999719339),
      new r(2821834349, 766784016),
      new r(2952996808, 2566594879),
      new r(3210313671, 3203337956),
      new r(3336571891, 1034457026),
      new r(3584528711, 2466948901),
      new r(113926993, 3758326383),
      new r(338241895, 168717936),
      new r(666307205, 1188179964),
      new r(773529912, 1546045734),
      new r(1294757372, 1522805485),
      new r(1396182291, 2643833823),
      new r(1695183700, 2343527390),
      new r(1986661051, 1014477480),
      new r(2177026350, 1206759142),
      new r(2456956037, 344077627),
      new r(2730485921, 1290863460),
      new r(2820302411, 3158454273),
      new r(3259730800, 3505952657),
      new r(3345764771, 106217008),
      new r(3516065817, 3606008344),
      new r(3600352804, 1432725776),
      new r(4094571909, 1467031594),
      new r(275423344, 851169720),
      new r(430227734, 3100823752),
      new r(506948616, 1363258195),
      new r(659060556, 3750685593),
      new r(883997877, 3785050280),
      new r(958139571, 3318307427),
      new r(1322822218, 3812723403),
      new r(1537002063, 2003034995),
      new r(1747873779, 3602036899),
      new r(1955562222, 1575990012),
      new r(2024104815, 1125592928),
      new r(2227730452, 2716904306),
      new r(2361852424, 442776044),
      new r(2428436474, 593698344),
      new r(2756734187, 3733110249),
      new r(3204031479, 2999351573),
      new r(3329325298, 3815920427),
      new r(3391569614, 3928383900),
      new r(3515267271, 566280711),
      new r(3940187606, 3454069534),
      new r(4118630271, 4000239992),
      new r(116418474, 1914138554),
      new r(174292421, 2731055270),
      new r(289380356, 3203993006),
      new r(460393269, 320620315),
      new r(685471733, 587496836),
      new r(852142971, 1086792851),
      new r(1017036298, 365543100),
      new r(1126000580, 2618297676),
      new r(1288033470, 3409855158),
      new r(1501505948, 4234509866),
      new r(1607167915, 987167468),
      new r(1816402316, 1246189591),
    ],
    c = new Array(64);
  function s(e, n) {
    var w = (65535 & e.lowOrder) + (65535 & n.lowOrder),
      h = (e.lowOrder >>> 16) + (n.lowOrder >>> 16) + (w >>> 16),
      d = ((65535 & h) << 16) | (65535 & w);
    return (
      (w = (65535 & e.highOrder) + (65535 & n.highOrder) + (h >>> 16)),
      new r(
        ((65535 & ((e.highOrder >>> 16) + (n.highOrder >>> 16) + (w >>> 16))) <<
          16) |
          (65535 & w),
        d
      )
    );
  }
  function v(e, n) {
    return n <= 32
      ? new r(
          (e.highOrder >>> n) | (e.lowOrder << (32 - n)),
          (e.lowOrder >>> n) | (e.highOrder << (32 - n))
        )
      : new r(
          (e.lowOrder >>> n) | (e.highOrder << (32 - n)),
          (e.highOrder >>> n) | (e.lowOrder << (32 - n))
        );
  }
  function f(e, n) {
    return n <= 32
      ? new r(e.highOrder >>> n, (e.lowOrder >>> n) | (e.highOrder << (32 - n)))
      : new r(0, e.highOrder << (32 - n));
  }
  (e = unescape(encodeURIComponent(e))),
    (strlen = 8 * e.length),
    ((e = (function (e) {
      for (var r = [], n = 8 * e.length, w = 0; w < n; w += 8)
        r[w >> 5] |= (255 & e.charCodeAt(w / 8)) << (24 - (w % 32));
      return r;
    })(e))[strlen >> 5] |= 128 << (24 - (strlen % 32))),
    (e[31 + (((strlen + 128) >> 10) << 5)] = strlen);
  for (
    var p,
      A,
      m,
      x,
      M,
      b,
      y,
      C,
      E,
      H,
      S,
      T,
      B,
      I,
      N,
      R,
      U,
      j,
      k,
      q,
      z,
      D,
      F,
      G,
      J,
      K,
      L,
      P,
      Q,
      V,
      W,
      X,
      Y,
      Z = 0;
    Z < e.length;
    Z += 32
  ) {
    (n = a[0]),
      (w = a[1]),
      (h = a[2]),
      (d = a[3]),
      (O = a[4]),
      (o = a[5]),
      (i = a[6]),
      (l = a[7]);
    for (var $ = 0; $ < 80; $++)
      (c[$] =
        $ < 16
          ? new r(e[2 * $ + Z], e[2 * $ + Z + 1])
          : (void 0,
            (X = v((W = c[$ - 2]), 19)),
            (Y = v(W, 61)),
            (W = f(W, 6)),
            (z = new r(
              X.highOrder ^ Y.highOrder ^ W.highOrder,
              X.lowOrder ^ Y.lowOrder ^ W.lowOrder
            )),
            (D = c[$ - 7]),
            void 0,
            (Q = v((P = c[$ - 15]), 1)),
            (V = v(P, 8)),
            (P = f(P, 7)),
            (F = new r(
              Q.highOrder ^ V.highOrder ^ P.highOrder,
              Q.lowOrder ^ V.lowOrder ^ P.lowOrder
            )),
            (G = c[$ - 16]),
            (J = void 0),
            (J =
              (65535 & z.lowOrder) +
              (65535 & D.lowOrder) +
              (65535 & F.lowOrder) +
              (65535 & G.lowOrder)),
            (L =
              ((65535 &
                (K =
                  (z.lowOrder >>> 16) +
                  (D.lowOrder >>> 16) +
                  (F.lowOrder >>> 16) +
                  (G.lowOrder >>> 16) +
                  (J >>> 16))) <<
                16) |
              (65535 & J)),
            (J =
              (65535 & z.highOrder) +
              (65535 & D.highOrder) +
              (65535 & F.highOrder) +
              (65535 & G.highOrder) +
              (K >>> 16)),
            new r(
              ((65535 &
                ((z.highOrder >>> 16) +
                  (D.highOrder >>> 16) +
                  (F.highOrder >>> 16) +
                  (G.highOrder >>> 16) +
                  (J >>> 16))) <<
                16) |
                (65535 & J),
              L
            ))),
        (y = l),
        void 0,
        (k = v((j = O), 14)),
        (q = v(j, 18)),
        (j = v(j, 41)),
        (C = new r(
          k.highOrder ^ q.highOrder ^ j.highOrder,
          k.lowOrder ^ q.lowOrder ^ j.lowOrder
        )),
        (R = o),
        (U = i),
        (E = new r(
          ((N = O).highOrder & R.highOrder) ^ (~N.highOrder & U.highOrder),
          (N.lowOrder & R.lowOrder) ^ (~N.lowOrder & U.lowOrder)
        )),
        (H = u[$]),
        (S = c[$]),
        (T = void 0),
        (T =
          (65535 & y.lowOrder) +
          (65535 & C.lowOrder) +
          (65535 & E.lowOrder) +
          (65535 & H.lowOrder) +
          (65535 & S.lowOrder)),
        (I =
          ((65535 &
            (B =
              (y.lowOrder >>> 16) +
              (C.lowOrder >>> 16) +
              (E.lowOrder >>> 16) +
              (H.lowOrder >>> 16) +
              (S.lowOrder >>> 16) +
              (T >>> 16))) <<
            16) |
          (65535 & T)),
        (T =
          (65535 & y.highOrder) +
          (65535 & C.highOrder) +
          (65535 & E.highOrder) +
          (65535 & H.highOrder) +
          (65535 & S.highOrder) +
          (B >>> 16)),
        (g = new r(
          ((65535 &
            ((y.highOrder >>> 16) +
              (C.highOrder >>> 16) +
              (E.highOrder >>> 16) +
              (H.highOrder >>> 16) +
              (S.highOrder >>> 16) +
              (T >>> 16))) <<
            16) |
            (65535 & T),
          I
        )),
        (t = s(
          (void 0,
          (M = v((x = n), 28)),
          (b = v(x, 34)),
          (x = v(x, 39)),
          new r(
            M.highOrder ^ b.highOrder ^ x.highOrder,
            M.lowOrder ^ b.lowOrder ^ x.lowOrder
          )),
          ((A = w),
          (m = h),
          new r(
            ((p = n).highOrder & A.highOrder) ^
              (p.highOrder & m.highOrder) ^
              (A.highOrder & m.highOrder),
            (p.lowOrder & A.lowOrder) ^
              (p.lowOrder & m.lowOrder) ^
              (A.lowOrder & m.lowOrder)
          ))
        )),
        (l = i),
        (i = o),
        (o = O),
        (O = s(d, g)),
        (d = h),
        (h = w),
        (w = n),
        (n = s(g, t));
    (a[0] = s(n, a[0])),
      (a[1] = s(w, a[1])),
      (a[2] = s(h, a[2])),
      (a[3] = s(d, a[3])),
      (a[4] = s(O, a[4])),
      (a[5] = s(o, a[5])),
      (a[6] = s(i, a[6])),
      (a[7] = s(l, a[7]));
  }
  var _ = [];
  for (Z = 0; Z < a.length; Z++) _.push(a[Z].highOrder), _.push(a[Z].lowOrder);
  return (function (e) {
    for (
      var r, n = "0123456789abcdef", w = "", h = 4 * e.length, d = 0;
      d < h;
      d += 1
    )
      (r = e[d >> 2] >> (8 * (3 - (d % 4)))),
        (w += n.charAt((r >> 4) & 15) + n.charAt(15 & r));
    return w;
  })(_);
}
function getMeta(e) {
  var r,
    n = document.getElementsByTagName("META");
  for (r = 0; r < n.length; r++) if (n[r].name == e) return n[r].content;
  return "";
}
var base = "https://dev-authx.pantheonsite.io/"; //YOUR BASE URL
class AuthX {
  login() {
    var e = getMeta("authx-id") + getMeta("authx-secret");
    var r = SHA512(e);
    window.location.href = base + "app/login.php?connect=" + r;
   
  }
}
var authx = new AuthX();
