var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-VQxnHr/checked-fetch.js
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
import Dn from "./9605477f1a9450da3ec9591de1fd966e5a655748-index.wasm";
import { WorkerEntrypoint as Ln } from "cloudflare:workers";
var U = Object.defineProperty;
var B = /* @__PURE__ */ __name((t, e) => {
  for (var n in e) U(t, n, { get: e[n], enumerable: true });
}, "B");
var w = {};
B(w, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => A, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => T, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => E, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => O, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => G, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => j, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => H, "RequestRedirect"), __wbg_Error_0497d5bdba9362e5: /* @__PURE__ */ __name(() => _t, "__wbg_Error_0497d5bdba9362e5"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => ot, "__wbg_String_8f0eb39a4a4c2f66"), __wbg_abort_18ba44d46e13d7fe: /* @__PURE__ */ __name(() => ct, "__wbg_abort_18ba44d46e13d7fe"), __wbg_abort_4198a1129c47f21a: /* @__PURE__ */ __name(() => it, "__wbg_abort_4198a1129c47f21a"), __wbg_all_92394bdc295ef929: /* @__PURE__ */ __name(() => st, "__wbg_all_92394bdc295ef929"), __wbg_append_0342728346e47425: /* @__PURE__ */ __name(() => ut, "__wbg_append_0342728346e47425"), __wbg_bind_dca305d65e40ea3c: /* @__PURE__ */ __name(() => ft, "__wbg_bind_dca305d65e40ea3c"), __wbg_buffer_a1a27a0dfa70165d: /* @__PURE__ */ __name(() => at, "__wbg_buffer_a1a27a0dfa70165d"), __wbg_buffer_e495ba54cee589cc: /* @__PURE__ */ __name(() => bt, "__wbg_buffer_e495ba54cee589cc"), __wbg_byobRequest_56aa768ee4dfed17: /* @__PURE__ */ __name(() => gt, "__wbg_byobRequest_56aa768ee4dfed17"), __wbg_byteLength_937f8a52f9697148: /* @__PURE__ */ __name(() => dt, "__wbg_byteLength_937f8a52f9697148"), __wbg_byteOffset_4d94b7170e641898: /* @__PURE__ */ __name(() => wt, "__wbg_byteOffset_4d94b7170e641898"), __wbg_call_f2db6205e5c51dc8: /* @__PURE__ */ __name(() => lt, "__wbg_call_f2db6205e5c51dc8"), __wbg_call_fbe8be8bf6436ce5: /* @__PURE__ */ __name(() => pt, "__wbg_call_fbe8be8bf6436ce5"), __wbg_cause_af6ef82a8abe435b: /* @__PURE__ */ __name(() => xt, "__wbg_cause_af6ef82a8abe435b"), __wbg_cf_60aafe7bb03e919a: /* @__PURE__ */ __name(() => yt, "__wbg_cf_60aafe7bb03e919a"), __wbg_clearTimeout_6222fede17abcb1a: /* @__PURE__ */ __name(() => ht, "__wbg_clearTimeout_6222fede17abcb1a"), __wbg_close_290fb040af98d3ac: /* @__PURE__ */ __name(() => mt, "__wbg_close_290fb040af98d3ac"), __wbg_close_b2641ef0870e518c: /* @__PURE__ */ __name(() => Rt, "__wbg_close_b2641ef0870e518c"), __wbg_constructor_1a4f07ad72d5cac3: /* @__PURE__ */ __name(() => St, "__wbg_constructor_1a4f07ad72d5cac3"), __wbg_crypto_574e78ad8b13b65f: /* @__PURE__ */ __name(() => It, "__wbg_crypto_574e78ad8b13b65f"), __wbg_done_4d01f352bade43b7: /* @__PURE__ */ __name(() => Ft, "__wbg_done_4d01f352bade43b7"), __wbg_enqueue_a62faa171c4fd287: /* @__PURE__ */ __name(() => At, "__wbg_enqueue_a62faa171c4fd287"), __wbg_entries_41651c850143b957: /* @__PURE__ */ __name(() => Tt, "__wbg_entries_41651c850143b957"), __wbg_error_51ecdd39ec054205: /* @__PURE__ */ __name(() => Et, "__wbg_error_51ecdd39ec054205"), __wbg_fetch_a8e43a4e138dfc93: /* @__PURE__ */ __name(() => Ot, "__wbg_fetch_a8e43a4e138dfc93"), __wbg_fetch_f156d10be9a5c88a: /* @__PURE__ */ __name(() => jt, "__wbg_fetch_f156d10be9a5c88a"), __wbg_first_63912989330d222d: /* @__PURE__ */ __name(() => qt, "__wbg_first_63912989330d222d"), __wbg_getRandomValues_38a1ff1ea09f6cc7: /* @__PURE__ */ __name(() => Mt, "__wbg_getRandomValues_38a1ff1ea09f6cc7"), __wbg_getRandomValues_b8f5dbd5f3995a9e: /* @__PURE__ */ __name(() => zt, "__wbg_getRandomValues_b8f5dbd5f3995a9e"), __wbg_getTime_2afe67905d873e92: /* @__PURE__ */ __name(() => kt, "__wbg_getTime_2afe67905d873e92"), __wbg_get_92470be87867c2e5: /* @__PURE__ */ __name(() => Ct, "__wbg_get_92470be87867c2e5"), __wbg_get_a131a44bd1eb6979: /* @__PURE__ */ __name(() => Dt, "__wbg_get_a131a44bd1eb6979"), __wbg_get_a289e2f1c93b31ad: /* @__PURE__ */ __name(() => Lt, "__wbg_get_a289e2f1c93b31ad"), __wbg_getwithrefkey_1dc361bd10053bfe: /* @__PURE__ */ __name(() => Ut, "__wbg_getwithrefkey_1dc361bd10053bfe"), __wbg_has_809e438ee9d787a7: /* @__PURE__ */ __name(() => Bt, "__wbg_has_809e438ee9d787a7"), __wbg_headers_0f0cbdc6290b6780: /* @__PURE__ */ __name(() => vt, "__wbg_headers_0f0cbdc6290b6780"), __wbg_headers_67fbc7839fe933b3: /* @__PURE__ */ __name(() => Wt, "__wbg_headers_67fbc7839fe933b3"), __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc: /* @__PURE__ */ __name(() => Nt, "__wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc"), __wbg_instanceof_Error_58a92d81483a4b16: /* @__PURE__ */ __name(() => Vt, "__wbg_instanceof_Error_58a92d81483a4b16"), __wbg_instanceof_Map_80cc65041c96417a: /* @__PURE__ */ __name(() => $t, "__wbg_instanceof_Map_80cc65041c96417a"), __wbg_instanceof_Response_e80ce8b7a2b968d2: /* @__PURE__ */ __name(() => Pt, "__wbg_instanceof_Response_e80ce8b7a2b968d2"), __wbg_instanceof_Uint8Array_ca460677bc155827: /* @__PURE__ */ __name(() => Xt, "__wbg_instanceof_Uint8Array_ca460677bc155827"), __wbg_isArray_5f090bed72bd4f89: /* @__PURE__ */ __name(() => Gt, "__wbg_isArray_5f090bed72bd4f89"), __wbg_isSafeInteger_90d7c4674047d684: /* @__PURE__ */ __name(() => Ht, "__wbg_isSafeInteger_90d7c4674047d684"), __wbg_iterator_4068add5b2aef7a6: /* @__PURE__ */ __name(() => Jt, "__wbg_iterator_4068add5b2aef7a6"), __wbg_json_5a6e4c2cfa6f90e1: /* @__PURE__ */ __name(() => Yt, "__wbg_json_5a6e4c2cfa6f90e1"), __wbg_length_ab6d22b5ead75c72: /* @__PURE__ */ __name(() => Kt, "__wbg_length_ab6d22b5ead75c72"), __wbg_length_f00ec12454a5d9fd: /* @__PURE__ */ __name(() => Qt, "__wbg_length_f00ec12454a5d9fd"), __wbg_log_ea240990d83e374e: /* @__PURE__ */ __name(() => Zt, "__wbg_log_ea240990d83e374e"), __wbg_message_4159c15dac08c5e9: /* @__PURE__ */ __name(() => te, "__wbg_message_4159c15dac08c5e9"), __wbg_method_a3a2d7fac54c95f8: /* @__PURE__ */ __name(() => ee, "__wbg_method_a3a2d7fac54c95f8"), __wbg_msCrypto_a61aeb35a24c1329: /* @__PURE__ */ __name(() => ne, "__wbg_msCrypto_a61aeb35a24c1329"), __wbg_name_5503b7b8010787c5: /* @__PURE__ */ __name(() => re, "__wbg_name_5503b7b8010787c5"), __wbg_new0_97314565408dea38: /* @__PURE__ */ __name(() => _e, "__wbg_new0_97314565408dea38"), __wbg_new_07b483f72211fd66: /* @__PURE__ */ __name(() => oe, "__wbg_new_07b483f72211fd66"), __wbg_new_186abcfdff244e42: /* @__PURE__ */ __name(() => ce, "__wbg_new_186abcfdff244e42"), __wbg_new_476169e6d59f23ae: /* @__PURE__ */ __name(() => ie, "__wbg_new_476169e6d59f23ae"), __wbg_new_4796e1cd2eb9ea6d: /* @__PURE__ */ __name(() => se, "__wbg_new_4796e1cd2eb9ea6d"), __wbg_new_58353953ad2097cc: /* @__PURE__ */ __name(() => ue, "__wbg_new_58353953ad2097cc"), __wbg_new_e30c39c06edaabf2: /* @__PURE__ */ __name(() => fe, "__wbg_new_e30c39c06edaabf2"), __wbg_new_e52b3efaaa774f96: /* @__PURE__ */ __name(() => ae, "__wbg_new_e52b3efaaa774f96"), __wbg_newfromslice_7c05ab1297cb2d88: /* @__PURE__ */ __name(() => be, "__wbg_newfromslice_7c05ab1297cb2d88"), __wbg_newnoargs_ff528e72d35de39a: /* @__PURE__ */ __name(() => ge, "__wbg_newnoargs_ff528e72d35de39a"), __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: /* @__PURE__ */ __name(() => de, "__wbg_newwithbyteoffsetandlength_3b01ecda099177e8"), __wbg_newwithlength_08f872dc1e3ada2e: /* @__PURE__ */ __name(() => we, "__wbg_newwithlength_08f872dc1e3ada2e"), __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5: /* @__PURE__ */ __name(() => le, "__wbg_newwithoptbuffersourceandinit_b77afe7366f846b5"), __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e: /* @__PURE__ */ __name(() => pe, "__wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e"), __wbg_newwithoptstrandinit_8128e018ed06a4f8: /* @__PURE__ */ __name(() => xe, "__wbg_newwithoptstrandinit_8128e018ed06a4f8"), __wbg_newwithstrandinit_f8a9dbe009d6be37: /* @__PURE__ */ __name(() => ye, "__wbg_newwithstrandinit_f8a9dbe009d6be37"), __wbg_next_8bb824d217961b5d: /* @__PURE__ */ __name(() => he, "__wbg_next_8bb824d217961b5d"), __wbg_next_e2da48d8fff7439a: /* @__PURE__ */ __name(() => me, "__wbg_next_e2da48d8fff7439a"), __wbg_node_905d3e251edff8a2: /* @__PURE__ */ __name(() => Re, "__wbg_node_905d3e251edff8a2"), __wbg_now_eb0821f3bd9f6529: /* @__PURE__ */ __name(() => Se, "__wbg_now_eb0821f3bd9f6529"), __wbg_prepare_38ca2752cd3a1ab2: /* @__PURE__ */ __name(() => Ie, "__wbg_prepare_38ca2752cd3a1ab2"), __wbg_process_dc0fbacc7c1c06f7: /* @__PURE__ */ __name(() => Fe, "__wbg_process_dc0fbacc7c1c06f7"), __wbg_push_73fd7b5550ebf707: /* @__PURE__ */ __name(() => Ae, "__wbg_push_73fd7b5550ebf707"), __wbg_queueMicrotask_46c1df247678729f: /* @__PURE__ */ __name(() => Te, "__wbg_queueMicrotask_46c1df247678729f"), __wbg_queueMicrotask_8acf3ccb75ed8d11: /* @__PURE__ */ __name(() => Ee, "__wbg_queueMicrotask_8acf3ccb75ed8d11"), __wbg_randomFillSync_ac0988aba3254290: /* @__PURE__ */ __name(() => Oe, "__wbg_randomFillSync_ac0988aba3254290"), __wbg_require_60cc747a6bc5215a: /* @__PURE__ */ __name(() => je, "__wbg_require_60cc747a6bc5215a"), __wbg_resolve_0dac8c580ffd4678: /* @__PURE__ */ __name(() => qe, "__wbg_resolve_0dac8c580ffd4678"), __wbg_respond_b227f1c3be2bb879: /* @__PURE__ */ __name(() => Me, "__wbg_respond_b227f1c3be2bb879"), __wbg_results_d4405fbc47961d2d: /* @__PURE__ */ __name(() => ze, "__wbg_results_d4405fbc47961d2d"), __wbg_run_d2d0b2bf3715233a: /* @__PURE__ */ __name(() => ke, "__wbg_run_d2d0b2bf3715233a"), __wbg_setTimeout_2b339866a2aa3789: /* @__PURE__ */ __name(() => Ce, "__wbg_setTimeout_2b339866a2aa3789"), __wbg_set_b042eef31c50834d: /* @__PURE__ */ __name(() => De, "__wbg_set_b042eef31c50834d"), __wbg_set_c43293f93a35998a: /* @__PURE__ */ __name(() => Le, "__wbg_set_c43293f93a35998a"), __wbg_set_fe4e79d1ed3b0e9b: /* @__PURE__ */ __name(() => Ue, "__wbg_set_fe4e79d1ed3b0e9b"), __wbg_set_wasm: /* @__PURE__ */ __name(() => q, "__wbg_set_wasm"), __wbg_setbody_971ec015fc13d6b4: /* @__PURE__ */ __name(() => Be, "__wbg_setbody_971ec015fc13d6b4"), __wbg_setcache_a94cd14dc0cc72a2: /* @__PURE__ */ __name(() => ve, "__wbg_setcache_a94cd14dc0cc72a2"), __wbg_setcredentials_920d91fb5984c94a: /* @__PURE__ */ __name(() => We, "__wbg_setcredentials_920d91fb5984c94a"), __wbg_setheaders_408564032a1382da: /* @__PURE__ */ __name(() => Ne, "__wbg_setheaders_408564032a1382da"), __wbg_setheaders_65a4eb4c0443ae61: /* @__PURE__ */ __name(() => Ve, "__wbg_setheaders_65a4eb4c0443ae61"), __wbg_setmethod_8ce1be0b4d701b7c: /* @__PURE__ */ __name(() => $e, "__wbg_setmethod_8ce1be0b4d701b7c"), __wbg_setmode_bd35f026f55b6247: /* @__PURE__ */ __name(() => Pe, "__wbg_setmode_bd35f026f55b6247"), __wbg_setsignal_8e72abfe7ee03c97: /* @__PURE__ */ __name(() => Xe, "__wbg_setsignal_8e72abfe7ee03c97"), __wbg_setstatus_bd5b448a903a8658: /* @__PURE__ */ __name(() => Ge, "__wbg_setstatus_bd5b448a903a8658"), __wbg_signal_b96223519a041faa: /* @__PURE__ */ __name(() => He, "__wbg_signal_b96223519a041faa"), __wbg_static_accessor_GLOBAL_487c52c58d65314d: /* @__PURE__ */ __name(() => Je, "__wbg_static_accessor_GLOBAL_487c52c58d65314d"), __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: /* @__PURE__ */ __name(() => Ye, "__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291"), __wbg_static_accessor_SELF_78c9e3071b912620: /* @__PURE__ */ __name(() => Ke, "__wbg_static_accessor_SELF_78c9e3071b912620"), __wbg_static_accessor_WINDOW_a093d21393777366: /* @__PURE__ */ __name(() => Qe, "__wbg_static_accessor_WINDOW_a093d21393777366"), __wbg_status_a54682bbe52f9058: /* @__PURE__ */ __name(() => Ze, "__wbg_status_a54682bbe52f9058"), __wbg_stringify_c242842b97f054cc: /* @__PURE__ */ __name(() => tn, "__wbg_stringify_c242842b97f054cc"), __wbg_subarray_dd4ade7d53bd8e26: /* @__PURE__ */ __name(() => en, "__wbg_subarray_dd4ade7d53bd8e26"), __wbg_text_ec0e22f60e30dd2f: /* @__PURE__ */ __name(() => nn, "__wbg_text_ec0e22f60e30dd2f"), __wbg_then_82ab9fb4080f1707: /* @__PURE__ */ __name(() => rn, "__wbg_then_82ab9fb4080f1707"), __wbg_then_db882932c0c714c6: /* @__PURE__ */ __name(() => _n, "__wbg_then_db882932c0c714c6"), __wbg_toString_21791a66666b3afd: /* @__PURE__ */ __name(() => on, "__wbg_toString_21791a66666b3afd"), __wbg_url_e6ed869ea05b7a71: /* @__PURE__ */ __name(() => cn, "__wbg_url_e6ed869ea05b7a71"), __wbg_url_f1c3162019331231: /* @__PURE__ */ __name(() => sn, "__wbg_url_f1c3162019331231"), __wbg_value_17b896954e14f896: /* @__PURE__ */ __name(() => un, "__wbg_value_17b896954e14f896"), __wbg_versions_c01dfd4722a88165: /* @__PURE__ */ __name(() => fn, "__wbg_versions_c01dfd4722a88165"), __wbg_view_a9ad80dcbad7cf1c: /* @__PURE__ */ __name(() => an, "__wbg_view_a9ad80dcbad7cf1c"), __wbindgen_as_number: /* @__PURE__ */ __name(() => bn, "__wbindgen_as_number"), __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(() => gn, "__wbindgen_bigint_from_i64"), __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(() => dn, "__wbindgen_bigint_from_u64"), __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(() => wn, "__wbindgen_bigint_get_as_i64"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => ln, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => pn, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper3004: /* @__PURE__ */ __name(() => xn, "__wbindgen_closure_wrapper3004"), __wbindgen_closure_wrapper632: /* @__PURE__ */ __name(() => yn, "__wbindgen_closure_wrapper632"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => hn, "__wbindgen_debug_string"), __wbindgen_in: /* @__PURE__ */ __name(() => mn, "__wbindgen_in"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => Rn, "__wbindgen_init_externref_table"), __wbindgen_is_bigint: /* @__PURE__ */ __name(() => Sn, "__wbindgen_is_bigint"), __wbindgen_is_function: /* @__PURE__ */ __name(() => In, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => Fn, "__wbindgen_is_object"), __wbindgen_is_string: /* @__PURE__ */ __name(() => An, "__wbindgen_is_string"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => Tn, "__wbindgen_is_undefined"), __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => En, "__wbindgen_jsval_eq"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => On, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => jn, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => qn, "__wbindgen_number_get"), __wbindgen_number_new: /* @__PURE__ */ __name(() => Mn, "__wbindgen_number_new"), __wbindgen_string_get: /* @__PURE__ */ __name(() => zn, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => kn, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => Cn, "__wbindgen_throw"), fetch: /* @__PURE__ */ __name(() => M, "fetch") });
var _;
function q(t) {
  _ = t;
}
__name(q, "q");
var h = null;
function x() {
  return (h === null || h.byteLength === 0) && (h = new Uint8Array(_.memory.buffer)), h;
}
__name(x, "x");
var k = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var m = new k("utf-8", { ignoreBOM: true, fatal: true });
m.decode();
var v = 2146435072;
var I = 0;
function W(t, e) {
  return I += e, I >= v && (m = new k("utf-8", { ignoreBOM: true, fatal: true }), m.decode(), I = e), m.decode(x().subarray(t, t + e));
}
__name(W, "W");
function b(t, e) {
  return t = t >>> 0, W(t, e);
}
__name(b, "b");
var g = 0;
var N = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var R = new N("utf-8");
var V = typeof R.encodeInto == "function" ? function(t, e) {
  return R.encodeInto(t, e);
} : function(t, e) {
  let n = R.encode(t);
  return e.set(n), { read: t.length, written: n.length };
};
function l(t, e, n) {
  if (n === void 0) {
    let a = R.encode(t), y = e(a.length, 1) >>> 0;
    return x().subarray(y, y + a.length).set(a), g = a.length, y;
  }
  let r = t.length, o = e(r, 1) >>> 0, f = x(), i = 0;
  for (; i < r; i++) {
    let a = t.charCodeAt(i);
    if (a > 127) break;
    f[o + i] = a;
  }
  if (i !== r) {
    i !== 0 && (t = t.slice(i)), o = n(o, r, r = i + t.length * 3, 1) >>> 0;
    let a = x().subarray(o + i, o + r);
    i += V(t, a).written, o = n(o, r, i, 1) >>> 0;
  }
  return g = i, o;
}
__name(l, "l");
var p = null;
function u() {
  return (p === null || p.buffer.detached === true || p.buffer.detached === void 0 && p.buffer !== _.memory.buffer) && (p = new DataView(_.memory.buffer)), p;
}
__name(u, "u");
function d(t) {
  let e = _.__externref_table_alloc();
  return _.__wbindgen_export_4.set(e, t), e;
}
__name(d, "d");
function c(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    let r = d(n);
    _.__wbindgen_exn_store(r);
  }
}
__name(c, "c");
function s(t) {
  return t == null;
}
__name(s, "s");
function C(t, e) {
  return t = t >>> 0, x().subarray(t / 1, t / 1 + e);
}
__name(C, "C");
var z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => {
  _.__wbindgen_export_5.get(t.dtor)(t.a, t.b);
});
function D(t, e, n, r) {
  let o = { a: t, b: e, cnt: 1, dtor: n }, f = /* @__PURE__ */ __name((...i) => {
    o.cnt++;
    let a = o.a;
    o.a = 0;
    try {
      return r(a, o.b, ...i);
    } finally {
      --o.cnt === 0 ? (_.__wbindgen_export_5.get(o.dtor)(a, o.b), z.unregister(o)) : o.a = a;
    }
  }, "f");
  return f.original = o, z.register(f, o, o), f;
}
__name(D, "D");
function F(t) {
  let e = typeof t;
  if (e == "number" || e == "boolean" || t == null) return `${t}`;
  if (e == "string") return `"${t}"`;
  if (e == "symbol") {
    let o = t.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    let o = t.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(t)) {
    let o = t.length, f = "[";
    o > 0 && (f += F(t[0]));
    for (let i = 1; i < o; i++) f += ", " + F(t[i]);
    return f += "]", f;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t)), r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(t);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(t) + ")";
  } catch {
    return "Object";
  }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
}
__name(F, "F");
function M(t, e, n) {
  return _.fetch(t, e, n);
}
__name(M, "M");
function $(t, e) {
  _.wasm_bindgen__convert__closures_____invoke__h3d00556bc29b6c8c(t, e);
}
__name($, "$");
function P(t, e, n) {
  _.closure1097_externref_shim(t, e, n);
}
__name(P, "P");
function X(t, e, n, r) {
  _.closure1145_externref_shim(t, e, n, r);
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
}, "unregister") } : new FinalizationRegistry((t) => _.__wbg_intounderlyingbytesource_free(t >>> 0, 1));
var A = class {
  static {
    __name(this, "A");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingbytesource_free(e, 0);
  }
  get type() {
    let e = _.intounderlyingbytesource_type(this.__wbg_ptr);
    return J[e];
  }
  get autoAllocateChunkSize() {
    return _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(e) {
    _.intounderlyingbytesource_start(this.__wbg_ptr, e);
  }
  pull(e) {
    return _.intounderlyingbytesource_pull(this.__wbg_ptr, e);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    _.intounderlyingbytesource_cancel(e);
  }
};
var tt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => _.__wbg_intounderlyingsink_free(t >>> 0, 1));
var T = class {
  static {
    __name(this, "T");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, tt.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingsink_free(e, 0);
  }
  write(e) {
    return _.intounderlyingsink_write(this.__wbg_ptr, e);
  }
  close() {
    let e = this.__destroy_into_raw();
    return _.intounderlyingsink_close(e);
  }
  abort(e) {
    let n = this.__destroy_into_raw();
    return _.intounderlyingsink_abort(n, e);
  }
};
var et = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => _.__wbg_intounderlyingsource_free(t >>> 0, 1));
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, et.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingsource_free(e, 0);
  }
  pull(e) {
    return _.intounderlyingsource_pull(this.__wbg_ptr, e);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    _.intounderlyingsource_cancel(e);
  }
};
var nt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => _.__wbg_minifyconfig_free(t >>> 0, 1));
var O = class {
  static {
    __name(this, "O");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, nt.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_minifyconfig_free(e, 0);
  }
  get js() {
    return _.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(e) {
    _.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
  get html() {
    return _.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(e) {
    _.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  get css() {
    return _.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(e) {
    _.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
};
var rt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => _.__wbg_r2range_free(t >>> 0, 1));
var j = class {
  static {
    __name(this, "j");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, rt.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_r2range_free(e, 0);
  }
  get offset() {
    let e = _.__wbg_get_r2range_offset(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set offset(e) {
    _.__wbg_set_r2range_offset(this.__wbg_ptr, !s(e), s(e) ? 0 : e);
  }
  get length() {
    let e = _.__wbg_get_r2range_length(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set length(e) {
    _.__wbg_set_r2range_length(this.__wbg_ptr, !s(e), s(e) ? 0 : e);
  }
  get suffix() {
    let e = _.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set suffix(e) {
    _.__wbg_set_r2range_suffix(this.__wbg_ptr, !s(e), s(e) ? 0 : e);
  }
};
function _t(t, e) {
  return Error(b(t, e));
}
__name(_t, "_t");
function ot(t, e) {
  let n = String(e), r = l(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = g;
  u().setInt32(t + 4 * 1, o, true), u().setInt32(t + 4 * 0, r, true);
}
__name(ot, "ot");
function ct(t) {
  t.abort();
}
__name(ct, "ct");
function it(t, e) {
  t.abort(e);
}
__name(it, "it");
function st() {
  return c(function(t) {
    return t.all();
  }, arguments);
}
__name(st, "st");
function ut() {
  return c(function(t, e, n, r, o) {
    t.append(b(e, n), b(r, o));
  }, arguments);
}
__name(ut, "ut");
function ft() {
  return c(function(t, e) {
    return t.bind(...e);
  }, arguments);
}
__name(ft, "ft");
function at(t) {
  return t.buffer;
}
__name(at, "at");
function bt(t) {
  return t.buffer;
}
__name(bt, "bt");
function gt(t) {
  let e = t.byobRequest;
  return s(e) ? 0 : d(e);
}
__name(gt, "gt");
function dt(t) {
  return t.byteLength;
}
__name(dt, "dt");
function wt(t) {
  return t.byteOffset;
}
__name(wt, "wt");
function lt() {
  return c(function(t, e, n) {
    return t.call(e, n);
  }, arguments);
}
__name(lt, "lt");
function pt() {
  return c(function(t, e) {
    return t.call(e);
  }, arguments);
}
__name(pt, "pt");
function xt(t) {
  return t.cause;
}
__name(xt, "xt");
function yt() {
  return c(function(t) {
    let e = t.cf;
    return s(e) ? 0 : d(e);
  }, arguments);
}
__name(yt, "yt");
function ht(t) {
  return clearTimeout(t);
}
__name(ht, "ht");
function mt() {
  return c(function(t) {
    t.close();
  }, arguments);
}
__name(mt, "mt");
function Rt() {
  return c(function(t) {
    t.close();
  }, arguments);
}
__name(Rt, "Rt");
function St(t) {
  return t.constructor;
}
__name(St, "St");
function It(t) {
  return t.crypto;
}
__name(It, "It");
function Ft(t) {
  return t.done;
}
__name(Ft, "Ft");
function At() {
  return c(function(t, e) {
    t.enqueue(e);
  }, arguments);
}
__name(At, "At");
function Tt(t) {
  return Object.entries(t);
}
__name(Tt, "Tt");
function Et(t) {
  console.error(t);
}
__name(Et, "Et");
function Ot(t, e) {
  return t.fetch(e);
}
__name(Ot, "Ot");
function jt(t) {
  return fetch(t);
}
__name(jt, "jt");
function qt() {
  return c(function(t, e, n) {
    return t.first(e === 0 ? void 0 : b(e, n));
  }, arguments);
}
__name(qt, "qt");
function Mt() {
  return c(function(t, e) {
    globalThis.crypto.getRandomValues(C(t, e));
  }, arguments);
}
__name(Mt, "Mt");
function zt() {
  return c(function(t, e) {
    t.getRandomValues(e);
  }, arguments);
}
__name(zt, "zt");
function kt(t) {
  return t.getTime();
}
__name(kt, "kt");
function Ct() {
  return c(function(t, e) {
    return Reflect.get(t, e);
  }, arguments);
}
__name(Ct, "Ct");
function Dt(t, e) {
  return t[e >>> 0];
}
__name(Dt, "Dt");
function Lt() {
  return c(function(t, e, n, r) {
    let o = e.get(b(n, r));
    var f = s(o) ? 0 : l(o, _.__wbindgen_malloc, _.__wbindgen_realloc), i = g;
    u().setInt32(t + 4 * 1, i, true), u().setInt32(t + 4 * 0, f, true);
  }, arguments);
}
__name(Lt, "Lt");
function Ut(t, e) {
  return t[e];
}
__name(Ut, "Ut");
function Bt() {
  return c(function(t, e) {
    return Reflect.has(t, e);
  }, arguments);
}
__name(Bt, "Bt");
function vt(t) {
  return t.headers;
}
__name(vt, "vt");
function Wt(t) {
  return t.headers;
}
__name(Wt, "Wt");
function Nt(t) {
  let e;
  try {
    e = t instanceof ArrayBuffer;
  } catch {
    e = false;
  }
  return e;
}
__name(Nt, "Nt");
function Vt(t) {
  let e;
  try {
    e = t instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
__name(Vt, "Vt");
function $t(t) {
  let e;
  try {
    e = t instanceof Map;
  } catch {
    e = false;
  }
  return e;
}
__name($t, "$t");
function Pt(t) {
  let e;
  try {
    e = t instanceof Response;
  } catch {
    e = false;
  }
  return e;
}
__name(Pt, "Pt");
function Xt(t) {
  let e;
  try {
    e = t instanceof Uint8Array;
  } catch {
    e = false;
  }
  return e;
}
__name(Xt, "Xt");
function Gt(t) {
  return Array.isArray(t);
}
__name(Gt, "Gt");
function Ht(t) {
  return Number.isSafeInteger(t);
}
__name(Ht, "Ht");
function Jt() {
  return Symbol.iterator;
}
__name(Jt, "Jt");
function Yt() {
  return c(function(t) {
    return t.json();
  }, arguments);
}
__name(Yt, "Yt");
function Kt(t) {
  return t.length;
}
__name(Kt, "Kt");
function Qt(t) {
  return t.length;
}
__name(Qt, "Qt");
function Zt(t) {
  console.log(t);
}
__name(Zt, "Zt");
function te(t) {
  return t.message;
}
__name(te, "te");
function ee(t, e) {
  let n = e.method, r = l(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = g;
  u().setInt32(t + 4 * 1, o, true), u().setInt32(t + 4 * 0, r, true);
}
__name(ee, "ee");
function ne(t) {
  return t.msCrypto;
}
__name(ne, "ne");
function re(t) {
  return t.name;
}
__name(re, "re");
function _e() {
  return /* @__PURE__ */ new Date();
}
__name(_e, "_e");
function oe() {
  return new Object();
}
__name(oe, "oe");
function ce() {
  return c(function() {
    return new AbortController();
  }, arguments);
}
__name(ce, "ce");
function ie(t, e) {
  return new Error(b(t, e));
}
__name(ie, "ie");
function se() {
  return c(function() {
    return new Headers();
  }, arguments);
}
__name(se, "se");
function ue() {
  return new Array();
}
__name(ue, "ue");
function fe(t, e) {
  try {
    var n = { a: t, b: e }, r = /* @__PURE__ */ __name((f, i) => {
      let a = n.a;
      n.a = 0;
      try {
        return X(a, n.b, f, i);
      } finally {
        n.a = a;
      }
    }, "r");
    return new Promise(r);
  } finally {
    n.a = n.b = 0;
  }
}
__name(fe, "fe");
function ae(t) {
  return new Uint8Array(t);
}
__name(ae, "ae");
function be(t, e) {
  return new Uint8Array(C(t, e));
}
__name(be, "be");
function ge(t, e) {
  return new Function(b(t, e));
}
__name(ge, "ge");
function de(t, e, n) {
  return new Uint8Array(t, e >>> 0, n >>> 0);
}
__name(de, "de");
function we(t) {
  return new Uint8Array(t >>> 0);
}
__name(we, "we");
function le() {
  return c(function(t, e) {
    return new Response(t, e);
  }, arguments);
}
__name(le, "le");
function pe() {
  return c(function(t, e) {
    return new Response(t, e);
  }, arguments);
}
__name(pe, "pe");
function xe() {
  return c(function(t, e, n) {
    return new Response(t === 0 ? void 0 : b(t, e), n);
  }, arguments);
}
__name(xe, "xe");
function ye() {
  return c(function(t, e, n) {
    return new Request(b(t, e), n);
  }, arguments);
}
__name(ye, "ye");
function he(t) {
  return t.next;
}
__name(he, "he");
function me() {
  return c(function(t) {
    return t.next();
  }, arguments);
}
__name(me, "me");
function Re(t) {
  return t.node;
}
__name(Re, "Re");
function Se() {
  return Date.now();
}
__name(Se, "Se");
function Ie() {
  return c(function(t, e, n) {
    return t.prepare(b(e, n));
  }, arguments);
}
__name(Ie, "Ie");
function Fe(t) {
  return t.process;
}
__name(Fe, "Fe");
function Ae(t, e) {
  return t.push(e);
}
__name(Ae, "Ae");
function Te(t) {
  queueMicrotask(t);
}
__name(Te, "Te");
function Ee(t) {
  return t.queueMicrotask;
}
__name(Ee, "Ee");
function Oe() {
  return c(function(t, e) {
    t.randomFillSync(e);
  }, arguments);
}
__name(Oe, "Oe");
function je() {
  return c(function() {
    return module.require;
  }, arguments);
}
__name(je, "je");
function qe(t) {
  return Promise.resolve(t);
}
__name(qe, "qe");
function Me() {
  return c(function(t, e) {
    t.respond(e >>> 0);
  }, arguments);
}
__name(Me, "Me");
function ze() {
  return c(function(t) {
    let e = t.results;
    return s(e) ? 0 : d(e);
  }, arguments);
}
__name(ze, "ze");
function ke() {
  return c(function(t) {
    return t.run();
  }, arguments);
}
__name(ke, "ke");
function Ce(t, e) {
  return setTimeout(t, e);
}
__name(Ce, "Ce");
function De() {
  return c(function(t, e, n, r, o) {
    t.set(b(e, n), b(r, o));
  }, arguments);
}
__name(De, "De");
function Le() {
  return c(function(t, e, n) {
    return Reflect.set(t, e, n);
  }, arguments);
}
__name(Le, "Le");
function Ue(t, e, n) {
  t.set(e, n >>> 0);
}
__name(Ue, "Ue");
function Be(t, e) {
  t.body = e;
}
__name(Be, "Be");
function ve(t, e) {
  t.cache = Y[e];
}
__name(ve, "ve");
function We(t, e) {
  t.credentials = K[e];
}
__name(We, "We");
function Ne(t, e) {
  t.headers = e;
}
__name(Ne, "Ne");
function Ve(t, e) {
  t.headers = e;
}
__name(Ve, "Ve");
function $e(t, e, n) {
  t.method = b(e, n);
}
__name($e, "$e");
function Pe(t, e) {
  t.mode = Q[e];
}
__name(Pe, "Pe");
function Xe(t, e) {
  t.signal = e;
}
__name(Xe, "Xe");
function Ge(t, e) {
  t.status = e;
}
__name(Ge, "Ge");
function He(t) {
  return t.signal;
}
__name(He, "He");
function Je() {
  let t = typeof global > "u" ? null : global;
  return s(t) ? 0 : d(t);
}
__name(Je, "Je");
function Ye() {
  let t = typeof globalThis > "u" ? null : globalThis;
  return s(t) ? 0 : d(t);
}
__name(Ye, "Ye");
function Ke() {
  let t = typeof self > "u" ? null : self;
  return s(t) ? 0 : d(t);
}
__name(Ke, "Ke");
function Qe() {
  let t = typeof window > "u" ? null : window;
  return s(t) ? 0 : d(t);
}
__name(Qe, "Qe");
function Ze(t) {
  return t.status;
}
__name(Ze, "Ze");
function tn() {
  return c(function(t) {
    return JSON.stringify(t);
  }, arguments);
}
__name(tn, "tn");
function en(t, e, n) {
  return t.subarray(e >>> 0, n >>> 0);
}
__name(en, "en");
function nn() {
  return c(function(t) {
    return t.text();
  }, arguments);
}
__name(nn, "nn");
function rn(t, e, n) {
  return t.then(e, n);
}
__name(rn, "rn");
function _n(t, e) {
  return t.then(e);
}
__name(_n, "_n");
function on(t) {
  return t.toString();
}
__name(on, "on");
function cn(t, e) {
  let n = e.url, r = l(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = g;
  u().setInt32(t + 4 * 1, o, true), u().setInt32(t + 4 * 0, r, true);
}
__name(cn, "cn");
function sn(t, e) {
  let n = e.url, r = l(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = g;
  u().setInt32(t + 4 * 1, o, true), u().setInt32(t + 4 * 0, r, true);
}
__name(sn, "sn");
function un(t) {
  return t.value;
}
__name(un, "un");
function fn(t) {
  return t.versions;
}
__name(fn, "fn");
function an(t) {
  let e = t.view;
  return s(e) ? 0 : d(e);
}
__name(an, "an");
function bn(t) {
  return +t;
}
__name(bn, "bn");
function gn(t) {
  return t;
}
__name(gn, "gn");
function dn(t) {
  return BigInt.asUintN(64, t);
}
__name(dn, "dn");
function wn(t, e) {
  let n = e, r = typeof n == "bigint" ? n : void 0;
  u().setBigInt64(t + 8 * 1, s(r) ? BigInt(0) : r, true), u().setInt32(t + 4 * 0, !s(r), true);
}
__name(wn, "wn");
function ln(t) {
  let e = t;
  return typeof e == "boolean" ? e ? 1 : 0 : 2;
}
__name(ln, "ln");
function pn(t) {
  let e = t.original;
  return e.cnt-- == 1 ? (e.a = 0, true) : false;
}
__name(pn, "pn");
function xn(t, e, n) {
  return D(t, e, 1096, P);
}
__name(xn, "xn");
function yn(t, e, n) {
  return D(t, e, 225, $);
}
__name(yn, "yn");
function hn(t, e) {
  let n = F(e), r = l(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = g;
  u().setInt32(t + 4 * 1, o, true), u().setInt32(t + 4 * 0, r, true);
}
__name(hn, "hn");
function mn(t, e) {
  return t in e;
}
__name(mn, "mn");
function Rn() {
  let t = _.__wbindgen_export_4, e = t.grow(4);
  t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
}
__name(Rn, "Rn");
function Sn(t) {
  return typeof t == "bigint";
}
__name(Sn, "Sn");
function In(t) {
  return typeof t == "function";
}
__name(In, "In");
function Fn(t) {
  let e = t;
  return typeof e == "object" && e !== null;
}
__name(Fn, "Fn");
function An(t) {
  return typeof t == "string";
}
__name(An, "An");
function Tn(t) {
  return t === void 0;
}
__name(Tn, "Tn");
function En(t, e) {
  return t === e;
}
__name(En, "En");
function On(t, e) {
  return t == e;
}
__name(On, "On");
function jn() {
  return _.memory;
}
__name(jn, "jn");
function qn(t, e) {
  let n = e, r = typeof n == "number" ? n : void 0;
  u().setFloat64(t + 8 * 1, s(r) ? 0 : r, true), u().setInt32(t + 4 * 0, !s(r), true);
}
__name(qn, "qn");
function Mn(t) {
  return t;
}
__name(Mn, "Mn");
function zn(t, e) {
  let n = e, r = typeof n == "string" ? n : void 0;
  var o = s(r) ? 0 : l(r, _.__wbindgen_malloc, _.__wbindgen_realloc), f = g;
  u().setInt32(t + 4 * 1, f, true), u().setInt32(t + 4 * 0, o, true);
}
__name(zn, "zn");
function kn(t, e) {
  return b(t, e);
}
__name(kn, "kn");
function Cn(t, e) {
  throw new Error(b(t, e));
}
__name(Cn, "Cn");
var L = new WebAssembly.Instance(Dn, { "./index_bg.js": w });
q(L.exports);
L.exports.__wbindgen_start?.();
var S = class extends Ln {
  static {
    __name(this, "S");
  }
  async fetch(e) {
    return await M(e, this.env, this.ctx);
  }
  async queue(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
  async scheduled(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
};
var Un = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(w).map((t) => {
  Un.includes(t) | t.startsWith("__") || (S.prototype[t] = w[t]);
});
var Nn = S;

// ../../../.volta/tools/image/node/20.19.1/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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

// ../../../.volta/tools/image/node/20.19.1/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// .wrangler/tmp/bundle-VQxnHr/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Nn;

// ../../../.volta/tools/image/node/20.19.1/lib/node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-VQxnHr/middleware-loader.entry.ts
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
  A as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  E as IntoUnderlyingSource,
  O as MinifyConfig,
  G as PolishConfig,
  j as R2Range,
  H as RequestRedirect,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  _t as __wbg_Error_0497d5bdba9362e5,
  ot as __wbg_String_8f0eb39a4a4c2f66,
  ct as __wbg_abort_18ba44d46e13d7fe,
  it as __wbg_abort_4198a1129c47f21a,
  st as __wbg_all_92394bdc295ef929,
  ut as __wbg_append_0342728346e47425,
  ft as __wbg_bind_dca305d65e40ea3c,
  at as __wbg_buffer_a1a27a0dfa70165d,
  bt as __wbg_buffer_e495ba54cee589cc,
  gt as __wbg_byobRequest_56aa768ee4dfed17,
  dt as __wbg_byteLength_937f8a52f9697148,
  wt as __wbg_byteOffset_4d94b7170e641898,
  lt as __wbg_call_f2db6205e5c51dc8,
  pt as __wbg_call_fbe8be8bf6436ce5,
  xt as __wbg_cause_af6ef82a8abe435b,
  yt as __wbg_cf_60aafe7bb03e919a,
  ht as __wbg_clearTimeout_6222fede17abcb1a,
  mt as __wbg_close_290fb040af98d3ac,
  Rt as __wbg_close_b2641ef0870e518c,
  St as __wbg_constructor_1a4f07ad72d5cac3,
  It as __wbg_crypto_574e78ad8b13b65f,
  Ft as __wbg_done_4d01f352bade43b7,
  At as __wbg_enqueue_a62faa171c4fd287,
  Tt as __wbg_entries_41651c850143b957,
  Et as __wbg_error_51ecdd39ec054205,
  Ot as __wbg_fetch_a8e43a4e138dfc93,
  jt as __wbg_fetch_f156d10be9a5c88a,
  qt as __wbg_first_63912989330d222d,
  Mt as __wbg_getRandomValues_38a1ff1ea09f6cc7,
  zt as __wbg_getRandomValues_b8f5dbd5f3995a9e,
  kt as __wbg_getTime_2afe67905d873e92,
  Ct as __wbg_get_92470be87867c2e5,
  Dt as __wbg_get_a131a44bd1eb6979,
  Lt as __wbg_get_a289e2f1c93b31ad,
  Ut as __wbg_getwithrefkey_1dc361bd10053bfe,
  Bt as __wbg_has_809e438ee9d787a7,
  vt as __wbg_headers_0f0cbdc6290b6780,
  Wt as __wbg_headers_67fbc7839fe933b3,
  Nt as __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc,
  Vt as __wbg_instanceof_Error_58a92d81483a4b16,
  $t as __wbg_instanceof_Map_80cc65041c96417a,
  Pt as __wbg_instanceof_Response_e80ce8b7a2b968d2,
  Xt as __wbg_instanceof_Uint8Array_ca460677bc155827,
  Gt as __wbg_isArray_5f090bed72bd4f89,
  Ht as __wbg_isSafeInteger_90d7c4674047d684,
  Jt as __wbg_iterator_4068add5b2aef7a6,
  Yt as __wbg_json_5a6e4c2cfa6f90e1,
  Kt as __wbg_length_ab6d22b5ead75c72,
  Qt as __wbg_length_f00ec12454a5d9fd,
  Zt as __wbg_log_ea240990d83e374e,
  te as __wbg_message_4159c15dac08c5e9,
  ee as __wbg_method_a3a2d7fac54c95f8,
  ne as __wbg_msCrypto_a61aeb35a24c1329,
  re as __wbg_name_5503b7b8010787c5,
  _e as __wbg_new0_97314565408dea38,
  oe as __wbg_new_07b483f72211fd66,
  ce as __wbg_new_186abcfdff244e42,
  ie as __wbg_new_476169e6d59f23ae,
  se as __wbg_new_4796e1cd2eb9ea6d,
  ue as __wbg_new_58353953ad2097cc,
  fe as __wbg_new_e30c39c06edaabf2,
  ae as __wbg_new_e52b3efaaa774f96,
  be as __wbg_newfromslice_7c05ab1297cb2d88,
  ge as __wbg_newnoargs_ff528e72d35de39a,
  de as __wbg_newwithbyteoffsetandlength_3b01ecda099177e8,
  we as __wbg_newwithlength_08f872dc1e3ada2e,
  le as __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5,
  pe as __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e,
  xe as __wbg_newwithoptstrandinit_8128e018ed06a4f8,
  ye as __wbg_newwithstrandinit_f8a9dbe009d6be37,
  he as __wbg_next_8bb824d217961b5d,
  me as __wbg_next_e2da48d8fff7439a,
  Re as __wbg_node_905d3e251edff8a2,
  Se as __wbg_now_eb0821f3bd9f6529,
  Ie as __wbg_prepare_38ca2752cd3a1ab2,
  Fe as __wbg_process_dc0fbacc7c1c06f7,
  Ae as __wbg_push_73fd7b5550ebf707,
  Te as __wbg_queueMicrotask_46c1df247678729f,
  Ee as __wbg_queueMicrotask_8acf3ccb75ed8d11,
  Oe as __wbg_randomFillSync_ac0988aba3254290,
  je as __wbg_require_60cc747a6bc5215a,
  qe as __wbg_resolve_0dac8c580ffd4678,
  Me as __wbg_respond_b227f1c3be2bb879,
  ze as __wbg_results_d4405fbc47961d2d,
  ke as __wbg_run_d2d0b2bf3715233a,
  Ce as __wbg_setTimeout_2b339866a2aa3789,
  De as __wbg_set_b042eef31c50834d,
  Le as __wbg_set_c43293f93a35998a,
  Ue as __wbg_set_fe4e79d1ed3b0e9b,
  q as __wbg_set_wasm,
  Be as __wbg_setbody_971ec015fc13d6b4,
  ve as __wbg_setcache_a94cd14dc0cc72a2,
  We as __wbg_setcredentials_920d91fb5984c94a,
  Ne as __wbg_setheaders_408564032a1382da,
  Ve as __wbg_setheaders_65a4eb4c0443ae61,
  $e as __wbg_setmethod_8ce1be0b4d701b7c,
  Pe as __wbg_setmode_bd35f026f55b6247,
  Xe as __wbg_setsignal_8e72abfe7ee03c97,
  Ge as __wbg_setstatus_bd5b448a903a8658,
  He as __wbg_signal_b96223519a041faa,
  Je as __wbg_static_accessor_GLOBAL_487c52c58d65314d,
  Ye as __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291,
  Ke as __wbg_static_accessor_SELF_78c9e3071b912620,
  Qe as __wbg_static_accessor_WINDOW_a093d21393777366,
  Ze as __wbg_status_a54682bbe52f9058,
  tn as __wbg_stringify_c242842b97f054cc,
  en as __wbg_subarray_dd4ade7d53bd8e26,
  nn as __wbg_text_ec0e22f60e30dd2f,
  rn as __wbg_then_82ab9fb4080f1707,
  _n as __wbg_then_db882932c0c714c6,
  on as __wbg_toString_21791a66666b3afd,
  cn as __wbg_url_e6ed869ea05b7a71,
  sn as __wbg_url_f1c3162019331231,
  un as __wbg_value_17b896954e14f896,
  fn as __wbg_versions_c01dfd4722a88165,
  an as __wbg_view_a9ad80dcbad7cf1c,
  bn as __wbindgen_as_number,
  gn as __wbindgen_bigint_from_i64,
  dn as __wbindgen_bigint_from_u64,
  wn as __wbindgen_bigint_get_as_i64,
  ln as __wbindgen_boolean_get,
  pn as __wbindgen_cb_drop,
  xn as __wbindgen_closure_wrapper3004,
  yn as __wbindgen_closure_wrapper632,
  hn as __wbindgen_debug_string,
  mn as __wbindgen_in,
  Rn as __wbindgen_init_externref_table,
  Sn as __wbindgen_is_bigint,
  In as __wbindgen_is_function,
  Fn as __wbindgen_is_object,
  An as __wbindgen_is_string,
  Tn as __wbindgen_is_undefined,
  En as __wbindgen_jsval_eq,
  On as __wbindgen_jsval_loose_eq,
  jn as __wbindgen_memory,
  qn as __wbindgen_number_get,
  Mn as __wbindgen_number_new,
  zn as __wbindgen_string_get,
  kn as __wbindgen_string_new,
  Cn as __wbindgen_throw,
  middleware_loader_entry_default as default,
  M as fetch,
  Dn as wasmModule
};
//# sourceMappingURL=shim.js.map
