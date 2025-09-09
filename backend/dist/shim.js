var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// build/worker/shim.mjs
import mn from "./581f4b367a527f5b5fec24d3cac838b6590b060f-index.wasm";
import { WorkerEntrypoint as Rn } from "cloudflare:workers";
var U = Object.defineProperty;
var B = /* @__PURE__ */ __name((e, t) => {
  for (var n in t) U(e, n, { get: t[n], enumerable: true });
}, "B");
var d = {};
B(d, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => A, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => E, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => I, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => O, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => G, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => q, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => H, "RequestRedirect"), __wbg_Error_0497d5bdba9362e5: /* @__PURE__ */ __name(() => _e, "__wbg_Error_0497d5bdba9362e5"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => oe, "__wbg_String_8f0eb39a4a4c2f66"), __wbg_abort_18ba44d46e13d7fe: /* @__PURE__ */ __name(() => ce, "__wbg_abort_18ba44d46e13d7fe"), __wbg_abort_4198a1129c47f21a: /* @__PURE__ */ __name(() => ie, "__wbg_abort_4198a1129c47f21a"), __wbg_append_0342728346e47425: /* @__PURE__ */ __name(() => se, "__wbg_append_0342728346e47425"), __wbg_bind_dca305d65e40ea3c: /* @__PURE__ */ __name(() => ue, "__wbg_bind_dca305d65e40ea3c"), __wbg_buffer_a1a27a0dfa70165d: /* @__PURE__ */ __name(() => fe, "__wbg_buffer_a1a27a0dfa70165d"), __wbg_buffer_e495ba54cee589cc: /* @__PURE__ */ __name(() => ae, "__wbg_buffer_e495ba54cee589cc"), __wbg_byobRequest_56aa768ee4dfed17: /* @__PURE__ */ __name(() => be, "__wbg_byobRequest_56aa768ee4dfed17"), __wbg_byteLength_937f8a52f9697148: /* @__PURE__ */ __name(() => ge, "__wbg_byteLength_937f8a52f9697148"), __wbg_byteOffset_4d94b7170e641898: /* @__PURE__ */ __name(() => de, "__wbg_byteOffset_4d94b7170e641898"), __wbg_call_f2db6205e5c51dc8: /* @__PURE__ */ __name(() => we, "__wbg_call_f2db6205e5c51dc8"), __wbg_call_fbe8be8bf6436ce5: /* @__PURE__ */ __name(() => le, "__wbg_call_fbe8be8bf6436ce5"), __wbg_cause_af6ef82a8abe435b: /* @__PURE__ */ __name(() => pe, "__wbg_cause_af6ef82a8abe435b"), __wbg_cf_60aafe7bb03e919a: /* @__PURE__ */ __name(() => xe, "__wbg_cf_60aafe7bb03e919a"), __wbg_clearTimeout_6222fede17abcb1a: /* @__PURE__ */ __name(() => ye, "__wbg_clearTimeout_6222fede17abcb1a"), __wbg_close_290fb040af98d3ac: /* @__PURE__ */ __name(() => he, "__wbg_close_290fb040af98d3ac"), __wbg_close_b2641ef0870e518c: /* @__PURE__ */ __name(() => me, "__wbg_close_b2641ef0870e518c"), __wbg_constructor_1a4f07ad72d5cac3: /* @__PURE__ */ __name(() => Re, "__wbg_constructor_1a4f07ad72d5cac3"), __wbg_crypto_574e78ad8b13b65f: /* @__PURE__ */ __name(() => Fe, "__wbg_crypto_574e78ad8b13b65f"), __wbg_done_4d01f352bade43b7: /* @__PURE__ */ __name(() => Se, "__wbg_done_4d01f352bade43b7"), __wbg_enqueue_a62faa171c4fd287: /* @__PURE__ */ __name(() => Te, "__wbg_enqueue_a62faa171c4fd287"), __wbg_error_51ecdd39ec054205: /* @__PURE__ */ __name(() => Ae, "__wbg_error_51ecdd39ec054205"), __wbg_fetch_a8e43a4e138dfc93: /* @__PURE__ */ __name(() => Ee, "__wbg_fetch_a8e43a4e138dfc93"), __wbg_fetch_f156d10be9a5c88a: /* @__PURE__ */ __name(() => Ie, "__wbg_fetch_f156d10be9a5c88a"), __wbg_first_63912989330d222d: /* @__PURE__ */ __name(() => Oe, "__wbg_first_63912989330d222d"), __wbg_getRandomValues_38a1ff1ea09f6cc7: /* @__PURE__ */ __name(() => qe, "__wbg_getRandomValues_38a1ff1ea09f6cc7"), __wbg_getRandomValues_b8f5dbd5f3995a9e: /* @__PURE__ */ __name(() => je, "__wbg_getRandomValues_b8f5dbd5f3995a9e"), __wbg_getTime_2afe67905d873e92: /* @__PURE__ */ __name(() => ze, "__wbg_getTime_2afe67905d873e92"), __wbg_get_92470be87867c2e5: /* @__PURE__ */ __name(() => Me, "__wbg_get_92470be87867c2e5"), __wbg_get_a289e2f1c93b31ad: /* @__PURE__ */ __name(() => ke, "__wbg_get_a289e2f1c93b31ad"), __wbg_getwithrefkey_1dc361bd10053bfe: /* @__PURE__ */ __name(() => Ce, "__wbg_getwithrefkey_1dc361bd10053bfe"), __wbg_has_809e438ee9d787a7: /* @__PURE__ */ __name(() => De, "__wbg_has_809e438ee9d787a7"), __wbg_headers_0f0cbdc6290b6780: /* @__PURE__ */ __name(() => Le, "__wbg_headers_0f0cbdc6290b6780"), __wbg_headers_67fbc7839fe933b3: /* @__PURE__ */ __name(() => Ue, "__wbg_headers_67fbc7839fe933b3"), __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc: /* @__PURE__ */ __name(() => Be, "__wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc"), __wbg_instanceof_Error_58a92d81483a4b16: /* @__PURE__ */ __name(() => We, "__wbg_instanceof_Error_58a92d81483a4b16"), __wbg_instanceof_Response_e80ce8b7a2b968d2: /* @__PURE__ */ __name(() => ve, "__wbg_instanceof_Response_e80ce8b7a2b968d2"), __wbg_instanceof_Uint8Array_ca460677bc155827: /* @__PURE__ */ __name(() => Ve, "__wbg_instanceof_Uint8Array_ca460677bc155827"), __wbg_iterator_4068add5b2aef7a6: /* @__PURE__ */ __name(() => $e, "__wbg_iterator_4068add5b2aef7a6"), __wbg_json_5a6e4c2cfa6f90e1: /* @__PURE__ */ __name(() => Ne, "__wbg_json_5a6e4c2cfa6f90e1"), __wbg_length_ab6d22b5ead75c72: /* @__PURE__ */ __name(() => Pe, "__wbg_length_ab6d22b5ead75c72"), __wbg_log_ea240990d83e374e: /* @__PURE__ */ __name(() => Xe, "__wbg_log_ea240990d83e374e"), __wbg_message_4159c15dac08c5e9: /* @__PURE__ */ __name(() => Ge, "__wbg_message_4159c15dac08c5e9"), __wbg_method_a3a2d7fac54c95f8: /* @__PURE__ */ __name(() => He, "__wbg_method_a3a2d7fac54c95f8"), __wbg_msCrypto_a61aeb35a24c1329: /* @__PURE__ */ __name(() => Je, "__wbg_msCrypto_a61aeb35a24c1329"), __wbg_name_5503b7b8010787c5: /* @__PURE__ */ __name(() => Ye, "__wbg_name_5503b7b8010787c5"), __wbg_new0_97314565408dea38: /* @__PURE__ */ __name(() => Ke, "__wbg_new0_97314565408dea38"), __wbg_new_07b483f72211fd66: /* @__PURE__ */ __name(() => Qe, "__wbg_new_07b483f72211fd66"), __wbg_new_186abcfdff244e42: /* @__PURE__ */ __name(() => Ze, "__wbg_new_186abcfdff244e42"), __wbg_new_476169e6d59f23ae: /* @__PURE__ */ __name(() => et, "__wbg_new_476169e6d59f23ae"), __wbg_new_4796e1cd2eb9ea6d: /* @__PURE__ */ __name(() => tt, "__wbg_new_4796e1cd2eb9ea6d"), __wbg_new_58353953ad2097cc: /* @__PURE__ */ __name(() => nt, "__wbg_new_58353953ad2097cc"), __wbg_new_e30c39c06edaabf2: /* @__PURE__ */ __name(() => rt, "__wbg_new_e30c39c06edaabf2"), __wbg_new_e52b3efaaa774f96: /* @__PURE__ */ __name(() => _t, "__wbg_new_e52b3efaaa774f96"), __wbg_newfromslice_7c05ab1297cb2d88: /* @__PURE__ */ __name(() => ot, "__wbg_newfromslice_7c05ab1297cb2d88"), __wbg_newnoargs_ff528e72d35de39a: /* @__PURE__ */ __name(() => ct, "__wbg_newnoargs_ff528e72d35de39a"), __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: /* @__PURE__ */ __name(() => it, "__wbg_newwithbyteoffsetandlength_3b01ecda099177e8"), __wbg_newwithlength_08f872dc1e3ada2e: /* @__PURE__ */ __name(() => st, "__wbg_newwithlength_08f872dc1e3ada2e"), __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5: /* @__PURE__ */ __name(() => ut, "__wbg_newwithoptbuffersourceandinit_b77afe7366f846b5"), __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e: /* @__PURE__ */ __name(() => ft, "__wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e"), __wbg_newwithoptstrandinit_8128e018ed06a4f8: /* @__PURE__ */ __name(() => at, "__wbg_newwithoptstrandinit_8128e018ed06a4f8"), __wbg_newwithstrandinit_f8a9dbe009d6be37: /* @__PURE__ */ __name(() => bt, "__wbg_newwithstrandinit_f8a9dbe009d6be37"), __wbg_next_8bb824d217961b5d: /* @__PURE__ */ __name(() => gt, "__wbg_next_8bb824d217961b5d"), __wbg_next_e2da48d8fff7439a: /* @__PURE__ */ __name(() => dt, "__wbg_next_e2da48d8fff7439a"), __wbg_node_905d3e251edff8a2: /* @__PURE__ */ __name(() => wt, "__wbg_node_905d3e251edff8a2"), __wbg_now_eb0821f3bd9f6529: /* @__PURE__ */ __name(() => lt, "__wbg_now_eb0821f3bd9f6529"), __wbg_prepare_38ca2752cd3a1ab2: /* @__PURE__ */ __name(() => pt, "__wbg_prepare_38ca2752cd3a1ab2"), __wbg_process_dc0fbacc7c1c06f7: /* @__PURE__ */ __name(() => xt, "__wbg_process_dc0fbacc7c1c06f7"), __wbg_push_73fd7b5550ebf707: /* @__PURE__ */ __name(() => yt, "__wbg_push_73fd7b5550ebf707"), __wbg_queueMicrotask_46c1df247678729f: /* @__PURE__ */ __name(() => ht, "__wbg_queueMicrotask_46c1df247678729f"), __wbg_queueMicrotask_8acf3ccb75ed8d11: /* @__PURE__ */ __name(() => mt, "__wbg_queueMicrotask_8acf3ccb75ed8d11"), __wbg_randomFillSync_ac0988aba3254290: /* @__PURE__ */ __name(() => Rt, "__wbg_randomFillSync_ac0988aba3254290"), __wbg_require_60cc747a6bc5215a: /* @__PURE__ */ __name(() => Ft, "__wbg_require_60cc747a6bc5215a"), __wbg_resolve_0dac8c580ffd4678: /* @__PURE__ */ __name(() => St, "__wbg_resolve_0dac8c580ffd4678"), __wbg_respond_b227f1c3be2bb879: /* @__PURE__ */ __name(() => Tt, "__wbg_respond_b227f1c3be2bb879"), __wbg_run_d2d0b2bf3715233a: /* @__PURE__ */ __name(() => At, "__wbg_run_d2d0b2bf3715233a"), __wbg_setTimeout_2b339866a2aa3789: /* @__PURE__ */ __name(() => Et, "__wbg_setTimeout_2b339866a2aa3789"), __wbg_set_b042eef31c50834d: /* @__PURE__ */ __name(() => It, "__wbg_set_b042eef31c50834d"), __wbg_set_c43293f93a35998a: /* @__PURE__ */ __name(() => Ot, "__wbg_set_c43293f93a35998a"), __wbg_set_fe4e79d1ed3b0e9b: /* @__PURE__ */ __name(() => qt, "__wbg_set_fe4e79d1ed3b0e9b"), __wbg_set_wasm: /* @__PURE__ */ __name(() => j, "__wbg_set_wasm"), __wbg_setbody_971ec015fc13d6b4: /* @__PURE__ */ __name(() => jt, "__wbg_setbody_971ec015fc13d6b4"), __wbg_setcache_a94cd14dc0cc72a2: /* @__PURE__ */ __name(() => zt, "__wbg_setcache_a94cd14dc0cc72a2"), __wbg_setcredentials_920d91fb5984c94a: /* @__PURE__ */ __name(() => Mt, "__wbg_setcredentials_920d91fb5984c94a"), __wbg_setheaders_408564032a1382da: /* @__PURE__ */ __name(() => kt, "__wbg_setheaders_408564032a1382da"), __wbg_setheaders_65a4eb4c0443ae61: /* @__PURE__ */ __name(() => Ct, "__wbg_setheaders_65a4eb4c0443ae61"), __wbg_setmethod_8ce1be0b4d701b7c: /* @__PURE__ */ __name(() => Dt, "__wbg_setmethod_8ce1be0b4d701b7c"), __wbg_setmode_bd35f026f55b6247: /* @__PURE__ */ __name(() => Lt, "__wbg_setmode_bd35f026f55b6247"), __wbg_setsignal_8e72abfe7ee03c97: /* @__PURE__ */ __name(() => Ut, "__wbg_setsignal_8e72abfe7ee03c97"), __wbg_setstatus_bd5b448a903a8658: /* @__PURE__ */ __name(() => Bt, "__wbg_setstatus_bd5b448a903a8658"), __wbg_signal_b96223519a041faa: /* @__PURE__ */ __name(() => Wt, "__wbg_signal_b96223519a041faa"), __wbg_static_accessor_GLOBAL_487c52c58d65314d: /* @__PURE__ */ __name(() => vt, "__wbg_static_accessor_GLOBAL_487c52c58d65314d"), __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: /* @__PURE__ */ __name(() => Vt, "__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291"), __wbg_static_accessor_SELF_78c9e3071b912620: /* @__PURE__ */ __name(() => $t, "__wbg_static_accessor_SELF_78c9e3071b912620"), __wbg_static_accessor_WINDOW_a093d21393777366: /* @__PURE__ */ __name(() => Nt, "__wbg_static_accessor_WINDOW_a093d21393777366"), __wbg_status_a54682bbe52f9058: /* @__PURE__ */ __name(() => Pt, "__wbg_status_a54682bbe52f9058"), __wbg_stringify_c242842b97f054cc: /* @__PURE__ */ __name(() => Xt, "__wbg_stringify_c242842b97f054cc"), __wbg_subarray_dd4ade7d53bd8e26: /* @__PURE__ */ __name(() => Gt, "__wbg_subarray_dd4ade7d53bd8e26"), __wbg_text_ec0e22f60e30dd2f: /* @__PURE__ */ __name(() => Ht, "__wbg_text_ec0e22f60e30dd2f"), __wbg_then_82ab9fb4080f1707: /* @__PURE__ */ __name(() => Jt, "__wbg_then_82ab9fb4080f1707"), __wbg_then_db882932c0c714c6: /* @__PURE__ */ __name(() => Yt, "__wbg_then_db882932c0c714c6"), __wbg_toString_21791a66666b3afd: /* @__PURE__ */ __name(() => Kt, "__wbg_toString_21791a66666b3afd"), __wbg_url_e6ed869ea05b7a71: /* @__PURE__ */ __name(() => Qt, "__wbg_url_e6ed869ea05b7a71"), __wbg_url_f1c3162019331231: /* @__PURE__ */ __name(() => Zt, "__wbg_url_f1c3162019331231"), __wbg_value_17b896954e14f896: /* @__PURE__ */ __name(() => en, "__wbg_value_17b896954e14f896"), __wbg_versions_c01dfd4722a88165: /* @__PURE__ */ __name(() => tn, "__wbg_versions_c01dfd4722a88165"), __wbg_view_a9ad80dcbad7cf1c: /* @__PURE__ */ __name(() => nn, "__wbg_view_a9ad80dcbad7cf1c"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => rn, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => _n, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper2837: /* @__PURE__ */ __name(() => on, "__wbindgen_closure_wrapper2837"), __wbindgen_closure_wrapper479: /* @__PURE__ */ __name(() => cn, "__wbindgen_closure_wrapper479"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => sn, "__wbindgen_debug_string"), __wbindgen_in: /* @__PURE__ */ __name(() => un, "__wbindgen_in"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => fn, "__wbindgen_init_externref_table"), __wbindgen_is_function: /* @__PURE__ */ __name(() => an, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => bn, "__wbindgen_is_object"), __wbindgen_is_string: /* @__PURE__ */ __name(() => gn, "__wbindgen_is_string"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => dn, "__wbindgen_is_undefined"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => wn, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => ln, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => pn, "__wbindgen_number_get"), __wbindgen_string_get: /* @__PURE__ */ __name(() => xn, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => yn, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => hn, "__wbindgen_throw"), fetch: /* @__PURE__ */ __name(() => z, "fetch") });
var r;
function j(e) {
  r = e;
}
__name(j, "j");
var h = null;
function x() {
  return (h === null || h.byteLength === 0) && (h = new Uint8Array(r.memory.buffer)), h;
}
__name(x, "x");
var k = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var m = new k("utf-8", { ignoreBOM: true, fatal: true });
m.decode();
var W = 2146435072;
var S = 0;
function v(e, t) {
  return S += t, S >= W && (m = new k("utf-8", { ignoreBOM: true, fatal: true }), m.decode(), S = t), m.decode(x().subarray(e, e + t));
}
__name(v, "v");
function b(e, t) {
  return e = e >>> 0, v(e, t);
}
__name(b, "b");
var g = 0;
var V = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var R = new V("utf-8");
var $ = typeof R.encodeInto == "function" ? function(e, t) {
  return R.encodeInto(e, t);
} : function(e, t) {
  let n = R.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function l(e, t, n) {
  if (n === void 0) {
    let f = R.encode(e), y = t(f.length, 1) >>> 0;
    return x().subarray(y, y + f.length).set(f), g = f.length, y;
  }
  let _ = e.length, o = t(_, 1) >>> 0, u = x(), i = 0;
  for (; i < _; i++) {
    let f = e.charCodeAt(i);
    if (f > 127) break;
    u[o + i] = f;
  }
  if (i !== _) {
    i !== 0 && (e = e.slice(i)), o = n(o, _, _ = i + e.length * 3, 1) >>> 0;
    let f = x().subarray(o + i, o + _);
    i += $(e, f).written, o = n(o, _, i, 1) >>> 0;
  }
  return g = i, o;
}
__name(l, "l");
var p = null;
function a() {
  return (p === null || p.buffer.detached === true || p.buffer.detached === void 0 && p.buffer !== r.memory.buffer) && (p = new DataView(r.memory.buffer)), p;
}
__name(a, "a");
function w(e) {
  let t = r.__externref_table_alloc();
  return r.__wbindgen_export_4.set(t, e), t;
}
__name(w, "w");
function c(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let _ = w(n);
    r.__wbindgen_exn_store(_);
  }
}
__name(c, "c");
function s(e) {
  return e == null;
}
__name(s, "s");
function C(e, t) {
  return e = e >>> 0, x().subarray(e / 1, e / 1 + t);
}
__name(C, "C");
var M = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => {
  r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
});
function D(e, t, n, _) {
  let o = { a: e, b: t, cnt: 1, dtor: n }, u = /* @__PURE__ */ __name((...i) => {
    o.cnt++;
    let f = o.a;
    o.a = 0;
    try {
      return _(f, o.b, ...i);
    } finally {
      --o.cnt === 0 ? (r.__wbindgen_export_5.get(o.dtor)(f, o.b), M.unregister(o)) : o.a = f;
    }
  }, "u");
  return u.original = o, M.register(u, o, o), u;
}
__name(D, "D");
function T(e) {
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
    let o = e.length, u = "[";
    o > 0 && (u += T(e[0]));
    for (let i = 1; i < o; i++) u += ", " + T(e[i]);
    return u += "]", u;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (n && n.length > 1) _ = n[1];
  else return toString.call(e);
  if (_ == "Object") try {
    return "Object(" + JSON.stringify(e) + ")";
  } catch {
    return "Object";
  }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
__name(T, "T");
function z(e, t, n) {
  return r.fetch(e, t, n);
}
__name(z, "z");
function N(e, t) {
  r.wasm_bindgen__convert__closures_____invoke__h3d00556bc29b6c8c(e, t);
}
__name(N, "N");
function P(e, t, n) {
  r.closure1044_externref_shim(e, t, n);
}
__name(P, "P");
function X(e, t, n, _) {
  r.closure1090_externref_shim(e, t, n, _);
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
}, "unregister") } : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
var A = class {
  static {
    __name(this, "A");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t, 0);
  }
  get type() {
    let t = r.intounderlyingbytesource_type(this.__wbg_ptr);
    return J[t];
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    r.intounderlyingbytesource_start(this.__wbg_ptr, t);
  }
  pull(t) {
    return r.intounderlyingbytesource_pull(this.__wbg_ptr, t);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
};
var ee = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t, 0);
  }
  write(t) {
    return r.intounderlyingsink_write(this.__wbg_ptr, t);
  }
  close() {
    let t = this.__destroy_into_raw();
    return r.intounderlyingsink_close(t);
  }
  abort(t) {
    let n = this.__destroy_into_raw();
    return r.intounderlyingsink_abort(n, t);
  }
};
var te = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
var I = class {
  static {
    __name(this, "I");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, te.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t, 0);
  }
  pull(t) {
    return r.intounderlyingsource_pull(this.__wbg_ptr, t);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(t);
  }
};
var ne = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => r.__wbg_minifyconfig_free(e >>> 0, 1));
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
    r.__wbg_minifyconfig_free(t, 0);
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var re = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => r.__wbg_r2range_free(e >>> 0, 1));
var q = class {
  static {
    __name(this, "q");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, re.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_r2range_free(t, 0);
  }
  get offset() {
    let t = r.__wbg_get_r2range_offset(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set offset(t) {
    r.__wbg_set_r2range_offset(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
  get length() {
    let t = r.__wbg_get_r2range_length(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set length(t) {
    r.__wbg_set_r2range_length(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
  get suffix() {
    let t = r.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set suffix(t) {
    r.__wbg_set_r2range_suffix(this.__wbg_ptr, !s(t), s(t) ? 0 : t);
  }
};
function _e(e, t) {
  return Error(b(e, t));
}
__name(_e, "_e");
function oe(e, t) {
  let n = String(t), _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
  a().setInt32(e + 4 * 1, o, true), a().setInt32(e + 4 * 0, _, true);
}
__name(oe, "oe");
function ce(e) {
  e.abort();
}
__name(ce, "ce");
function ie(e, t) {
  e.abort(t);
}
__name(ie, "ie");
function se() {
  return c(function(e, t, n, _, o) {
    e.append(b(t, n), b(_, o));
  }, arguments);
}
__name(se, "se");
function ue() {
  return c(function(e, t) {
    return e.bind(...t);
  }, arguments);
}
__name(ue, "ue");
function fe(e) {
  return e.buffer;
}
__name(fe, "fe");
function ae(e) {
  return e.buffer;
}
__name(ae, "ae");
function be(e) {
  let t = e.byobRequest;
  return s(t) ? 0 : w(t);
}
__name(be, "be");
function ge(e) {
  return e.byteLength;
}
__name(ge, "ge");
function de(e) {
  return e.byteOffset;
}
__name(de, "de");
function we() {
  return c(function(e, t, n) {
    return e.call(t, n);
  }, arguments);
}
__name(we, "we");
function le() {
  return c(function(e, t) {
    return e.call(t);
  }, arguments);
}
__name(le, "le");
function pe(e) {
  return e.cause;
}
__name(pe, "pe");
function xe() {
  return c(function(e) {
    let t = e.cf;
    return s(t) ? 0 : w(t);
  }, arguments);
}
__name(xe, "xe");
function ye(e) {
  return clearTimeout(e);
}
__name(ye, "ye");
function he() {
  return c(function(e) {
    e.close();
  }, arguments);
}
__name(he, "he");
function me() {
  return c(function(e) {
    e.close();
  }, arguments);
}
__name(me, "me");
function Re(e) {
  return e.constructor;
}
__name(Re, "Re");
function Fe(e) {
  return e.crypto;
}
__name(Fe, "Fe");
function Se(e) {
  return e.done;
}
__name(Se, "Se");
function Te() {
  return c(function(e, t) {
    e.enqueue(t);
  }, arguments);
}
__name(Te, "Te");
function Ae(e) {
  console.error(e);
}
__name(Ae, "Ae");
function Ee(e, t) {
  return e.fetch(t);
}
__name(Ee, "Ee");
function Ie(e) {
  return fetch(e);
}
__name(Ie, "Ie");
function Oe() {
  return c(function(e, t, n) {
    return e.first(t === 0 ? void 0 : b(t, n));
  }, arguments);
}
__name(Oe, "Oe");
function qe() {
  return c(function(e, t) {
    globalThis.crypto.getRandomValues(C(e, t));
  }, arguments);
}
__name(qe, "qe");
function je() {
  return c(function(e, t) {
    e.getRandomValues(t);
  }, arguments);
}
__name(je, "je");
function ze(e) {
  return e.getTime();
}
__name(ze, "ze");
function Me() {
  return c(function(e, t) {
    return Reflect.get(e, t);
  }, arguments);
}
__name(Me, "Me");
function ke() {
  return c(function(e, t, n, _) {
    let o = t.get(b(n, _));
    var u = s(o) ? 0 : l(o, r.__wbindgen_malloc, r.__wbindgen_realloc), i = g;
    a().setInt32(e + 4 * 1, i, true), a().setInt32(e + 4 * 0, u, true);
  }, arguments);
}
__name(ke, "ke");
function Ce(e, t) {
  return e[t];
}
__name(Ce, "Ce");
function De() {
  return c(function(e, t) {
    return Reflect.has(e, t);
  }, arguments);
}
__name(De, "De");
function Le(e) {
  return e.headers;
}
__name(Le, "Le");
function Ue(e) {
  return e.headers;
}
__name(Ue, "Ue");
function Be(e) {
  let t;
  try {
    t = e instanceof ArrayBuffer;
  } catch {
    t = false;
  }
  return t;
}
__name(Be, "Be");
function We(e) {
  let t;
  try {
    t = e instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
__name(We, "We");
function ve(e) {
  let t;
  try {
    t = e instanceof Response;
  } catch {
    t = false;
  }
  return t;
}
__name(ve, "ve");
function Ve(e) {
  let t;
  try {
    t = e instanceof Uint8Array;
  } catch {
    t = false;
  }
  return t;
}
__name(Ve, "Ve");
function $e() {
  return Symbol.iterator;
}
__name($e, "$e");
function Ne() {
  return c(function(e) {
    return e.json();
  }, arguments);
}
__name(Ne, "Ne");
function Pe(e) {
  return e.length;
}
__name(Pe, "Pe");
function Xe(e) {
  console.log(e);
}
__name(Xe, "Xe");
function Ge(e) {
  return e.message;
}
__name(Ge, "Ge");
function He(e, t) {
  let n = t.method, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
  a().setInt32(e + 4 * 1, o, true), a().setInt32(e + 4 * 0, _, true);
}
__name(He, "He");
function Je(e) {
  return e.msCrypto;
}
__name(Je, "Je");
function Ye(e) {
  return e.name;
}
__name(Ye, "Ye");
function Ke() {
  return /* @__PURE__ */ new Date();
}
__name(Ke, "Ke");
function Qe() {
  return new Object();
}
__name(Qe, "Qe");
function Ze() {
  return c(function() {
    return new AbortController();
  }, arguments);
}
__name(Ze, "Ze");
function et(e, t) {
  return new Error(b(e, t));
}
__name(et, "et");
function tt() {
  return c(function() {
    return new Headers();
  }, arguments);
}
__name(tt, "tt");
function nt() {
  return new Array();
}
__name(nt, "nt");
function rt(e, t) {
  try {
    var n = { a: e, b: t }, _ = /* @__PURE__ */ __name((u, i) => {
      let f = n.a;
      n.a = 0;
      try {
        return X(f, n.b, u, i);
      } finally {
        n.a = f;
      }
    }, "_");
    return new Promise(_);
  } finally {
    n.a = n.b = 0;
  }
}
__name(rt, "rt");
function _t(e) {
  return new Uint8Array(e);
}
__name(_t, "_t");
function ot(e, t) {
  return new Uint8Array(C(e, t));
}
__name(ot, "ot");
function ct(e, t) {
  return new Function(b(e, t));
}
__name(ct, "ct");
function it(e, t, n) {
  return new Uint8Array(e, t >>> 0, n >>> 0);
}
__name(it, "it");
function st(e) {
  return new Uint8Array(e >>> 0);
}
__name(st, "st");
function ut() {
  return c(function(e, t) {
    return new Response(e, t);
  }, arguments);
}
__name(ut, "ut");
function ft() {
  return c(function(e, t) {
    return new Response(e, t);
  }, arguments);
}
__name(ft, "ft");
function at() {
  return c(function(e, t, n) {
    return new Response(e === 0 ? void 0 : b(e, t), n);
  }, arguments);
}
__name(at, "at");
function bt() {
  return c(function(e, t, n) {
    return new Request(b(e, t), n);
  }, arguments);
}
__name(bt, "bt");
function gt(e) {
  return e.next;
}
__name(gt, "gt");
function dt() {
  return c(function(e) {
    return e.next();
  }, arguments);
}
__name(dt, "dt");
function wt(e) {
  return e.node;
}
__name(wt, "wt");
function lt() {
  return Date.now();
}
__name(lt, "lt");
function pt() {
  return c(function(e, t, n) {
    return e.prepare(b(t, n));
  }, arguments);
}
__name(pt, "pt");
function xt(e) {
  return e.process;
}
__name(xt, "xt");
function yt(e, t) {
  return e.push(t);
}
__name(yt, "yt");
function ht(e) {
  queueMicrotask(e);
}
__name(ht, "ht");
function mt(e) {
  return e.queueMicrotask;
}
__name(mt, "mt");
function Rt() {
  return c(function(e, t) {
    e.randomFillSync(t);
  }, arguments);
}
__name(Rt, "Rt");
function Ft() {
  return c(function() {
    return module.require;
  }, arguments);
}
__name(Ft, "Ft");
function St(e) {
  return Promise.resolve(e);
}
__name(St, "St");
function Tt() {
  return c(function(e, t) {
    e.respond(t >>> 0);
  }, arguments);
}
__name(Tt, "Tt");
function At() {
  return c(function(e) {
    return e.run();
  }, arguments);
}
__name(At, "At");
function Et(e, t) {
  return setTimeout(e, t);
}
__name(Et, "Et");
function It() {
  return c(function(e, t, n, _, o) {
    e.set(b(t, n), b(_, o));
  }, arguments);
}
__name(It, "It");
function Ot() {
  return c(function(e, t, n) {
    return Reflect.set(e, t, n);
  }, arguments);
}
__name(Ot, "Ot");
function qt(e, t, n) {
  e.set(t, n >>> 0);
}
__name(qt, "qt");
function jt(e, t) {
  e.body = t;
}
__name(jt, "jt");
function zt(e, t) {
  e.cache = Y[t];
}
__name(zt, "zt");
function Mt(e, t) {
  e.credentials = K[t];
}
__name(Mt, "Mt");
function kt(e, t) {
  e.headers = t;
}
__name(kt, "kt");
function Ct(e, t) {
  e.headers = t;
}
__name(Ct, "Ct");
function Dt(e, t, n) {
  e.method = b(t, n);
}
__name(Dt, "Dt");
function Lt(e, t) {
  e.mode = Q[t];
}
__name(Lt, "Lt");
function Ut(e, t) {
  e.signal = t;
}
__name(Ut, "Ut");
function Bt(e, t) {
  e.status = t;
}
__name(Bt, "Bt");
function Wt(e) {
  return e.signal;
}
__name(Wt, "Wt");
function vt() {
  let e = typeof global > "u" ? null : global;
  return s(e) ? 0 : w(e);
}
__name(vt, "vt");
function Vt() {
  let e = typeof globalThis > "u" ? null : globalThis;
  return s(e) ? 0 : w(e);
}
__name(Vt, "Vt");
function $t() {
  let e = typeof self > "u" ? null : self;
  return s(e) ? 0 : w(e);
}
__name($t, "$t");
function Nt() {
  let e = typeof window > "u" ? null : window;
  return s(e) ? 0 : w(e);
}
__name(Nt, "Nt");
function Pt(e) {
  return e.status;
}
__name(Pt, "Pt");
function Xt() {
  return c(function(e) {
    return JSON.stringify(e);
  }, arguments);
}
__name(Xt, "Xt");
function Gt(e, t, n) {
  return e.subarray(t >>> 0, n >>> 0);
}
__name(Gt, "Gt");
function Ht() {
  return c(function(e) {
    return e.text();
  }, arguments);
}
__name(Ht, "Ht");
function Jt(e, t, n) {
  return e.then(t, n);
}
__name(Jt, "Jt");
function Yt(e, t) {
  return e.then(t);
}
__name(Yt, "Yt");
function Kt(e) {
  return e.toString();
}
__name(Kt, "Kt");
function Qt(e, t) {
  let n = t.url, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
  a().setInt32(e + 4 * 1, o, true), a().setInt32(e + 4 * 0, _, true);
}
__name(Qt, "Qt");
function Zt(e, t) {
  let n = t.url, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
  a().setInt32(e + 4 * 1, o, true), a().setInt32(e + 4 * 0, _, true);
}
__name(Zt, "Zt");
function en(e) {
  return e.value;
}
__name(en, "en");
function tn(e) {
  return e.versions;
}
__name(tn, "tn");
function nn(e) {
  let t = e.view;
  return s(t) ? 0 : w(t);
}
__name(nn, "nn");
function rn(e) {
  let t = e;
  return typeof t == "boolean" ? t ? 1 : 0 : 2;
}
__name(rn, "rn");
function _n(e) {
  let t = e.original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
__name(_n, "_n");
function on(e, t, n) {
  return D(e, t, 1043, P);
}
__name(on, "on");
function cn(e, t, n) {
  return D(e, t, 172, N);
}
__name(cn, "cn");
function sn(e, t) {
  let n = T(t), _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
  a().setInt32(e + 4 * 1, o, true), a().setInt32(e + 4 * 0, _, true);
}
__name(sn, "sn");
function un(e, t) {
  return e in t;
}
__name(un, "un");
function fn() {
  let e = r.__wbindgen_export_4, t = e.grow(4);
  e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
}
__name(fn, "fn");
function an(e) {
  return typeof e == "function";
}
__name(an, "an");
function bn(e) {
  let t = e;
  return typeof t == "object" && t !== null;
}
__name(bn, "bn");
function gn(e) {
  return typeof e == "string";
}
__name(gn, "gn");
function dn(e) {
  return e === void 0;
}
__name(dn, "dn");
function wn(e, t) {
  return e == t;
}
__name(wn, "wn");
function ln() {
  return r.memory;
}
__name(ln, "ln");
function pn(e, t) {
  let n = t, _ = typeof n == "number" ? n : void 0;
  a().setFloat64(e + 8 * 1, s(_) ? 0 : _, true), a().setInt32(e + 4 * 0, !s(_), true);
}
__name(pn, "pn");
function xn(e, t) {
  let n = t, _ = typeof n == "string" ? n : void 0;
  var o = s(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), u = g;
  a().setInt32(e + 4 * 1, u, true), a().setInt32(e + 4 * 0, o, true);
}
__name(xn, "xn");
function yn(e, t) {
  return b(e, t);
}
__name(yn, "yn");
function hn(e, t) {
  throw new Error(b(e, t));
}
__name(hn, "hn");
var L = new WebAssembly.Instance(mn, { "./index_bg.js": d });
j(L.exports);
L.exports.__wbindgen_start?.();
var F = class extends Rn {
  static {
    __name(this, "F");
  }
  async fetch(t) {
    return await z(t, this.env, this.ctx);
  }
  async queue(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
  async scheduled(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
};
var Fn = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(d).map((e) => {
  Fn.includes(e) | e.startsWith("__") || (F.prototype[e] = d[e]);
});
var En = F;
export {
  A as IntoUnderlyingByteSource,
  E as IntoUnderlyingSink,
  I as IntoUnderlyingSource,
  O as MinifyConfig,
  G as PolishConfig,
  q as R2Range,
  H as RequestRedirect,
  _e as __wbg_Error_0497d5bdba9362e5,
  oe as __wbg_String_8f0eb39a4a4c2f66,
  ce as __wbg_abort_18ba44d46e13d7fe,
  ie as __wbg_abort_4198a1129c47f21a,
  se as __wbg_append_0342728346e47425,
  ue as __wbg_bind_dca305d65e40ea3c,
  fe as __wbg_buffer_a1a27a0dfa70165d,
  ae as __wbg_buffer_e495ba54cee589cc,
  be as __wbg_byobRequest_56aa768ee4dfed17,
  ge as __wbg_byteLength_937f8a52f9697148,
  de as __wbg_byteOffset_4d94b7170e641898,
  we as __wbg_call_f2db6205e5c51dc8,
  le as __wbg_call_fbe8be8bf6436ce5,
  pe as __wbg_cause_af6ef82a8abe435b,
  xe as __wbg_cf_60aafe7bb03e919a,
  ye as __wbg_clearTimeout_6222fede17abcb1a,
  he as __wbg_close_290fb040af98d3ac,
  me as __wbg_close_b2641ef0870e518c,
  Re as __wbg_constructor_1a4f07ad72d5cac3,
  Fe as __wbg_crypto_574e78ad8b13b65f,
  Se as __wbg_done_4d01f352bade43b7,
  Te as __wbg_enqueue_a62faa171c4fd287,
  Ae as __wbg_error_51ecdd39ec054205,
  Ee as __wbg_fetch_a8e43a4e138dfc93,
  Ie as __wbg_fetch_f156d10be9a5c88a,
  Oe as __wbg_first_63912989330d222d,
  qe as __wbg_getRandomValues_38a1ff1ea09f6cc7,
  je as __wbg_getRandomValues_b8f5dbd5f3995a9e,
  ze as __wbg_getTime_2afe67905d873e92,
  Me as __wbg_get_92470be87867c2e5,
  ke as __wbg_get_a289e2f1c93b31ad,
  Ce as __wbg_getwithrefkey_1dc361bd10053bfe,
  De as __wbg_has_809e438ee9d787a7,
  Le as __wbg_headers_0f0cbdc6290b6780,
  Ue as __wbg_headers_67fbc7839fe933b3,
  Be as __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc,
  We as __wbg_instanceof_Error_58a92d81483a4b16,
  ve as __wbg_instanceof_Response_e80ce8b7a2b968d2,
  Ve as __wbg_instanceof_Uint8Array_ca460677bc155827,
  $e as __wbg_iterator_4068add5b2aef7a6,
  Ne as __wbg_json_5a6e4c2cfa6f90e1,
  Pe as __wbg_length_ab6d22b5ead75c72,
  Xe as __wbg_log_ea240990d83e374e,
  Ge as __wbg_message_4159c15dac08c5e9,
  He as __wbg_method_a3a2d7fac54c95f8,
  Je as __wbg_msCrypto_a61aeb35a24c1329,
  Ye as __wbg_name_5503b7b8010787c5,
  Ke as __wbg_new0_97314565408dea38,
  Qe as __wbg_new_07b483f72211fd66,
  Ze as __wbg_new_186abcfdff244e42,
  et as __wbg_new_476169e6d59f23ae,
  tt as __wbg_new_4796e1cd2eb9ea6d,
  nt as __wbg_new_58353953ad2097cc,
  rt as __wbg_new_e30c39c06edaabf2,
  _t as __wbg_new_e52b3efaaa774f96,
  ot as __wbg_newfromslice_7c05ab1297cb2d88,
  ct as __wbg_newnoargs_ff528e72d35de39a,
  it as __wbg_newwithbyteoffsetandlength_3b01ecda099177e8,
  st as __wbg_newwithlength_08f872dc1e3ada2e,
  ut as __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5,
  ft as __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e,
  at as __wbg_newwithoptstrandinit_8128e018ed06a4f8,
  bt as __wbg_newwithstrandinit_f8a9dbe009d6be37,
  gt as __wbg_next_8bb824d217961b5d,
  dt as __wbg_next_e2da48d8fff7439a,
  wt as __wbg_node_905d3e251edff8a2,
  lt as __wbg_now_eb0821f3bd9f6529,
  pt as __wbg_prepare_38ca2752cd3a1ab2,
  xt as __wbg_process_dc0fbacc7c1c06f7,
  yt as __wbg_push_73fd7b5550ebf707,
  ht as __wbg_queueMicrotask_46c1df247678729f,
  mt as __wbg_queueMicrotask_8acf3ccb75ed8d11,
  Rt as __wbg_randomFillSync_ac0988aba3254290,
  Ft as __wbg_require_60cc747a6bc5215a,
  St as __wbg_resolve_0dac8c580ffd4678,
  Tt as __wbg_respond_b227f1c3be2bb879,
  At as __wbg_run_d2d0b2bf3715233a,
  Et as __wbg_setTimeout_2b339866a2aa3789,
  It as __wbg_set_b042eef31c50834d,
  Ot as __wbg_set_c43293f93a35998a,
  qt as __wbg_set_fe4e79d1ed3b0e9b,
  j as __wbg_set_wasm,
  jt as __wbg_setbody_971ec015fc13d6b4,
  zt as __wbg_setcache_a94cd14dc0cc72a2,
  Mt as __wbg_setcredentials_920d91fb5984c94a,
  kt as __wbg_setheaders_408564032a1382da,
  Ct as __wbg_setheaders_65a4eb4c0443ae61,
  Dt as __wbg_setmethod_8ce1be0b4d701b7c,
  Lt as __wbg_setmode_bd35f026f55b6247,
  Ut as __wbg_setsignal_8e72abfe7ee03c97,
  Bt as __wbg_setstatus_bd5b448a903a8658,
  Wt as __wbg_signal_b96223519a041faa,
  vt as __wbg_static_accessor_GLOBAL_487c52c58d65314d,
  Vt as __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291,
  $t as __wbg_static_accessor_SELF_78c9e3071b912620,
  Nt as __wbg_static_accessor_WINDOW_a093d21393777366,
  Pt as __wbg_status_a54682bbe52f9058,
  Xt as __wbg_stringify_c242842b97f054cc,
  Gt as __wbg_subarray_dd4ade7d53bd8e26,
  Ht as __wbg_text_ec0e22f60e30dd2f,
  Jt as __wbg_then_82ab9fb4080f1707,
  Yt as __wbg_then_db882932c0c714c6,
  Kt as __wbg_toString_21791a66666b3afd,
  Qt as __wbg_url_e6ed869ea05b7a71,
  Zt as __wbg_url_f1c3162019331231,
  en as __wbg_value_17b896954e14f896,
  tn as __wbg_versions_c01dfd4722a88165,
  nn as __wbg_view_a9ad80dcbad7cf1c,
  rn as __wbindgen_boolean_get,
  _n as __wbindgen_cb_drop,
  on as __wbindgen_closure_wrapper2837,
  cn as __wbindgen_closure_wrapper479,
  sn as __wbindgen_debug_string,
  un as __wbindgen_in,
  fn as __wbindgen_init_externref_table,
  an as __wbindgen_is_function,
  bn as __wbindgen_is_object,
  gn as __wbindgen_is_string,
  dn as __wbindgen_is_undefined,
  wn as __wbindgen_jsval_loose_eq,
  ln as __wbindgen_memory,
  pn as __wbindgen_number_get,
  xn as __wbindgen_string_get,
  yn as __wbindgen_string_new,
  hn as __wbindgen_throw,
  En as default,
  z as fetch,
  mn as wasmModule
};
//# sourceMappingURL=shim.js.map
