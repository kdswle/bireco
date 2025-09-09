var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// build/worker/shim.mjs
import zn from "./390fb2ca67e3a2f797f8637cb668b58a31e79bb3-index.wasm";
import { WorkerEntrypoint as kn } from "cloudflare:workers";
var U = Object.defineProperty;
var C = /* @__PURE__ */ __name((t2, e) => {
  for (var n in e) U(t2, n, { get: e[n], enumerable: true });
}, "C");
var d = {};
C(d, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => E, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => j, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => T, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => F, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => G, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => O, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => H, "RequestRedirect"), __wbg_Error_0497d5bdba9362e5: /* @__PURE__ */ __name(() => et, "__wbg_Error_0497d5bdba9362e5"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => nt, "__wbg_String_8f0eb39a4a4c2f66"), __wbg_all_92394bdc295ef929: /* @__PURE__ */ __name(() => rt, "__wbg_all_92394bdc295ef929"), __wbg_bind_dca305d65e40ea3c: /* @__PURE__ */ __name(() => _t, "__wbg_bind_dca305d65e40ea3c"), __wbg_body_e1e045c770257634: /* @__PURE__ */ __name(() => ot, "__wbg_body_e1e045c770257634"), __wbg_buffer_a1a27a0dfa70165d: /* @__PURE__ */ __name(() => ct, "__wbg_buffer_a1a27a0dfa70165d"), __wbg_buffer_e495ba54cee589cc: /* @__PURE__ */ __name(() => it, "__wbg_buffer_e495ba54cee589cc"), __wbg_byobRequest_56aa768ee4dfed17: /* @__PURE__ */ __name(() => st, "__wbg_byobRequest_56aa768ee4dfed17"), __wbg_byteLength_937f8a52f9697148: /* @__PURE__ */ __name(() => ut, "__wbg_byteLength_937f8a52f9697148"), __wbg_byteOffset_4d94b7170e641898: /* @__PURE__ */ __name(() => ft, "__wbg_byteOffset_4d94b7170e641898"), __wbg_call_f2db6205e5c51dc8: /* @__PURE__ */ __name(() => at, "__wbg_call_f2db6205e5c51dc8"), __wbg_call_fbe8be8bf6436ce5: /* @__PURE__ */ __name(() => bt, "__wbg_call_fbe8be8bf6436ce5"), __wbg_cancel_4d78160f447bbbeb: /* @__PURE__ */ __name(() => gt, "__wbg_cancel_4d78160f447bbbeb"), __wbg_catch_b51fce253ee18ec3: /* @__PURE__ */ __name(() => dt, "__wbg_catch_b51fce253ee18ec3"), __wbg_cause_af6ef82a8abe435b: /* @__PURE__ */ __name(() => wt, "__wbg_cause_af6ef82a8abe435b"), __wbg_cf_475e858e5c5db972: /* @__PURE__ */ __name(() => lt, "__wbg_cf_475e858e5c5db972"), __wbg_cf_60aafe7bb03e919a: /* @__PURE__ */ __name(() => pt, "__wbg_cf_60aafe7bb03e919a"), __wbg_close_290fb040af98d3ac: /* @__PURE__ */ __name(() => xt, "__wbg_close_290fb040af98d3ac"), __wbg_close_b2641ef0870e518c: /* @__PURE__ */ __name(() => yt, "__wbg_close_b2641ef0870e518c"), __wbg_constructor_1a4f07ad72d5cac3: /* @__PURE__ */ __name(() => ht, "__wbg_constructor_1a4f07ad72d5cac3"), __wbg_crypto_574e78ad8b13b65f: /* @__PURE__ */ __name(() => mt, "__wbg_crypto_574e78ad8b13b65f"), __wbg_done_4d01f352bade43b7: /* @__PURE__ */ __name(() => Rt, "__wbg_done_4d01f352bade43b7"), __wbg_enqueue_a62faa171c4fd287: /* @__PURE__ */ __name(() => Ft, "__wbg_enqueue_a62faa171c4fd287"), __wbg_entries_41651c850143b957: /* @__PURE__ */ __name(() => St, "__wbg_entries_41651c850143b957"), __wbg_error_51ecdd39ec054205: /* @__PURE__ */ __name(() => It, "__wbg_error_51ecdd39ec054205"), __wbg_fetch_571cdc97c8ee46fd: /* @__PURE__ */ __name(() => At, "__wbg_fetch_571cdc97c8ee46fd"), __wbg_fetch_b4cb42ede0f16a58: /* @__PURE__ */ __name(() => Et, "__wbg_fetch_b4cb42ede0f16a58"), __wbg_first_63912989330d222d: /* @__PURE__ */ __name(() => jt, "__wbg_first_63912989330d222d"), __wbg_getRandomValues_38a1ff1ea09f6cc7: /* @__PURE__ */ __name(() => Tt, "__wbg_getRandomValues_38a1ff1ea09f6cc7"), __wbg_getRandomValues_b8f5dbd5f3995a9e: /* @__PURE__ */ __name(() => Ot, "__wbg_getRandomValues_b8f5dbd5f3995a9e"), __wbg_getReader_48e00749fe3f6089: /* @__PURE__ */ __name(() => Mt, "__wbg_getReader_48e00749fe3f6089"), __wbg_getTime_2afe67905d873e92: /* @__PURE__ */ __name(() => qt, "__wbg_getTime_2afe67905d873e92"), __wbg_get_92470be87867c2e5: /* @__PURE__ */ __name(() => zt, "__wbg_get_92470be87867c2e5"), __wbg_get_a131a44bd1eb6979: /* @__PURE__ */ __name(() => kt, "__wbg_get_a131a44bd1eb6979"), __wbg_get_a289e2f1c93b31ad: /* @__PURE__ */ __name(() => Lt, "__wbg_get_a289e2f1c93b31ad"), __wbg_getdone_8355ddb2bc75c731: /* @__PURE__ */ __name(() => Dt, "__wbg_getdone_8355ddb2bc75c731"), __wbg_getvalue_c1890a401d13f00b: /* @__PURE__ */ __name(() => Ut, "__wbg_getvalue_c1890a401d13f00b"), __wbg_getwithrefkey_1dc361bd10053bfe: /* @__PURE__ */ __name(() => Ct, "__wbg_getwithrefkey_1dc361bd10053bfe"), __wbg_headers_0f0cbdc6290b6780: /* @__PURE__ */ __name(() => Bt, "__wbg_headers_0f0cbdc6290b6780"), __wbg_headers_67fbc7839fe933b3: /* @__PURE__ */ __name(() => vt, "__wbg_headers_67fbc7839fe933b3"), __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc: /* @__PURE__ */ __name(() => Wt, "__wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc"), __wbg_instanceof_Error_58a92d81483a4b16: /* @__PURE__ */ __name(() => Vt, "__wbg_instanceof_Error_58a92d81483a4b16"), __wbg_instanceof_Map_80cc65041c96417a: /* @__PURE__ */ __name(() => Nt, "__wbg_instanceof_Map_80cc65041c96417a"), __wbg_instanceof_ReadableStream_17f9f48a697d4eb1: /* @__PURE__ */ __name(() => $t, "__wbg_instanceof_ReadableStream_17f9f48a697d4eb1"), __wbg_instanceof_Response_e80ce8b7a2b968d2: /* @__PURE__ */ __name(() => Pt, "__wbg_instanceof_Response_e80ce8b7a2b968d2"), __wbg_instanceof_Uint8Array_ca460677bc155827: /* @__PURE__ */ __name(() => Xt, "__wbg_instanceof_Uint8Array_ca460677bc155827"), __wbg_isArray_5f090bed72bd4f89: /* @__PURE__ */ __name(() => Gt, "__wbg_isArray_5f090bed72bd4f89"), __wbg_isSafeInteger_90d7c4674047d684: /* @__PURE__ */ __name(() => Ht, "__wbg_isSafeInteger_90d7c4674047d684"), __wbg_iterator_4068add5b2aef7a6: /* @__PURE__ */ __name(() => Jt, "__wbg_iterator_4068add5b2aef7a6"), __wbg_json_5a6e4c2cfa6f90e1: /* @__PURE__ */ __name(() => Yt, "__wbg_json_5a6e4c2cfa6f90e1"), __wbg_length_ab6d22b5ead75c72: /* @__PURE__ */ __name(() => Kt, "__wbg_length_ab6d22b5ead75c72"), __wbg_length_f00ec12454a5d9fd: /* @__PURE__ */ __name(() => Qt, "__wbg_length_f00ec12454a5d9fd"), __wbg_log_ea240990d83e374e: /* @__PURE__ */ __name(() => Zt, "__wbg_log_ea240990d83e374e"), __wbg_message_4159c15dac08c5e9: /* @__PURE__ */ __name(() => te, "__wbg_message_4159c15dac08c5e9"), __wbg_method_a3a2d7fac54c95f8: /* @__PURE__ */ __name(() => ee, "__wbg_method_a3a2d7fac54c95f8"), __wbg_minifyconfig_new: /* @__PURE__ */ __name(() => ne, "__wbg_minifyconfig_new"), __wbg_msCrypto_a61aeb35a24c1329: /* @__PURE__ */ __name(() => re, "__wbg_msCrypto_a61aeb35a24c1329"), __wbg_name_5503b7b8010787c5: /* @__PURE__ */ __name(() => _e, "__wbg_name_5503b7b8010787c5"), __wbg_new0_97314565408dea38: /* @__PURE__ */ __name(() => oe, "__wbg_new0_97314565408dea38"), __wbg_new_07b483f72211fd66: /* @__PURE__ */ __name(() => ce, "__wbg_new_07b483f72211fd66"), __wbg_new_476169e6d59f23ae: /* @__PURE__ */ __name(() => ie, "__wbg_new_476169e6d59f23ae"), __wbg_new_4796e1cd2eb9ea6d: /* @__PURE__ */ __name(() => se, "__wbg_new_4796e1cd2eb9ea6d"), __wbg_new_58353953ad2097cc: /* @__PURE__ */ __name(() => ue, "__wbg_new_58353953ad2097cc"), __wbg_new_a979b4b45bd55c7f: /* @__PURE__ */ __name(() => fe, "__wbg_new_a979b4b45bd55c7f"), __wbg_new_e30c39c06edaabf2: /* @__PURE__ */ __name(() => ae, "__wbg_new_e30c39c06edaabf2"), __wbg_new_e52b3efaaa774f96: /* @__PURE__ */ __name(() => be, "__wbg_new_e52b3efaaa774f96"), __wbg_newnoargs_ff528e72d35de39a: /* @__PURE__ */ __name(() => ge, "__wbg_newnoargs_ff528e72d35de39a"), __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: /* @__PURE__ */ __name(() => de, "__wbg_newwithbyteoffsetandlength_3b01ecda099177e8"), __wbg_newwithlength_08f872dc1e3ada2e: /* @__PURE__ */ __name(() => we, "__wbg_newwithlength_08f872dc1e3ada2e"), __wbg_newwithoptbuffersourceandinit_b77afe7366f846b5: /* @__PURE__ */ __name(() => le, "__wbg_newwithoptbuffersourceandinit_b77afe7366f846b5"), __wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e: /* @__PURE__ */ __name(() => pe, "__wbg_newwithoptreadablestreamandinit_ce4ecbe22555867e"), __wbg_newwithoptstrandinit_8128e018ed06a4f8: /* @__PURE__ */ __name(() => xe, "__wbg_newwithoptstrandinit_8128e018ed06a4f8"), __wbg_newwithstrandinit_f8a9dbe009d6be37: /* @__PURE__ */ __name(() => ye, "__wbg_newwithstrandinit_f8a9dbe009d6be37"), __wbg_next_8bb824d217961b5d: /* @__PURE__ */ __name(() => he, "__wbg_next_8bb824d217961b5d"), __wbg_next_e2da48d8fff7439a: /* @__PURE__ */ __name(() => me, "__wbg_next_e2da48d8fff7439a"), __wbg_node_905d3e251edff8a2: /* @__PURE__ */ __name(() => Re, "__wbg_node_905d3e251edff8a2"), __wbg_now_eb0821f3bd9f6529: /* @__PURE__ */ __name(() => Fe, "__wbg_now_eb0821f3bd9f6529"), __wbg_prepare_38ca2752cd3a1ab2: /* @__PURE__ */ __name(() => Se, "__wbg_prepare_38ca2752cd3a1ab2"), __wbg_process_dc0fbacc7c1c06f7: /* @__PURE__ */ __name(() => Ie, "__wbg_process_dc0fbacc7c1c06f7"), __wbg_push_73fd7b5550ebf707: /* @__PURE__ */ __name(() => Ae, "__wbg_push_73fd7b5550ebf707"), __wbg_queueMicrotask_46c1df247678729f: /* @__PURE__ */ __name(() => Ee, "__wbg_queueMicrotask_46c1df247678729f"), __wbg_queueMicrotask_8acf3ccb75ed8d11: /* @__PURE__ */ __name(() => je, "__wbg_queueMicrotask_8acf3ccb75ed8d11"), __wbg_randomFillSync_ac0988aba3254290: /* @__PURE__ */ __name(() => Te, "__wbg_randomFillSync_ac0988aba3254290"), __wbg_read_f4b89f69cc51efc7: /* @__PURE__ */ __name(() => Oe, "__wbg_read_f4b89f69cc51efc7"), __wbg_releaseLock_c589dd51c0812aca: /* @__PURE__ */ __name(() => Me, "__wbg_releaseLock_c589dd51c0812aca"), __wbg_require_60cc747a6bc5215a: /* @__PURE__ */ __name(() => qe, "__wbg_require_60cc747a6bc5215a"), __wbg_resolve_0dac8c580ffd4678: /* @__PURE__ */ __name(() => ze, "__wbg_resolve_0dac8c580ffd4678"), __wbg_respond_b227f1c3be2bb879: /* @__PURE__ */ __name(() => ke, "__wbg_respond_b227f1c3be2bb879"), __wbg_results_d4405fbc47961d2d: /* @__PURE__ */ __name(() => Le, "__wbg_results_d4405fbc47961d2d"), __wbg_run_d2d0b2bf3715233a: /* @__PURE__ */ __name(() => De, "__wbg_run_d2d0b2bf3715233a"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => Ue, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_b042eef31c50834d: /* @__PURE__ */ __name(() => Ce, "__wbg_set_b042eef31c50834d"), __wbg_set_c43293f93a35998a: /* @__PURE__ */ __name(() => Be, "__wbg_set_c43293f93a35998a"), __wbg_set_d6bdfd275fb8a4ce: /* @__PURE__ */ __name(() => ve, "__wbg_set_d6bdfd275fb8a4ce"), __wbg_set_fe4e79d1ed3b0e9b: /* @__PURE__ */ __name(() => We, "__wbg_set_fe4e79d1ed3b0e9b"), __wbg_set_wasm: /* @__PURE__ */ __name(() => M, "__wbg_set_wasm"), __wbg_setbody_971ec015fc13d6b4: /* @__PURE__ */ __name(() => Ve, "__wbg_setbody_971ec015fc13d6b4"), __wbg_setheaders_408564032a1382da: /* @__PURE__ */ __name(() => Ne, "__wbg_setheaders_408564032a1382da"), __wbg_setheaders_65a4eb4c0443ae61: /* @__PURE__ */ __name(() => $e, "__wbg_setheaders_65a4eb4c0443ae61"), __wbg_setmethod_8ce1be0b4d701b7c: /* @__PURE__ */ __name(() => Pe, "__wbg_setmethod_8ce1be0b4d701b7c"), __wbg_setredirect_562df6aa76f9dd5a: /* @__PURE__ */ __name(() => Xe, "__wbg_setredirect_562df6aa76f9dd5a"), __wbg_setsignal_8e72abfe7ee03c97: /* @__PURE__ */ __name(() => Ge, "__wbg_setsignal_8e72abfe7ee03c97"), __wbg_setstatus_bd5b448a903a8658: /* @__PURE__ */ __name(() => He, "__wbg_setstatus_bd5b448a903a8658"), __wbg_static_accessor_GLOBAL_487c52c58d65314d: /* @__PURE__ */ __name(() => Je, "__wbg_static_accessor_GLOBAL_487c52c58d65314d"), __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: /* @__PURE__ */ __name(() => Ye, "__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291"), __wbg_static_accessor_SELF_78c9e3071b912620: /* @__PURE__ */ __name(() => Ke, "__wbg_static_accessor_SELF_78c9e3071b912620"), __wbg_static_accessor_WINDOW_a093d21393777366: /* @__PURE__ */ __name(() => Qe, "__wbg_static_accessor_WINDOW_a093d21393777366"), __wbg_status_a54682bbe52f9058: /* @__PURE__ */ __name(() => Ze, "__wbg_status_a54682bbe52f9058"), __wbg_subarray_dd4ade7d53bd8e26: /* @__PURE__ */ __name(() => tn, "__wbg_subarray_dd4ade7d53bd8e26"), __wbg_then_82ab9fb4080f1707: /* @__PURE__ */ __name(() => en, "__wbg_then_82ab9fb4080f1707"), __wbg_then_db882932c0c714c6: /* @__PURE__ */ __name(() => nn, "__wbg_then_db882932c0c714c6"), __wbg_toString_21791a66666b3afd: /* @__PURE__ */ __name(() => rn, "__wbg_toString_21791a66666b3afd"), __wbg_url_f1c3162019331231: /* @__PURE__ */ __name(() => _n, "__wbg_url_f1c3162019331231"), __wbg_value_17b896954e14f896: /* @__PURE__ */ __name(() => on, "__wbg_value_17b896954e14f896"), __wbg_versions_c01dfd4722a88165: /* @__PURE__ */ __name(() => cn, "__wbg_versions_c01dfd4722a88165"), __wbg_view_a9ad80dcbad7cf1c: /* @__PURE__ */ __name(() => sn, "__wbg_view_a9ad80dcbad7cf1c"), __wbg_webSocket_38528fcd2e5cba7f: /* @__PURE__ */ __name(() => un, "__wbg_webSocket_38528fcd2e5cba7f"), __wbindgen_as_number: /* @__PURE__ */ __name(() => fn, "__wbindgen_as_number"), __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(() => an, "__wbindgen_bigint_from_i64"), __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(() => bn, "__wbindgen_bigint_from_u64"), __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(() => gn, "__wbindgen_bigint_get_as_i64"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => dn, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => wn, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper3153: /* @__PURE__ */ __name(() => ln, "__wbindgen_closure_wrapper3153"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => pn, "__wbindgen_debug_string"), __wbindgen_in: /* @__PURE__ */ __name(() => xn, "__wbindgen_in"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => yn, "__wbindgen_init_externref_table"), __wbindgen_is_bigint: /* @__PURE__ */ __name(() => hn, "__wbindgen_is_bigint"), __wbindgen_is_function: /* @__PURE__ */ __name(() => mn, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => Rn, "__wbindgen_is_object"), __wbindgen_is_string: /* @__PURE__ */ __name(() => Fn, "__wbindgen_is_string"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => Sn, "__wbindgen_is_undefined"), __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => In, "__wbindgen_jsval_eq"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => An, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => En, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => jn, "__wbindgen_number_get"), __wbindgen_number_new: /* @__PURE__ */ __name(() => Tn, "__wbindgen_number_new"), __wbindgen_string_get: /* @__PURE__ */ __name(() => On, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => Mn, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => qn, "__wbindgen_throw"), fetch: /* @__PURE__ */ __name(() => q, "fetch") });
var _;
function M(t2) {
  _ = t2;
}
__name(M, "M");
var h = null;
function y() {
  return (h === null || h.byteLength === 0) && (h = new Uint8Array(_.memory.buffer)), h;
}
__name(y, "y");
var L = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var m = new L("utf-8", { ignoreBOM: true, fatal: true });
m.decode();
var B = 2146435072;
var I = 0;
function v(t2, e) {
  return I += e, I >= B && (m = new L("utf-8", { ignoreBOM: true, fatal: true }), m.decode(), I = e), m.decode(y().subarray(t2, t2 + e));
}
__name(v, "v");
function b(t2, e) {
  return t2 = t2 >>> 0, v(t2, e);
}
__name(b, "b");
var w = 0;
var W = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var R = new W("utf-8");
var V = typeof R.encodeInto == "function" ? function(t2, e) {
  return R.encodeInto(t2, e);
} : function(t2, e) {
  let n = R.encode(t2);
  return e.set(n), { read: t2.length, written: n.length };
};
function p(t2, e, n) {
  if (n === void 0) {
    let f = R.encode(t2), x = e(f.length, 1) >>> 0;
    return y().subarray(x, x + f.length).set(f), w = f.length, x;
  }
  let r = t2.length, o = e(r, 1) >>> 0, u = y(), s = 0;
  for (; s < r; s++) {
    let f = t2.charCodeAt(s);
    if (f > 127) break;
    u[o + s] = f;
  }
  if (s !== r) {
    s !== 0 && (t2 = t2.slice(s)), o = n(o, r, r = s + t2.length * 3, 1) >>> 0;
    let f = y().subarray(o + s, o + r), x = V(t2, f);
    s += x.written, o = n(o, r, s, 1) >>> 0;
  }
  return w = s, o;
}
__name(p, "p");
var l = null;
function a() {
  return (l === null || l.buffer.detached === true || l.buffer.detached === void 0 && l.buffer !== _.memory.buffer) && (l = new DataView(_.memory.buffer)), l;
}
__name(a, "a");
function g(t2) {
  let e = _.__externref_table_alloc();
  return _.__wbindgen_export_4.set(e, t2), e;
}
__name(g, "g");
function c(t2, e) {
  try {
    return t2.apply(this, e);
  } catch (n) {
    let r = g(n);
    _.__wbindgen_exn_store(r);
  }
}
__name(c, "c");
function i(t2) {
  return t2 == null;
}
__name(i, "i");
function N(t2, e) {
  return t2 = t2 >>> 0, y().subarray(t2 / 1, t2 / 1 + e);
}
__name(N, "N");
var z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => {
  _.__wbindgen_export_5.get(t2.dtor)(t2.a, t2.b);
});
function $(t2, e, n, r) {
  let o = { a: t2, b: e, cnt: 1, dtor: n }, u = /* @__PURE__ */ __name((...s) => {
    o.cnt++;
    let f = o.a;
    o.a = 0;
    try {
      return r(f, o.b, ...s);
    } finally {
      --o.cnt === 0 ? (_.__wbindgen_export_5.get(o.dtor)(f, o.b), z.unregister(o)) : o.a = f;
    }
  }, "u");
  return u.original = o, z.register(u, o, o), u;
}
__name($, "$");
function A(t2) {
  let e = typeof t2;
  if (e == "number" || e == "boolean" || t2 == null) return `${t2}`;
  if (e == "string") return `"${t2}"`;
  if (e == "symbol") {
    let o = t2.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    let o = t2.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(t2)) {
    let o = t2.length, u = "[";
    o > 0 && (u += A(t2[0]));
    for (let s = 1; s < o; s++) u += ", " + A(t2[s]);
    return u += "]", u;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t2)), r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(t2);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(t2) + ")";
  } catch {
    return "Object";
  }
  return t2 instanceof Error ? `${t2.name}: ${t2.message}
${t2.stack}` : r;
}
__name(A, "A");
function q(t2, e, n) {
  return _.fetch(t2, e, n);
}
__name(q, "q");
function P(t2, e, n) {
  _.closure992_externref_shim(t2, e, n);
}
__name(P, "P");
function X(t2, e, n, r) {
  _.closure1040_externref_shim(t2, e, n, r);
}
__name(X, "X");
var G = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var H = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var J = ["bytes"];
var Y = ["follow", "error", "manual"];
var K = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => _.__wbg_intounderlyingbytesource_free(t2 >>> 0, 1));
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, K.unregister(this), e;
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
var Q = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => _.__wbg_intounderlyingsink_free(t2 >>> 0, 1));
var j = class {
  static {
    __name(this, "j");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), e;
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
var Z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => _.__wbg_intounderlyingsource_free(t2 >>> 0, 1));
var T = class {
  static {
    __name(this, "T");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e;
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
var k = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => _.__wbg_minifyconfig_free(t2 >>> 0, 1));
var F = class t {
  static {
    __name(this, "t");
  }
  static __wrap(e) {
    e = e >>> 0;
    let n = Object.create(t.prototype);
    return n.__wbg_ptr = e, k.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, k.unregister(this), e;
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
var tt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => _.__wbg_r2range_free(t2 >>> 0, 1));
var O = class {
  static {
    __name(this, "O");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, tt.unregister(this), e;
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
    _.__wbg_set_r2range_offset(this.__wbg_ptr, !i(e), i(e) ? 0 : e);
  }
  get length() {
    let e = _.__wbg_get_r2range_length(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set length(e) {
    _.__wbg_set_r2range_length(this.__wbg_ptr, !i(e), i(e) ? 0 : e);
  }
  get suffix() {
    let e = _.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set suffix(e) {
    _.__wbg_set_r2range_suffix(this.__wbg_ptr, !i(e), i(e) ? 0 : e);
  }
};
function et(t2, e) {
  return Error(b(t2, e));
}
__name(et, "et");
function nt(t2, e) {
  let n = String(e), r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
  a().setInt32(t2 + 4 * 1, o, true), a().setInt32(t2 + 4 * 0, r, true);
}
__name(nt, "nt");
function rt() {
  return c(function(t2) {
    return t2.all();
  }, arguments);
}
__name(rt, "rt");
function _t() {
  return c(function(t2, e) {
    return t2.bind(...e);
  }, arguments);
}
__name(_t, "_t");
function ot(t2) {
  let e = t2.body;
  return i(e) ? 0 : g(e);
}
__name(ot, "ot");
function ct(t2) {
  return t2.buffer;
}
__name(ct, "ct");
function it(t2) {
  return t2.buffer;
}
__name(it, "it");
function st(t2) {
  let e = t2.byobRequest;
  return i(e) ? 0 : g(e);
}
__name(st, "st");
function ut(t2) {
  return t2.byteLength;
}
__name(ut, "ut");
function ft(t2) {
  return t2.byteOffset;
}
__name(ft, "ft");
function at() {
  return c(function(t2, e, n) {
    return t2.call(e, n);
  }, arguments);
}
__name(at, "at");
function bt() {
  return c(function(t2, e) {
    return t2.call(e);
  }, arguments);
}
__name(bt, "bt");
function gt(t2) {
  return t2.cancel();
}
__name(gt, "gt");
function dt(t2, e) {
  return t2.catch(e);
}
__name(dt, "dt");
function wt(t2) {
  return t2.cause;
}
__name(wt, "wt");
function lt() {
  return c(function(t2) {
    let e = t2.cf;
    return i(e) ? 0 : g(e);
  }, arguments);
}
__name(lt, "lt");
function pt() {
  return c(function(t2) {
    let e = t2.cf;
    return i(e) ? 0 : g(e);
  }, arguments);
}
__name(pt, "pt");
function xt() {
  return c(function(t2) {
    t2.close();
  }, arguments);
}
__name(xt, "xt");
function yt() {
  return c(function(t2) {
    t2.close();
  }, arguments);
}
__name(yt, "yt");
function ht(t2) {
  return t2.constructor;
}
__name(ht, "ht");
function mt(t2) {
  return t2.crypto;
}
__name(mt, "mt");
function Rt(t2) {
  return t2.done;
}
__name(Rt, "Rt");
function Ft() {
  return c(function(t2, e) {
    t2.enqueue(e);
  }, arguments);
}
__name(Ft, "Ft");
function St(t2) {
  return Object.entries(t2);
}
__name(St, "St");
function It(t2) {
  console.error(t2);
}
__name(It, "It");
function At(t2, e, n) {
  return t2.fetch(e, n);
}
__name(At, "At");
function Et(t2, e, n, r) {
  return t2.fetch(b(e, n), r);
}
__name(Et, "Et");
function jt() {
  return c(function(t2, e, n) {
    return t2.first(e === 0 ? void 0 : b(e, n));
  }, arguments);
}
__name(jt, "jt");
function Tt() {
  return c(function(t2, e) {
    globalThis.crypto.getRandomValues(N(t2, e));
  }, arguments);
}
__name(Tt, "Tt");
function Ot() {
  return c(function(t2, e) {
    t2.getRandomValues(e);
  }, arguments);
}
__name(Ot, "Ot");
function Mt() {
  return c(function(t2) {
    return t2.getReader();
  }, arguments);
}
__name(Mt, "Mt");
function qt(t2) {
  return t2.getTime();
}
__name(qt, "qt");
function zt() {
  return c(function(t2, e) {
    return Reflect.get(t2, e);
  }, arguments);
}
__name(zt, "zt");
function kt(t2, e) {
  return t2[e >>> 0];
}
__name(kt, "kt");
function Lt() {
  return c(function(t2, e, n, r) {
    let o = e.get(b(n, r));
    var u = i(o) ? 0 : p(o, _.__wbindgen_malloc, _.__wbindgen_realloc), s = w;
    a().setInt32(t2 + 4 * 1, s, true), a().setInt32(t2 + 4 * 0, u, true);
  }, arguments);
}
__name(Lt, "Lt");
function Dt(t2) {
  let e = t2.done;
  return i(e) ? 16777215 : e ? 1 : 0;
}
__name(Dt, "Dt");
function Ut(t2) {
  return t2.value;
}
__name(Ut, "Ut");
function Ct(t2, e) {
  return t2[e];
}
__name(Ct, "Ct");
function Bt(t2) {
  return t2.headers;
}
__name(Bt, "Bt");
function vt(t2) {
  return t2.headers;
}
__name(vt, "vt");
function Wt(t2) {
  let e;
  try {
    e = t2 instanceof ArrayBuffer;
  } catch {
    e = false;
  }
  return e;
}
__name(Wt, "Wt");
function Vt(t2) {
  let e;
  try {
    e = t2 instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
__name(Vt, "Vt");
function Nt(t2) {
  let e;
  try {
    e = t2 instanceof Map;
  } catch {
    e = false;
  }
  return e;
}
__name(Nt, "Nt");
function $t(t2) {
  let e;
  try {
    e = t2 instanceof ReadableStream;
  } catch {
    e = false;
  }
  return e;
}
__name($t, "$t");
function Pt(t2) {
  let e;
  try {
    e = t2 instanceof Response;
  } catch {
    e = false;
  }
  return e;
}
__name(Pt, "Pt");
function Xt(t2) {
  let e;
  try {
    e = t2 instanceof Uint8Array;
  } catch {
    e = false;
  }
  return e;
}
__name(Xt, "Xt");
function Gt(t2) {
  return Array.isArray(t2);
}
__name(Gt, "Gt");
function Ht(t2) {
  return Number.isSafeInteger(t2);
}
__name(Ht, "Ht");
function Jt() {
  return Symbol.iterator;
}
__name(Jt, "Jt");
function Yt() {
  return c(function(t2) {
    return t2.json();
  }, arguments);
}
__name(Yt, "Yt");
function Kt(t2) {
  return t2.length;
}
__name(Kt, "Kt");
function Qt(t2) {
  return t2.length;
}
__name(Qt, "Qt");
function Zt(t2) {
  console.log(t2);
}
__name(Zt, "Zt");
function te(t2) {
  return t2.message;
}
__name(te, "te");
function ee(t2, e) {
  let n = e.method, r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
  a().setInt32(t2 + 4 * 1, o, true), a().setInt32(t2 + 4 * 0, r, true);
}
__name(ee, "ee");
function ne(t2) {
  return F.__wrap(t2);
}
__name(ne, "ne");
function re(t2) {
  return t2.msCrypto;
}
__name(re, "re");
function _e(t2) {
  return t2.name;
}
__name(_e, "_e");
function oe() {
  return /* @__PURE__ */ new Date();
}
__name(oe, "oe");
function ce() {
  return new Object();
}
__name(ce, "ce");
function ie(t2, e) {
  return new Error(b(t2, e));
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
function fe() {
  return /* @__PURE__ */ new Map();
}
__name(fe, "fe");
function ae(t2, e) {
  try {
    var n = { a: t2, b: e }, r = /* @__PURE__ */ __name((u, s) => {
      let f = n.a;
      n.a = 0;
      try {
        return X(f, n.b, u, s);
      } finally {
        n.a = f;
      }
    }, "r");
    return new Promise(r);
  } finally {
    n.a = n.b = 0;
  }
}
__name(ae, "ae");
function be(t2) {
  return new Uint8Array(t2);
}
__name(be, "be");
function ge(t2, e) {
  return new Function(b(t2, e));
}
__name(ge, "ge");
function de(t2, e, n) {
  return new Uint8Array(t2, e >>> 0, n >>> 0);
}
__name(de, "de");
function we(t2) {
  return new Uint8Array(t2 >>> 0);
}
__name(we, "we");
function le() {
  return c(function(t2, e) {
    return new Response(t2, e);
  }, arguments);
}
__name(le, "le");
function pe() {
  return c(function(t2, e) {
    return new Response(t2, e);
  }, arguments);
}
__name(pe, "pe");
function xe() {
  return c(function(t2, e, n) {
    return new Response(t2 === 0 ? void 0 : b(t2, e), n);
  }, arguments);
}
__name(xe, "xe");
function ye() {
  return c(function(t2, e, n) {
    return new Request(b(t2, e), n);
  }, arguments);
}
__name(ye, "ye");
function he(t2) {
  return t2.next;
}
__name(he, "he");
function me() {
  return c(function(t2) {
    return t2.next();
  }, arguments);
}
__name(me, "me");
function Re(t2) {
  return t2.node;
}
__name(Re, "Re");
function Fe() {
  return Date.now();
}
__name(Fe, "Fe");
function Se() {
  return c(function(t2, e, n) {
    return t2.prepare(b(e, n));
  }, arguments);
}
__name(Se, "Se");
function Ie(t2) {
  return t2.process;
}
__name(Ie, "Ie");
function Ae(t2, e) {
  return t2.push(e);
}
__name(Ae, "Ae");
function Ee(t2) {
  queueMicrotask(t2);
}
__name(Ee, "Ee");
function je(t2) {
  return t2.queueMicrotask;
}
__name(je, "je");
function Te() {
  return c(function(t2, e) {
    t2.randomFillSync(e);
  }, arguments);
}
__name(Te, "Te");
function Oe(t2) {
  return t2.read();
}
__name(Oe, "Oe");
function Me(t2) {
  t2.releaseLock();
}
__name(Me, "Me");
function qe() {
  return c(function() {
    return module.require;
  }, arguments);
}
__name(qe, "qe");
function ze(t2) {
  return Promise.resolve(t2);
}
__name(ze, "ze");
function ke() {
  return c(function(t2, e) {
    t2.respond(e >>> 0);
  }, arguments);
}
__name(ke, "ke");
function Le() {
  return c(function(t2) {
    let e = t2.results;
    return i(e) ? 0 : g(e);
  }, arguments);
}
__name(Le, "Le");
function De() {
  return c(function(t2) {
    return t2.run();
  }, arguments);
}
__name(De, "De");
function Ue(t2, e, n) {
  t2[e] = n;
}
__name(Ue, "Ue");
function Ce() {
  return c(function(t2, e, n, r, o) {
    t2.set(b(e, n), b(r, o));
  }, arguments);
}
__name(Ce, "Ce");
function Be() {
  return c(function(t2, e, n) {
    return Reflect.set(t2, e, n);
  }, arguments);
}
__name(Be, "Be");
function ve(t2, e, n) {
  return t2.set(e, n);
}
__name(ve, "ve");
function We(t2, e, n) {
  t2.set(e, n >>> 0);
}
__name(We, "We");
function Ve(t2, e) {
  t2.body = e;
}
__name(Ve, "Ve");
function Ne(t2, e) {
  t2.headers = e;
}
__name(Ne, "Ne");
function $e(t2, e) {
  t2.headers = e;
}
__name($e, "$e");
function Pe(t2, e, n) {
  t2.method = b(e, n);
}
__name(Pe, "Pe");
function Xe(t2, e) {
  t2.redirect = Y[e];
}
__name(Xe, "Xe");
function Ge(t2, e) {
  t2.signal = e;
}
__name(Ge, "Ge");
function He(t2, e) {
  t2.status = e;
}
__name(He, "He");
function Je() {
  let t2 = typeof global > "u" ? null : global;
  return i(t2) ? 0 : g(t2);
}
__name(Je, "Je");
function Ye() {
  let t2 = typeof globalThis > "u" ? null : globalThis;
  return i(t2) ? 0 : g(t2);
}
__name(Ye, "Ye");
function Ke() {
  let t2 = typeof self > "u" ? null : self;
  return i(t2) ? 0 : g(t2);
}
__name(Ke, "Ke");
function Qe() {
  let t2 = typeof window > "u" ? null : window;
  return i(t2) ? 0 : g(t2);
}
__name(Qe, "Qe");
function Ze(t2) {
  return t2.status;
}
__name(Ze, "Ze");
function tn(t2, e, n) {
  return t2.subarray(e >>> 0, n >>> 0);
}
__name(tn, "tn");
function en(t2, e, n) {
  return t2.then(e, n);
}
__name(en, "en");
function nn(t2, e) {
  return t2.then(e);
}
__name(nn, "nn");
function rn(t2) {
  return t2.toString();
}
__name(rn, "rn");
function _n(t2, e) {
  let n = e.url, r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
  a().setInt32(t2 + 4 * 1, o, true), a().setInt32(t2 + 4 * 0, r, true);
}
__name(_n, "_n");
function on(t2) {
  return t2.value;
}
__name(on, "on");
function cn(t2) {
  return t2.versions;
}
__name(cn, "cn");
function sn(t2) {
  let e = t2.view;
  return i(e) ? 0 : g(e);
}
__name(sn, "sn");
function un() {
  return c(function(t2) {
    let e = t2.webSocket;
    return i(e) ? 0 : g(e);
  }, arguments);
}
__name(un, "un");
function fn(t2) {
  return +t2;
}
__name(fn, "fn");
function an(t2) {
  return t2;
}
__name(an, "an");
function bn(t2) {
  return BigInt.asUintN(64, t2);
}
__name(bn, "bn");
function gn(t2, e) {
  let n = e, r = typeof n == "bigint" ? n : void 0;
  a().setBigInt64(t2 + 8 * 1, i(r) ? BigInt(0) : r, true), a().setInt32(t2 + 4 * 0, !i(r), true);
}
__name(gn, "gn");
function dn(t2) {
  let e = t2;
  return typeof e == "boolean" ? e ? 1 : 0 : 2;
}
__name(dn, "dn");
function wn(t2) {
  let e = t2.original;
  return e.cnt-- == 1 ? (e.a = 0, true) : false;
}
__name(wn, "wn");
function ln(t2, e, n) {
  return $(t2, e, 991, P);
}
__name(ln, "ln");
function pn(t2, e) {
  let n = A(e), r = p(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
  a().setInt32(t2 + 4 * 1, o, true), a().setInt32(t2 + 4 * 0, r, true);
}
__name(pn, "pn");
function xn(t2, e) {
  return t2 in e;
}
__name(xn, "xn");
function yn() {
  let t2 = _.__wbindgen_export_4, e = t2.grow(4);
  t2.set(0, void 0), t2.set(e + 0, void 0), t2.set(e + 1, null), t2.set(e + 2, true), t2.set(e + 3, false);
}
__name(yn, "yn");
function hn(t2) {
  return typeof t2 == "bigint";
}
__name(hn, "hn");
function mn(t2) {
  return typeof t2 == "function";
}
__name(mn, "mn");
function Rn(t2) {
  let e = t2;
  return typeof e == "object" && e !== null;
}
__name(Rn, "Rn");
function Fn(t2) {
  return typeof t2 == "string";
}
__name(Fn, "Fn");
function Sn(t2) {
  return t2 === void 0;
}
__name(Sn, "Sn");
function In(t2, e) {
  return t2 === e;
}
__name(In, "In");
function An(t2, e) {
  return t2 == e;
}
__name(An, "An");
function En() {
  return _.memory;
}
__name(En, "En");
function jn(t2, e) {
  let n = e, r = typeof n == "number" ? n : void 0;
  a().setFloat64(t2 + 8 * 1, i(r) ? 0 : r, true), a().setInt32(t2 + 4 * 0, !i(r), true);
}
__name(jn, "jn");
function Tn(t2) {
  return t2;
}
__name(Tn, "Tn");
function On(t2, e) {
  let n = e, r = typeof n == "string" ? n : void 0;
  var o = i(r) ? 0 : p(r, _.__wbindgen_malloc, _.__wbindgen_realloc), u = w;
  a().setInt32(t2 + 4 * 1, u, true), a().setInt32(t2 + 4 * 0, o, true);
}
__name(On, "On");
function Mn(t2, e) {
  return b(t2, e);
}
__name(Mn, "Mn");
function qn(t2, e) {
  throw new Error(b(t2, e));
}
__name(qn, "qn");
var D = new WebAssembly.Instance(zn, { "./index_bg.js": d });
M(D.exports);
D.exports.__wbindgen_start?.();
var S = class extends kn {
  static {
    __name(this, "S");
  }
  async fetch(e) {
    return await q(e, this.env, this.ctx);
  }
  async queue(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
  async scheduled(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
};
var Ln = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(d).map((t2) => {
  Ln.includes(t2) | t2.startsWith("__") || (S.prototype[t2] = d[t2]);
});
var Bn = S;
export {
  E as IntoUnderlyingByteSource,
  j as IntoUnderlyingSink,
  T as IntoUnderlyingSource,
  F as MinifyConfig,
  G as PolishConfig,
  O as R2Range,
  H as RequestRedirect,
  et as __wbg_Error_0497d5bdba9362e5,
  nt as __wbg_String_8f0eb39a4a4c2f66,
  rt as __wbg_all_92394bdc295ef929,
  _t as __wbg_bind_dca305d65e40ea3c,
  ot as __wbg_body_e1e045c770257634,
  ct as __wbg_buffer_a1a27a0dfa70165d,
  it as __wbg_buffer_e495ba54cee589cc,
  st as __wbg_byobRequest_56aa768ee4dfed17,
  ut as __wbg_byteLength_937f8a52f9697148,
  ft as __wbg_byteOffset_4d94b7170e641898,
  at as __wbg_call_f2db6205e5c51dc8,
  bt as __wbg_call_fbe8be8bf6436ce5,
  gt as __wbg_cancel_4d78160f447bbbeb,
  dt as __wbg_catch_b51fce253ee18ec3,
  wt as __wbg_cause_af6ef82a8abe435b,
  lt as __wbg_cf_475e858e5c5db972,
  pt as __wbg_cf_60aafe7bb03e919a,
  xt as __wbg_close_290fb040af98d3ac,
  yt as __wbg_close_b2641ef0870e518c,
  ht as __wbg_constructor_1a4f07ad72d5cac3,
  mt as __wbg_crypto_574e78ad8b13b65f,
  Rt as __wbg_done_4d01f352bade43b7,
  Ft as __wbg_enqueue_a62faa171c4fd287,
  St as __wbg_entries_41651c850143b957,
  It as __wbg_error_51ecdd39ec054205,
  At as __wbg_fetch_571cdc97c8ee46fd,
  Et as __wbg_fetch_b4cb42ede0f16a58,
  jt as __wbg_first_63912989330d222d,
  Tt as __wbg_getRandomValues_38a1ff1ea09f6cc7,
  Ot as __wbg_getRandomValues_b8f5dbd5f3995a9e,
  Mt as __wbg_getReader_48e00749fe3f6089,
  qt as __wbg_getTime_2afe67905d873e92,
  zt as __wbg_get_92470be87867c2e5,
  kt as __wbg_get_a131a44bd1eb6979,
  Lt as __wbg_get_a289e2f1c93b31ad,
  Dt as __wbg_getdone_8355ddb2bc75c731,
  Ut as __wbg_getvalue_c1890a401d13f00b,
  Ct as __wbg_getwithrefkey_1dc361bd10053bfe,
  Bt as __wbg_headers_0f0cbdc6290b6780,
  vt as __wbg_headers_67fbc7839fe933b3,
  Wt as __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc,
  Vt as __wbg_instanceof_Error_58a92d81483a4b16,
  Nt as __wbg_instanceof_Map_80cc65041c96417a,
  $t as __wbg_instanceof_ReadableStream_17f9f48a697d4eb1,
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
  ne as __wbg_minifyconfig_new,
  re as __wbg_msCrypto_a61aeb35a24c1329,
  _e as __wbg_name_5503b7b8010787c5,
  oe as __wbg_new0_97314565408dea38,
  ce as __wbg_new_07b483f72211fd66,
  ie as __wbg_new_476169e6d59f23ae,
  se as __wbg_new_4796e1cd2eb9ea6d,
  ue as __wbg_new_58353953ad2097cc,
  fe as __wbg_new_a979b4b45bd55c7f,
  ae as __wbg_new_e30c39c06edaabf2,
  be as __wbg_new_e52b3efaaa774f96,
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
  Fe as __wbg_now_eb0821f3bd9f6529,
  Se as __wbg_prepare_38ca2752cd3a1ab2,
  Ie as __wbg_process_dc0fbacc7c1c06f7,
  Ae as __wbg_push_73fd7b5550ebf707,
  Ee as __wbg_queueMicrotask_46c1df247678729f,
  je as __wbg_queueMicrotask_8acf3ccb75ed8d11,
  Te as __wbg_randomFillSync_ac0988aba3254290,
  Oe as __wbg_read_f4b89f69cc51efc7,
  Me as __wbg_releaseLock_c589dd51c0812aca,
  qe as __wbg_require_60cc747a6bc5215a,
  ze as __wbg_resolve_0dac8c580ffd4678,
  ke as __wbg_respond_b227f1c3be2bb879,
  Le as __wbg_results_d4405fbc47961d2d,
  De as __wbg_run_d2d0b2bf3715233a,
  Ue as __wbg_set_3f1d0b984ed272ed,
  Ce as __wbg_set_b042eef31c50834d,
  Be as __wbg_set_c43293f93a35998a,
  ve as __wbg_set_d6bdfd275fb8a4ce,
  We as __wbg_set_fe4e79d1ed3b0e9b,
  M as __wbg_set_wasm,
  Ve as __wbg_setbody_971ec015fc13d6b4,
  Ne as __wbg_setheaders_408564032a1382da,
  $e as __wbg_setheaders_65a4eb4c0443ae61,
  Pe as __wbg_setmethod_8ce1be0b4d701b7c,
  Xe as __wbg_setredirect_562df6aa76f9dd5a,
  Ge as __wbg_setsignal_8e72abfe7ee03c97,
  He as __wbg_setstatus_bd5b448a903a8658,
  Je as __wbg_static_accessor_GLOBAL_487c52c58d65314d,
  Ye as __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291,
  Ke as __wbg_static_accessor_SELF_78c9e3071b912620,
  Qe as __wbg_static_accessor_WINDOW_a093d21393777366,
  Ze as __wbg_status_a54682bbe52f9058,
  tn as __wbg_subarray_dd4ade7d53bd8e26,
  en as __wbg_then_82ab9fb4080f1707,
  nn as __wbg_then_db882932c0c714c6,
  rn as __wbg_toString_21791a66666b3afd,
  _n as __wbg_url_f1c3162019331231,
  on as __wbg_value_17b896954e14f896,
  cn as __wbg_versions_c01dfd4722a88165,
  sn as __wbg_view_a9ad80dcbad7cf1c,
  un as __wbg_webSocket_38528fcd2e5cba7f,
  fn as __wbindgen_as_number,
  an as __wbindgen_bigint_from_i64,
  bn as __wbindgen_bigint_from_u64,
  gn as __wbindgen_bigint_get_as_i64,
  dn as __wbindgen_boolean_get,
  wn as __wbindgen_cb_drop,
  ln as __wbindgen_closure_wrapper3153,
  pn as __wbindgen_debug_string,
  xn as __wbindgen_in,
  yn as __wbindgen_init_externref_table,
  hn as __wbindgen_is_bigint,
  mn as __wbindgen_is_function,
  Rn as __wbindgen_is_object,
  Fn as __wbindgen_is_string,
  Sn as __wbindgen_is_undefined,
  In as __wbindgen_jsval_eq,
  An as __wbindgen_jsval_loose_eq,
  En as __wbindgen_memory,
  jn as __wbindgen_number_get,
  Tn as __wbindgen_number_new,
  On as __wbindgen_string_get,
  Mn as __wbindgen_string_new,
  qn as __wbindgen_throw,
  Bn as default,
  q as fetch,
  zn as wasmModule
};
//# sourceMappingURL=shim.js.map
