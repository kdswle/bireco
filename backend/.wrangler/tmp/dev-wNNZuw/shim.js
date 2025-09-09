var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-HzZUgL/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import sn from "./babe762d337f90b00e6caad76862ace845d6cabd-index.wasm";
import { WorkerEntrypoint as un } from "cloudflare:workers";
var C = Object.defineProperty;
var B = /* @__PURE__ */ __name((e, t) => {
  for (var n in t) C(e, n, { get: t[n], enumerable: true });
}, "B");
var g = {};
B(g, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => F, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => T, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => E, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => O, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => G, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => j, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => H, "RequestRedirect"), __wbg_Error_0497d5bdba9362e5: /* @__PURE__ */ __name(() => _e, "__wbg_Error_0497d5bdba9362e5"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => oe, "__wbg_String_8f0eb39a4a4c2f66"), __wbg_abort_18ba44d46e13d7fe: /* @__PURE__ */ __name(() => ie, "__wbg_abort_18ba44d46e13d7fe"), __wbg_abort_4198a1129c47f21a: /* @__PURE__ */ __name(() => ce, "__wbg_abort_4198a1129c47f21a"), __wbg_append_0342728346e47425: /* @__PURE__ */ __name(() => se, "__wbg_append_0342728346e47425"), __wbg_buffer_a1a27a0dfa70165d: /* @__PURE__ */ __name(() => ue, "__wbg_buffer_a1a27a0dfa70165d"), __wbg_buffer_e495ba54cee589cc: /* @__PURE__ */ __name(() => fe, "__wbg_buffer_e495ba54cee589cc"), __wbg_byobRequest_56aa768ee4dfed17: /* @__PURE__ */ __name(() => ae, "__wbg_byobRequest_56aa768ee4dfed17"), __wbg_byteLength_937f8a52f9697148: /* @__PURE__ */ __name(() => be, "__wbg_byteLength_937f8a52f9697148"), __wbg_byteOffset_4d94b7170e641898: /* @__PURE__ */ __name(() => ge, "__wbg_byteOffset_4d94b7170e641898"), __wbg_call_f2db6205e5c51dc8: /* @__PURE__ */ __name(() => de, "__wbg_call_f2db6205e5c51dc8"), __wbg_call_fbe8be8bf6436ce5: /* @__PURE__ */ __name(() => we, "__wbg_call_fbe8be8bf6436ce5"), __wbg_cause_af6ef82a8abe435b: /* @__PURE__ */ __name(() => le, "__wbg_cause_af6ef82a8abe435b"), __wbg_cf_60aafe7bb03e919a: /* @__PURE__ */ __name(() => pe, "__wbg_cf_60aafe7bb03e919a"), __wbg_clearTimeout_6222fede17abcb1a: /* @__PURE__ */ __name(() => xe, "__wbg_clearTimeout_6222fede17abcb1a"), __wbg_close_290fb040af98d3ac: /* @__PURE__ */ __name(() => ye, "__wbg_close_290fb040af98d3ac"), __wbg_close_b2641ef0870e518c: /* @__PURE__ */ __name(() => he, "__wbg_close_b2641ef0870e518c"), __wbg_done_4d01f352bade43b7: /* @__PURE__ */ __name(() => me, "__wbg_done_4d01f352bade43b7"), __wbg_enqueue_a62faa171c4fd287: /* @__PURE__ */ __name(() => Re, "__wbg_enqueue_a62faa171c4fd287"), __wbg_entries_41651c850143b957: /* @__PURE__ */ __name(() => Se, "__wbg_entries_41651c850143b957"), __wbg_error_51ecdd39ec054205: /* @__PURE__ */ __name(() => Ie, "__wbg_error_51ecdd39ec054205"), __wbg_fetch_a8e43a4e138dfc93: /* @__PURE__ */ __name(() => Ae, "__wbg_fetch_a8e43a4e138dfc93"), __wbg_fetch_f156d10be9a5c88a: /* @__PURE__ */ __name(() => Fe, "__wbg_fetch_f156d10be9a5c88a"), __wbg_getRandomValues_38a1ff1ea09f6cc7: /* @__PURE__ */ __name(() => Te, "__wbg_getRandomValues_38a1ff1ea09f6cc7"), __wbg_get_92470be87867c2e5: /* @__PURE__ */ __name(() => Ee, "__wbg_get_92470be87867c2e5"), __wbg_get_a131a44bd1eb6979: /* @__PURE__ */ __name(() => Oe, "__wbg_get_a131a44bd1eb6979"), __wbg_has_809e438ee9d787a7: /* @__PURE__ */ __name(() => je, "__wbg_has_809e438ee9d787a7"), __wbg_headers_0f0cbdc6290b6780: /* @__PURE__ */ __name(() => Me, "__wbg_headers_0f0cbdc6290b6780"), __wbg_headers_67fbc7839fe933b3: /* @__PURE__ */ __name(() => qe, "__wbg_headers_67fbc7839fe933b3"), __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc: /* @__PURE__ */ __name(() => ze, "__wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc"), __wbg_instanceof_Error_58a92d81483a4b16: /* @__PURE__ */ __name(() => ke, "__wbg_instanceof_Error_58a92d81483a4b16"), __wbg_instanceof_Map_80cc65041c96417a: /* @__PURE__ */ __name(() => Le, "__wbg_instanceof_Map_80cc65041c96417a"), __wbg_instanceof_Response_e80ce8b7a2b968d2: /* @__PURE__ */ __name(() => Ue, "__wbg_instanceof_Response_e80ce8b7a2b968d2"), __wbg_instanceof_Uint8Array_ca460677bc155827: /* @__PURE__ */ __name(() => De, "__wbg_instanceof_Uint8Array_ca460677bc155827"), __wbg_isArray_5f090bed72bd4f89: /* @__PURE__ */ __name(() => Ce, "__wbg_isArray_5f090bed72bd4f89"), __wbg_isSafeInteger_90d7c4674047d684: /* @__PURE__ */ __name(() => Be, "__wbg_isSafeInteger_90d7c4674047d684"), __wbg_iterator_4068add5b2aef7a6: /* @__PURE__ */ __name(() => We, "__wbg_iterator_4068add5b2aef7a6"), __wbg_json_5a6e4c2cfa6f90e1: /* @__PURE__ */ __name(() => Ne, "__wbg_json_5a6e4c2cfa6f90e1"), __wbg_length_ab6d22b5ead75c72: /* @__PURE__ */ __name(() => $e, "__wbg_length_ab6d22b5ead75c72"), __wbg_length_f00ec12454a5d9fd: /* @__PURE__ */ __name(() => ve, "__wbg_length_f00ec12454a5d9fd"), __wbg_method_a3a2d7fac54c95f8: /* @__PURE__ */ __name(() => Ve, "__wbg_method_a3a2d7fac54c95f8"), __wbg_new_07b483f72211fd66: /* @__PURE__ */ __name(() => Pe, "__wbg_new_07b483f72211fd66"), __wbg_new_186abcfdff244e42: /* @__PURE__ */ __name(() => Xe, "__wbg_new_186abcfdff244e42"), __wbg_new_476169e6d59f23ae: /* @__PURE__ */ __name(() => Ge, "__wbg_new_476169e6d59f23ae"), __wbg_new_4796e1cd2eb9ea6d: /* @__PURE__ */ __name(() => He, "__wbg_new_4796e1cd2eb9ea6d"), __wbg_new_e30c39c06edaabf2: /* @__PURE__ */ __name(() => Je, "__wbg_new_e30c39c06edaabf2"), __wbg_new_e52b3efaaa774f96: /* @__PURE__ */ __name(() => Ye, "__wbg_new_e52b3efaaa774f96"), __wbg_newfromslice_7c05ab1297cb2d88: /* @__PURE__ */ __name(() => Ke, "__wbg_newfromslice_7c05ab1297cb2d88"), __wbg_newnoargs_ff528e72d35de39a: /* @__PURE__ */ __name(() => Qe, "__wbg_newnoargs_ff528e72d35de39a"), __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: /* @__PURE__ */ __name(() => Ze, "__wbg_newwithbyteoffsetandlength_3b01ecda099177e8"), __wbg_newwithlength_08f872dc1e3ada2e: /* @__PURE__ */ __name(() => et, "__wbg_newwithlength_08f872dc1e3ada2e"), __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5: /* @__PURE__ */ __name(() => tt, "__wbg_newwithoptbuffersourceandinit_b77afe7366f846b5"), __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e: /* @__PURE__ */ __name(() => nt, "__wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e"), __wbg_newwithoptstrandinit_8128e018ed06a4f8: /* @__PURE__ */ __name(() => rt, "__wbg_newwithoptstrandinit_8128e018ed06a4f8"), __wbg_newwithstrandinit_f8a9dbe009d6be37: /* @__PURE__ */ __name(() => _t, "__wbg_newwithstrandinit_f8a9dbe009d6be37"), __wbg_next_8bb824d217961b5d: /* @__PURE__ */ __name(() => ot, "__wbg_next_8bb824d217961b5d"), __wbg_next_e2da48d8fff7439a: /* @__PURE__ */ __name(() => it, "__wbg_next_e2da48d8fff7439a"), __wbg_now_eb0821f3bd9f6529: /* @__PURE__ */ __name(() => ct, "__wbg_now_eb0821f3bd9f6529"), __wbg_queueMicrotask_46c1df247678729f: /* @__PURE__ */ __name(() => st, "__wbg_queueMicrotask_46c1df247678729f"), __wbg_queueMicrotask_8acf3ccb75ed8d11: /* @__PURE__ */ __name(() => ut, "__wbg_queueMicrotask_8acf3ccb75ed8d11"), __wbg_resolve_0dac8c580ffd4678: /* @__PURE__ */ __name(() => ft, "__wbg_resolve_0dac8c580ffd4678"), __wbg_respond_b227f1c3be2bb879: /* @__PURE__ */ __name(() => at, "__wbg_respond_b227f1c3be2bb879"), __wbg_setTimeout_2b339866a2aa3789: /* @__PURE__ */ __name(() => bt, "__wbg_setTimeout_2b339866a2aa3789"), __wbg_set_b042eef31c50834d: /* @__PURE__ */ __name(() => gt, "__wbg_set_b042eef31c50834d"), __wbg_set_c43293f93a35998a: /* @__PURE__ */ __name(() => dt, "__wbg_set_c43293f93a35998a"), __wbg_set_fe4e79d1ed3b0e9b: /* @__PURE__ */ __name(() => wt, "__wbg_set_fe4e79d1ed3b0e9b"), __wbg_set_wasm: /* @__PURE__ */ __name(() => M, "__wbg_set_wasm"), __wbg_setbody_971ec015fc13d6b4: /* @__PURE__ */ __name(() => lt, "__wbg_setbody_971ec015fc13d6b4"), __wbg_setcache_a94cd14dc0cc72a2: /* @__PURE__ */ __name(() => pt, "__wbg_setcache_a94cd14dc0cc72a2"), __wbg_setcredentials_920d91fb5984c94a: /* @__PURE__ */ __name(() => xt, "__wbg_setcredentials_920d91fb5984c94a"), __wbg_setheaders_408564032a1382da: /* @__PURE__ */ __name(() => yt, "__wbg_setheaders_408564032a1382da"), __wbg_setheaders_65a4eb4c0443ae61: /* @__PURE__ */ __name(() => ht, "__wbg_setheaders_65a4eb4c0443ae61"), __wbg_setmethod_8ce1be0b4d701b7c: /* @__PURE__ */ __name(() => mt, "__wbg_setmethod_8ce1be0b4d701b7c"), __wbg_setmode_bd35f026f55b6247: /* @__PURE__ */ __name(() => Rt, "__wbg_setmode_bd35f026f55b6247"), __wbg_setsignal_8e72abfe7ee03c97: /* @__PURE__ */ __name(() => St, "__wbg_setsignal_8e72abfe7ee03c97"), __wbg_setstatus_bd5b448a903a8658: /* @__PURE__ */ __name(() => It, "__wbg_setstatus_bd5b448a903a8658"), __wbg_signal_b96223519a041faa: /* @__PURE__ */ __name(() => At, "__wbg_signal_b96223519a041faa"), __wbg_static_accessor_GLOBAL_487c52c58d65314d: /* @__PURE__ */ __name(() => Ft, "__wbg_static_accessor_GLOBAL_487c52c58d65314d"), __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: /* @__PURE__ */ __name(() => Tt, "__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291"), __wbg_static_accessor_SELF_78c9e3071b912620: /* @__PURE__ */ __name(() => Et, "__wbg_static_accessor_SELF_78c9e3071b912620"), __wbg_static_accessor_WINDOW_a093d21393777366: /* @__PURE__ */ __name(() => Ot, "__wbg_static_accessor_WINDOW_a093d21393777366"), __wbg_status_a54682bbe52f9058: /* @__PURE__ */ __name(() => jt, "__wbg_status_a54682bbe52f9058"), __wbg_stringify_c242842b97f054cc: /* @__PURE__ */ __name(() => Mt, "__wbg_stringify_c242842b97f054cc"), __wbg_text_ec0e22f60e30dd2f: /* @__PURE__ */ __name(() => qt, "__wbg_text_ec0e22f60e30dd2f"), __wbg_then_82ab9fb4080f1707: /* @__PURE__ */ __name(() => zt, "__wbg_then_82ab9fb4080f1707"), __wbg_then_db882932c0c714c6: /* @__PURE__ */ __name(() => kt, "__wbg_then_db882932c0c714c6"), __wbg_toString_21791a66666b3afd: /* @__PURE__ */ __name(() => Lt, "__wbg_toString_21791a66666b3afd"), __wbg_url_e6ed869ea05b7a71: /* @__PURE__ */ __name(() => Ut, "__wbg_url_e6ed869ea05b7a71"), __wbg_url_f1c3162019331231: /* @__PURE__ */ __name(() => Dt, "__wbg_url_f1c3162019331231"), __wbg_value_17b896954e14f896: /* @__PURE__ */ __name(() => Ct, "__wbg_value_17b896954e14f896"), __wbg_view_a9ad80dcbad7cf1c: /* @__PURE__ */ __name(() => Bt, "__wbg_view_a9ad80dcbad7cf1c"), __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(() => Wt, "__wbindgen_bigint_from_i64"), __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(() => Nt, "__wbindgen_bigint_from_u64"), __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(() => $t, "__wbindgen_bigint_get_as_i64"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => vt, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => Vt, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper2578: /* @__PURE__ */ __name(() => Pt, "__wbindgen_closure_wrapper2578"), __wbindgen_closure_wrapper408: /* @__PURE__ */ __name(() => Xt, "__wbindgen_closure_wrapper408"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => Gt, "__wbindgen_debug_string"), __wbindgen_in: /* @__PURE__ */ __name(() => Ht, "__wbindgen_in"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => Jt, "__wbindgen_init_externref_table"), __wbindgen_is_bigint: /* @__PURE__ */ __name(() => Yt, "__wbindgen_is_bigint"), __wbindgen_is_function: /* @__PURE__ */ __name(() => Kt, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => Qt, "__wbindgen_is_object"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => Zt, "__wbindgen_is_undefined"), __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => en, "__wbindgen_jsval_eq"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => tn, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => nn, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => rn, "__wbindgen_number_get"), __wbindgen_string_get: /* @__PURE__ */ __name(() => _n, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => on, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => cn, "__wbindgen_throw"), fetch: /* @__PURE__ */ __name(() => q, "fetch") });
var _;
function M(e) {
  _ = e;
}
__name(M, "M");
var h = null;
function x() {
  return (h === null || h.byteLength === 0) && (h = new Uint8Array(_.memory.buffer)), h;
}
__name(x, "x");
var k = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var m = new k("utf-8", { ignoreBOM: true, fatal: true });
m.decode();
var W = 2146435072;
var I = 0;
function N(e, t) {
  return I += t, I >= W && (m = new k("utf-8", { ignoreBOM: true, fatal: true }), m.decode(), I = t), m.decode(x().subarray(e, e + t));
}
__name(N, "N");
function b(e, t) {
  return e = e >>> 0, N(e, t);
}
__name(b, "b");
var d = 0;
var $ = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var R = new $("utf-8");
var v = typeof R.encodeInto == "function" ? function(e, t) {
  return R.encodeInto(e, t);
} : function(e, t) {
  let n = R.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function p(e, t, n) {
  if (n === void 0) {
    let u = R.encode(e), y = t(u.length, 1) >>> 0;
    return x().subarray(y, y + u.length).set(u), d = u.length, y;
  }
  let r = e.length, o = t(r, 1) >>> 0, a = x(), c = 0;
  for (; c < r; c++) {
    let u = e.charCodeAt(c);
    if (u > 127) break;
    a[o + c] = u;
  }
  if (c !== r) {
    c !== 0 && (e = e.slice(c)), o = n(o, r, r = c + e.length * 3, 1) >>> 0;
    let u = x().subarray(o + c, o + r);
    c += v(e, u).written, o = n(o, r, c, 1) >>> 0;
  }
  return d = c, o;
}
__name(p, "p");
var l = null;
function f() {
  return (l === null || l.buffer.detached === true || l.buffer.detached === void 0 && l.buffer !== _.memory.buffer) && (l = new DataView(_.memory.buffer)), l;
}
__name(f, "f");
function w(e) {
  let t = _.__externref_table_alloc();
  return _.__wbindgen_export_4.set(t, e), t;
}
__name(w, "w");
function i(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let r = w(n);
    _.__wbindgen_exn_store(r);
  }
}
__name(i, "i");
function s(e) {
  return e == null;
}
__name(s, "s");
function L(e, t) {
  return e = e >>> 0, x().subarray(e / 1, e / 1 + t);
}
__name(L, "L");
var z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => {
  _.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
});
function U(e, t, n, r) {
  let o = { a: e, b: t, cnt: 1, dtor: n }, a = /* @__PURE__ */ __name((...c) => {
    o.cnt++;
    let u = o.a;
    o.a = 0;
    try {
      return r(u, o.b, ...c);
    } finally {
      --o.cnt === 0 ? (_.__wbindgen_export_5.get(o.dtor)(u, o.b), z.unregister(o)) : o.a = u;
    }
  }, "a");
  return a.original = o, z.register(a, o, o), a;
}
__name(U, "U");
function A(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    let o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    let o = e.length, a = "[";
    o > 0 && (a += A(e[0]));
    for (let c = 1; c < o; c++) a += ", " + A(e[c]);
    return a += "]", a;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(e);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(e) + ")";
  } catch {
    return "Object";
  }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
}
__name(A, "A");
function q(e, t, n) {
  return _.fetch(e, t, n);
}
__name(q, "q");
function V(e, t) {
  _.wasm_bindgen__convert__closures_____invoke__h3d00556bc29b6c8c(e, t);
}
__name(V, "V");
function P(e, t, n) {
  _.closure950_externref_shim(e, t, n);
}
__name(P, "P");
function X(e, t, n, r) {
  _.closure996_externref_shim(e, t, n, r);
}
__name(X, "X");
var G = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var H = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var J = ["bytes"];
var Y = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];
var K = ["omit", "same-origin", "include"];
var Q = ["same-origin", "no-cors", "cors", "navigate"];
var Z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => _.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
var F = class {
  static {
    __name(this, "F");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingbytesource_free(t, 0);
  }
  get type() {
    let t = _.intounderlyingbytesource_type(this.__wbg_ptr);
    return J[t];
  }
  get autoAllocateChunkSize() {
    return _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    _.intounderlyingbytesource_start(this.__wbg_ptr, t);
  }
  pull(t) {
    return _.intounderlyingbytesource_pull(this.__wbg_ptr, t);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    _.intounderlyingbytesource_cancel(t);
  }
};
var ee = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsink_free(e >>> 0, 1));
var T = class {
  static {
    __name(this, "T");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingsink_free(t, 0);
  }
  write(t) {
    return _.intounderlyingsink_write(this.__wbg_ptr, t);
  }
  close() {
    let t = this.__destroy_into_raw();
    return _.intounderlyingsink_close(t);
  }
  abort(t) {
    let n = this.__destroy_into_raw();
    return _.intounderlyingsink_abort(n, t);
  }
};
var te = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsource_free(e >>> 0, 1));
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, te.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingsource_free(t, 0);
  }
  pull(t) {
    return _.intounderlyingsource_pull(this.__wbg_ptr, t);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    _.intounderlyingsource_cancel(t);
  }
};
var ne = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => _.__wbg_minifyconfig_free(e >>> 0, 1));
var O = class {
  static {
    __name(this, "O");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ne.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_minifyconfig_free(t, 0);
  }
  get js() {
    return _.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    _.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    return _.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    _.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    return _.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    _.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var re = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => _.__wbg_r2range_free(e >>> 0, 1));
var j = class {
  static {
    __name(this, "j");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, re.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_r2range_free(t, 0);
  }
  get offset() {
    let t = _.__wbg_get_r2range_offset(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set offset(t) {
    _.__wbg_set_r2range_offset(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
  get length() {
    let t = _.__wbg_get_r2range_length(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set length(t) {
    _.__wbg_set_r2range_length(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
  get suffix() {
    let t = _.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set suffix(t) {
    _.__wbg_set_r2range_suffix(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
};
function _e(e, t) {
  return Error(b(e, t));
}
__name(_e, "_e");
function oe(e, t) {
  let n = String(t), r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = d;
  f().setInt32(e + 4 * 1, o, true), f().setInt32(e + 4 * 0, r, true);
}
__name(oe, "oe");
function ie(e) {
  e.abort();
}
__name(ie, "ie");
function ce(e, t) {
  e.abort(t);
}
__name(ce, "ce");
function se() {
  return i(function(e, t, n, r, o) {
    e.append(b(t, n), b(r, o));
  }, arguments);
}
__name(se, "se");
function ue(e) {
  return e.buffer;
}
__name(ue, "ue");
function fe(e) {
  return e.buffer;
}
__name(fe, "fe");
function ae(e) {
  let t = e.byobRequest;
  return s(t) ? 0 : w(t);
}
__name(ae, "ae");
function be(e) {
  return e.byteLength;
}
__name(be, "be");
function ge(e) {
  return e.byteOffset;
}
__name(ge, "ge");
function de() {
  return i(function(e, t, n) {
    return e.call(t, n);
  }, arguments);
}
__name(de, "de");
function we() {
  return i(function(e, t) {
    return e.call(t);
  }, arguments);
}
__name(we, "we");
function le(e) {
  return e.cause;
}
__name(le, "le");
function pe() {
  return i(function(e) {
    let t = e.cf;
    return s(t) ? 0 : w(t);
  }, arguments);
}
__name(pe, "pe");
function xe(e) {
  return clearTimeout(e);
}
__name(xe, "xe");
function ye() {
  return i(function(e) {
    e.close();
  }, arguments);
}
__name(ye, "ye");
function he() {
  return i(function(e) {
    e.close();
  }, arguments);
}
__name(he, "he");
function me(e) {
  return e.done;
}
__name(me, "me");
function Re() {
  return i(function(e, t) {
    e.enqueue(t);
  }, arguments);
}
__name(Re, "Re");
function Se(e) {
  return Object.entries(e);
}
__name(Se, "Se");
function Ie(e) {
  console.error(e);
}
__name(Ie, "Ie");
function Ae(e, t) {
  return e.fetch(t);
}
__name(Ae, "Ae");
function Fe(e) {
  return fetch(e);
}
__name(Fe, "Fe");
function Te() {
  return i(function(e, t) {
    globalThis.crypto.getRandomValues(L(e, t));
  }, arguments);
}
__name(Te, "Te");
function Ee() {
  return i(function(e, t) {
    return Reflect.get(e, t);
  }, arguments);
}
__name(Ee, "Ee");
function Oe(e, t) {
  return e[t >>> 0];
}
__name(Oe, "Oe");
function je() {
  return i(function(e, t) {
    return Reflect.has(e, t);
  }, arguments);
}
__name(je, "je");
function Me(e) {
  return e.headers;
}
__name(Me, "Me");
function qe(e) {
  return e.headers;
}
__name(qe, "qe");
function ze(e) {
  let t;
  try {
    t = e instanceof ArrayBuffer;
  } catch {
    t = false;
  }
  return t;
}
__name(ze, "ze");
function ke(e) {
  let t;
  try {
    t = e instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
__name(ke, "ke");
function Le(e) {
  let t;
  try {
    t = e instanceof Map;
  } catch {
    t = false;
  }
  return t;
}
__name(Le, "Le");
function Ue(e) {
  let t;
  try {
    t = e instanceof Response;
  } catch {
    t = false;
  }
  return t;
}
__name(Ue, "Ue");
function De(e) {
  let t;
  try {
    t = e instanceof Uint8Array;
  } catch {
    t = false;
  }
  return t;
}
__name(De, "De");
function Ce(e) {
  return Array.isArray(e);
}
__name(Ce, "Ce");
function Be(e) {
  return Number.isSafeInteger(e);
}
__name(Be, "Be");
function We() {
  return Symbol.iterator;
}
__name(We, "We");
function Ne() {
  return i(function(e) {
    return e.json();
  }, arguments);
}
__name(Ne, "Ne");
function $e(e) {
  return e.length;
}
__name($e, "$e");
function ve(e) {
  return e.length;
}
__name(ve, "ve");
function Ve(e, t) {
  let n = t.method, r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = d;
  f().setInt32(e + 4 * 1, o, true), f().setInt32(e + 4 * 0, r, true);
}
__name(Ve, "Ve");
function Pe() {
  return new Object();
}
__name(Pe, "Pe");
function Xe() {
  return i(function() {
    return new AbortController();
  }, arguments);
}
__name(Xe, "Xe");
function Ge(e, t) {
  return new Error(b(e, t));
}
__name(Ge, "Ge");
function He() {
  return i(function() {
    return new Headers();
  }, arguments);
}
__name(He, "He");
function Je(e, t) {
  try {
    var n = { a: e, b: t }, r = /* @__PURE__ */ __name((a, c) => {
      let u = n.a;
      n.a = 0;
      try {
        return X(u, n.b, a, c);
      } finally {
        n.a = u;
      }
    }, "r");
    return new Promise(r);
  } finally {
    n.a = n.b = 0;
  }
}
__name(Je, "Je");
function Ye(e) {
  return new Uint8Array(e);
}
__name(Ye, "Ye");
function Ke(e, t) {
  return new Uint8Array(L(e, t));
}
__name(Ke, "Ke");
function Qe(e, t) {
  return new Function(b(e, t));
}
__name(Qe, "Qe");
function Ze(e, t, n) {
  return new Uint8Array(e, t >>> 0, n >>> 0);
}
__name(Ze, "Ze");
function et(e) {
  return new Uint8Array(e >>> 0);
}
__name(et, "et");
function tt() {
  return i(function(e, t) {
    return new Response(e, t);
  }, arguments);
}
__name(tt, "tt");
function nt() {
  return i(function(e, t) {
    return new Response(e, t);
  }, arguments);
}
__name(nt, "nt");
function rt() {
  return i(function(e, t, n) {
    return new Response(e === 0 ? void 0 : b(e, t), n);
  }, arguments);
}
__name(rt, "rt");
function _t() {
  return i(function(e, t, n) {
    return new Request(b(e, t), n);
  }, arguments);
}
__name(_t, "_t");
function ot(e) {
  return e.next;
}
__name(ot, "ot");
function it() {
  return i(function(e) {
    return e.next();
  }, arguments);
}
__name(it, "it");
function ct() {
  return Date.now();
}
__name(ct, "ct");
function st(e) {
  queueMicrotask(e);
}
__name(st, "st");
function ut(e) {
  return e.queueMicrotask;
}
__name(ut, "ut");
function ft(e) {
  return Promise.resolve(e);
}
__name(ft, "ft");
function at() {
  return i(function(e, t) {
    e.respond(t >>> 0);
  }, arguments);
}
__name(at, "at");
function bt(e, t) {
  return setTimeout(e, t);
}
__name(bt, "bt");
function gt() {
  return i(function(e, t, n, r, o) {
    e.set(b(t, n), b(r, o));
  }, arguments);
}
__name(gt, "gt");
function dt() {
  return i(function(e, t, n) {
    return Reflect.set(e, t, n);
  }, arguments);
}
__name(dt, "dt");
function wt(e, t, n) {
  e.set(t, n >>> 0);
}
__name(wt, "wt");
function lt(e, t) {
  e.body = t;
}
__name(lt, "lt");
function pt(e, t) {
  e.cache = Y[t];
}
__name(pt, "pt");
function xt(e, t) {
  e.credentials = K[t];
}
__name(xt, "xt");
function yt(e, t) {
  e.headers = t;
}
__name(yt, "yt");
function ht(e, t) {
  e.headers = t;
}
__name(ht, "ht");
function mt(e, t, n) {
  e.method = b(t, n);
}
__name(mt, "mt");
function Rt(e, t) {
  e.mode = Q[t];
}
__name(Rt, "Rt");
function St(e, t) {
  e.signal = t;
}
__name(St, "St");
function It(e, t) {
  e.status = t;
}
__name(It, "It");
function At(e) {
  return e.signal;
}
__name(At, "At");
function Ft() {
  let e = typeof global > "u" ? null : global;
  return s(e) ? 0 : w(e);
}
__name(Ft, "Ft");
function Tt() {
  let e = typeof globalThis > "u" ? null : globalThis;
  return s(e) ? 0 : w(e);
}
__name(Tt, "Tt");
function Et() {
  let e = typeof self > "u" ? null : self;
  return s(e) ? 0 : w(e);
}
__name(Et, "Et");
function Ot() {
  let e = typeof window > "u" ? null : window;
  return s(e) ? 0 : w(e);
}
__name(Ot, "Ot");
function jt(e) {
  return e.status;
}
__name(jt, "jt");
function Mt() {
  return i(function(e) {
    return JSON.stringify(e);
  }, arguments);
}
__name(Mt, "Mt");
function qt() {
  return i(function(e) {
    return e.text();
  }, arguments);
}
__name(qt, "qt");
function zt(e, t, n) {
  return e.then(t, n);
}
__name(zt, "zt");
function kt(e, t) {
  return e.then(t);
}
__name(kt, "kt");
function Lt(e) {
  return e.toString();
}
__name(Lt, "Lt");
function Ut(e, t) {
  let n = t.url, r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = d;
  f().setInt32(e + 4 * 1, o, true), f().setInt32(e + 4 * 0, r, true);
}
__name(Ut, "Ut");
function Dt(e, t) {
  let n = t.url, r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = d;
  f().setInt32(e + 4 * 1, o, true), f().setInt32(e + 4 * 0, r, true);
}
__name(Dt, "Dt");
function Ct(e) {
  return e.value;
}
__name(Ct, "Ct");
function Bt(e) {
  let t = e.view;
  return s(t) ? 0 : w(t);
}
__name(Bt, "Bt");
function Wt(e) {
  return e;
}
__name(Wt, "Wt");
function Nt(e) {
  return BigInt.asUintN(64, e);
}
__name(Nt, "Nt");
function $t(e, t) {
  let n = t, r = typeof n == "bigint" ? n : void 0;
  f().setBigInt64(e + 8 * 1, s(r) ? BigInt(0) : r, true), f().setInt32(e + 4 * 0, !s(r), true);
}
__name($t, "$t");
function vt(e) {
  let t = e;
  return typeof t == "boolean" ? t ? 1 : 0 : 2;
}
__name(vt, "vt");
function Vt(e) {
  let t = e.original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
__name(Vt, "Vt");
function Pt(e, t, n) {
  return U(e, t, 949, P);
}
__name(Pt, "Pt");
function Xt(e, t, n) {
  return U(e, t, 145, V);
}
__name(Xt, "Xt");
function Gt(e, t) {
  let n = A(t), r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = d;
  f().setInt32(e + 4 * 1, o, true), f().setInt32(e + 4 * 0, r, true);
}
__name(Gt, "Gt");
function Ht(e, t) {
  return e in t;
}
__name(Ht, "Ht");
function Jt() {
  let e = _.__wbindgen_export_4, t = e.grow(4);
  e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
}
__name(Jt, "Jt");
function Yt(e) {
  return typeof e == "bigint";
}
__name(Yt, "Yt");
function Kt(e) {
  return typeof e == "function";
}
__name(Kt, "Kt");
function Qt(e) {
  let t = e;
  return typeof t == "object" && t !== null;
}
__name(Qt, "Qt");
function Zt(e) {
  return e === void 0;
}
__name(Zt, "Zt");
function en(e, t) {
  return e === t;
}
__name(en, "en");
function tn(e, t) {
  return e == t;
}
__name(tn, "tn");
function nn() {
  return _.memory;
}
__name(nn, "nn");
function rn(e, t) {
  let n = t, r = typeof n == "number" ? n : void 0;
  f().setFloat64(e + 8 * 1, s(r) ? 0 : r, true), f().setInt32(e + 4 * 0, !s(r), true);
}
__name(rn, "rn");
function _n(e, t) {
  let n = t, r = typeof n == "string" ? n : void 0;
  var o = s(r) ? 0 : p(r, _.__wbindgen_malloc, _.__wbindgen_realloc), a = d;
  f().setInt32(e + 4 * 1, a, true), f().setInt32(e + 4 * 0, o, true);
}
__name(_n, "_n");
function on(e, t) {
  return b(e, t);
}
__name(on, "on");
function cn(e, t) {
  throw new Error(b(e, t));
}
__name(cn, "cn");
var D = new WebAssembly.Instance(sn, { "./index_bg.js": g });
M(D.exports);
D.exports.__wbindgen_start?.();
var S = class extends un {
  static {
    __name(this, "S");
  }
  async fetch(t) {
    return await q(t, this.env, this.ctx);
  }
  async queue(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
  async scheduled(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
};
var fn = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(g).map((e) => {
  fn.includes(e) | e.startsWith("__") || (S.prototype[e] = g[e]);
});
var dn = S;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-HzZUgL/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = dn;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-HzZUgL/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  F as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  E as IntoUnderlyingSource,
  O as MinifyConfig,
  G as PolishConfig,
  j as R2Range,
  H as RequestRedirect,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  _e as __wbg_Error_0497d5bdba9362e5,
  oe as __wbg_String_8f0eb39a4a4c2f66,
  ie as __wbg_abort_18ba44d46e13d7fe,
  ce as __wbg_abort_4198a1129c47f21a,
  se as __wbg_append_0342728346e47425,
  ue as __wbg_buffer_a1a27a0dfa70165d,
  fe as __wbg_buffer_e495ba54cee589cc,
  ae as __wbg_byobRequest_56aa768ee4dfed17,
  be as __wbg_byteLength_937f8a52f9697148,
  ge as __wbg_byteOffset_4d94b7170e641898,
  de as __wbg_call_f2db6205e5c51dc8,
  we as __wbg_call_fbe8be8bf6436ce5,
  le as __wbg_cause_af6ef82a8abe435b,
  pe as __wbg_cf_60aafe7bb03e919a,
  xe as __wbg_clearTimeout_6222fede17abcb1a,
  ye as __wbg_close_290fb040af98d3ac,
  he as __wbg_close_b2641ef0870e518c,
  me as __wbg_done_4d01f352bade43b7,
  Re as __wbg_enqueue_a62faa171c4fd287,
  Se as __wbg_entries_41651c850143b957,
  Ie as __wbg_error_51ecdd39ec054205,
  Ae as __wbg_fetch_a8e43a4e138dfc93,
  Fe as __wbg_fetch_f156d10be9a5c88a,
  Te as __wbg_getRandomValues_38a1ff1ea09f6cc7,
  Ee as __wbg_get_92470be87867c2e5,
  Oe as __wbg_get_a131a44bd1eb6979,
  je as __wbg_has_809e438ee9d787a7,
  Me as __wbg_headers_0f0cbdc6290b6780,
  qe as __wbg_headers_67fbc7839fe933b3,
  ze as __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc,
  ke as __wbg_instanceof_Error_58a92d81483a4b16,
  Le as __wbg_instanceof_Map_80cc65041c96417a,
  Ue as __wbg_instanceof_Response_e80ce8b7a2b968d2,
  De as __wbg_instanceof_Uint8Array_ca460677bc155827,
  Ce as __wbg_isArray_5f090bed72bd4f89,
  Be as __wbg_isSafeInteger_90d7c4674047d684,
  We as __wbg_iterator_4068add5b2aef7a6,
  Ne as __wbg_json_5a6e4c2cfa6f90e1,
  $e as __wbg_length_ab6d22b5ead75c72,
  ve as __wbg_length_f00ec12454a5d9fd,
  Ve as __wbg_method_a3a2d7fac54c95f8,
  Pe as __wbg_new_07b483f72211fd66,
  Xe as __wbg_new_186abcfdff244e42,
  Ge as __wbg_new_476169e6d59f23ae,
  He as __wbg_new_4796e1cd2eb9ea6d,
  Je as __wbg_new_e30c39c06edaabf2,
  Ye as __wbg_new_e52b3efaaa774f96,
  Ke as __wbg_newfromslice_7c05ab1297cb2d88,
  Qe as __wbg_newnoargs_ff528e72d35de39a,
  Ze as __wbg_newwithbyteoffsetandlength_3b01ecda099177e8,
  et as __wbg_newwithlength_08f872dc1e3ada2e,
  tt as __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5,
  nt as __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e,
  rt as __wbg_newwithoptstrandinit_8128e018ed06a4f8,
  _t as __wbg_newwithstrandinit_f8a9dbe009d6be37,
  ot as __wbg_next_8bb824d217961b5d,
  it as __wbg_next_e2da48d8fff7439a,
  ct as __wbg_now_eb0821f3bd9f6529,
  st as __wbg_queueMicrotask_46c1df247678729f,
  ut as __wbg_queueMicrotask_8acf3ccb75ed8d11,
  ft as __wbg_resolve_0dac8c580ffd4678,
  at as __wbg_respond_b227f1c3be2bb879,
  bt as __wbg_setTimeout_2b339866a2aa3789,
  gt as __wbg_set_b042eef31c50834d,
  dt as __wbg_set_c43293f93a35998a,
  wt as __wbg_set_fe4e79d1ed3b0e9b,
  M as __wbg_set_wasm,
  lt as __wbg_setbody_971ec015fc13d6b4,
  pt as __wbg_setcache_a94cd14dc0cc72a2,
  xt as __wbg_setcredentials_920d91fb5984c94a,
  yt as __wbg_setheaders_408564032a1382da,
  ht as __wbg_setheaders_65a4eb4c0443ae61,
  mt as __wbg_setmethod_8ce1be0b4d701b7c,
  Rt as __wbg_setmode_bd35f026f55b6247,
  St as __wbg_setsignal_8e72abfe7ee03c97,
  It as __wbg_setstatus_bd5b448a903a8658,
  At as __wbg_signal_b96223519a041faa,
  Ft as __wbg_static_accessor_GLOBAL_487c52c58d65314d,
  Tt as __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291,
  Et as __wbg_static_accessor_SELF_78c9e3071b912620,
  Ot as __wbg_static_accessor_WINDOW_a093d21393777366,
  jt as __wbg_status_a54682bbe52f9058,
  Mt as __wbg_stringify_c242842b97f054cc,
  qt as __wbg_text_ec0e22f60e30dd2f,
  zt as __wbg_then_82ab9fb4080f1707,
  kt as __wbg_then_db882932c0c714c6,
  Lt as __wbg_toString_21791a66666b3afd,
  Ut as __wbg_url_e6ed869ea05b7a71,
  Dt as __wbg_url_f1c3162019331231,
  Ct as __wbg_value_17b896954e14f896,
  Bt as __wbg_view_a9ad80dcbad7cf1c,
  Wt as __wbindgen_bigint_from_i64,
  Nt as __wbindgen_bigint_from_u64,
  $t as __wbindgen_bigint_get_as_i64,
  vt as __wbindgen_boolean_get,
  Vt as __wbindgen_cb_drop,
  Pt as __wbindgen_closure_wrapper2578,
  Xt as __wbindgen_closure_wrapper408,
  Gt as __wbindgen_debug_string,
  Ht as __wbindgen_in,
  Jt as __wbindgen_init_externref_table,
  Yt as __wbindgen_is_bigint,
  Kt as __wbindgen_is_function,
  Qt as __wbindgen_is_object,
  Zt as __wbindgen_is_undefined,
  en as __wbindgen_jsval_eq,
  tn as __wbindgen_jsval_loose_eq,
  nn as __wbindgen_memory,
  rn as __wbindgen_number_get,
  _n as __wbindgen_string_get,
  on as __wbindgen_string_new,
  cn as __wbindgen_throw,
  middleware_loader_entry_default as default,
  q as fetch,
  sn as wasmModule
};
//# sourceMappingURL=shim.js.map
